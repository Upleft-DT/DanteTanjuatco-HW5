async function getForm() {
    const url = 'https://httpbin.org/get';

    let formElem = document.querySelector('form');
    let formData = new FormData(formElem);
    formData.append("date", timestamp());

    const data = new URLSearchParams(formData);
    const response = await fetch(url + '?' + data, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        } 
    })

    return response.json();
}

let getBtn = document.querySelector('#getButton');
getBtn.addEventListener('click', async () => {
    const response = await getForm();
    let output = document.querySelector("#response");
    output.innerText = JSON.stringify(response, null, 2);
});