//function to get input value

function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const amountValue = inputField.value;
    inputField.value = '';

    return amountValue;
};

function updateTotalField(amountId, newAmount){
    debugger;
    const totalElement = document.getElementById(amountId);
    const totalAmount = totalElement.innerText;

    const newTotal = parseFloat(totalAmount) + parseFloat(newAmount);
    totalElement.innerText = newTotal;
};

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const previousBalanceAmountNumber = parseFloat( previousBalanceAmount);
    return  previousBalanceAmountNumber;
}

function updateBalance(newAmount,isAdd){
    debugger;
    const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceAmount = balanceTotal.innerText;
    const previousBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(newAmount);
        balanceTotal.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(newAmount);
        balanceTotal.innerText = newBalanceTotal;
    }
};


//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmount = depositInput.value;
    
    
    //Update Deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;

    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositTotal; */
    

    //Update Account total
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceAmount = balanceTotal.innerText;

    // const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(depositAmount);
    // balanceTotal.innerText = newBalanceTotal;

    const depositAmount = getInputValue('deposit-input');
    if( depositAmount > 0 ){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    };
    

    // depositInput.value = '';
});


/////handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newWithdrawAmount = withdrawInput.value;
    
    
    //Update Withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;

    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal; */
    

    //Update Account total
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceAmount = balanceTotal.innerText;

    // const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(withdrawAmount);
    // balanceTotal.innerText = newBalanceTotal;
    
    // updateBalance(-withdrawAmount);

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    };
    if( withdrawAmount > currentBalance){
        console.log("You cannot withdraw more than your current balance!")
    }

    // withdrawInput.value = '';
});