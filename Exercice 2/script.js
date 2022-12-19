function iso3166 (country){
    switch (country){
        case "belgium":
            return "BE";
            break;
        case "france" :
            return "FR";
            break;
        case "spain" :
            return "ES";
            break;
        default :
            console.log ("Sorry, this country isn't suported");
    }
}

function agify(e) {
    let firstname = document.getElementById('firstname').value;
    let country = iso3166(document.getElementById('country').value)
    fetch("https://api.agify.io/?name=" + firstname + "&country_id=" + country)
        .then((response) => response.text())
        .then((text) => {
            let newDiv = document.createElement('div');
            newDiv.textContent = text;
            document.body.appendChild(newDiv);
        })
        .catch((error) => console.log("Error!"))
    document.getElementById('formulaire').reset();
}

let button = document.querySelector('button');
button.addEventListener('click', agify);
