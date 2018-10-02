let myButton = document.querySelector("#myButton");


function klikk() {
    myButton.addEventListener("click", e => {
        console.log("Fikk klikk-event");
        let url = "/login";
        let user = document.querySelector('#user').value;
        let pass = document.querySelector('#pass').value;

        var jsonValue = {brukernavn: "hei", passord: "secret"};

        //window.localStorage.setItem('userKey', user);
        //window.localStorage.setItem('passKey', pass);
        console.log(jsonValue);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(jsonValue)
        })
            .then(response => response.json())
            .then(json => {
                console.log(JSON.stringify(json.jwt));
                localStorage.setItem('key1', json.jwt)
            })
            .catch(error => console.error("Error: ", error));
    });
}

function cont() {
    console.log(localStorage.getItem('key1'));
    let url2 = "api/person/1";
    fetch(url2, {
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem('key1').toString()
        }
    })
        .then(response => response.json())
        .then(json => { //console.log(JSON.stringify(json));
            refresh()
        })
        .catch(error => console.error("Error: ", error));
}

function refresh() {
    let url3 = "/api/token";
    fetch(url3, {
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem('key1').toString()
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(JSON.stringify(json.jwt));
            localStorage.setItem('key1', json.jwt)
        })
        .catch(error => console.error("Error: ", error));
}


