import * as categoriesHandler from "../models/CategoryModel.js"
var categories
var tags = [],
    timeStamps = [],
    exercise = []

function loadCategories() {

    categoriesHandler.init()
    categories = categoriesHandler.getCategories();

    let categoriesDropdown = document.getElementById("category")
    for (let category of categories) {
        let option = document.createElement("option")
        option.innerHTML = category.title

        categoriesDropdown.appendChild(option)
    }

}

function saveTimeStamp(timestamp) {
    timeStamps.push(timestamp)
    alert("Timestamp added!")

    document.getElementById("timestamp").value = ""
}

function saveTag(tag) {
    tags.push(tag)
    alert("Tag added!")

    document.getElementById("tag").value = ""
}

function saveQuestion() {

    var answers = Array.from(document.querySelectorAll(".tboption"))
    document.getElementById("escolha1cb").value = document.getElementById("escolha1tb").value
    document.getElementById("escolha2cb").value = document.getElementById("escolha2tb").value
    document.getElementById("escolha3cb").value = document.getElementById("escolha3tb").value
    document.getElementById("escolha4cb").value = document.getElementById("escolha4tb").value


    exercise.push({
        type: "multipleChoice",
        xpPerQuestionCorrect: 10,
        question: document.getElementById("question").value,
        answers: answers.map((e) => { return e.value }),
        correctAnswer: document.querySelector('input[name="answer"]:checked').value
    })

    alert("Question added!")

}


function saveContent() {

    const date = new Date()

    const subcategory = {
        title: document.getElementById("title").value,
        url: document.getElementById("videourl").value,
        videoTags: timeStamps,
        tags: tags,
        comments: [],
        likes: 0,
        views: 0,
        dateAdded: date.toISOString(),
        exercise: exercise,
    }


    const index = categories.map(function(e) { return e.title; }).indexOf(document.getElementById("category").value);
    categories[index].subCategories.push(subcategory)

    localStorage.setItem("categories", JSON.stringify(categories))

    tags = []
    timeStamps = []
    exercise = []

    alert("Subcategory saved!")
}


loadCategories()

window.saveTag = saveTag
window.saveTimeStamp = saveTimeStamp
window.saveQuestion = saveQuestion
window.saveContent = saveContent