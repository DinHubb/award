import { ref } from 'vue'

export interface CriterionScore {
  criterion_id: string
  score: number
}

export interface VoteInitiateRequest {
  provider_id: string
  phone: string
  criteria_scores: CriterionScore[]
}

export interface VoteInitiateResponse {
  message: string
  code: string
  expires_in_minutes: number
}

export interface VoteConfirmRequest {
  phone: string
  otp_code: string
}

export interface VoteConfirmResponse {
  success: boolean
  message: string
}

export const useVote = () => {
  const isLoading = ref(false)
  const error = ref<Error | null>(null)
  const initiateResponse = ref<VoteInitiateResponse | null>(null)

  /**
   * Initiate vote - sends SMS code
   */
  const initiateVote = async (
    providerId: string,
    phone: string,
    criteriaScores: CriterionScore[]
  ): Promise<VoteInitiateResponse> => {
    isLoading.value = true
    error.value = null

    try {
      const payload: VoteInitiateRequest = {
        provider_id: providerId,
        phone,
        criteria_scores: criteriaScores,
      }

      const response = await $jwtFetch<VoteInitiateResponse>(
        '/api/v1/votes/initiate',
        {
          method: 'POST',
          body: payload,
        }
      )

      initiateResponse.value = response
      return response
    } catch (err) {
      error.value = err as Error
      console.error('Error initiating vote:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Confirm vote with SMS code
   */
  const confirmVote = async (
    phone: string,
    otpCode: string
  ): Promise<VoteConfirmResponse> => {
    isLoading.value = true
    error.value = null

    try {
      const payload: VoteConfirmRequest = {
        phone,
        otp_code: otpCode,
      }

      const response = await $jwtFetch<VoteConfirmResponse>(
        '/api/v1/votes/confirm',
        {
          method: 'POST',
          body: payload,
        }
      )

      return response
    } catch (err) {
      error.value = err as Error
      console.error('Error confirming vote:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Reset state
   */
  const reset = () => {
    isLoading.value = false
    error.value = null
    initiateResponse.value = null
  }

  return {
    isLoading: readonly(isLoading),
    error: readonly(error),
    initiateResponse: readonly(initiateResponse),
    initiateVote,
    confirmVote,
    reset,
  }
}
