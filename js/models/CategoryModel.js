let categories;

// Getting the users from localstorage
export function init() {
    categories = localStorage.categories ? JSON.parse(localStorage.categories) : [];
}

// Adding a category
export function add(title, levelNeeded, subCategories) {
    if (categories.some((category) => category.title === title)) {
        throw Error(`There is already a category with this title: "${title}"!`);
    } else {
        categories.push(new Category(title, levelNeeded, subCategories));
        localStorage.setItem("categories", JSON.stringify(categories));
    }
}

export function getCategories() {
    return categories;
}

export function getCategory(value) {
    return categories[value];
}


class Category {
    title = "";
    levelNeeded = 0;
    subCategories = [];

    constructor(title, levelNeeded, subCategories) {
        this.title = title;
        this.levelNeeded = levelNeeded;
        this.subCategories = subCategories;
    }
}