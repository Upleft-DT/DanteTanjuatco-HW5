async function delForm() {
    const url = 'https://httpbin.org/delete';

    let formElem = document.querySelector('form');
    let formData = new FormData(formElem);
    formData.append("date", timestamp());

    const data = new URLSearchParams(formData);
    const response = await fetch(url + '?' + data, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        } 
    })
    return response.json();
}

let delBtn = document.querySelector('#delButton');
delBtn.addEventListener('click', async () => {
    const response = await delForm();
    let output = document.querySelector("#response");
    output.innerText = JSON.stringify(response, null, 2);
});