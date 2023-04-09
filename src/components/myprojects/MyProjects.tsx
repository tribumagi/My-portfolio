import React, { ReactElement } from "react"

import cards from "../../assets/img/cards.png"
import landingPage from "../../assets/img/landingPage.png"
import socialNetwork from "../../assets/img/socialNetwork.png"
import todolist from "../../assets/img/todolist.png"
import weather from "../../assets/img/weather.png"
import { TitleBackground } from "../ui/TitleBackground/TitleBackground"

import styles from "./MyProjects.module.scss"
import { Project } from "./Project/Project"

const projects: Array<ProjectType> = [
    {
        id: 1,
        title: "Weather",
        description: "React Native",
        url: "https://github.com/Dizziby/weather-react-native",
        logo: {
            backgroundImage: `url(${weather})`,
        },
    },
    {
        id: 2,
        title: "Cards",
        description: "React",
        url: "https://ilyagab.github.io/fridayproject/",
        logo: {
            backgroundImage: `url(${cards})`,
        },
    },
    {
        id: 3,
        title: "To Do List",
        description: "React",
        url: "https://dizziby.github.io/to-do-list/",
        logo: {
            backgroundImage: `url(${todolist})`,
        },
    },
    {
        id: 4,
        title: "Social network",
        description: "React",
        url: "https://dizziby.github.io/social-network/",
        logo: {
            backgroundImage: `url(${socialNetwork})`,
        },
    },
    {
        id: 5,
        title: "Landing page",
        description: "HTML",
        url: "https://dizziby.github.io/landing-page/",
        logo: {
            backgroundImage: `url(${landingPage})`,
        },
    },
]

export const MyProjects = (): ReactElement => (
    <div className={styles.myProject}>
        <TitleBackground name="MY PROJECT" />
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