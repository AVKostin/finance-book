const getUserEmail = (state) => state.auth?.email;
const getUserBalance = (state) => state.auth?.balance;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserGoogleEmail = (state) => state.auth?.googleEmail;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getUserEmail,
    getIsLoggedIn,
    getUserBalance,
    getUserGoogleEmail,
    getIsFetchingCurrent,
};

export default authSelectors;
