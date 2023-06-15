const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const outputElement = document.getElementById('output');
const inputField2 = document.getElementById('inputField2');
const submitButton2 = document.getElementById('submitButton2');
const outputElement2 = document.getElementById('output1');
const inputField3 = document.getElementById('inputField3');
const submitButton3 = document.getElementById('submitButton3');
const outputElement3 = document.getElementById('output2');
// Function 1
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
// Function no 1 End



// Function no 2
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

function remove2(){
    this.outputElement2.remove();
}
// Function no 2 End's


// Function no 3
const CallLastOneFunction = (GivenNumber) => {
    GivenNumber = GivenNumber.toString();
    return GivenNumber.length === 0 ? GivenNumber.length - 1 : GivenNumber[GivenNumber.length - 1];
  };
  

  
  submitButton3.addEventListener('click', function(event) {
    event.preventDefault();
    const GivenNumber = inputField3.value.toString();
    const remove2 = CallLastOneFunction(GivenNumber);
    outputElement3.textContent = remove2;
  });
  function remove3(){
    this.outputElement3.remove();
  }
// Function no 3 End's 