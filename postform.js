async function postForm() {
    const url = 'https://httpbin.org/post';
    
    let formElem = document.querySelector('form');
    let formData = new FormData(formElem);
    formData.append("date", timestamp());

    const data = new URLSearchParams(formData);
    const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        } 
    });
    return response.json();
}

let postBtn = document.querySelector('#postButton');
postBtn.addEventListener('click', async () => {
    const response = await postForm();
    let output = document.querySelector("#response");
    output.innerText = JSON.stringify(response, null, 2);
});