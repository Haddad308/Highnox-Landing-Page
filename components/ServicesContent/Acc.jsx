import Feature from '@components/Feature';
import React from 'react'

const Acc = () => {
    const myfeatures = [
        {
            title: "Ett snabbt gränssnitt",
            description: "Alla transaktioner bearbetas snabbare än ett ögonblick. Det hjälper personalen att göra mycket mer på kortare tid."
        },
        {
            title: "Håll de sökande organiserade",
            description: "Klicka på en jobbannonsen för att se alla sökande organiserade efter fas. Dra och släpp sökandekort mellan faser. Klicka på ett sökandekort för att snabbt se informationen och ändra var de är i pipelinen, eller få sökande att automatiskt flyttas i pipelinen efter att vissa aktiviteter är gjorda."
        },
        {
            title: "AI funktioner",
            description: "Vår avancerade AI-fakturadatainsamling har en igenkänningsgrad på ungefär 95%. Allt man behöver göra är att kontrollera fakturan."
        },
        {
            title: "Banksynkronisering",
            description: "Highnox kommer att integreras med alla svenska banker och banker från hela världen för att slippa importera kontoutdrag manuellt. 90% av transaktionerna matchas automatiskt med bokföringen."
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

export default Acc
