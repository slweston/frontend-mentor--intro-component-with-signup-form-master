(() => {
	const form = document.querySelector('form');
	const inputs = form.querySelectorAll('input');


	form.addEventListener('submit', (e) => {
		e.preventDefault();

		inputs.forEach((input) => {
			const validationGroup = input.closest('.validation-group');
			if (!input.validity.valid) {
				validationGroup.classList.add('error');
			}
		});
	});

	inputs.forEach((input) => {
		input.addEventListener('input', (e) => {
			const validationGroup = input.closest('.validation-group');
			validationGroup.classList.remove('error');
		});

		input.addEventListener('focus', (e) => {
			const validationGroup = input.closest('.validation-group');
			validationGroup.classList.remove('error');
		});
	});
})();