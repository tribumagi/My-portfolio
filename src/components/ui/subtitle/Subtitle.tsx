
import React from "react"

import styles from "./Subtitle.module.scss"

export const Subtitle: React.FC<SubtitlePropsType> = ({ firstWordTitle, restWord, className }) => (
    <div className={className ? `${styles.subtitle} ${className}` : styles.subtitle}>
        <span>{firstWordTitle}</span> {restWord}
    </div>
)

// types

type SubtitlePropsType = {
    firstWordTitle: string
    restWord: string
    className?: string
}