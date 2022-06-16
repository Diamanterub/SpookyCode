//This file will be the starting ground for our code meaning it will initialize all the variables for localstorage

writeData();

function writeData() {

    // USERS
    if (!localStorage.users) {
        //Users Default para aceder a diversas
        const users = [{
                rank: "student",
                username: "aluno",
                email: "123a@gmail.com",
                password: "pass1",
            },
            {
                rank: "admin",
                username: "professor",
                email: "123p@gmail.com",
                password: "pass2",
            },
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }
    // Categories
    if (!localStorage.categories) {
        //Users Default para aceder a diversas
        const categories = [{
                title: "Javascript Fundamentals",
                levelNeeded: 1,
                subCategories: [{
                    title: "Variables",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }, {
                    title: "Data Types",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }, {
                    title: "Operators",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }, {
                    title: "Conditionals",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }, {
                    title: "Loops",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }, {
                    title: "Functions",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }]

            },
            {
                title: "Document Object Model",
                levelNeeded: 2,
                subCategories: [{
                    title: "DOM",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }, {
                    title: "Events",
                    url: "",
                    tags: [],
                    comments: [],
                    likes: 0,
                    questions: []
                }]

            }
        ]

        ;
        localStorage.setItem("categories", JSON.stringify(categories));
    }
}