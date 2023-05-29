const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const outputElement = document.getElementById('output');

const reverseString = (inputValue) => {
    return inputValue.split('').reverse().join('');
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button click behavior

    const inputValue = inputField.value;
    const reversedValue = reverseString(inputValue);

    outputElement.textContent = reversedValue;
     inputField.value =''

    // You can perform any additional actions or submit the form programmatically if needed
    // document.getElementById('myForm').submit();
});

 function remove(){
    this.outputElement.remove();
}