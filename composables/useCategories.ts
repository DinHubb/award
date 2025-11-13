import { categories as categoriesData } from '~/data/categories'

export interface Category {
  id: string
  name_tj: string
  name_ru: string
}

export type CategoriesResponse = Category[]

export const useCategories = () => {
  const categories = useState<Category[]>('categories', () => categoriesData)
  const isLoading = useState<boolean>('categories-loading', () => false)
  const error = useState<Error | null>('categories-error', () => null)

  /**
   * Load categories from inline data
   */
  const fetchCategories = async () => {
    isLoading.value = true
    error.value = null

    try {
      // Simulate async operation for consistency
      await new Promise((resolve) => setTimeout(resolve, 0))

      categories.value = categoriesData
      return categoriesData
    } catch (err) {
      error.value = err as Error
      console.error('Error loading categories:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Get category by ID
   */
  const getCategoryById = (id: string): Category | undefined => {
    return categories.value.find((cat) => cat.id === id)
  }

  /**
   * Get category name based on locale
   */
  const getCategoryName = (category: Category, locale: 'tj' | 'ru' = 'ru'): string => {
    return locale === 'tj' ? category.name_tj : category.name_ru
  }

  /**
   * Refresh categories (reload from data)
   */
  const refreshCategories = async () => {
    return fetchCategories()
  }

  return {
    categories: readonly(categories),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchCategories,
    getCategoryById,
    getCategoryName,
    refreshCategories,
  }
}
