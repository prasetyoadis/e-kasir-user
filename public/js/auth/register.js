import { handleApiError } from '../errors/handleApiError.js';
import { showToast } from '../toast.js';

export async function registerUser(name, username, email, msisdn, password) {
    const container = document.getElementById("container");

    try {
        const isSuccess = false;
        const url = isSuccess ? 'test-response/success/auth/register/201-register-success.json' : 'test-response/failed/auth/register/422-validation-failed.json';
        
        // simulasi login → fetch ke file JSON statis
        const response = await fetch(url);

        // const response = await fetch('http://192.168.43.6:8080/api/auth/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //          name,
        //          username,
        //          email,
        //          msisdn,                    
        //          password
        //     })
        // })

        const resultResponse = await response.json();
        console.log('Loaded data:', resultResponse);

        switch (resultResponse.statusCode) {
            case 400:
                handleApiError(resultResponse.result.errorCode);
                break;
            case 409:
                handleApiError(resultResponse.result.errorCode);
                break;
            case 422:
                handleApiError(resultResponse.result.errorCode);
                break;
            case 500:
                handleApiError(resultResponse.result.errorCode);
                break;
            case 201:
                showToast(resultResponse.result.successMessage, 'success');
                // redirect ke login
                setTimeout(() => {
                    container.classList.remove("active");
                }, 1500); // kasih waktu toast tampil
                break;
            default:
                console.warn('Unhandled status code:', resultResponse.statusCode);
                handleApiError(resultResponse?.result?.errorCode);
                break;
        }
    } catch (err) {
        console.error(err);
    }
}

function showLoginError(el, msg) {
    const inputControl = el.parentElement; // Ambil div .input-control
    const small = inputControl.querySelector("small");

    small.innerText = msg;
    inputControl.className = "input-control error";
}