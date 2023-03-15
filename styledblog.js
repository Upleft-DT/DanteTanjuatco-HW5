export let list = document.querySelector('#list');
export let posts = JSON.parse(localStorage.getItem("blog-list")) || [];

//Function that generates the list of blog posts and puts them in the HTML
export function generateList () {
    list.innerHTML = '';
    let inner = '';

    //Each postItem will have these keys: title, date, summary
    posts.forEach(postItem => {
        //Create each li element by filling in the title, date, summary, and the edit/delete buttons
        inner +=
        `<li index='${posts.indexOf(postItem)}'>
            <h3>${postItem.title}</h3>
            <p>${postItem.date}</p>
            <p>${postItem.summary}</p>
            <button class='edit'><i class='pencil'></i></button>
            <button class='delete'><i class='trash'></i></button>
        </li>`;
    })
    //Place html of li items into the list
    list.innerHTML = inner;

    //Place an event listener on each delete button that opens up a confirmation modal and stores the index on window
    let delList = document.querySelectorAll('.delete');
    delList.forEach(deleteBtn => deleteBtn.addEventListener('click', () => {
        window.postIndex = deleteBtn.parentElement.getAttribute("index");
        document.querySelector("#delete").showModal();
    }));

    //Place an event listener on each edit button that opens up a form modal and populates it with the post values
    //Also store the index on the window
    let editList = document.querySelectorAll('.edit');
    editList.forEach(editBtn => editBtn.addEventListener('click', () => {
        window.postIndex = editBtn.parentElement.getAttribute("index");

        let postElements = editBtn.parentElement.children;
        
        document.querySelector('#editTitle').value = postElements[0].innerText;
        document.querySelector('#editDate').value = postElements[1].innerText;
        document.querySelector('#editSummary').value = postElements[2].innerText;

        document.querySelector('#edit').showModal();
    }));
}


//Generate the list when the page loads.
(function () {
    generateList();
  })();


