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
                name: "Freelance",
                date: "2023-PRESENT",
                description: "Frontend Developer (FULL-TIME)",
            },
            {
                name: "IT-INCUBATOR",
                date: "2022-2023",
                description: "Front-end Developer",
            },
            {
                name: "Gazprom Transgas",
                date: "2019-2022",
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
                date: "2022-2023 | Minsk",
                description: "Front-end Developer",
            },
            {
                name: "National University of Oil and Gas «Gubkin University»",
                date: "2015-2019 | Moscow",
                description: "Automatization Engineer",
            },
            {
                name: "Dagestan State University",
                date: "2014-2015 | Makhachkala",
                description: "Computer sience",
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