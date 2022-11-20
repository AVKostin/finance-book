import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import Modal from "../../components/Modal/Modal";
import s from "./LogoutButton.module.css";

const LogoutButton = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    return (
        <div>
            <button
                type="button"
                className={s.btn}
                onClick={() => setShowModal(true)}
            >
                {/* <svg className="icon">
          <use href="./sprite.svg#icon-logout"></use>
        </svg> */}
                Exit
            </button>
            {showModal ? (
                <Modal
                    onClick={() => dispatch(authOperations.logOut())}
                    setShowModal={setShowModal}
                >
                    Do you really want to leave?
                </Modal>
            ) : null}
        </div>
    );
};

export default LogoutButton;
