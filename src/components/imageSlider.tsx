import { useState } from 'react'
import { motion } from 'framer-motion'

import img1 from '../assets/3main/image1.png'
import img2 from '../assets/3main/image.webp'
import img3 from '../assets/3main/image3.png'

const ImageSlider = () => {
    const images = [ img2, img1, img3 ]
    const [ positionIndex, setPositionIndex ] = useState([ 0, 1, 2 ])

    const handleNext = () => {
        setPositionIndex(prev => {
            return prev.map(index => (index + 1) % prev.length)
        })
    }

    const position = [ 'center', 'right', 'left' ]

    const variants = {
        center: {
            x: '0%',
            scale: 1.2,
            zIndex: 3,
            opacity: 1,
            boxShadow: '0px 12px 25px rgba(0,0,0,0.5)'
        },
        left: {
            x: '-95%',
            scale: 1,
            zIndex: 1,
            opacity: 0.9,
            boxShadow: '0px 8px 18px rgba(0,0,0,0.4)'
        },
        right: {
            x: '95%',
            scale: 1,
            zIndex: 1,
            opacity: 0.9,
            boxShadow: '0px 8px 18px rgba(0,0,0,0.4)'
        },
    }

    return (
        <div className="relative flex items-center justify-center h-[350px] w-full" onMouseEnter={handleNext}>
            {images.map((img, idx) => (
                <motion.img
                    key={idx}
                    src={img}
                    alt="Home image"
                    className="rounded-2xl cursor-pointer"
                    initial="center"
                    animate={position[ positionIndex[ idx ] ]}
                    variants={variants}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    style={{
                        width: '17vw',
                        height: '350px',
                        position: 'absolute',
                        zIndex: positionIndex[ idx ] === 0 ? 1 : positionIndex[ idx ] === 1 ? 3 : 2
                    }}
                />
            ))}
        </div>
    )
}

export default ImageSlider
