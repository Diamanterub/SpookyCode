//This file will be the starting ground for our code meaning it will initialize all the variables for localstorage

writeData();

function writeData() {

    // USERS
    if (!localStorage.users) {
        //Users Default para aceder a diversas
        const users = [{
                rank: "student",
                username: "aluno",
                password: "pass1",
            },
            {
                rank: "admin",
                username: "professor",
                password: "pass2",
            },
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }
}