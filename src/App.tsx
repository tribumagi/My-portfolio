import React, { ReactElement } from "react"

import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { animated, useTransition } from "react-spring"

import { AboutMe } from "./components/aboutme/AboutMe"
import { Contacts } from "./components/contacts/Contacts"
import { Main } from "./components/main/Main"
import { MyProjects } from "./components/myprojects/MyProjects"
import { Navbar } from "./components/navbar/Navbar"
import { Resume } from "./components/resume/Resume"
import { Theme } from "./components/ui/Theme/Theme"

const App = (): ReactElement => {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0.2 },
    enter: { opacity: 1 },
    config: { duration: 300 },
  })

  return (
      <div>
        {/*<Theme />*/}
        <Navbar />
        {transitions((props: any) => (
            <animated.div style={props}>
              <Routes>
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="/" element={<Main />} />
                <Route path="aboutme" element={<AboutMe />} />
                <Route path="resume" element={<Resume />} />
                <Route path="myproject" element={<MyProjects />} />
                <Route path="contacts" element={<Contacts />} />
              </Routes>
            </animated.div>
        ))}
      </div>
  )
}

export default App
