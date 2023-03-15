import {posts, generateList} from './blog.js';

//When the edit modal is closed
let editDialog = document.querySelector('#edit');
editDialog.addEventListener('close', () => {
    if(editDialog.returnValue == "true"){

        //Get the post speficied by the index on window
        let post = posts[window.postIndex];

        //Update those post values
        post.title = document.querySelector('#editTitle').value;
        post.date = document.querySelector('#editDate').value;
        post.summary = document.querySelector('#editSummary').value;

        //Update local storage and generate the list again
        localStorage.setItem("blog-list", JSON.stringify(posts));
        generateList();
    }
});