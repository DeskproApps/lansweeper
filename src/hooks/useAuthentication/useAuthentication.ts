import { getCurrentUserService, LansweeperError, refreshAccessTokenService } from "@/services/lansweeper"
import { IDeskproClient, useQueryWithClient } from "@deskpro/app-sdk"

interface UseAuthenticationParams {
  /**
   * Should attempt refreshing the access token if the initial check fails.
   */
  shouldRefreshTokens?: boolean
}

export default function useAuthentication(params?: Readonly<UseAuthenticationParams>) {

  const { isFetching, isLoading, data } = useQueryWithClient(
    ["authStatus"],
    async (client) => {
      return await checkIsAuthenticated(client, params)
    }
  )

  return {
    isLoading: isLoading || isFetching,
    isAuthenticated: data ?? false
  }
}

type CheckIsAuthenticatedOptions = UseAuthenticationParams

export async function checkIsAuthenticated(client: IDeskproClient, options?: Readonly<CheckIsAuthenticatedOptions>): Promise<boolean> {
  const { shouldRefreshTokens = false } = options ?? {}
  try {
    const user = await getCurrentUserService(client)

    if (!user.data) {
      return false
    }

    return true
  } catch (e) {
    if (e instanceof LansweeperError && [401, 403].includes(e.status)) {

      if (!shouldRefreshTokens) {
        return false
      }

      // Attempt refreshing the access tokens.
      try {
        await refreshAccessTokenService(client)
        const secondUserDataAttempt = await getCurrentUserService(client)

        if (!secondUserDataAttempt.data) {
          return false
        }

        return true

      } catch (e) {
        if (e instanceof LansweeperError && [401, 403].includes(e.status)) {
          return false
        }

        // Pass other errors from refreshing to the error boundary.
        throw e
      }
    }

    // Pass all other errors to the error boundary.
    throw e
  }
}