import React, { ReactElement, useState } from "react"

import emailjs from "@emailjs/browser"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SubmitHandler, useForm } from "react-hook-form"

import styles from "./Form.module.scss"

export const Form: React.FC<FormPropsType> = ({
                                                  setSendMessage,
                                                  setShowSnackbar,
                                              }): ReactElement => {
    const [disabledButton, setDisabledButton] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<InputsType>()

    const onSubmit: SubmitHandler<InputsType> = (data): void => {
        setDisabledButton(true)
        emailjs
            .send("service_56tyxiw", "template_q6bdaun", data, "YH76wSlAOLCIsXrXz")
            .then(() => {
                reset()
                setSendMessage("Message sent successfully!")
            })
            .catch(() => {
                setSendMessage("Can't send form. Retry in 5 seconds.")
            })
            .finally(() => {
                setDisabledButton(false)
                setShowSnackbar(true)
                const msTimeout = 5000
                setTimeout(() => {
                    setShowSnackbar(false)
                }, msTimeout)
            })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formInputs}>
                <input
                    className={
                        errors.name
                            ? `${styles.formInput} ${styles.formInputError}`
                            : styles.formInput
                    }
                    placeholder="Full Name"
                    type="text"
                    defaultValue=""
                    {...register("name", { required: true })}
                />
                <input
                    className={
                        errors.email
                            ? `${styles.formInput} ${styles.formInputError}`
                            : styles.formInput
                    }
                    placeholder="Email Address"
                    type="email"
                    defaultValue=""
                    {...register("email", {
                        required: true,
                        pattern:
                            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
                    })}
                />
            </div>
            <div>
                <textarea
                    className={
                        errors.message
                            ? `${styles.formTextarea} ${styles.formTextareaError}`
                            : styles.formTextarea
                    }
                    placeholder="Your Message"
                    defaultValue=""
                    {...register("message", { required: true })}
                />
            </div>
            <div className={disabledButton ? `${styles.formButton}` : ""}>
                <button type="submit" className={styles.btn} disabled={disabledButton}>
                    Send Messagge{" "}
                    <FontAwesomeIcon className={styles.icon} icon={faArrowRightLong} />
                </button>
            </div>
        </form>
    )
}

// types

type FormPropsType = {
    setSendMessage: (errorMessage: string) => void
    setShowSnackbar: (show: boolean) => void
}

type InputsType = {
    name: string
    email: string
    message: string
}