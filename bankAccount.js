function Account(bankBranch, account, balance) {
  this.bankBranch = bankBranch
  this.account = account
  this.balance = balance
}

Account.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log(`Insufficient funds`)
    return
  }
  this.balance -= amount
  this.checkBalance()
}

Account.prototype.deposit = function (amount) {
  this.balance += amount
  this.checkBalance()
}

Account.prototype.checkBalance = function () {
  console.log(`Bank Branch: ${this.bankBranch} \nAccount: ${this.account} \nBalance: ${this.balance.toFixed(2)}`)
  console.log(`\n`)
}

function CheckingAccount(bankBranch, account, balance, limit) {
  Account.call(this, bankBranch, account, balance)
  this.limit = limit
}

CheckingAccount.prototype = Object.create(Account.prototype)
CheckingAccount.prototype.constructor = CheckingAccount

CheckingAccount.prototype.withdraw = function (amount) {
  if (amount > (this.balance + this.limit)) {
    console.log(`Insufficient funds: ${this.balance}`)
    return
  }
  this.balance -= amount
  this.checkBalance()
}

function SavingsAccount(bankBranch, account, balance) {
  Account.call(this, bankBranch, account, balance)
}

SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = CheckingAccount

const checkingAccount = new CheckingAccount(11, 22, 0, 100)
checkingAccount.deposit(10)
checkingAccount.withdraw(110)
checkingAccount.withdraw(1)

const savingsAccount = new SavingsAccount(12, 33, 0)
savingsAccount.deposit(10)
savingsAccount.withdraw(10)
savingsAccount.withdraw(1)