import Image from 'next/image'
import React from 'react'

const page = ({params}) => {
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
                <div className=' h-[90%] w-[90%] absolute  z-20 right-10 flex items-center justify-around' >
                    <div className=" flex flex-col justify-center gap-5 items-center ">
                        <h1 className="text-5xl font-bold" >Alla dina affärer <br />  på en plattform.</h1>
                        <p className="text-right mb-20">Håll dig organiserad, fokuserad och uppnå mer <br /> med vår kraftfulla webbapp för produktivitet. Ta <br /> kontroll över dina uppgifter, erövra dina mål.</p>
                    </div>
                    <div className="relative">
                        <Image
                            src={"/11 1.png"}
                            alt="aa"
                            width={700}
                            height={500}
                        />
                        <Image
                            src={"/12 1.png"}
                            alt="aa"
                            width={1000}
                            height={500}
                            className="absolute  top-64 right-28"
                        />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default page
