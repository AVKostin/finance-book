import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { isDesktop } from "../../services/mediaQuery";
import { authSelectors, authOperations } from "../../redux/auth";
import Logo from "../Logo";
import UserMenu from "../UserMenu/UserMenu";
import LogoutButton from "../LogoutButton";
import s from "./Header.module.css";
// import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const Desktop = isDesktop(useMediaQuery);
    const isLoggegIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <Logo />
            </div>
            {isLoggegIn ? (
                <div className={s.userEmail}>
                    <UserMenu />
                    <LogoutButton />
                </div>
            ) : null}
        </div>
    );
};

const stateProps = (state) => ({
    isLoggegIn: authSelectors.getIsLoggedIn(state),
});

const dispatchProps = {
    onLogOut: authOperations.logOut,
};

export default connect(stateProps, dispatchProps)(Header);
