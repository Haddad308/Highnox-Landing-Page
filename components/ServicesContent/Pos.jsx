import Feature from '@components/Feature';
import Image from 'next/image';
import React from 'react'

const Pos = () => {
    const myfeatures = [
        {
            title: "Debiteringssystem i kassan",
            description: "Gränssnitt som har allt så att alla kan behärska det på några minuter, men ändå fullt med en rad avancerade funktioner. Hantera alla transaktioner med lätthet och fokusera på kunderna som är prio. Med Highnox kassa kan du ta betalt direkt från kunden eller debitera notan på kundens räkning. Fakturera alla debiteringar på en faktura."
        },
        {
            title: "Kassa för krögare & Restaurang",
            description: "Highnox POS restaurang är den perfekta lösningen för att ge sömlös service i alla typer av restauranger, från en foodtruck till en konceptcocktailbar. Hantera notorna med bordsritningar, funktioner för att dela upp notan, debitera kunderna samt massa andra funktioner som rabatter direkt i kassan m.m."
        },
        {
            title: "Gränssnitt och användarvänlighet",
            description: "Gränssnitt som har allt så att alla kan behärska det på några minuter, men ändå fullt med en rad avancerade funktioner. Hantera alla transaktioner med lätthet och fokusera på kunderna som är prio."
        },
        {
            title: "Bordsritningar",
            description: "Hantera notorna med bordsritningar, funktioner för att dela upp notan, debitera kunderna samt massa andra funktioner som rabatter direkt i kassan m.m."
        }
    ];


    return (
        <div className='p-10 px-20 flex flex-col gap-y-20' >
            <div className='grid grid-cols-2 gap-14' >
                {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
            </div>
            <div className='flex justify-center' >
                <Image 
                src={"/posf.svg"}
                width={800}
                height={500}
                alt={"post"}
                >
                </Image>
            </div>
        </div>
    )
}

export default Pos
