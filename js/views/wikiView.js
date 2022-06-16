import * as categories from "../models/CategoryModel.js";


wikiView()

function wikiView() {
    categories.init();

    let categoriesDiv = document.querySelector(".categoriesDiv")

    //Setup the categories

    let totalCategories = categories.getCategories();
    let selectedSubCategory;
    let selectedCategory;

    for (let i = 0; i < totalCategories.length; i++) {
        categoriesDiv.innerHTML += `<p class="levelNeeded">Level ${totalCategories[i].levelNeeded}</p>`
        categoriesDiv.innerHTML += `<p class="categoryNotSelected">${totalCategories[i].title}</p>`
        totalCategories[i].subCategories.forEach(subCategory => {
            categoriesDiv.innerHTML += `<div><p class="subCategoryNotSelected">${subCategory.title}</p></div>`
        });
        selectedSubCategory = totalCategories[0].subCategories[0]
        selectedCategory = totalCategories[0]
    }


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
            //Cleaning prev selected subCategories
            totalSubCategories.forEach(subCategorySelected => {

                subCategorySelected.classList.replace("subCategorySelected", "subCategoryNotSelected")
            });
            totalCategoriesHtml.forEach(categorySelected => {

                categorySelected.classList.replace("categorySelected", "categoryNotSelected")
            });

            //Find the subCategory object with the same title
            selectedSubCategory = categories.getSubCategoryByName(subCategory.innerHTML)
            selectedCategory = categories.checkWhereSubCategoryIs(subCategory.innerHTML)
            subCategory.classList.replace("subCategoryNotSelected", "subCategorySelected")
            totalCategoriesHtml.forEach(category => {
                if (category.innerHTML == selectedCategory.title) {
                    category.classList.replace("categoryNotSelected", "categorySelected")
                }
            });
        });
    });


    //Video Related Stuff

    let video = document.querySelector("#myVideo")
    let source = document.querySelector(".videoSource")

    //URL

    source.src =  selectedSubCategory.url
    video.load();
    


    //Setup the Video Url

    //Setup the Video Data

    //Setup the Tags

    //Setup the Comments




    // btnTest.addEventListener("click", () => {
    //     // console.log(video.currentTime());
    //     video.currentTime = 100 
    // });


}