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
                rank: "student",
                username: "Maria",
                email: "maria@gmail.com",
                password: "pass1",
                level: 1,
                xp: 500,
                likes: [],
                exercisesDone: [],
            },
            {
                blocked: false,
                rank: "student",
                username: "Alex",
                email: "alex@gmail.com",
                password: "pass1",
                level: 1,
                xp: 999,
                likes: [],
                exercisesDone: [],
            },
            {
                blocked: false,
                rank: "student",
                username: "Mário",
                email: "Mário@gmail.com",
                password: "pass1",
                level: 3,
                xp: 3500,
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
                            comment: "This is so good",
                            user: "Mário",
                            date: "2022-06-21"
                        },
                        {
                            videoTag: "1:20-Creating the Variables",
                            comment: "How do you define this?",
                            user: "Maria",
                            date: "2022-06-21"
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
                    url: "../videos/WhatAreDataTypes.mp4",
                    tags: ["Data Types", "Fundamentals"],
                    videoTags: ["0:29-Data Types", "1:10-Integer Data Types", "1:46-String Data Types", "2:17-Errors"],
                    comments: [{
                            videoTag: "Data Types",
                            comment: "Good",
                            user: "Mário",
                            date: "2022-06-21"
                        },
                        {
                            videoTag: "2:17-Errors",
                            comment: "Thanks this solved my issues",
                            user: "aluno",
                            date: "2022-06-21"
                        }
                    ],
                    likes: 15,
                    views: 10,
                    dateAdded: "5 April",
                    exercise: [{
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 20,
                            question: "Which Data types present here is not a data Type",
                            answers: ["int", "float", "String", "cha"],
                            correctAnswer: "cha",
                        },
                        {
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 20,
                            question: "Int stands for?",
                            answers: ["Integer", "Number", "Integer Number", "decimal Number"],
                            correctAnswer: "Integer",
                        },
                        {
                            type: "editor",
                            xpPerQuestionCorrect: 50,
                            question: "Can you create variable with the data type bool",
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
                            correctAnswer: "bool",
                        }
                    ]
                }, {
                    title: "Operators",
                    url: "../videos/OperatorsUsedInProgramming.mp4",
                    tags: ["Operators", "Fundamentals"],
                    videoTags: ["0:05-Arithmetic Binary Operators", "2:34-String Operator", "3:01-Relational Operators", "4:08-Logical Operators"],
                    comments: [],
                    likes: 21,
                    views: 22,
                    dateAdded: "10 April",
                    exercise: [{
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 30,
                            question: "How many types of class of operators exists",
                            answers: ["1", "2", "3", "4"],
                            correctAnswer: "4",
                        },
                        {
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 30,
                            question: "10 % 6 = ",
                            answers: ["2", "4", "10", "6"],
                            correctAnswer: "4",
                        },

                    ]
                }, {
                    title: "Conditionals",
                    url: "../videos/JavaScriptifelse.mp4",
                    tags: ["Conditionals", "Fundamentals"],
                    videoTags: ["1:02-If", "2:38-Resolving the problem"],
                    comments: [],
                    likes: 5,
                    views: 55,
                    dateAdded: "21 April",
                    exercise: [{
                            type: "editor",
                            xpPerQuestionCorrect: 200,
                            question: "Create a variable called hour and show in the console that variable if the varible is greater than 20",
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
                            correctAnswer: "let hour;if(hour > 20){console.log(hour)}",
                        }

                    ]

                }, {
                    title: "Loops",
                    url: "../videos/JavaScriptLoops.mp4",
                    tags: ["Loops", "Fundamentals"],
                    videoTags: ["0:36-Type of Loops", "0:55-For"],
                    comments: [{
                            videoTag: "0:36-Type of Loops",
                            comment: "Interesting",
                            user: "Mário",
                            date: "2022-06-21"
                        },
                        {
                            videoTag: "0:55-For",
                            comment: "What about the other for loops",
                            user: "Maria",
                            date: "2022-06-21"
                        }
                    ],
                    likes: 12,
                    views: 69,
                    dateAdded: "15 April",
                    exercise: [{
                        type: "multipleChoice",
                        xpPerQuestionCorrect: 100,
                        question: "How many types of loops exists",
                        answers: ["4", "2", "5", "3"],
                        correctAnswer: "5",
                    }]

                }, {
                    title: "Functions",
                    url: "../videos/JavaScriptFunctions.mp4",
                    tags: [],
                    videoTags: ["0:25-Creating the Function", "1:23-Calling the function", "2.46-Passing information"],
                    comments: [],
                    likes: 33,
                    views: 98,
                    dateAdded: "22 April",
                    exercise: [{
                            type: "editor",
                            xpPerQuestionCorrect: 500,
                            question: "Create a function with a random name",
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
                            correctAnswer: "function",
                        }

                    ]

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
                    exercise: [{
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 30,
                            question: "How many types of class of operators exists",
                            answers: ["1", "2", "3", "4"],
                            correctAnswer: "4",
                        },
                        {
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 30,
                            question: "10 % 6 = ",
                            answers: ["2", "4", "10", "6"],
                            correctAnswer: "4",
                        },

                    ]

                }, {
                    title: "Events",
                    url: "../videos/Variables.mp4",
                    tags: [],
                    videoTags: [],
                    comments: [],
                    likes: 0,
                    views: 0,
                    dateAdded: "",
                    exercise: [{
                        type: "multipleChoice",
                        xpPerQuestionCorrect: 30,
                        question: "Test",
                        answers: ["1", "2", "3", "4"],
                        correctAnswer: "4",
                    }, ]
                }]

            },
            {
                title: "Object Oriented Programming",
                levelNeeded: 3,
                subCategories: [{
                        title: "Arrays",
                        url: "../videos/Variables.mp4",
                        tags: [],
                        videoTags: [],
                        comments: [],
                        likes: 0,
                        views: 0,
                        dateAdded: "",
                        exercise: [{
                                type: "multipleChoice",
                                xpPerQuestionCorrect: 30,
                                question: "How many types of class of operators exists",
                                answers: ["1", "2", "3", "4"],
                                correctAnswer: "4",
                            },
                            {
                                type: "multipleChoice",
                                xpPerQuestionCorrect: 30,
                                question: "10 % 6 = ",
                                answers: ["2", "4", "10", "6"],
                                correctAnswer: "4",
                            },

                        ]

                    }, {
                        title: "Objects",
                        url: "../videos/Variables.mp4",
                        tags: [],
                        videoTags: [],
                        comments: [],
                        likes: 0,
                        views: 0,
                        dateAdded: "",
                        exercise: [{
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 30,
                            question: "Test",
                            answers: ["1", "2", "3", "4"],
                            correctAnswer: "4",
                        }, ]
                    }
                    , {
                        title: "Modals",
                        url: "../videos/Variables.mp4",
                        tags: [],
                        videoTags: [],
                        comments: [],
                        likes: 0,
                        views: 0,
                        dateAdded: "",
                        exercise: [{
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 30,
                            question: "Test",
                            answers: ["1", "2", "3", "4"],
                            correctAnswer: "4",
                        }, ]
                    }
                    , {
                        title: "Classes",
                        url: "../videos/Variables.mp4",
                        tags: [],
                        videoTags: [],
                        comments: [],
                        likes: 0,
                        views: 0,
                        dateAdded: "",
                        exercise: [{
                            type: "multipleChoice",
                            xpPerQuestionCorrect: 30,
                            question: "Test",
                            answers: ["1", "2", "3", "4"],
                            correctAnswer: "4",
                        }, ]
                    }
                    

                ]


            }
        ]

        ;
        localStorage.setItem("categories", JSON.stringify(categories));
    }
}