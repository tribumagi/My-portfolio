import React from "react"

import { Subtitle } from "../../ui/subtitle/Subtitle"
import { SkillType } from "../Resume"

import styles from "./SkillsBlock.module.scss"

export const SkillsBlock: React.FC<ResumeBlockPropsType> = ({
                                                                firstWordTitle,
                                                                restWord,
                                                                skills,
                                                            }) => (
    <div className={styles.skillsBlock}>
        <Subtitle
            firstWordTitle={firstWordTitle}
            restWord={restWord}
            className={styles.mediaSubtitle}
        />

        <div className={styles.block}>
            {skills.map((el, index) => (
                <div key={index}>
                    <div className={styles.name}>{el.nameSkill}</div>
                    <div className={styles.progress}>
                        <div className={styles.percentage} style={{ width: `${el.percentage}%` }} />
                    </div>
                </div>
            ))}
        </div>
    </div>
)

// types

type ResumeBlockPropsType = {
    firstWordTitle: string
    restWord: string
    skills: Array<SkillType>
}