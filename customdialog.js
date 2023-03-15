let alertBtn = document.querySelector('#alertBtn');
alertBtn.addEventListener('click', function (event) {
    let output = document.querySelector("output");
    output.innerText = '';

    setTimeout(() => {
        let alertModal = document.querySelector("#alert");
        alertModal.showModal();
    }, 0);
});

let okBtn = document.querySelector('#okBtn');
okBtn.addEventListener('click', function (event) {
    let alertModal = document.querySelector("#alert");
    alertModal.close();
});

let confirmBtn = document.querySelector('#confirmBtn');
confirmBtn.addEventListener('click', function (event) {
    let output = document.querySelector("output");
    output.innerText = '';

    setTimeout(() => {
        let alertModal = document.querySelector("#confirm");
        alertModal.showModal();
    }, 0);
});

let confirmDialog = document.querySelector('#confirm');
confirmDialog.addEventListener('close', () => {
    let output = document.querySelector("output");
    console.log(typeof confirmDialog.returnValue);
    output.innerText = `Confirm Result: ${confirmDialog.returnValue}`
});

let promptBtn = document.querySelector('#promptBtn');
promptBtn.addEventListener('click', function (event) {
    let output = document.querySelector("output");
    output.innerText = '';

    setTimeout(() => {
        let alertModal = document.querySelector("#prompt");
        alertModal.showModal();
    }, 0);
});

function sanitize(strings, output) {
    return DOMPurify.sanitize(output); 
};

let promptDialog = document.querySelector('#prompt');
promptDialog.addEventListener('close', () => {
    let output = document.querySelector("output");
    output.innerText = '';

    if(promptDialog.returnValue != "null"){
        output.innerHTML = "Prompt Result: " + sanitize`${promptDialog.returnValue}`;
    }
    else {
        output.innerHTML = "user canceled!"
    }
});

let inputName = document.querySelector('#name');
inputName.addEventListener('change', () => {
    submitPrompt.value = inputName.value;
  });