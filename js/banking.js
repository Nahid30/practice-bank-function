



document.getElementById('deposit-button').addEventListener('click',function(){
   

    const depositInputField = document.getElementById('deposit-input');
    const depositInputFieldValue = depositInputField.value;
    const depositInputFieldValueParse = parseFloat(depositInputFieldValue); 

    depositInputField.value = '';

    
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalInnerText = depositTotal.innerText;
    const depositTotalInnerTextParse = parseFloat(depositTotalInnerText);
    

    const depositTotalAmount = depositInputFieldValueParse + depositTotalInnerTextParse ;

    depositTotal.innerText = depositTotalAmount;
    

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInnerText = balanceTotal.innerText;
    const balanceTotalInnerTextParse = parseFloat(balanceTotalInnerText);

    balanceTotal.innerText = depositInputFieldValueParse + balanceTotalInnerTextParse;

    
    

});


document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputFieldValue = withdrawInputField.value;
    const withdrawInputFieldValueParse = parseFloat(withdrawInputFieldValue);


    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalInnerText = withdrawTotal.innerText;
    const withdrawTotalInnerTextParse = parseFloat(withdrawTotalInnerText);


    const withdrawTotalAmount = withdrawInputFieldValueParse + withdrawTotalInnerTextParse;
    withdrawTotal.innerText = withdrawTotalAmount;

    withdrawInputField.value = '';

    
    const balanceTotalNew = document.getElementById('balance-total');
    const balanceTotalInnerTextNew = balanceTotalNew.innerText;
    const balanceTotalInnerTextParseNew = parseFloat(balanceTotalInnerTextNew);


    const balanceTotalAmount = balanceTotalInnerTextParseNew - withdrawInputFieldValueParse;
    balanceTotalNew.innerText = balanceTotalAmount;



});

