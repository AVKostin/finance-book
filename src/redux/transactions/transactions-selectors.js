const getTotalBalance = (state) => state.wallet.wallet.balance;
const getMonthlyBalances = (state) => state.wallet.wallet.monthlyBalancesYear;
const getTransactionsPerDay = (state) => state.wallet.wallet.transactionsDay;
const getTransactionsPerMonth = (state) =>
    state.wallet.wallet.transactionsMonthYear;
const getIncomePerMonth = (state) => state.wallet.wallet.getIncomePerMonth;
const getExpencesPerMonth = (state) => state.wallet.wallet.getExpencesPerMonth;
const getExpencesReportPerMonth = (state) =>
    state.wallet.wallet.expensesReportPerMonth;
const getIncomeReportPerMonth = (state) =>
    state.wallet.wallet.incomeReportPerMonth;
const getFullReport = (state) => state.wallet.wallet.fullReport;
// const getLoader = state => state.wallet.loader;
// const getTransactionError = state => state.wallet.error;

const transactionsSelectors = {
    getFullReport,
    getTotalBalance,
    getIncomePerMonth,
    getMonthlyBalances,
    getExpencesPerMonth,
    getTransactionsPerDay,
    getIncomeReportPerMonth,
    getTransactionsPerMonth,
    getExpencesReportPerMonth,
    // getLoader,
    // getTransactionError,
};
export default transactionsSelectors;
