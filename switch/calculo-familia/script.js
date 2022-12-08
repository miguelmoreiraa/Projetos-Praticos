let accountsFamily = {
    revenues: [3000, 1000],
    expenses: [1000, 5000]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value;
    }
    return total
}

function calculationOfAccounts() {
    const calculateRevenues = sum(accountsFamily.revenues)
    const calculateExpenses = sum(accountsFamily.expenses)

    const total = calculateRevenues - calculateExpenses

    const istOk = total >= 0;

    let balanceText = "negativo"

    if (istOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculationOfAccounts()