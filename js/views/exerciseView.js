import * as categories from "../models/CategoryModel.js";
import * as User from "../models/UserModel.js";

let xpPerLevel = JSON.parse(localStorage.getItem("xpPerLevel"));

//Setup the categories
let selectedSubCategory = JSON.parse(sessionStorage.getItem("selectedSubCategory"));
let currentUser = User.getUserLogged()

exerciseView()
function exerciseView() {
    categories.init();
    User.init()

    updateData()
}

function updateData() {

    //Return to video

    let returnDiv = document.querySelector(".returnDiv")


    returnDiv.addEventListener("click", () => {
        location.href = "../../html/wiki.html"
    });

    let username = document.querySelector(".userName")
    username.innerHTML = currentUser.username

    let level = document.querySelector(".level")
    level.innerHTML = `Level: ${currentUser.level}`

    let xpForNextLevel = document.querySelector(".pointsUntilNextLevel")
    let xpNextLevel = xpPerLevel[currentUser.level] - currentUser.xp

    xpForNextLevel.innerHTML = `Points needed for next level: ${xpNextLevel}`


    let previousResult = document.querySelector(".previousResult")
    if (currentUser.exercisesDone.length > 0) {
        currentUser.exercisesDone.forEach(exercise => {
            if (exercise.title == selectedSubCategory.title) {
                //The exercise has been done before

            }
        });
    }


    //Submit button
    let submitButton = document.querySelector(".submit")


    //This will control which exercise we are in
    let countExercise = 0;

    let xp;

    document.querySelector(".submit")?.addEventListener("click", (event) => {
        event.preventDefault();
        let answer = document.querySelector("input[name='answer']:checked")

        countExercise++;
        console.log(answer);
        if (answer.value == selectedSubCategory.exercise[countExercise].correctAnswer) {
            console.log("Correct");
            console.log(countExercise);
            setUpQuestion(countExercise)
            if(!currentUser.exercisesDone.includes(selectedSubCategory.title))
            {
                xp = xp + selectedSubCategory.exercise[countExercise].xp
            }
        } else {
            setUpQuestion(countExercise)
        }
    });

    setUpQuestion(countExercise)
}

function setUpQuestion(countExercise) {
    
    if (selectedSubCategory.exercise[countExercise].type == "multipleChoice") {
        //Multiple Choice
        let pointsPerQuestionHtml = document.querySelector(".pointsPerQuestion")
        let questionHtml = document.querySelector(".question")

        //Question Divs
        let questionAnswersDiv1 = document.querySelector(".questionAnswersDiv1")
        let questionAnswersDiv2 = document.querySelector(".questionAnswersDiv2")
        questionAnswersDiv1.innerHTML = ""
        questionAnswersDiv2.innerHTML = ""

        //Question

        questionHtml.innerHTML = selectedSubCategory.exercise[countExercise].question

        //Setting up the answers

        let answers = selectedSubCategory.exercise[countExercise].answers

        let count = 0
        answers.forEach(answer => {
            if (count < 2) {
                questionAnswersDiv1.innerHTML += `
                <div style="display: inline-flex;align-items: center;">
                <input type="radio" class="inputRadio" name="answer" value="${answer}" required>
                <p class="answer">${answer}</p>
                </div>`

            } else {
                questionAnswersDiv2.innerHTML += `
                <div style="display: inline-flex;align-items: center;">
                <input type="radio" class="inputRadio" name="answer" value="${answer}">
                <p class="answer">${answer}</p>
                </div>`
            }
            count++;
        })

    } else {
        // CodeEditor
    }

}