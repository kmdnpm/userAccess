const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const logoutButton = document.getElementById('logout-button');
const resetPassword = document.getElementById('pwdRec-link')
const newSignUp = document.getElementById('newAcc-link')
const verify = document.getElementById('verification-link')

// resetPassword.addEventListener('click', () => {
//     window.location.href = 'passwordRecovery.html';
// });

// newSignUp.addEventListener('click', () => {
//     window.location.href = 'signUP.html';
// });

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".navigation-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const nextPage = this.getAttribute("data-next-page");
            window.location.href = nextPage;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".navigation-button2");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const nextPage = this.getAttribute("data-next-page");
            window.location.href = nextPage;
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".navigation-button3");

//     buttons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             const nextPage = this.getAttribute("data-next-page");
//             window.location.href = nextPage;
//         });
//     });
// });

verify.addEventListener('click', () => {
    window.location.href = 'verificationLink.html';
});

// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // In a real application, you'd validate user credentials here.
//     // For this example, we'll assume a simple username and password.
//     if (username === 'user' && password === 'password') {
//         loginForm.style.display = 'none';
//         dashboard.style.display = 'block';
//     } else {
//         alert('Invalid credentials. Please try again.');
//     }
// });

// logoutButton.addEventListener('click', function () {
//     loginForm.style.display = 'block';
//     dashboard.style.display = 'none';
// });

// const newsBanners = document.querySelectorAll('.news-banner');
// newsBanners.forEach(banner => {
//     banner.addEventListener('click', function () {
//         alert(`Clicked on ${banner.innerText}`);
//     });
// });
