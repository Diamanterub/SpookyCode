import * as User from "../models/UserModel.js";

function loginView() {
    User.init();

    let responseLogin = document.querySelector("#responseLogin")
    let responseRegister = document.querySelector("#responseRegister")

    let loginDiv = document.querySelector(".loginDiv")
    let registerDiv = document.querySelector(".registerDiv")
    let loginRegisterDiv = document.getElementById("loginRegisterDiv")
    let headerTxt = document.querySelector(".headerTxt")

    //Default Register is hidden
    registerDiv.classList.toggle("hidden")

    //Switch between login and register

    document.querySelector(".changeLinkRegister")?.addEventListener("click", () => {
        if (registerDiv.classList.contains("hidden")) {
            headerTxt.innerHTML = "Register"
            loginRegisterDiv.style.height = 470 + "px"
            registerDiv.classList.toggle("hidden")
            loginDiv.classList.toggle("hidden")
        }
    });

    document.querySelector(".changeLinkLogin")?.addEventListener("click", () => {
        if (loginDiv.classList.contains("hidden")) {
            headerTxt.innerHTML = "Login"
            loginRegisterDiv.style.height = 360 + "px"
            loginDiv.classList.toggle("hidden")
            registerDiv.classList.toggle("hidden")
        }
    })

    // Login Mechanism
    document.querySelector("#loginForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        try {
            User.login(
                document.getElementById("formLoginEmail").value,
                document.getElementById("formLoginPassword").value
            );
            responseLogin.classList.toggle("success")
            responseLogin.innerHTML = "Login was Sucessful!"
            setTimeout(() => {
                //Route to other stuff
                let currentUser = User.getUserLogged()
                if (currentUser.rank == "student") {
                    location.href = "../../html/wiki.html"
                } else if (currentUser.rank == "admin") {
                    location.href = "../../html/wikiAdmin.html"
                }

            }, 3000);
        } catch (e) {
            responseLogin.classList.toggle("error")
            responseLogin.innerHTML = "Either email/password is wrong"
        }
    });

    // Register Mechanism
    document.querySelector("#registerForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        const registerUsername = document.getElementById("formUsername");
        const registerEmail = document.getElementById("formEmail");
        const registerPassword = document.getElementById("formPassword");
        const registerPassword2 = document.getElementById("formConfirmPassword");
        try {
            console.log(responseRegister);
            if (registerPassword.value !== registerPassword2.value) {
                responseRegister.classList.toggle("error")
                responseRegister.innerHTML = "Password and Confirm Password are not equal"
            }
            User.add("student", registerUsername.value, registerEmail.value, registerPassword.value);
            responseRegister.classList.toggle("success")
            responseRegister.innerHTML = "User registered with success!"

            setTimeout(() => {
                headerTxt.innerHTML = "Login"
                loginRegisterDiv.style.height = 360 + "px"
                loginDiv.classList.toggle("hidden")
                registerDiv.classList.toggle("hidden")
            }, 3000);
        } catch (e) {
            responseRegister.classList.toggle("error")
            responseRegister.innerHTML = "Error registering user"
        }
    });
}

loginView();