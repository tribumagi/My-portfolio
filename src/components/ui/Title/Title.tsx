import React from "react"

import styles from "./Title.module.scss"

export const Title: React.FC<TitlePropsType> = ({ name }) => (
    <h2 className={styles.title}>{name}</h2>
)

// types

type TitlePropsType = {
    name: string
}