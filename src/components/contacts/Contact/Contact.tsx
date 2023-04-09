import React, { ReactElement } from "react"

import styles from "./Contact.module.scss"

export const Contact: React.FC<ContactPropsType> = ({ name, icon, text }) => (
    <div className={styles.contact}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.info}>
            <h3>{name}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
)

// types

type ContactPropsType = {
    name: string
    text: string
    icon: ReactElement
}