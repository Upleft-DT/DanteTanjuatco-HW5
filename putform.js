async function putForm() {
    const url = 'https://httpbin.org/put';

    let formElem = document.querySelector('form');
    let formData = new FormData(formElem);
    formData.append("date", timestamp());

    const data = new URLSearchParams(formData);
    const response = await fetch(url, {
        method: 'PUT',
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        } 
    });
    return response.json();
}

let putBtn = document.querySelector('#putButton');
putBtn.addEventListener('click', async () => {
    const response = await putForm();
    let output = document.querySelector("#response");
    output.innerText = JSON.stringify(response, null, 2);
});