import * as categories from "../models/CategoryModel.js";
import * as User from "../models/UserModel.js";

let xpPerLevel = JSON.parse(localStorage.getItem("xpPerLevel"));

//Setup the categories
let selectedSubCategory = JSON.parse(sessionStorage.getItem("selectedSubCategory"));
let currentUser = User.getUserLogged()

//This will control which exercise we are in
let countExercise = 0;
let xp = 0;

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

    let exerciseXpTotal = 0;

    selectedSubCategory.exercise.forEach(exercise => {
        exerciseXpTotal += exercise.xpPerQuestionCorrect
    });

    if (currentUser.exercisesDone.length > 0) {
        currentUser.exercisesDone.forEach(exercise => {
            if (exercise == selectedSubCategory.title) {
                //The exercise has been done before
                previousResult.innerHTML = `You have done this exercise before`
            }
        });
        if(previousResult.innerHTML == ""){
            previousResult.innerHTML = `Points in this exercise: ${exerciseXpTotal}`
        }
    }



    document.querySelector(".submit")?.addEventListener("click", (event) => {
        event.preventDefault();
        let answer = document.querySelector("input[name='answer']:checked")
        if (answer.value == selectedSubCategory.exercise[countExercise].correctAnswer) {
            if (!currentUser.exercisesDone.includes(selectedSubCategory.title)) {
                xp = xp + selectedSubCategory.exercise[countExercise].xpPerQuestionCorrect
            }
            countExercise++;
            setUpQuestion(countExercise)
        } else {
            countExercise++;
            setUpQuestion(countExercise)
        }
    });

    setUpQuestion(countExercise)
}

function setUpQuestion(countExercise) {

    let progress = document.querySelectorAll(".progress")
    progress.forEach(progress => {
        progress.innerHTML = `${countExercise+1}/${selectedSubCategory.exercise.length}`
    })


    if ((countExercise+1 <= selectedSubCategory.exercise.length && selectedSubCategory.exercise[countExercise].type == "multipleChoice")) {

        //Clean everything apart from header
        let multipleQuestionForm = document.querySelector(".multipleQuestionForm")
        let codeEditor = document.querySelector(".codeEditor")

        if (codeEditor.classList.contains("visible")) {
            codeEditor.classList.toggle("visible")
        }
        if (!multipleQuestionForm.classList.contains("visible")) {
            multipleQuestionForm.classList.toggle("visible")
        }

        //Multiple Choice
        let pointsPerQuestionHtml = document.querySelector(".pointsPerQuestion")
        pointsPerQuestionHtml.innerHTML = `This exercise awards ${selectedSubCategory.exercise[countExercise].xpPerQuestionCorrect} xp points if correct`

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

    } else if (countExercise+1 <= selectedSubCategory.exercise.length) {

        // CodeEditor
        //Clean everything apart from header
        let multipleQuestionForm = document.querySelector(".multipleQuestionForm")
        if (multipleQuestionForm.classList.contains("visible")) {
            multipleQuestionForm.classList.toggle("visible")
        }

        let codeEditor = document.querySelector(".codeEditor")
        if (!codeEditor.classList.contains("visible")) {
            codeEditor.classList.toggle("visible")
        }

        //Question
        let questionHtml = document.querySelector(".question")
        questionHtml.innerHTML = selectedSubCategory.exercise[countExercise].question

        //Multiple Choice
        let pointsPerQuestionHtml = document.querySelector(".pointsPerQuestion")
        pointsPerQuestionHtml.innerHTML = `This exercise awards ${selectedSubCategory.exercise[countExercise].xpPerQuestionCorrect}xp points if correct`

        let htmlEditor = document.querySelector(".htmlCodeInner")
        let cssEditor = document.querySelector(".cssCodeInner")
        let jsEditor = document.querySelector(".jsCodeInner")

        let codeInner = document.querySelectorAll("#codeInner")

 

        //Disabling and filling in case the exercise orders to
        if (selectedSubCategory.exercise[countExercise].settings[0].locked) {
            htmlEditor.disabled = true
            if (selectedSubCategory.exercise[countExercise].settings[0].content != "") {
                htmlEditor.innerHTML = selectedSubCategory.exercise[countExercise].settings[0].content
            }
        }
        if (selectedSubCategory.exercise[countExercise].settings[1].locked) {
            cssEditor.disabled = true
            if (selectedSubCategory.exercise[countExercise].settings[1].content != "") {
                htmlEditor.innerHTML = selectedSubCategory.exercise[countExercise].settings[1].content
            }
        }

        let previewWindow = document.getElementsByTagName("iframe")[0].contentWindow.document
        codeInner.forEach(code => {
            code.addEventListener("change", () => {
                let htmlCode = htmlEditor.value
                let cssCode = "<style>" + cssEditor.value + "</style>"
                let jsCode = "<script>" + jsEditor.value + "</script>"
                previewWindow.open()
                previewWindow.write(htmlCode + cssCode + jsCode)
                previewWindow.close()
            })
        })

        //Detect the correct answer

        document.querySelector(".submitCodeEditor")?.addEventListener("click", (event) => {
            event.preventDefault();
            if(previewWindow.documentElement.innerHTML.includes(selectedSubCategory.exercise[countExercise].correctAnswer)){
                if (!currentUser.exercisesDone.includes(selectedSubCategory.title)) {
                    xp = xp + selectedSubCategory.exercise[countExercise].xpPerQuestionCorrect
                }
                countExercise++;
                setUpQuestion(countExercise)

            } else {
                countExercise++;
                setUpQuestion(countExercise)
            }
        });

    }
    else{
        if(!currentUser.exercisesDone.includes(selectedSubCategory.title)){
            User.setExercisesDone(selectedSubCategory.title,xp)
        }
         location.href = "./wiki.html" 
    }

}