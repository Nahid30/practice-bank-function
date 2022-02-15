

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


// not more than current balance you can withdraw 

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInnerText = balanceTotal.innerText;
    const balanceTotalInnerTextParse = parseFloat(balanceTotalInnerText);
    return balanceTotalInnerTextParse;
}



function updateBalance(amount , isAdd){

    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalInnerText = balanceTotal.innerText;
    // const balanceTotalInnerTextParse = parseFloat(balanceTotalInnerText);

    const balanceTotalInnerTextParse = getCurrentBalance();
    
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalInnerTextParse + amount ;
    }
    else{
        balanceTotal.innerText = balanceTotalInnerTextParse - amount ;
    }

}



document.getElementById('deposit-button').addEventListener('click',function(){
   

    /* const depositInputField = document.getElementById('deposit-input');
    const depositInputFieldValue = depositInputField.value;
    const depositInputFieldValueParse = parseFloat(depositInputFieldValue);  */

    
    
   /*  const depositTotal = document.getElementById('deposit-total');
    const depositTotalInnerText = depositTotal.innerText;
    const depositTotalInnerTextParse = parseFloat(depositTotalInnerText);
    
    const depositTotalAmount = depositTotalInnerTextParse + depositInputFieldValueParse  ; */

    


   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInnerText = balanceTotal.innerText;
    const balanceTotalInnerTextParse = parseFloat(balanceTotalInnerText);

    balanceTotal.innerText = depositInputFieldValueParse + balanceTotalInnerTextParse; */



    const depositInputFieldValueParse = getInputValue('deposit-input');
    if(depositInputFieldValueParse > 0){
        updateTotalField('deposit-total',depositInputFieldValueParse);
        updateBalance(depositInputFieldValueParse, true);
    }
    

});


document.getElementById('withdraw-button').addEventListener('click',function(){

    /* const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputFieldValue = withdrawInputField.value;
    const withdrawInputFieldValueParse = parseFloat(withdrawInputFieldValue); */

    


   /*  const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalInnerText = withdrawTotal.innerText;
    const withdrawTotalInnerTextParse = parseFloat(withdrawTotalInnerText);

    const withdrawTotalAmount = withdrawTotalInnerTextParse + withdrawInputFieldValueParse;
    withdrawTotal.innerText = withdrawTotalAmount; */

    


    /* 
    const balanceTotalNew = document.getElementById('balance-total');
    const balanceTotalInnerTextNew = balanceTotalNew.innerText;
    const balanceTotalInnerTextParseNew = parseFloat(balanceTotalInnerTextNew);

    const balanceTotalAmount = balanceTotalInnerTextParseNew - withdrawInputFieldValueParse;
    balanceTotalNew.innerText = balanceTotalAmount;
 */



    const withdrawInputFieldValueParse = getInputValue('withdraw-input')
    const withdrawOnlyCurrentBalance = getCurrentBalance();
    if(withdrawInputFieldValueParse > 0 && withdrawInputFieldValueParse < withdrawOnlyCurrentBalance){
        updateTotalField ('withdraw-total', withdrawInputFieldValueParse);
        updateBalance(withdrawInputFieldValueParse, false);
    }
    else if ( withdrawInputFieldValueParse > withdrawOnlyCurrentBalance ){
        alert('You cannot withdraw more than you have in your account Balance');
    }
    

});

