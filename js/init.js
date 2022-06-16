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
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 10,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }, {
                    title: "Data Types",
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 15,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }, {
                    title: "Operators",
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 21,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }, {
                    title: "Conditionals",
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 5,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }, {
                    title: "Loops",
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 12,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }, {
                    title: "Functions",
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 33,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }]

            },
            {
                title: "Document Object Model",
                levelNeeded: 2,
                subCategories: [{
                    title: "DOM",
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 0,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }, {
                    title: "Events",
                    url: "../videos/JavaScript for Beginners — Introduction To Variables.mp4",
                    tags: [],
                    comments: [],
                    likes: 0,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }]

            }
        ]

        ;
        localStorage.setItem("categories", JSON.stringify(categories));
    }
}