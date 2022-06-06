let categories;

// Getting the users from localstorage
export function init() {
    categories = localStorage.categories ? JSON.parse(localStorage.categories) : [];
}

// Adding a category
export function add(rank,username, email, password) {
    if (users.some((user) => user.email === email)) {
        throw Error(`User with this email: "${email}" already exists!`);
    } else {
        users.push(new User(rank,username, email, password));
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


class Category {
    title = "";
    username = "";
    email = "";
    password = "";

    constructor(rank,username,email, password) {
        this.rank = rank;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}