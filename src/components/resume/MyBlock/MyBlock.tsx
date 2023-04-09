import React from "react"

import { Subtitle } from "../../ui/subtitle/Subtitle"
import { PlaceWorkStudyType } from "../Resume"

import styles from "./MyBlock.module.scss"

export const MyBlock: React.FC<MyBlockPropsType> = ({
                                                        firstWordTitle,
                                                        restWord,
                                                        placeWorkStudy,
                                                    }) => (
    <div className={styles.myBlock}>
        <Subtitle
            firstWordTitle={firstWordTitle}
            restWord={restWord}
            className={styles.mediaSubtitle}
        />
        <div className={styles.block}>
            {placeWorkStudy.map((el, index) => (
                <div key={index} className={styles.blockItem}>
                    <div className={styles.name}>{el.name}</div>
                    <div className={styles.date}>{el.date}</div>
                    <div className={styles.description}>{el.description}</div>
                </div>
            ))}
        </div>
    </div>
)

// types

type MyBlockPropsType = {
    firstWordTitle: string
    restWord: string
    placeWorkStudy: Array<PlaceWorkStudyType>
}