let admins;

export function init() {
    users = localStorage.admins ? JSON.parse(localStorage.admins) : [];
}

export function login(email, password) {
    const admin = admins.find(
        (admin) => admin.email === email && admin.password === password
    );
    if (admin) {
        sessionStorage.setItem("loggedAdmin", JSON.stringify(user));
        return true;
    } else {
        throw Error("Invalid login!");
    }
}

export function logout() {
    sessionStorage.removeItem("loggedAdmin");
}

// Check if someone is logged right now
export function isLogged() {
    return sessionStorage.getItem("loggedAdmin") ? true : false;
}

class Admin {
    username = "";
    email = "";
    password = "";

    constructor( username, email, password) {
        
        this.username = username;
        this.email = email;
        this.password = password;
    
    }
}