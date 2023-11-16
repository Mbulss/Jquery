
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        let valid = true;

        const name = document.getElementById('name').value.trim();
        if (name === '') {
            showError('nameError', 'Name is required');
            valid = false;
        } else {
            hideError('nameError');
        }

        const email = document.getElementById('email').value.trim();
        if (!isValidEmail(email)) {
            showError('emailError', 'Valid email is required');
            valid = false;
        } else {
            hideError('emailError');
        }

        const message = document.getElementById('message').value.trim();
        if (message === '') {
            showError('messageError', 'Message is required');
            valid = false;
        } else {
            hideError('messageError');
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function hideError(id) {
        document.getElementById(id).textContent = '';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

