import { loginUser } from './auth/login.js';
import { registerUser } from './auth/register.js';

document.addEventListener("DOMContentLoaded", function () {
    // --- AMBIL ELEMEN LOGIN ---
    const formLogin = document.getElementById("formLogin");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");

    // --- AMBIL ELEMEN REGISTER ---
    const formRegister = document.getElementById("formRegister");
    const regName = document.getElementById("regName");
    const regUsername = document.getElementById("regUsername");
    const regEmail = document.getElementById("regEmail");
    const regPhone = document.getElementById("regPhone"); // Ini input HP di form Register
    const regPassword = document.getElementById("regPassword");
    const regConfirm = document.getElementById("regConfirm");

    // ==========================================
    // LOGIC: INPUT HANYA ANGKA (NO LETTERS)
    // ==========================================
    // Kita tambahkan juga listener untuk input WhatsApp jika ada
    const whatsappInput = document.getElementById('whatsapp'); 

    // Fungsi untuk memblokir karakter non-angka
    function enforceNumericInput(event) {
        // Ganti semua karakter yang BUKAN angka (0-9) dengan string kosong
        event.target.value = event.target.value.replace(/\D/g, '');
    }

    // Pasang listener ke input Register Phone (menggunakan variabel regPhone yang sudah ada di atas)
    if (regPhone) {
        regPhone.addEventListener('input', enforceNumericInput);
    }

    // Pasang listener ke input Whatsapp (jika ada)
    if (whatsappInput) {
        whatsappInput.addEventListener('input', enforceNumericInput);
    }

    // ============================
    // LOGIC LOGIN
    // ============================
    if (formLogin) {
        formLogin.addEventListener("submit", async (e) => {
            e.preventDefault(); // Stop jika error
            // Cek validasi Login
            if (!checkLoginInputs()) return;
            await loginUser(loginEmail.value, loginPassword.value);
        });
    }

    function checkLoginInputs() {
        let isValid = true;
        const emailValue = loginEmail.value.trim();
        const passValue = loginPassword.value.trim();

        if (emailValue === "") {
            setErrorFor(loginEmail, "Email tidak boleh kosong");
            isValid = false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(loginEmail, "Format email salah");
            isValid = false;
        } else {
            setSuccessFor(loginEmail);
        }

        if (passValue === "") {
            setErrorFor(loginPassword, "Password wajib diisi");
            isValid = false;
        } else {
            setSuccessFor(loginPassword);
        }

        return isValid;
    }

    // ============================
    // LOGIC REGISTER
    // ============================
    if (formRegister) {
        formRegister.addEventListener("submit", async (e) => {
            e.preventDefault(); // Stop jika error
            // Cek validasi Login
            if (!checkRegisterInputs()) return;
            
            await registerUser(regName.value, regUsername.value, regEmail.value, regPhone.value, regPassword.value);
        });
    }

    function checkRegisterInputs() {
        let isValid = true;

        const nameVal = regName.value.trim();
        const userVal = regUsername.value.trim();
        const emailVal = regEmail.value.trim();
        const phoneVal = regPhone.value.trim();
        const passVal = regPassword.value.trim();
        const confVal = regConfirm.value.trim();

        // Validasi Nama
        if (nameVal === "") {
            setErrorFor(regName, "Nama wajib diisi");
            isValid = false;
        } else {
            setSuccessFor(regName);
        }

        // Validasi Username
        if (userVal === "") {
            setErrorFor(regUsername, "Username wajib diisi");
            isValid = false;
        } else {
            setSuccessFor(regUsername);
        }

        // Validasi Email
        if (emailVal === "") {
            setErrorFor(regEmail, "Email wajib diisi");
            isValid = false;
        } else if (!isEmail(emailVal)) {
            setErrorFor(regEmail, "Email tidak valid");
            isValid = false;
        } else {
            setSuccessFor(regEmail);
        }

        // Validasi Phone
        if (phoneVal === "") {
            setErrorFor(regPhone, "No. HP wajib diisi");
            isValid = false;
        } else {
            setSuccessFor(regPhone);
        }

        // Validasi Password
        if (passVal === "") {
            setErrorFor(regPassword, "Password wajib diisi");
            isValid = false;
        } else if (passVal.length < 6) {
            setErrorFor(regPassword, "Minimal 6 karakter");
            isValid = false;
        } else {
            setSuccessFor(regPassword);
        }

        // Validasi Konfirmasi Password
        if (confVal === "") {
            setErrorFor(regConfirm, "Konfirmasi password wajib");
            isValid = false;
        } else if (passVal !== confVal) {
            setErrorFor(regConfirm, "Password tidak cocok");
            isValid = false;
        } else {
            setSuccessFor(regConfirm);
        }

        return isValid;
    }

    // ============================
    // FUNGSI BANTUAN (HELPER)
    // ============================

    function setErrorFor(input, message) {
        const inputControl = input.parentElement; // Ambil div .input-control
        const small = inputControl.querySelector("small");

        small.innerText = message;
        inputControl.className = "input-control error";
    }

    function setSuccessFor(input) {
        const inputControl = input.parentElement;
        inputControl.className = "input-control success";
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }
});