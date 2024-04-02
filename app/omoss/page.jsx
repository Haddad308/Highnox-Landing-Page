import Feature from '@components/Feature'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const myfeatures = [
        {
            title: "Bolaget",
            description: "Highnox är ett privatägt företag med sitt säte i Stockholm."
        },
        {
            title: "Support och utvecklingsteam",
            description: "Support, UI/UX och drift finns i Stockholm. Utvecklingsteamet består av 10 personer och alla finns tillgängliga 24/7. "
        },
        {
            title: "Ledningen   ",
            description: "Ledning har 25 års erfarenhet inom ERP system & utveckling samt 17 års erfarenhet inom kontorshotell och konferens branschen."
        }
        
    ];

    return (
        <div>
            <div className='relative h-[calc(100vh-64px)] bg-[#e1f4ff]'  >
                <div className=' h-0 w-0 
                border-r-[1500px] border-r-white
                border-t-[400px] border-t-[#e1f4ff]
                absolute bottom-0 right-0
                z-0
                ' >
                </div>
                <div className="absolute w-full h-full z-20 sm:flex md:flex lg:flex justify-center items-center md:gap-10 px-5 pt-10" >
                    <div className="flex flex-col justify-start gap-5 items-start  md:w-1/4">
                        <h1 className="text-5xl text-left font-bold" >Vilka vi är</h1>
                        <p className="text-left mb-20">Vi är ett professionellt och passionerat team som bygger kraftfulla ERP system för att hjälpa företag att effektivisera och automatisera sig. Det vi skapar, löser komplexa problem på ett okomplicerat sätt.</p>
                    </div>
                    <div className="relative">
                        <Image
                            src={"/ommoss.svg"}
                            alt="aa"
                            width={700}
                            height={500}
                        />
                    </div>
                </div>
                
            </div>
            <div className='grid px-10 md:grid-cols-2 gap-14 md:px-20 p-10 pt-0' >
                {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
            </div>
        </div>
    )
}

export default page
