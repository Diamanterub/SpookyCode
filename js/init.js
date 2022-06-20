//This file will be the starting ground for our code meaning it will initialize all the variables for localstorage

writeData();

function writeData() {

    // USERS
    if (!localStorage.users) {
        //Users Default para aceder a diversas
        const users = [{
                blocked: false,
                rank: "student",
                username: "aluno",
                email: "123a@gmail.com",
                password: "pass1",
                level: 1,
                xp: 0,
                likes: [],
                exercisesDone: [],
            },
            {
                blocked: false,
                rank: "admin",
                username: "professor",
                email: "123p@gmail.com",
                password: "pass2",
            },
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }
    if (!localStorage.xpPerLevel) {
        const xpPerLevel = [0, 1000, 2000, 3000, 4000, 5000];
        localStorage.setItem("xpPerLevel", JSON.stringify(xpPerLevel));
    }
    if (!sessionStorage.selectedSubCategory) {

        const dummmy = {
            title: "Variables",
            url: "../videos/Variables.mp4",
            videoTags: ["1:20-Creating the Variables", "5:24-Messing with Number Variables"],
            tags: ["Variables", "Fundamentals"],
            comments: [{
                videoTag: "1:20-Creating the Variables",
                comment: "This is a comment",
                user: "aluno",
                date: "2020-01-01"
            }]
        }
        sessionStorage.setItem("selectedSubCategory", JSON.stringify(dummmy));

    }
    // Categories
    if (!localStorage.categories) {
        //Users Default para aceder a diversas
        const categories = [{
                title: "Javascript Fundamentals",
                levelNeeded: 1,
                subCategories: [{
                    title: "Variables",
                    url: "../videos/Variables.mp4",
                    videoTags: ["1:20-Creating the Variables", "5:24-Messing with Number Variables"],
                    tags: ["Variables", "Fundamentals"],
                    comments: [{
                            videoTag: "1:20-Creating the Variables",
                            comment: "This is a comment",
                            user: "aluno",
                            date: "2020-01-01"
                        },
                        {
                            videoTag: "1:20-Creating the Variables",
                            comment: "This is another comment",
                            user: "aluno",
                            date: "2022-01-01"
                        }
                    ],
                    likes: 10,
                    views: 15,
                    dateAdded: "1 April",
                    exercise: [{
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 10,
                            question: "What is the correct way to declare a variable with naming convention snakeCase?",
                            answers: ["let snakeCase", "let snakecase", "let snakecasE", "let snake_case"],
                            correctAnswer: "let snake_case",
                        },
                        {
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 10,
                            question: "I am Tired?",
                            answers: ["Yes", "No", "Maybe", "Tft"],
                            correctAnswer: "Yes",
                        },
                        {
                            type: "editor",
                            xpPerQuestionCorrect: 10,
                            question: "Declare a variable called big apple with the naming convention camelCase?",
                            settings: [{
                                    type: "html",
                                    locked: "true",
                                    content: ""
                                },
                                {
                                    type: "css",
                                    locked: "true",
                                    content: ""
                                },
                                {
                                    type: "js",
                                    locked: "false",
                                    content: ""
                                },
                            ],
                            correctAnswer: "let bigApple",
                        }
                    ]
                }, {
                    title: "Data Types",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
                    comments: [],
                    likes: 15,
                    views: 10,
                    dateAdded: "5 April",
                    questions: []
                }, {
                    title: "Operators",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
                    comments: [],
                    likes: 21,
                    views: 25,
                    dateAdded: "10 April",
                    questions: []
                }, {
                    title: "Conditionals",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
                    comments: [],
                    likes: 5,
                    views: 55,
                    dateAdded: "21 April",
                    questions: []
                }, {
                    title: "Loops",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
                    comments: [],
                    likes: 12,
                    views: 69,
                    dateAdded: "15 April",
                    questions: []
                }, {
                    title: "Functions",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
                    comments: [],
                    likes: 33,
                    views: 98,
                    dateAdded: "22 April",
                    questions: []
                }]

            },
            {
                title: "Document Object Model",
                levelNeeded: 2,
                subCategories: [{
                    title: "DOM",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
                    comments: [],
                    likes: 0,
                    views: 0,
                    dateAdded: "",
                    questions: []
                }, {
                    title: "Events",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
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