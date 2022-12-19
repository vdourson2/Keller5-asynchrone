
function agify(e) {
    let firstname = document.getElementById('firstname').value;
    fetch("https://api.agify.io/?name=" + firstname)
        .then((response) => response.text())
        .then((text) => {
            let newDiv = document.createElement('div');
            newDiv.textContent = text;
            document.body.appendChild(newDiv);
        })
        .catch((error) => console.log("Error!"))
    document.getElementById('firstname').value = "";
}

let button = document.querySelector('button');
button.addEventListener('click', agify);
