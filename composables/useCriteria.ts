export interface Criterion {
  id: string
  label_tj: string
  label_ru: string
  category_id: string
}

export type CriteriaResponse = Criterion[]

export const useCriteria = () => {
  const criteria = useState<Criterion[]>('criteria', () => [])
  const isLoading = useState<boolean>('criteria-loading', () => false)
  const error = useState<Error | null>('criteria-error', () => null)

  /**
   * Fetch criteria from API
   * @param categoryId - Optional category ID to filter criteria
   */
  const fetchCriteria = async (categoryId?: string | null) => {
    isLoading.value = true
    error.value = null

    try {
      const params = new URLSearchParams()
      if (categoryId) {
        params.append('category_id', categoryId)
      }

      const url = `/api/v1/criteria${params.toString() ? `?${params.toString()}` : ''}`

      const response = await $jwtFetch<CriteriaResponse>(url, {
        method: 'GET',
      })

      criteria.value = response
      return response
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching criteria:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Get criterion by ID
   */
  const getCriterionById = (id: string): Criterion | undefined => {
    return criteria.value.find((criterion) => criterion.id === id)
  }

  /**
   * Get criteria by category ID
   */
  const getCriteriaByCategoryId = (categoryId: string): Criterion[] => {
    return criteria.value.filter((criterion) => criterion.category_id === categoryId)
  }

  /**
   * Get criterion label based on locale
   */
  const getCriterionLabel = (criterion: Criterion, locale: 'tj' | 'ru' = 'ru'): string => {
    return locale === 'tj' ? criterion.label_tj : criterion.label_ru
  }

  /**
   * Refresh criteria (fetch again)
   */
  const refreshCriteria = async (categoryId?: string | null) => {
    return fetchCriteria(categoryId)
  }

  /**
   * Clear criteria state
   */
  const clearCriteria = () => {
    criteria.value = []
    error.value = null
  }

  return {
    criteria: readonly(criteria),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchCriteria,
    getCriterionById,
    getCriteriaByCategoryId,
    getCriterionLabel,
    refreshCriteria,
    clearCriteria,
  }
}
