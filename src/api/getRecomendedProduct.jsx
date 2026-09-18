export async function getRecomendedProduct(id) {
  const response = await fetch('https://suschik.com/api/v1/products/' + id, {
    method: 'GET'
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.detail || error?.message || 'Не удалось получить товар');
  }

  return response.json();
}