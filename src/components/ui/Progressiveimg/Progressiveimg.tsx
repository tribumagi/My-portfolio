import React, { DetailedHTMLProps, useEffect, useState } from "react"

import styles from "./ProgressiveImg.module.scss"

export const ProgressiveImg: React.FC<ProgressiveImgPropsType> = ({
                                                                      placeholderSrc,
                                                                      src,
                                                                      ...props
                                                                  }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc)
    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            setImgSrc(src)
        }
    }, [src])

    const customClass =
        placeholderSrc && imgSrc === placeholderSrc ? `${styles.loading}` : `${styles.loaded}`

    return <img {...{ src: imgSrc, ...props }} alt={props.alt || ""} className={customClass} />
}

// types

type DefaultImgPropsType = DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
    >

type ProgressiveImgPropsType = DefaultImgPropsType & {
    placeholderSrc: string
    src: string
}