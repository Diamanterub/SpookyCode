import * as categories from "../models/CategoryModel.js";
import * as wikiView from "../views/wikiView.js";
import * as User from "../models/UserModel.js";

let selectedSubCategory;
let selectedCategory;

menuView()
function menuView() {
    categories.init();
    User.init()

    let totalCategories = categories.getCategories();

    let categoriesDiv = document.querySelector(".categoriesDiv")
    for (let i = 0; i < totalCategories.length; i++) {

        if (totalCategories[i].levelNeeded == 1) {
            categoriesDiv.children[0].innerHTML += `<p class="categoryNotSelected">${totalCategories[i].title}</p>`
            totalCategories[i].subCategories.forEach(subCategory => {
                categoriesDiv.children[0].innerHTML += `<div><p class="subCategoryNotSelected">${subCategory.title}</p></div>`
            });
        }
        else if (totalCategories[i].levelNeeded == 2) {
            categoriesDiv.children[1].innerHTML += `<p class="categoryNotSelected">${totalCategories[i].title}</p>`
            totalCategories[i].subCategories.forEach(subCategory => {
                categoriesDiv.children[1].innerHTML += `<div><p class="subCategoryNotSelected">${subCategory.title}</p></div>`
            });
        }
        else if (totalCategories[i].levelNeeded == 3) {
            categoriesDiv.children[2].innerHTML += `<p class="categoryNotSelected">${totalCategories[i].title}</p>`
            totalCategories[i].subCategories.forEach(subCategory => {
                categoriesDiv.children[2].innerHTML += `<div><p class="subCategoryNotSelected">${subCategory.title}</p></div>`
            });
        }
        else if (totalCategories[i].levelNeeded == 4) {
            categoriesDiv.children[3].innerHTML += `<p class="categoryNotSelected">${totalCategories[i].title}</p>`
            totalCategories[i].subCategories.forEach(subCategory => {
                categoriesDiv.children[3].innerHTML += `<div><p class="subCategoryNotSelected">${subCategory.title}</p></div>`
            });
        }
        else if (totalCategories[i].levelNeeded == 5) {
            categoriesDiv.children[4].innerHTML += `<p class="categoryNotSelected">${totalCategories[i].title}</p>`
            totalCategories[i].subCategories.forEach(subCategory => {
                categoriesDiv.children[4].innerHTML += `<div><p class="subCategoryNotSelected">${subCategory.title}</p></div>`
            });
        }

        selectedSubCategory = totalCategories[0].subCategories[0]
        selectedCategory = totalCategories[0]
        updateData()
        if (location.href.includes("wiki")) {
            wikiView.updateData()
        }
    }

    let searchInput = document.querySelector(".searchInput")
    searchInput.addEventListener("keyup", () => {
        if (searchInput.value == "") {
            categoriesDiv.innerHTML = 
            `
            <div class="level1">
                    <p class="levelNeeded">Level 1</p>

                </div>
                <div class="level2">
                    <p class="levelNeeded">Level 2</p>

                </div>
                <div class="level3">
                    <p class="levelNeeded">Level 3</p>

                </div>
                <div class="level4">
                    <p class="levelNeeded">Level 4</p>

                </div>
                <div class="level5">
                    <p class="levelNeeded">Level 5</p>

                </div>
                `
            menuView()
        }
        else {
            for (let i = 0; i < categoriesDiv.children.length; i++) {
                categoriesDiv.children[i].innerHTML = ""
            }
            for (let i = 0; i < totalCategories.length; i++) {

                totalCategories[i].subCategories.forEach(subCategory => {
                    if (subCategory.tags.includes(searchInput.value)) {
                        categoriesDiv.innerHTML += `<div><p class="subCategoryNotSelected">${subCategory.title}</p></div>`
                    }
                    else{
                    }
                });
                
            }
        }
    })


    let totalCategoriesHtml = document.querySelectorAll(".categoryNotSelected")


    //Default
    totalCategoriesHtml[0].classList.replace("categoryNotSelected", "categorySelected")

    //Setup changing SubCategory and Category

    let totalSubCategories = document.querySelectorAll(".subCategoryNotSelected")

    totalSubCategories.forEach(subCategory => {
        //This will select the first SubCategory of the 
        if (selectedSubCategory.title == subCategory.innerHTML) {
            subCategory.classList.replace("subCategoryNotSelected", "subCategorySelected")
        }
        subCategory?.addEventListener("click", () => {
            selectedCategory = categories.checkWhereSubCategoryIs(subCategory.innerHTML)
            if (selectedCategory.levelNeeded <= User.getUserLogged().level) {
                //Cleaning prev selected subCategories
                totalSubCategories.forEach(subCategorySelected => {

                    subCategorySelected.classList.replace("subCategorySelected", "subCategoryNotSelected")
                });
                totalCategoriesHtml.forEach(categorySelected => {

                    categorySelected.classList.replace("categorySelected", "categoryNotSelected")
                });
                //Find the subCategory object with the same title
                selectedSubCategory = categories.getSubCategoryByName(subCategory.innerHTML)
                updateData()
                if (location.href.includes("wiki")) {
                    wikiView.updateData()
                }
                subCategory.classList.replace("subCategoryNotSelected", "subCategorySelected")
                totalCategoriesHtml.forEach(category => {
                    if (category.innerHTML == selectedCategory.title) {
                        category.classList.replace("categoryNotSelected", "categorySelected")
                    }
                });
            }
            else {
                // Get the modal
                let modal = document.getElementById("myModalLevel");

                // Get the <span> element that closes the modal
                let span = document.getElementsByClassName("closeLevel")[0];

                let results = document.querySelector(".levelNeededModal")

                results.innerHTML = `You need level ${selectedCategory.levelNeeded} to access this category`

                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                }

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        });
    });
    updateData()
    if (location.href.includes("wiki")) {
        wikiView.updateData()
    }

}

function updateData() {
    sessionStorage.setItem("selectedSubCategory", JSON.stringify(selectedSubCategory));
    sessionStorage.setItem("selectedCategory", JSON.stringify(selectedCategory));
}