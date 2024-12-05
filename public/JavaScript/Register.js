function handleRegister(event) {
    event.preventDefault();

    const form = event.target;
    const password = form.password.value.trim();
    const confirmPassword = form['confirm-password'].value.trim();

    
    const isValid = [...form.elements].every(input => input.required ? input.value.trim() !== '' : true);

    if (!isValid) {
        alert("Please fill out all required fields."); 
        return false; 
    }

    
    if (password !== confirmPassword) {
        alert("Passwords do not match."); 
        return false; 
    }

    
    if (!/^\d{11,}$/.test(form.phone.value.trim())) {
        alert("Please enter a valid phone number with at least 11 digits.");
        return false; 

    if (form.zip.value.trim().length < 4) {
        alert("Postal/ZIP Code must be at least 4 characters long.");
        return false; 
    }

    alert("Registration successful!");
    localStorage.setItem('username', form.username.value.trim());
    localStorage.setItem('password', password); 
    window.location.href = "signUp.html"; 
}
}
