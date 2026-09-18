export async function getComparison(id) {
  const response = await fetch('https://suschik.com/api/v1/analyses/' + id + '/comparison', {
    method: 'GET'
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.detail || error?.message || 'Не удалось создать сравнение');
  }

  return response.json();
}