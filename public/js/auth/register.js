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
            case 201: // SUKSES
                showToast(resultResponse.result.successMessage, 'success');

                // === JALANKAN CALLBACK RESET FORM ===
                // Jika fungsi dikirim, jalankan fungsi tersebut
                if (onSuccessCallback && typeof onSuccessCallback === 'function') {
                    onSuccessCallback();
                }

                // Redirect / Geser Panel ke Login
                setTimeout(() => {
                    container.classList.remove("active");
                }, 1500);
                break;

            case 400:
            case 409:
            case 422:
            case 500:
                // Error handled by helper
                handleApiError(resultResponse.result.errorCode);
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
