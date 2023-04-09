import React, { ReactElement } from "react"

import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

import myPhoto from "../../assets/img/myPhoto.png"
import progressiveMyPhoto from "../../assets/img/progressiveMyPhoto.png"
import { ProgressiveImg } from "../ui/Progressiveimg/Progressiveimg"
import { TitleBackground } from "../ui/TitleBackground/TitleBackground"

import styles from "./AboutMe.module.scss"

export const AboutMe = (): ReactElement => (
    <div className={styles.aboutMe}>
        <TitleBackground name="ABOUT ME" />
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <strong>Hello, I’m a Murad</strong>, web-developer based on Sankt-Petersburg. I have
                        experience in creating apps using{" "}
                        <strong>
                            React, Next.js, Redux Toolkit, Typescript, React Native, JS, HTML, CSS.
                        </strong>
                    </div>
                    <div className={styles.links}>
                        <NavLink className={styles.buttonLink} to="/contacts">
                            <FontAwesomeIcon className={styles.iconButton} icon={faPenToSquare} />{" "}
                            Write me
                        </NavLink>
                        <a
                            className={styles.linkSocial}
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon className={styles.iconSocial} icon={faFacebook} />
                        </a>
                        <a
                            className={styles.linkSocial}
                            href="https://github.com/tribumagi"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon className={styles.iconSocial} icon={faGithub} />
                        </a>
                        <a
                            className={styles.linkSocial}
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon className={styles.iconSocial} icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                <ProgressiveImg
                    placeholderSrc={progressiveMyPhoto}
                    src={myPhoto}
                    className={styles.photo}
                    alt="myPhoto"
                    width={350}
                    height={525}
                />
            </div>
        </div>
    </div>
)