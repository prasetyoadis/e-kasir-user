async function logoutUser(token) {
    try {
        const response = await fetch('test-response/200logoutsuccess.json');

        // const response = await fetch('http://192.168.43.6:8080/api/auth/logout', {
        //     method: 'DELETE',
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         'Accept': 'application/json'
        //     }
        // })

        if (response.statusCode === 401) {
            throw new Error('Invalid Token');
        }

        localStorage.removeItem('current_user');
        localStorage.removeItem('token');
        localStorage.setItem('is_logged_in', 'false');

        window.location.href = '/login';
    } catch (error) {
        console.error(error);
    }
}