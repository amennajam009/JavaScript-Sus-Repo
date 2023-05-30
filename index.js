const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const outputElement = document.getElementById('output');
const inputField2 = document.getElementById('inputField2');
const submitButton2 = document.getElementById('submitButton2');


const reverseString = (inputValue) => {
    return inputValue.split('').reverse().join('');
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button click behavior

    const inputValue = inputField.value;
    const reversedValue = reverseString(inputValue);

    outputElement.textContent = reversedValue;
     inputField.value =''

});

 function remove(){
    this.outputElement.remove();
}