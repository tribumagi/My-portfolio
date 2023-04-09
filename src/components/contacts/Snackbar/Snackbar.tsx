import React from "react"

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./Snackbar.module.scss"

type SnackbarPropsType = {
    show: boolean
    sendMessage: string
    setShow: (show: boolean) => void
}

export const Snackbar: React.FC<SnackbarPropsType> = ({ show, sendMessage, setShow }) => {
    const handleClick = (): void => {
        setShow(false)
    }

    const snackbarClass = show ? `${styles.snackbar}` : `${styles.snackbar} ${styles.snackbarHide}`

    return (
        <div className={snackbarClass}>
            <div>{sendMessage}</div>
            <button type="button" className={styles.btn} onClick={handleClick}>
                <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
        </div>
    )
}