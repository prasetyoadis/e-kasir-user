<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In - Kassia</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css" />
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/toast-notify.css">
</head>

<body>
    <div id="toast-container"></div>
    <div class="container" id="container">

        <div class="form-wrapper">

            <div class="form-container sign-in">
                <form id="formLogin">
                    <h1>Sign In</h1>

                    <div class="input-control">
                        <input type="email" id="loginEmail" placeholder="Email" />
                        <small>Error message</small>
                    </div>

                    <div class="input-control">
                        <input type="password" id="loginPassword" placeholder="Password" />
                        <i class="fa-solid fa-eye toggle-password" id="toggleLogin"></i>
                        <small>Error message</small>
                    </div>

                    <a href="#">Forgot Password?</a>

                    <button type="submit">Login</button>

                    <div class="google-login">
                        <p>Or</p>
                        <button type="button" class="btn-google">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                alt="Google Logo" />
                            Sign in with Google
                        </button>
                    </div>
                    <p class="switch">
                        Don’t have an account?
                        <span id="toRegister">Sign Up</span>
                    </p>
                </form>
            </div>

            <div class="form-container sign-up">
                <form id="formRegister">
                    <h1>Create Account</h1>

                    <div class="input-control">
                        <input type="text" id="regName" placeholder="Name" />
                        <small>Error message</small>
                    </div>

                    <div class="input-control">
                        <input type="email" id="regEmail" placeholder="Email" />
                        <small>Error message</small>
                    </div>

                    <div class="input-control phone-wrapper">
                        <span id="countryFlag" class="flag-icon fa-solid fa-earth-asia"></span>

                        <input type="tel" id="regPhone" placeholder="Phone Number" maxlength="16" />
                        <small>Error message</small>
                    </div>

                    <div class="input-control">
                        <input type="password" id="regPassword" placeholder="Password" />
                        <i class="fa-solid fa-eye toggle-password" id="toggleReg"></i>
                        <small>Error message</small>
                    </div>

                    <div class="input-control">
                        <input type="password" id="regConfirm" placeholder="Confirm Password" />
                        <i class="fa-solid fa-eye toggle-password" id="toggleConfirm"></i>
                        <small>Error message</small>
                    </div>

                    <button type="submit">Register</button>

                    <p class="switch">
                        Already have an account?
                        <span id="toLogin">Sign In</span>
                    </p>
                </form>
            </div>
        </div>

        <div class="right-panel">
            <div class="panel-content">
                <img src="asset/img/kassia-logo-transparent.webp" alt="Dashboard" />
                <h2>The easiest way to manage your transaction</h2>
                <p>Simple cashier for your business</p>
            </div>
        </div>
    </div>

    <script src="js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <script type="module" src="js/validation.js"></script>
</body>

</html>
