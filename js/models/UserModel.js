let users;

// Getting the users from localstorage
export function init() {
    users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// Adding a user
export function add(blocked = false, rank, username, email, password, level = 0, xp = 0, likes = [], exercisesDone = []) {
    if (users.some((user) => user.email === email)) {
        throw Error(`User with this email: "${email}" already exists!`);
    } else {
        users.push(new User(blocked, rank, username, email, password, level, xp, likes, exercisesDone));
        localStorage.setItem("users", JSON.stringify(users));
    }
}

// LOGIN DO UTILIZADOR
export function login(email, password) {
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user) {
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
        return true;
    } else {
        throw Error("Invalid login!");
    }
}

// Logs out the user
export function logout() {
    sessionStorage.removeItem("loggedUser");
}

// Check if someone is logged right now
export function isLogged() {
    return sessionStorage.getItem("loggedUser") ? true : false;
}

// Returns the loggedUser
export function getUserLogged() {
    return JSON.parse(sessionStorage.getItem("loggedUser"));
}

export function setLikes(categoryName, action) {
    let currentUser = getUserLogged();
    let index = users.indexOf(currentUser);

    if (action == "add") {
        currentUser.likes.push(categoryName);
    } else if (action == "remove") {
        currentUser.likes.splice(currentUser.likes.indexOf(categoryName), 1);
    }

    //Update the localstorage array
    users[index + 1] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));

    //Update the logged user
    sessionStorage.setItem("loggedUser", JSON.stringify(currentUser));
}

export function setExercisesDone(subCategoryTitle, xp) {
    let currentUser = getUserLogged();
    let index = users.indexOf(currentUser);

    currentUser.exercisesDone.push(subCategoryTitle);
    currentUser.xp += xp;

    //Update the localstorage array
    users[index + 1] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));

    //Update the logged user
    sessionStorage.setItem("loggedUser", JSON.stringify(currentUser));

    //Update the logged user
    sessionStorage.setItem("justFinished", JSON.stringify({bol: true, xp: xp}));

    
}

export function getLoggedUserLikes() {
    return getUserLogged().likes;
}


class User {
    blocked = false;
    rank = "";
    username = "";
    email = "";
    password = "";
    level = 0;
    likes = []
    xp = 0;
    exercisesDone = [];

    constructor(blocked, rank, username, email, password, likes, level, xp, exercisesDone) {
        this.blocked = blocked
        this.rank = rank;
        this.username = username;
        this.email = email;
        this.password = password;
        this.level = level
        this.likes = likes;
        this.xp = xp
        this.exercisesDone = exercisesDone
    }
}