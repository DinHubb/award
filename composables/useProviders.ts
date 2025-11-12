export interface Provider {
  id: string
  name_tj: string
  name_ru: string
  category_id: string
}

export type ProvidersResponse = Provider[]

export const useProviders = () => {
  const providers = useState<Provider[]>('providers', () => [])
  const isLoading = useState<boolean>('providers-loading', () => false)
  const error = useState<Error | null>('providers-error', () => null)

  /**
   * Fetch providers from API
   * @param categoryId - Optional category ID to filter providers
   */
  const fetchProviders = async (categoryId?: string | null) => {
    isLoading.value = true
    error.value = null

    try {
      const params = new URLSearchParams()
      if (categoryId) {
        params.append('category_id', categoryId)
      }

      const url = `/api/v1/providers${params.toString() ? `?${params.toString()}` : ''}`

      const response = await $jwtFetch<ProvidersResponse>(url, {
        method: 'GET',
      })

      providers.value = response
      return response
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching providers:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Get provider by ID
   */
  const getProviderById = (id: string): Provider | undefined => {
    return providers.value.find((provider) => provider.id === id)
  }

  /**
   * Get providers by category ID
   */
  const getProvidersByCategoryId = (categoryId: string): Provider[] => {
    return providers.value.filter((provider) => provider.category_id === categoryId)
  }

  /**
   * Get provider name based on locale
   */
  const getProviderName = (provider: Provider, locale: 'tj' | 'ru' = 'ru'): string => {
    return locale === 'tj' ? provider.name_tj : provider.name_ru
  }

  /**
   * Refresh providers (fetch again)
   */
  const refreshProviders = async (categoryId?: string | null) => {
    return fetchProviders(categoryId)
  }

  /**
   * Clear providers state
   */
  const clearProviders = () => {
    providers.value = []
    error.value = null
  }

  return {
    providers: readonly(providers),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchProviders,
    getProviderById,
    getProvidersByCategoryId,
    getProviderName,
    refreshProviders,
    clearProviders,
  }
}
