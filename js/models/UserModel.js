let users;

// Getting the users from localstorage
export function init() {
    users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// Adding a user
export function add(rank, username, email, password) {
    if (users.some((user) => user.email === email)) {
        throw Error(`User with this email: "${email}" already exists!`);
    } else {
        users.push(new User(rank, username, email, password));
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

export function getLoggedUserLikes() {
    return getUserLogged().likes;
}


class User {
    rank = "";
    username = "";
    email = "";
    password = "";
    likes = []

    constructor(rank, username, email, password, likes) {
        this.rank = rank;
        this.username = username;
        this.email = email;
        this.password = password;
        this.likes = likes;
    }
}