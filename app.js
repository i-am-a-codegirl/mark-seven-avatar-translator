var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/navi.json"

function getTransalationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
console.log("error occured", error)
alert("something is wrong with server, try after sometime");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTransalationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

            
        })

        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)