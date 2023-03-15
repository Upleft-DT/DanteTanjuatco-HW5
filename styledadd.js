import {posts, generateList} from './styledblog.js'

//When the add button is clicked, open up a form modal
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function (event) {
    let addModal = document.querySelector('#add');
    addModal.showModal();
});

//When the form modal is closed
let addDialog = document.querySelector('#add');
addDialog.addEventListener('close', () => {
    //If the user selects confirm
    if(addDialog.returnValue == "true"){

        let postTitle = document.querySelector('#title').value;

        let postDate = document.querySelector('#date').value;

        let postSummary = document.querySelector('#summary').value;
        
        //Push a post object with the inputted title, date, and summary
        posts.push({title: postTitle, date: postDate, summary: postSummary});

        //Update local storage and generate the list again.
        localStorage.setItem("blog-list", JSON.stringify(posts));
        generateList();
    }
});