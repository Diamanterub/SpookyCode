import * as categories from "../models/CategoryModel.js";

function wikiView() {
    categories.init();

    let categoriesDiv = document.querySelector(".categoriesDiv")

    //Setup the categories

    let totalCategories = categories.getCategories();

    for (let i = 0; i < totalCategories.length; i++) {
        categoriesDiv.innerHTML += `<p class="levelNeeded">Level ${totalCategories[i].levelNeeded}</p>`
        categoriesDiv.innerHTML += `<p class="category">${totalCategories[i].title}</p>`
        totalCategories[i].subCategories.forEach(subCategory => {
            categoriesDiv.innerHTML += `<div><p class="subCategory">${subCategory.title}</p></div>`
        });
    }

}

wikiView()