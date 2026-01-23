import { handleApiError } from '../errors/handleApiError.js';

export async function loginUser(email, password) {
    try {
        const isSuccess = true;
        const url = isSuccess ? 'test-response/success/auth/login/200-login-success.json' : 'test-response/failed/auth/login/401-invalid-credentials.json';
        
        // simulasi login → fetch ke file JSON statis
        const response = await fetch(url);

        // const response = await fetch('http://192.168.43.6:8080/api/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        // })

        const resultResponse = await response.json();
        console.log('Loaded data:', resultResponse);
        const errorCode = resultResponse.result.errorCode;

        switch (resultResponse.statusCode) {
            case 401:
                handleApiError(errorCode);

                showLoginError(document.getElementById("loginEmail"), "Email atau password salah");
                showLoginError(document.getElementById("loginPassword"), "Email atau password salah");
                break;
            case 403:
                handleApiError(errorCode);
    
                showLoginError(document.getElementById("loginEmail"), "");
                showLoginError(document.getElementById("loginPassword"), "");
                break;
            case 429:
                handleApiError(errorCode);
    
                showLoginError(document.getElementById("loginEmail"), "");
                showLoginError(document.getElementById("loginPassword"), "");
                break;
            case 200:
                // ambil data user
                const data = resultResponse.result.data;

                // simpan ke localStorage (simulasi login sukses)
                localStorage.setItem('token', data.token.access_token);
                localStorage.setItem('current_user', JSON.stringify(data.user));
                localStorage.setItem('is_logged_in', 'true');

                console.log('Login sukses:', data);

                // redirect ke dashboard
                window.location.href = '/dashboard';  
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