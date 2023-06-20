/**
 * Fist
 */
function showKeyPressedKey() {
    var key = event.key;
    document.getElementById("output").innerHTML = key;
}

function showAllTextInput() {
    var text = document.getElementById("input1").value;
    document.getElementById("output1").innerHTML = text;
}