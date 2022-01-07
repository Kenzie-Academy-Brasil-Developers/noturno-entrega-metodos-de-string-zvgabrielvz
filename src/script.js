let upperCase = document.getElementById("toUpperCase");
let lowerCase = document.getElementById("toLowerCase");
let replace = document.getElementById("replace");
let concat = document.getElementById("concat");
let split = document.getElementById("split");
let contents = document.getElementById("textContentid");

upperCase.addEventListener("click", uppCase)
lowerCase.addEventListener("click", lowCase)
replace.addEventListener("click", replacel)
concat.addEventListener("click", conca)
split.addEventListener("click", splitall)

function uppCase() {
    let text = document.getElementById("stringInput");
    let textup = text.value.toUpperCase();
    contents.innerHTML = textup;
}
function lowCase() {
    let text = document.getElementById("stringInput");
    let textup = text.value.toLowerCase();
    contents.innerHTML = textup;
}
function replacel() {
    let text = document.getElementById("stringInput");
    let textt = text.value;
    let textup = textt.replaceAll(" ", "-");
    contents.innerHTML = textup;
    
    
}
function conca() {
    let text = document.getElementById("stringInput");
    let wordconcat = " Silva"
    let textt = text.value;
    let textup = textt.concat(wordconcat)
    contents.innerHTML = textup;
}
function splitall() {
    let text = document.getElementById("stringInput");
    let textvalue = text.value;
    let textsplit = textvalue.split("");
    let textup = textsplit.toString();
    contents.innerHTML = textup;
}


