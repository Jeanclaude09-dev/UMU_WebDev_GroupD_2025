document.addEventListener('DOMContentLoaded', (event) => {
    // Select all input fields that are text or password types
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

    inputs.forEach(input => {
        // Add event listener for when the input gains focus
        input.addEventListener('focus', () => {
            // Find the parent .form-group
            const formGroup = input.closest('.form-group');
            // Find the label within that group
            const label = formGroup ? formGroup.querySelector('label') : null;

            if (label) {
                // Apply a simple CSS class for the animation/style change
                label.classList.add('focused-label');
            }
        });

        // Add event listener for when the input loses focus
        input.addEventListener('blur', () => {
            // Find the parent .form-group
            const formGroup = input.closest('.form-group');
            // Find the label within that group
            const label = formGroup ? formGroup.querySelector('label') : null;

            // Only remove the class if the input is empty
            if (label && input.value.trim() === '') {
                label.classList.remove('focused-label');
            }
        });
    });
});