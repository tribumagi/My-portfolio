import React from "react"

import styles from "./TitleBackground.module.scss"

export const TitleBackground: React.FC<TitleBackgroundPropsType> = ({ name }) => (
    <h2 className={styles.title}>{name}</h2>
)

// types

type TitleBackgroundPropsType = {
    name: string
}