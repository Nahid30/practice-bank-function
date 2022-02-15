

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldValueParse = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldValueParse;
}


function updateTotalField(totalFieldId,amountValue){

    const totalElements = document.getElementById(totalFieldId);
    const totalInnerText = totalElements.innerText;
    const totalInnerTextParse = parseFloat(totalInnerText);

    const totalAmount = totalInnerTextParse + amountValue   ;
    totalElements.innerText = totalAmount;


}




document.getElementById('deposit-button').addEventListener('click',function(){
   

    /* const depositInputField = document.getElementById('deposit-input');
    const depositInputFieldValue = depositInputField.value;
    const depositInputFieldValueParse = parseFloat(depositInputFieldValue);  */

    const depositInputFieldValueParse = getInputValue('deposit-input');

    
    
   /*  const depositTotal = document.getElementById('deposit-total');
    const depositTotalInnerText = depositTotal.innerText;
    const depositTotalInnerTextParse = parseFloat(depositTotalInnerText);
    

    const depositTotalAmount = depositInputFieldValueParse + depositTotalInnerTextParse ; */

    updateTotalField('deposit-total',depositInputFieldValueParse);
    


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInnerText = balanceTotal.innerText;
    const balanceTotalInnerTextParse = parseFloat(balanceTotalInnerText);

    balanceTotal.innerText = depositInputFieldValueParse + balanceTotalInnerTextParse;

    
    

});


document.getElementById('withdraw-button').addEventListener('click',function(){

    /* const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputFieldValue = withdrawInputField.value;
    const withdrawInputFieldValueParse = parseFloat(withdrawInputFieldValue); */

    const withdrawInputFieldValueParse = getInputValue('withdraw-input')


   /*  const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalInnerText = withdrawTotal.innerText;
    const withdrawTotalInnerTextParse = parseFloat(withdrawTotalInnerText);

    const withdrawTotalAmount = withdrawTotalInnerTextParse + withdrawInputFieldValueParse;
    withdrawTotal.innerText = withdrawTotalAmount; */

    updateTotalField ('withdraw-total', withdrawInputFieldValueParse);



    
    const balanceTotalNew = document.getElementById('balance-total');
    const balanceTotalInnerTextNew = balanceTotalNew.innerText;
    const balanceTotalInnerTextParseNew = parseFloat(balanceTotalInnerTextNew);


    const balanceTotalAmount = balanceTotalInnerTextParseNew - withdrawInputFieldValueParse;
    balanceTotalNew.innerText = balanceTotalAmount;



});

