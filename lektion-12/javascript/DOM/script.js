// document.getElementById('fullName').value = "Hans Mattin-Lassei"
// document.getElementsByName('fullName')[0].value = "Tommy Mattin-Lassei"
// document.getElementsByTagName('input')[0].value = "Anki Mattin-Lassei"
// document.getElementsByClassName('form-control')[0].value = "Joakim Wahlström"

// let fullName = document.getElementById('fullName').value
// document.getElementById('result').innerText = fullName

function outputValue(event) {
    document.getElementById('result').innerText = event.target.value
}