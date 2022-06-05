//This file will be the starting ground for our code meaning it will initialize all the variables for localstorage

writeData();

function writeData() {

    // USERS
    if (!localStorage.users) {
        //Users Default para aceder a diversas
        const users = [{
                rank: "student",
                username: "aluno",
                email:"123a@gmail.com",
                password: "pass1",
            },
            {
                rank: "admin",
                username: "professor",
                email:"123p@gmail.com",
                password: "pass2",
            },
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }
}