import React, { ReactElement, useState } from "react"

import { faAt, faLocationDot, faPhone, faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Subtitle } from "../ui/subtitle/Subtitle"
import { TitleBackground } from "../ui/TitleBackground/TitleBackground"

import { Contact } from "./Contact/Contact"
import styles from "./Contacts.module.scss"
import { Form } from "./Form/Form"
import { Snackbar } from "./Snackbar/Snackbar"

export const Contacts = (): ReactElement => {
    const phone = <FontAwesomeIcon className={styles.iconButton} icon={faPhone} size="2x" />
    const email = <FontAwesomeIcon className={styles.iconButton} icon={faAt} size="2x" />
    const address = <FontAwesomeIcon className={styles.iconButton} icon={faLocationDot} size="2x" />
    const freelance = (
        <FontAwesomeIcon className={styles.iconButton} icon={faSquareCheck} size="2x" />
    )

    const contacts: Array<ContactType> = [
        { id: 1, name: "Phone", text: "+7 989 868 86 47", icon: phone },
        { id: 2, name: "Email", text: "djamavov.murad@gmail.com", icon: email },
        { id: 3, name: "Address", text: "Saint Petersburg, Russia", icon: address },
        { id: 4, name: "Freelance", text: "Available", icon: freelance },
    ]

    const [showSnackbar, setShowSnackbar] = useState<boolean>(false)
    const [sendMessage, setSendMessage] = useState<string>("Can't send form. Retry in 5 seconds.")

    return (
        <div className={styles.contacts}>
            <TitleBackground name="CONTACTS" />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contactsBlock}>
                        <Subtitle
                            firstWordTitle="Get"
                            restWord="in Touch"
                            className={styles.mediaSubtitle}
                        />
                        <div className={styles.contactsInfo}>
                            {contacts.map(el => (
                                <Contact key={el.id} name={el.name} text={el.text} icon={el.icon} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Subtitle
                            firstWordTitle="Contact"
                            restWord="Form"
                            className={styles.mediaSubtitle}
                        />
                        <Form setSendMessage={setSendMessage} setShowSnackbar={setShowSnackbar} />
                    </div>
                    <div className={styles.snackbar}>
                        <Snackbar
                            show={showSnackbar}
                            setShow={show => setShowSnackbar(show)}
                            sendMessage={sendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// types

type ContactType = {
    id: number
    name: string
    text: string
    icon: ReactElement
}