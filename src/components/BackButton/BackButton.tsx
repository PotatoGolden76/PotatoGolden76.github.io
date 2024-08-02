import {ArrowLeft} from "react-feather";
import {useNavigate} from "react-router-dom";
import styles from "./BackButton.module.css"

function BackButton() {
    const navigate = useNavigate();

    return (
        <button className={styles["back-button"]} onClick={() => navigate(-1)}>
            <ArrowLeft size={32} />
        </button>
    )
}

export default BackButton
