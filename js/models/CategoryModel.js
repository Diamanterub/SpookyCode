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

export function getSubCategoryByName(name) {
    for (const category of categories) {
        for (let j = 0; j < category.subCategories.length; j++) {
            if (category.subCategories[j].title == name) {
                console.log(category.subCategories[j]);
                return category.subCategories[j]
            }
        }
    }
    return null
}

export function getCategoryByName(name) {
    for (const category of categories) {
        if (category.title == name) {
            return category
        }
    }
    return null
}


export function checkWhereSubCategoryIs(subCategorySelected) {
    console.log(subCategorySelected);
    for (const category of categories) {
        for (let i = 0; i < category.subCategories.length; i++) { 
            if (category.subCategories[i].title == subCategorySelected) { 
                console.log("Enter");
                return category;
            }
        } 
    }
    return null;

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