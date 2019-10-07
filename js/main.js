

function writeComment() {
    let commentValue = document.getElementsByClassName("enterComment")[0].value;
    let myUserId = document.getElementsByClassName("myUserId")[0].textContent;

    let commentList = document.getElementsByClassName("commentList")[0];

    let commentListLi = document.createElement("li");

    let userIdSpan = document.createElement("span");

    let commentSpan = document.createElement("span");


    userIdSpan.className = "userId";
    commentSpan.className = "comment"

    userIdSpan.textContent = myUserId;
    commentSpan.textContent = commentValue;

    commentList.appendChild(commentListLi);
    commentListLi.appendChild(userIdSpan);
    commentListLi.appendChild(commentSpan);
}

function setUpEventListeners () {
  
    let commentArea = document.getElementsByClassName("enterComment")[0];
    let postButton = document.getElementsByClassName("post")[0];
    let searchBar = document.getElementsByClassName("searchBar")[0];
 
 
    commentArea.addEventListener("keydown", function(event) {
            if (event.key === "Enter" && event.shiftKey === true) {
            } else if (event.key === "Enter") {
            event.preventDefault() 
            writeComment();
            commentArea.value = "";
                
        }
    });
 
    postButton.addEventListener("click", function(event) {
        if (event.target.className === "post") {
            writeComment();
            commentArea.value = "";
        }
    });

    searchBar.addEventListener("keyup", function(event) {
    console.log(event.target.value)
    let myFollowersList = document.getElementsByClassName("allMyFollowers")[0];
    let followers = document.getElementsByClassName("followers");
        if (event.target.value.length > 0) {
            myFollowersList.innerHTML = "";
            sortUsers(event.target.value);
            myFollowersList.style.display = "block";
        } 
        if (event.target.value.length === 0) {
            myFollowersList.style.display = "none";
        } 
    
    })

 }

 setUpEventListeners();


 let userNameData = ["food_23", "foodInKorea_22", "foodLovers", "foodie_4_life", "weFood", "helloWorld",
 "tasty", "tasteAroundWorlds", "hmhm222", "buzzlightyear"];

function sortUsers(searchTerm) {
let searchTermLower = searchTerm.toLowerCase();
let searchIncluded = [];
let searchNotIncluded = [];
    for (let i = 0; i < userNameData.length; i++) {
        if (userNameData[i].toLowerCase().startsWith(searchTermLower)) {

            searchIncluded.unshift("<span class='color'>" + userNameData[i].slice(0, searchTermLower.length) + "</span>" + userNameData[i].slice(searchTermLower.length));
        } else {
            searchNotIncluded.push(userNameData[i]);
        }
    }

    let searchSorted = searchIncluded.sort();

    let searchList = searchSorted.concat(searchNotIncluded);

    let allMyFollowers = document.getElementsByClassName("allMyFollowers")[0];

    for (let i = 0; i < searchList.length; i++) {
        let followersLi = document.createElement('li');
        
        followersLi.className = "followers";
        
        followersLi.innerHTML = searchList[i];
        
        allMyFollowers.appendChild(followersLi)

    }

}

