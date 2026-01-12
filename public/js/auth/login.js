async function loginUser(email, password) {
    try {
        const isSuccess = true;
        const url = isSuccess ? 'test-response/200loginsuccess.json' : 'test-response/401unauthorized.json';
        
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

        if (resultResponse.statusCode === 401) {
            showLoginError(document.getElementById("loginEmail"), "Email atau password salah");
            showLoginError(document.getElementById("loginPassword"), "Email atau password salah");
            return
        }
        if (resultResponse.statusCode === 200) {
            // ambil data user
            const data = resultResponse.result.data;

            // simpan ke localStorage (simulasi login sukses)
            localStorage.setItem('token', data.token.access_token);
            localStorage.setItem('current_user', JSON.stringify(data.user));
            localStorage.setItem('is_logged_in', 'true');

            console.log('Login sukses:', data);

            // redirect ke dashboard
            window.location.href = '/dashboard';   
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