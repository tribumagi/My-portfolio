import React, { ReactElement } from "react"

import naBeregu from "../../assets/img/naBeregu.png"
import landingPage from "../../assets/img/landingPage.png"
import socialNetwork from "../../assets/img/socialNetwork.png"
import todolists from "../../assets/img/todolists.png"
import weather from "../../assets/img/weather.png"
import { TitleBackground } from "../ui/TitleBackground/TitleBackground"

import styles from "./MyProjects.module.scss"
import { Project } from "./Project/Project"

const projects: Array<ProjectType> = [

    {
        id: 2,
        title: "Na beregu",
        description: "React",
        url: "",
        logo: {
            backgroundImage: `url(${naBeregu})`,
        },
    },
    {
        id: 3,
        title: "To Do List",
        description: "React",
        url: "",
        logo: {
            backgroundImage: `url(${todolists})`,
        },
    },
    {
        id: 4,
        title: "Social network",
        description: "React",
        url: "",
        logo: {
            backgroundImage: `url(${socialNetwork})`,
        },
    },
    {
        id: 5,
        title: "Landing page",
        description: "HTML",
        url: "",
        logo: {
            backgroundImage: `url(${landingPage})`,
        },
    },
]

export const MyProjects = (): ReactElement => (
    <div className={styles.myProject}>
        <TitleBackground name="MY PROJECTS" />
        <div className={styles.container}>
            <div className={styles.project}>
                {projects.map(el => (
                    <Project
                        key={el.id}
                        title={el.title}
                        description={el.description}
                        url={el.url}
                        style={el.logo}
                    />
                ))}
            </div>
        </div>
    </div>
)

// types

type ProjectType = {
    id: number
    title: string
    description: string
    url: string
    logo: {
        backgroundImage: string
    }
}