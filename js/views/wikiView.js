import * as categories from "../models/CategoryModel.js";
import * as User from "../models/UserModel.js";


wikiView()

function wikiView() {
    categories.init();
    User.init()
    updateData()
}

export function updateData() {

    //Setup the categories
    let selectedSubCategory = JSON.parse(sessionStorage.getItem("selectedSubCategory"));
    let currentUser = User.getUserLogged()

    let title = document.querySelector(".subCategoryTitle")

    title.innerHTML = selectedSubCategory.title
    //Video Related Stuff

    let video = document.querySelector("#myVideo")
    let source = document.querySelector(".videoSource")

    //Setup the Video Url

    source.src = selectedSubCategory.url
    video.load();


    //Setup the Video Data

    //Views

    let viewsVideo = document.querySelector(".viewsVideo")
    viewsVideo.innerHTML = `${selectedSubCategory.views} views`

    //Date Added

    let dateAdded = document.querySelector(".dateVideoAdded")
    dateAdded.innerHTML = `${selectedSubCategory.dateAdded}`

    //Likes

    let likeIcon = document.querySelector("#likeBtn")

    //Keep the like on reload

    if (currentUser.likes.includes(selectedSubCategory.title)) {
        likeIcon.classList.replace("fa-regular", "fa-solid")
    } else {
        likeIcon.classList.replace("fa-solid", "fa-regular")
    }

    likeIcon?.addEventListener("click", () => {
        if (likeIcon.classList.contains("fa-regular")) {
            selectedSubCategory.likes++;
            likeIcon.classList.replace("fa-regular", "fa-solid")
            categories.updateCategories(selectedSubCategory)
            User.setLikes(selectedSubCategory.title, "add")
        } else {
            selectedSubCategory.likes--;
            likeIcon.classList.replace("fa-solid", "fa-regular")
            categories.updateCategories(selectedSubCategory)
            User.setLikes(selectedSubCategory.title, "remove")
        }
        likes.innerHTML = `${selectedSubCategory.likes}`
    });


    let likes = document.querySelector(".likes")
    likes.innerHTML = `${selectedSubCategory.likes}`

    //Setup the Tags

    let divTags = document.querySelector(".tags")

    divTags.innerHTML = ""

    selectedSubCategory.tags.forEach(tag => {
        divTags.innerHTML += `<div class = "tagContainer"><p class="tag">${tag}</p></div>`
    });

    let tags = document.querySelectorAll(".tag")

    tags.forEach(tag => {
        tag?.addEventListener("click", () => {
            let tagInnerhtml = tag.innerHTML
            tagInnerhtml = tagInnerhtml.split("-")[0]
            tagInnerhtml = tagInnerhtml.split(":")
            let minutes = parseInt(tagInnerhtml[0])
            let seconds = parseInt(tagInnerhtml[1])
            let time = minutes * 60 + seconds
            if (time > 0) {
                video.currentTime = time
                video.play()
            }
        });
    });

    //Setup the Comments

    let totalComments = document.querySelector(".totalComments")
    totalComments.innerHTML = `${selectedSubCategory.comments.length} Comments`

    let tagComment = document.querySelector("#tagComment")
    tagComment.innerHTML = "<option value='default'>None</option>"

    selectedSubCategory.videoTags.forEach(videoTag => {
        // videoTag = videoTag.split("-")[1]
        tagComment.innerHTML += `<option value = "${videoTag}">${videoTag}</option>`

    });
    
    // Comments Mechanism
    document.querySelector(".postComment")?.addEventListener("click", (event) => {
        event.preventDefault();
        let videoTag = document.querySelector("#tagComment")
        let textArea = document.querySelector("#commentTextArea")
        try {
            let comment = textArea.value
            if (comment.length > 0) {
                let date = Date.now()
                let today = new Date(date);
                categories.commentOnSubCategory(selectedSubCategory, videoTag.value, comment, currentUser.username, today.toLocaleDateString())
                updateData()
            }
        } catch (e) {
            console.log(e);
        }
    });

    //Setup the Comment List

    let comments = document.querySelector(".comments")
    comments.innerHTML = ""
    selectedSubCategory.comments.forEach(comment => {
        comments.innerHTML += `<div class="commentContainer">
            <div style="display:inline-flex;align-items: center;">
            <p class="commentAuthor">${comment.user}</p>        
            <p class="comment" style="margin-left:10px;">${comment.date}</p>
            </div>
            <div>
            <p class="comment" style="margin-top:5px;font-size:12px">Video Tags</p>
            <p class="videoTag" style="margin:0;margin-top:5px;margin-bottom:10px">${comment.videoTag = comment.videoTag != "default" ? comment.videoTag : ""}</p>
            <div>
            <p class="comment">${comment.comment}</p>
            </div>`

    });

    //Setup the Video Tags

    let divVideoTags = document.querySelector(".videoTags")

    divVideoTags.innerHTML = ""
    selectedSubCategory.videoTags.forEach(tag => {
        divVideoTags.innerHTML += `<p class="videoTag">${tag}</p>`
    });

    let videoTags = document.querySelectorAll(".videoTag")

    videoTags.forEach(tag => {
        tag?.addEventListener("click", () => {
            let tagInnerhtml = tag.innerHTML
            tagInnerhtml = tagInnerhtml.split("-")[0]
            tagInnerhtml = tagInnerhtml.split(":")
            let minutes = parseInt(tagInnerhtml[0])
            let seconds = parseInt(tagInnerhtml[1])
            let time = minutes * 60 + seconds
            if (time > 0) {
                video.currentTime = time
                video.play()
            }
        });
    });


    //Share Video 

    let test = document.querySelector(".test")

    let currentLocation = window.location.href
    currentLocation = currentLocation.replace("/html", "")
    currentLocation = currentLocation.replace("/wiki.html", "")
    let desiredUrl = selectedSubCategory.url
    desiredUrl = desiredUrl.replace("..", "")
    let data = {
        url: currentLocation + desiredUrl,
    }
    test?.addEventListener("click", () => {
        navigator.share(data)
    });

}