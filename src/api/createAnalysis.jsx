export async function createAnalysis(formData) {
	const response = await fetch('/api/v1/analyses', {
		method: 'POST',
		body: formData,
	});

	if (!response.ok) {
		throw new Error('Не удалось создать анализ');
	}

	return response.json();
}