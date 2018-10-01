let url = "http://bigdata.stud.iie.ntnu.no/sentiment/webresources/sentiment?api-key=Happy!!!";

function mood() {
    let text = document.querySelector('#input').value;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({sentence: text})
    }).then(response => response.json())
        .then(json => {
            console.log(json);
            handleResponse(json);
        })
        .catch(error => console.error("Error: ", error));
}

function handleResponse(json) {

    let pic = "";
    let color = "";
    if (json.value === 0) {
        color = "black";
    }
    if (json.value === 1) {
        color = "blue";
    }
    if (json.value === 2) {
        color = "red";
    }
    if (json.value === 3) {
        color = "orange";
    }
    if (json.value === 4) {
        color = "yellow";
    }
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector()
}