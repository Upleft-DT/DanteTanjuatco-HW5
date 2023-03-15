import {posts, generateList} from './styledblog.js';

//When the delete confirmtion modal is closed
let deleteDialog = document.querySelector('#delete');
deleteDialog.addEventListener('close', () => {
    //If the user selected true then remove that post from the list specified by the index stored on window
    if(deleteDialog.returnValue == "true"){
        posts.splice(window.postIndex, 1);
    }

    //Update local storage and generate the list again.
    localStorage.setItem("blog-list", JSON.stringify(posts));
    generateList();
});