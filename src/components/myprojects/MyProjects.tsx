import React, { ReactElement } from "react"

import naBeregu from "../../assets/img/naBeregu.png"
import landingPage from "../../assets/img/landingPage.png"
import socialNetwork from "../../assets/img/socialNetwork.png"
import todolists from "../../assets/img/todolists.png"

import { TitleBackground } from "../ui/TitleBackground/TitleBackground"

import styles from "./MyProjects.module.scss"
import { Project } from "./Project/Project"

const projects: Array<ProjectType> = [


    {
        id: 3,
        title: "Todolists",
        description: "React",
        url: "https://tribumagi.github.io/Todolists/",
        logo: {
            backgroundImage: `url(${todolists})`,
        },
    },
    {
        id: 4,
        title: "Social network",
        description: "React",
        url: "https://tribumagi.github.io/social-network/",
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