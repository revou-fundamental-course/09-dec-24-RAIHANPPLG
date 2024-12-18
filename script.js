document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const response = document.getElementById('formResponse');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;

        // Simple validation check
        if (name && email && interest) {
            response.innerHTML = `
                <p style="color: green;">
                    Thank you, ${name}! We will contact you soon regarding "${interest}" at ${email}.
                </p>
            `;
            form.reset();
        } else {
            response.innerHTML = `
                <p style="color: red;">Please fill out all fields correctly.</p>
            `
        }
    });
});