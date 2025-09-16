import { checkIsAuthenticated } from "./useAuthentication"
import { getCurrentUserService, refreshAccessTokenService, LansweeperError } from "@/services/lansweeper"
import type { IDeskproClient } from "@deskpro/app-sdk"

jest.mock("@/services/lansweeper", () => {
  const actual = jest.requireActual("@/services/lansweeper")
  return {
    ...actual,
    getCurrentUserService: jest.fn(),
    refreshAccessTokenService: jest.fn(),
  }
})

const mockClient = {} as IDeskproClient

describe("checkIsAuthenticated", () => {
  const mockGetCurrentUserService = getCurrentUserService as jest.Mock
  const mockRefreshAccessTokenService = refreshAccessTokenService as jest.Mock

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe("Successful authentication", () => {
    it("should return true if getCurrentUserService returns user data", async () => {
      mockGetCurrentUserService.mockResolvedValue({ data: { id: 1 } })

      const result = await checkIsAuthenticated(mockClient)

      expect(result).toBe(true)
      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(1)
    })

    it("should return true after successfully refreshing tokens and the second getCurrentUserService call succeeds", async () => {
      mockGetCurrentUserService
        .mockRejectedValueOnce(new LansweeperError({ status: 401, data: {} }))
        .mockResolvedValueOnce({ data: { id: 1 } })
      mockRefreshAccessTokenService.mockResolvedValue({})

      const result = await checkIsAuthenticated(mockClient, { shouldRefreshTokens: true })

      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(2)
      expect(mockRefreshAccessTokenService).toHaveBeenCalledTimes(1)
      expect(result).toBe(true)
    })
  })

  describe("Failed authentication", () => {
    it("should return false if getCurrentUserService returns no data", async () => {
      mockGetCurrentUserService.mockResolvedValue({ data: null })

      const result = await checkIsAuthenticated(mockClient, { shouldRefreshTokens: true })

      expect(result).toBe(false)
      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(1)
    })

    it("should return false on 401/403 responses if shouldRefreshTokens is false", async () => {
      mockGetCurrentUserService.mockRejectedValue(new LansweeperError({ status: 401, data: {} }))

      const result = await checkIsAuthenticated(mockClient, { shouldRefreshTokens: false })

      expect(result).toBe(false)
      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(1)
    })

    it("should return false if the second getCurrentUserService returns no data", async () => {
      mockGetCurrentUserService
        .mockRejectedValueOnce(new LansweeperError({ status: 403, data: {} }))
        .mockResolvedValueOnce({ data: null })
      mockRefreshAccessTokenService.mockResolvedValue({})

      const result = await checkIsAuthenticated(mockClient, { shouldRefreshTokens: true })

      expect(result).toBe(false)
      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(2)
      expect(mockRefreshAccessTokenService).toHaveBeenCalledTimes(1)
    })

    it("should return false if the second getCurrentUserService throws 401/403", async () => {
      mockGetCurrentUserService
        .mockRejectedValueOnce(new LansweeperError({ status: 403, data: {} }))
        .mockRejectedValueOnce(new LansweeperError({ status: 401, data: {} }))
      mockRefreshAccessTokenService.mockResolvedValue({})

      const result = await checkIsAuthenticated(mockClient, { shouldRefreshTokens: true })

      expect(result).toBe(false)
      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(2)
      expect(mockRefreshAccessTokenService).toHaveBeenCalledTimes(1)
    })
  })

  describe("Error handling", () => {
    it("should throw an error if getCurrentUserService's error is not 401/403", async () => {
      const error = new Error("Mock error")
      mockGetCurrentUserService.mockRejectedValue(error)

      await expect(checkIsAuthenticated(mockClient)).rejects.toThrow("Mock error")

      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(1)
      expect(mockRefreshAccessTokenService).not.toHaveBeenCalled()
    })

    it("should throw an error if the refreshAccessTokenService throws a non-auth error", async () => {
      mockGetCurrentUserService.mockRejectedValueOnce(new LansweeperError({ status: 401, data: {} }))
      mockRefreshAccessTokenService.mockRejectedValue(new Error("Refresh failed"))

      await expect(checkIsAuthenticated(mockClient, { shouldRefreshTokens: true }))
        .rejects.toThrow("Refresh failed")

      expect(mockGetCurrentUserService).toHaveBeenCalledTimes(1)
      expect(mockRefreshAccessTokenService).toHaveBeenCalledTimes(1)
    })
  })
})