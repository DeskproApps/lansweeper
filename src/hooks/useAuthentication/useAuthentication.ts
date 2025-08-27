import { getCurrentUserService, LansweeperError, refreshAccessTokenService } from "@/services/lansweeper"
import { useQueryWithClient } from "@deskpro/app-sdk"

interface UseAuthenticationParams {
  /**
   * Should attempt refreshing the access token if the initial check fails.
   */
  refreshTokens?: boolean
}

export default function useAuthentication(params?: Readonly<UseAuthenticationParams>) {
  const { refreshTokens } = params ?? {}

  const authStatusResponse = useQueryWithClient(
    ["authStatus"],
    async (client) => {
      try {

        const user = await getCurrentUserService(client)

        if (!user.data) {
          return false
        }

        return true
      } catch (e) {

        if (e instanceof LansweeperError && [401, 403].includes(e.status)) {

          if (!refreshTokens) {
            return false
          }

          // Attempt refreshing the access tokens.
          try {
            await refreshAccessTokenService(client)
            const userAttempt2 = await getCurrentUserService(client)

            if (!userAttempt2.data) {
              return false
            }

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
  )


  return {
    isLoading: authStatusResponse.isLoading,
    isAuthenticated: authStatusResponse.data ?? false

  }

}
