import React, { ReactElement } from "react"

import { TitleBackground } from "../ui/TitleBackground/TitleBackground"

import { MyBlock } from "./MyBlock/MyBlock"
import styles from "./Resume.module.scss"
import { SkillsBlock } from "./SkillsBlock/SkillsBlock"

const myBlock: Array<MyBlockType> = [
    {
        id: 1,
        firstWordTitle: "My",
        restWord: "Experience",
        placeWorkStudy: [
            {
                name: "PLAN 9",
                date: "2022-PRESENT",
                description: "Frontend Developer (FULL-TIME)",
            },
            {
                name: "PROJECT WORK",
                date: "2022",
                description: "Frontend Developer (PART-TIME)",
            },
            {
                name: "VITEBSK CHP",
                date: "2017-2022",
                description: "Engineer (FULL-TIME)",
            },
        ],
    },
    {
        id: 2,
        firstWordTitle: "My",
        restWord: "Education",
        placeWorkStudy: [
            {
                name: "IT-INCUBATOR",
                date: "2021-2022 | Minsk",
                description: "Front-end Developer",
            },
            {
                name: "VITEBSK STATE ORDER OF PEOPLES' FRIENDSHIP MEDICAL UNIVERSITY",
                date: "2016-2017 | Vitebsk",
                description: "Teacher",
            },
            {
                name: "POLOTSK STATE UNIVERSITY",
                date: "2010-2015 | Polotsk",
                description: "Civil engineer",
            },
        ],
    },
]

const skillsBlock: Array<SkillsBlockType> = [
    {
        id: 3,
        firstWordTitle: "Personal",
        restWord: "Skills",
        skills: [
            {
                nameSkill: "Hard-working",
                percentage: 90,
            },
            {
                nameSkill: "Communication",
                percentage: 80,
            },
            {
                nameSkill: "Team Work",
                percentage: 80,
            },
            {
                nameSkill: "Calm",
                percentage: 100,
            },
        ],
    },
    {
        id: 4,
        firstWordTitle: "Professional",
        restWord: "Skills",
        skills: [
            {
                nameSkill: "React / Next.js",
                percentage: 90,
            },
            {
                nameSkill: "JS / TS",
                percentage: 90,
            },
            {
                nameSkill: "HTML / CSS / SASS",
                percentage: 80,
            },
            {
                nameSkill: "Redux Toolkit / Zustand",
                percentage: 80,
            },
        ],
    },
]

export const Resume = (): ReactElement => (
    <div className={styles.resume}>
        <TitleBackground name="RESUME" />
        <div className={styles.container}>
            <div className={styles.content}>
                {myBlock.map(el => (
                    <MyBlock
                        key={el.id}
                        firstWordTitle={el.firstWordTitle}
                        restWord={el.restWord}
                        placeWorkStudy={el.placeWorkStudy}
                    />
                ))}
                {skillsBlock.map(el => (
                    <SkillsBlock
                        key={el.id}
                        firstWordTitle={el.firstWordTitle}
                        restWord={el.restWord}
                        skills={el.skills}
                    />
                ))}
            </div>
        </div>
    </div>
)

// types

export type PlaceWorkStudyType = {
    name: string
    date: string
    description: string
}

type MyBlockType = {
    id: number
    firstWordTitle: string
    restWord: string
    placeWorkStudy: Array<PlaceWorkStudyType>
}

export type SkillType = {
    nameSkill: string
    percentage: number
}

type SkillsBlockType = {
    id: number
    firstWordTitle: string
    restWord: string
    skills: Array<SkillType>
}