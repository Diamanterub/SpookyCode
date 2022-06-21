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
    for (const category of categories) {
        for (let i = 0; i < category.subCategories.length; i++) {
            if (category.subCategories[i].title == subCategorySelected) {
                return category;
            }
        }
    }
    return null;
}

export function updateCategories(changedCategory) {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].title == changedCategory.title) {
            categories[i] = changedCategory;
        }
    }
    localStorage.setItem("categories", JSON.stringify(categories));
}


export function commentOnSubCategory(subCategory, videoTag = "", comment, user, date) {


    let categoryIndex = categories.indexOf(checkWhereSubCategoryIs(subCategory.title));

    subCategory.comments.push({
        videoTag,
        comment,
        user,
        date
    })

    //Update the localstorage array
    categories[categoryIndex].subCategory = subCategory;
    localStorage.setItem("categories", JSON.stringify(categories));

}


export function deleteCategory(index) {

    categories.splice(index, 1)

    localStorage.setItem("categories", JSON.stringify(categories));

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