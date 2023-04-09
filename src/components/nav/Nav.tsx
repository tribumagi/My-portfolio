import React, { ReactElement } from "react"

import { NavLink } from "react-router-dom"

import styles from "./Nav.module.scss"

export const Nav = (): ReactElement => (
    <div className={styles.nav}>
        <div className={styles.container}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="aboutme">About Me</NavLink>
            <NavLink to="resume">Resume</NavLink>
            <NavLink to="myproject">My Project</NavLink>
            <NavLink to="contacts">Contacts</NavLink>

            {/* <a href="/#">Home</a> */}
            {/* <a href="/#">About Me</a> */}
            {/* <a href="/#">Resume</a> */}
            {/* <a href="/#">My Project</a> */}
            {/* <a href="/#">Contacts</a> */}
        </div>
    </div>
)