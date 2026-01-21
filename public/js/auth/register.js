import { handleApiError } from '../errors/handleApiError.js';
import { showToast } from '../toast.js';

// Parameter terakhir 'onSuccessCallback' adalah fungsi reset yang dikirim dari validation.js
export async function registerUser(name, email, msisdn, password, onSuccessCallback) {
    const container = document.getElementById("container");

    try {
        // Ganti Logic ini sesuai kebutuhan (True/False)
        const isSuccess = true;
        const url = isSuccess ? 'test-response/success/auth/register/201-register-success.json' : 'test-response/failed/auth/register/422-validation-failed.json';

        const response = await fetch(url);

        // --- FETCH REAL API (Contoh) ---
        /*
        const response = await fetch('http://192.168.43.6:8080/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, msisdn, password })
        })
        */

        const resultResponse = await response.json();
        console.log('Register Response:', resultResponse);

        switch (resultResponse.statusCode) {
            case 400:
                handleApiError(resultResponse.result.errorCode);
                break;
            case 409:
                handleApiError(resultResponse.result.errorCode);
                break;
            case 422:
                handleApiError(resultResponse.result.errorCode);
//                 showRegisterError(document.getElementById("regEmail"), resultResponse.result.errors.email[0]);
                break;
            case 500:
                handleApiError(resultResponse.result.errorCode);
                break;
            case 201:
                showToast(resultResponse.result.errorMessage, 'success');
                // redirect ke login
                setTimeout(() => {
                    // window.location.href = "/login";
                    container.classList.remove("active");
                }, 1500); // kasih waktu toast tampil
                break;
            default:
                console.warn('Unhandled status code:', resultResponse.statusCode);
                handleApiError(resultResponse?.result?.errorCode);
                break;
        }
    } catch (err) {
        console.error("Register Error:", err);
    }
}

function showRegisterError(el, msg) {
    const inputControl = el.parentElement; // Ambil div .input-control
    const small = inputControl.querySelector("small");

    small.innerText = msg;
    inputControl.className = "input-control error";
}