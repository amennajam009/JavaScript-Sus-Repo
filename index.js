const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const outputElement = document.getElementById('output');
const inputField2 = document.getElementById('inputField2');
const submitButton2 = document.getElementById('submitButton2');
const outputElement2 = document.getElementById('output1');

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

const MyTableFuntion = (GivenTable) =>{
    let Result = ''
    for(i=1;i<=10;i++){
        let TableRow = GivenTable + 'X' + i + '=' + GivenTable * i;
        Result += TableRow +'\n';
    }
    return Result;
    
}
submitButton2.addEventListener('click' , function(event){
 event.preventDefault();
 const GivenTable = inputField2.value;
 const Result = MyTableFuntion(GivenTable)
 outputElement2.textContent = Result
});
