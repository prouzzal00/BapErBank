document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    withdrawField.value = '';


    const currentBalanceElement =document.getElementById('balance-total');
    const currentBalanceElementString = currentBalanceElement.innerText;
    const currentBalance = parseFloat(currentBalanceElementString);

    if(newWithdraw > currentBalance){
        alert('You have not this amount to withdraw');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = newWithdraw + previousWithdrawTotal;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const newBalanceTotal = currentBalance - newWithdraw;
    currentBalanceElement.innerText = newBalanceTotal;
})