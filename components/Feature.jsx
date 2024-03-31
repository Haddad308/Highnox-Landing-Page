import Image from 'next/image'
import React from 'react'

const Feature = ({ title , description}) => {
    return (
        <div>
            <Image
                src={"/assets/Services/feature.svg"}
                alt="feature"
                width={50}
                height={50}
            />
            <h1 className='font-bold my-1' >{title}</h1>
            <p>{description}
            </p>
        </div>
    )
}

export default Feature
