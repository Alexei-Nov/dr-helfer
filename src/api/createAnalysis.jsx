export async function createAnalysis(formData) {
	const idempotencyKey = crypto.randomUUID();

	const response = await fetch('https://suschik.com/api/v1/analyses', {
		method: 'POST',
		headers: {
			'Idempotency-Key': idempotencyKey,
		},
		body: formData,
	});

	if (!response.ok) {
		const error = await response.json().catch(() => null);

		throw new Error(error?.detail || error?.message || 'Не удалось создать анализ');
	}

	return response.json();
}