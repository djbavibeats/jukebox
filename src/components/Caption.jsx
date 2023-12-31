import { Html } from "@react-three/drei"
import { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap/gsap-core"

import { useGSAP } from "@gsap/react";

export default function Caption({ audio, activePanel }) {
    let [ line, setLine ] = useState(0)
    let container = useRef()
    let caption = useRef()
    let introLines = [
        "With a deep-rooted love for traditional music,",
        "Zach Top is poised to invigorate the country genre",
        "with his homage to classic sounds and authentic storytelling.",
        "Zach embodies the spirit of 90’s country legends,",
        "shaped by his upbringing in Sunnyside, WA",
        "listening to timeless melodies",
        "as he tended to livestock on his family’s ranch.",
        "At the age of seven, he formed a band with his siblings",
        "which set the stage for his musical ambitions.",
        "Throughout his teenage years and early twenties,",
        "Zach honed his craft by playing in various bluegrass bands",
        "before moving to Nashville in 2021",
        "where he has been steadily making his mark as an artist to watch.",
        "Zach has already garnered impressive support from fans and critics alike,",
        "underlining his ability to connect with audiences.",
        ""
    ]
    useEffect(() => {
        // console.log(audio.audio[0].seek())
        console.log("caption element", caption.current)
        console.log("gsap", gsap)
    }, [ activePanel ])

    useGSAP(() => {
        gsap.set(container.current, { autoAlpha: 0 });
    })

    useFrame(() => {
        if (audio[0].seek() == 0.000) {
            // console.log(caption.current.style)
            gsap.to(container.current, { autoAlpha: 0 })
        } else if (audio[0].seek() > 0.000 && audio[0].seek() < 2.075) {
            gsap.to(container.current, { autoAlpha: 1 })
            setLine(0)
        } else if (audio[0].seek() > 2.076 && audio[0].seek() < 4.860) {
            setLine(1)
        } else if (audio[0].seek() > 4.861 && audio[0].seek() < 8.442) {
            setLine(2)
        } else if (audio[0].seek() > 8.443 && audio[0].seek() < 11.317) {
            setLine(3)
        } else if (audio[0].seek() > 11.318 && audio[0].seek() < 14.358) {
            setLine(4)
        } else if (audio[0].seek() > 14.359 && audio[0].seek() < 15.775) {
            setLine(5)
        } else if (audio[0].seek() > 15.776 && audio[0].seek() < 18.525) {
            setLine(6)
        } else if (audio[0].seek() > 18.526 && audio[0].seek() < 21.608) {
            setLine(7)
        } else if (audio[0].seek() > 21.609 && audio[0].seek() < 24.442) {
            setLine(8)
        } else if (audio[0].seek() > 24.443 && audio[0].seek() < 26.525) {
            setLine(9)
        } else if (audio[0].seek() > 26.526 && audio[0].seek() < 29.983) {
            setLine(10)
        } else if (audio[0].seek() > 29.984 && audio[0].seek() < 32.275) {
            setLine(11)
        } else if (audio[0].seek() > 32.276 && audio[0].seek() < 35.975) {
            setLine(12)
        } else if (audio[0].seek() > 35.976 && audio[0].seek() < 39.810) {
            setLine(13)
        } else if (audio[0].seek() > 39.811 && audio[0].seek() < 43.448) {
            setLine(14)
        } else {
            setLine(15)
        }

    })
    return(<>
    <Html ref={ container } center position={[ 0, 0.94, 0 ]} className="opacity-0 text-center text-red-500 w-[325px] md:w-[600px]">
        <div ref={ caption } className="box">
        <p>{ introLines[line] }</p>
        </div>
    </Html>
    </>)
}

{/*
> 3
With a deep-rooted love for traditional music, 02.95
Zach Top is poised to invigorate the country genre 03.42
with his homage to classic sounds and authentic storytelling.  03.15

Zach embodies the spirit of 90’s country legends, 03.10
shaped by his upbringing in Sunnyside, WA 02.80
listening to timeless melodies 01.83
as he tended to livestock on his family’s ranch. 02.88

At the age of seven, he formed a band with his siblings 02.80 
which set the stage for his musical ambitions. 02.57

Throughout his teenage years and early twenties, 02.23
Zach honed his craft by playing in various bluegrass bands 03.57 
before moving to Nashville in 2021 02.38
where he has been steadily making his mark as an artist to watch. 03.50

Zach has already garnered impressive support from fans and critics alike, 03.77
underlining his ability to connect with audiences. 02.92
*/}