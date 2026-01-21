
const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister");

/**
 * LOGIC LOGIN
 */
if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault(); // Stop jika error
        // Cek validasi Login
        if (!checkLoginInputs()) return;
        await loginUser(loginEmail.value, loginPassword.value);
    });
}

/**
 * LOGIC REGISTER
 */
if (formRegister) {
    formRegister.addEventListener("submit", async (e) => {
        e.preventDefault(); // Stop jika error
        // Cek validasi Login
        if (!checkRegisterInputs()) return;
        
        await registerUser(regName.value, regUsername.value, regEmail.value, regPhone.value, regPassword.value);
    });
}