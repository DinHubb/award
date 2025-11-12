export const useAssetPath = () => {
  const config = useRuntimeConfig();

  const getAssetPath = (path: string): string => {
    // Убираем начальный слеш если есть
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Возвращаем путь с baseURL
    return `${config.app.baseURL}${cleanPath}`;
  };

  return {
    getAssetPath
  };
};
