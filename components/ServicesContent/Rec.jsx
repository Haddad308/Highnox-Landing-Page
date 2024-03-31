import Feature from '@components/Feature';
import React from 'react'

const Rec = () => {
    const myfeatures = [
        {
            title: "Alla jobbannonser på ett ställe",
            description: "Håll ett öga på alla jobbannonser, sökande och schemalagda aktiviteter. Varje annons visar en tydlig statistik på rekryteringsinstrumentpanelen."
        },
        {
            title: "Håll de sökande organiserade",
            description: "Klicka på en jobbannons för att se alla sökande organiserade efter fas. Dra och släpp sökandekort mellan faser. Klicka på ett sökandekort för att snabbt se informationen och ändra var de är i pipelinen, eller få sökande att automatiskt flyttas i pipelinen efter att vissa aktiviteter är gjorda."
        },
        {
            title: "Automatisk dataimport",
            description: "Automatisk dataimport för att minska manuella hanteringen. När sökande ansöker online importeras deras data och information och läggs till i ansökan automatiskt. CV, personligt brev och andra dokument bifogas sökandens kort."
        },
        {
            title: "Kalender",
            description: "Kandidater kan själva boka möten online och välja den tid som passar dem bäst."
        }
    ];


    return (
        <div className='p-10 px-20 flex flex-col gap-y-20' >
            <div className='grid grid-cols-2 gap-14' >
                {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
            </div>
        </div>
    )
}

export default Rec
