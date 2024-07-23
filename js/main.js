var siteNameInput = document.getElementById("Site-Name")
var siteUrlInput = document.getElementById("Site-URL")
var siteList = []
if (localStorage.getItem("sites")) {
    siteList = JSON.parse(localStorage.getItem("sites"))
    displaySite()
}

function addSite() {

    if (validateName() && validateUrl()) {
        var site = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value
        }
        siteList.push(site)
        localStorage.setItem("sites", JSON.stringify(siteList))
        displaySite()

    } else {
        window.alert(` enter a valid site name
 or a valid URl`  )
    }
}

function displaySite() {

    var temp = ""
    for (var i = 0; i < siteList.length; i++) {
        temp += `<tr>
        <td>`+ Number(i + 1) + `</td>
        <td>`+ siteList[i].siteName + `</td>
        <td><a target="_blank" href="`+ siteList[i].siteUrl + `" class="btn btn-warning px-3"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
        <td><button onclick="deleteSite(`+ i + `)" class="btn btn-danger px-3"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = temp
}

function deleteSite(rNum) {
    siteList.splice(rNum, 1)
    localStorage.setItem("sites", JSON.stringify(siteList))
    displaySite()
}


function validateName() {
    var RegExp = /^[a-zA-Z]{3,}$/;
    if (RegExp.test(siteNameInput.value)) {
        siteNameInput.classList.add("is-valid");
        siteNameInput.classList.remove("is-invalid");
        return true;
    } else {
        siteNameInput.classList.remove("is-valid");
        siteNameInput.classList.add("is-invalid");
        return false;
    }


}

function validateUrl() {
    var RegExp = /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|localhost)(:[0-9]{1,5})?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;
    if (RegExp.test(siteUrlInput.value)) {
        siteUrlInput.classList.add("is-valid");
        siteUrlInput.classList.remove("is-invalid");
        return true;
    } else {
        siteUrlInput.classList.remove("is-valid");
        siteUrlInput.classList.add("is-invalid");
        return false;
    }

}

