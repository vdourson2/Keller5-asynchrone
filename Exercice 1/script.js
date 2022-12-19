function fetchJson(e) {
    fetch('file.json')
        .then((response) => response.json())
        .then((jsonData) => {
            let ul = document.createElement('ul');
            document.body.appendChild(ul);
            for (let i of jsonData.savant) {
                let li = document.createElement('li');
                li.textContent = i;
                ul.appendChild(li)
            }
        })
        .catch((error) => { console.log("Error???") })
}

let button = document.querySelector("button");
button.addEventListener('click', fetchJson);