const bookmarkImgURL=chrome.runtime.getURL("assets/bookmark.png");

window.addEventListener("load",addBookMarkButton);

function addBookMarkButton(){
    const bookmarkButton = document.createElement('img');
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src =  bookmarkImgURL;
    bookmarkButton.style.height="30px";
    bookmarkButton.style.weidth="30px";
   const addTitle = document.getElementsByClassName("coding_problem_info_heading__G9ueL")[0];
   addTitle.parentNode.insertAdjacentElement("afterend", bookmarkButton);

}