function CountWords() {
let str = document.getElementById('input').value;

let count = str.match(/\p{L}+/ug).length;

document.getElementById('stringCount').innerHTML = count;
 }

function ReplacementWords() {
    let a = document.getElementById('firstWord').value;
    let b = document.getElementById('secondWord').value;
    let str = document.getElementById('inputReplacement').value;

    let con = str.replace(new RegExp("(?<!\\p{L})" + a + "(?!\\p{L})", "ug"), b);

    document.getElementById('stringReplacement').innerHTML = con;
}

function DeleteGaps() {
let str = document.getElementById('inputDelete').value;
let deletes = str.replace(/\s+/g, " ");
document.getElementById('stringDelete').innerHTML = deletes; 
}