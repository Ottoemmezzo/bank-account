var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        this.fixedDeposit = 1000;
        this.fixedWithdraw = 1500;
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.deposit = function (amount) {
        this.balanceInit += amount;
    };
    SonAccount.prototype.withdraw = function (amount) {
        console.log('You Withdraw:', amount);
        this.balanceInit -= amount;
    };
    SonAccount.prototype.depositFixed = function () {
        this.balanceInit += this.fixedDeposit;
    };
    SonAccount.prototype.withDrawFixed = function () {
        this.balanceInit -= this.fixedWithdraw;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit) {
        return _super.call(this, _balanceInit) || this;
    }
    MotherAccount.prototype.deposit = function (amount) {
        this.balanceInit += amount - this.calcInterest(amount);
    };
    MotherAccount.prototype.withdraw = function (amount) {
        this.balanceInit -= amount - this.calcInterest(amount);
    };
    MotherAccount.prototype.calcInterest = function (amount) {
        var interest = 0;
        interest = amount / 10;
        return interest;
    };
    return MotherAccount;
}(SonAccount));
var angeloAccount = new SonAccount(50000);
angeloAccount.deposit(10000);
console.log(angeloAccount.balanceInit);
angeloAccount.withdraw(5000);
console.log(angeloAccount.balanceInit);
console.log('...............');
var valeriaAccount = new MotherAccount(50000);
valeriaAccount.deposit(10000);
console.log('You deposited:', valeriaAccount.balanceInit);
valeriaAccount.withdraw(5000);
console.log('You withdraw:', valeriaAccount.balanceInit);
