import Feature from '@components/Feature';
import React from 'react'

const Hr = () => {
    const myfeatures = [
        {
            title: "Alla anställda på ett ställe",
            description: "Få ett helikopterperspektiv över varje avdelning innan du zoomar in på detaljerna. Sortera anställda efter arbetstid, jobbtitel, till och med kontraktsstatus för att få en fullständig bild av ditt team från alla möjliga vinklar. Registrera varje anställds unika kompetens, så nästa gång du letar efter en tysktalande utvecklare-expert vet du exakt vem du ska ringa."
        },
        {
            title: "Kontroll över ledigheten",
            description: "Håll koll på kraftuttagsförfrågningar med integrerad tidsspårning. Använd närvarorapporten för att övervaka närvaro och snabbt godkänna semesterförfrågningar. Gör varje steg i ledighetsprocessen enkelt och transparent med Highnox för ledighet."
        },
        {
            title: "Utvecklingssamtal",
            description: "Highnox utvecklingssamtalmodul gör det enkelt att regelbundet ge din anställda feedback och låta dem säga vad de tycker i gengäld. Sätt upp ett periodiskt utvecklingssamtal för att stärka ditt företags viktigaste tillgång: anställda."
        },
        {
            title: "Rekryteringsverktyg",
            description: "Highnox rekryteringsverktyg effektiviserar hela din rekryteringsprocess, så att du snabbt och enkelt kan hitta de bästa personerna för ditt team. Håll ett öga på alla jobbannonser, sökande och schemalagda aktiviteter med tydlig statistik för varje jobb."
        },
        {
            title: "Fleet Management",
            description: "Få en lättläst översikt över dina fordon, kontrakt, reparationer, kostnader och förare. Övervaka alla kontrakt för dina fordon och få varningsmeddelanden när kontrakten når sitt utgångsdatum."
        },
        {
            title: "Utlägg",
            description: "Highnox utlägg håller allt organiserat så att du kan skicka in utlägg direkt från din telefon. Oavsett om du e-postar en utgift eller laddar upp ett kvitto, glöm aldrig att logga en utgift genom att skicka in kvitton när du hämtar dem!"
        },
        {
            title: "Intranät",
            description: "Samla företagsstrategi, bolagets information, kommunikation, chattkanaler och engagemang på en och samma plats. Få kontinuerlig återkoppling och feedback från medarbetare och fira alla era framgångar tillsammans."
        },
        {
            title: "Kommunicera med lätthet",
            description: "Skapa meddelandekanaler för att nå massorna. Använd direktmeddelanden, WhatsApp, livechatt, röstsamtal och videosamtal – allt till hands."
        },
        {
            title: "App och intranät",
            description: "Genom appen och online intranät kan era kunder boka mötesrummen, läsa viktiga nyheter, delta i event, och se de lediga mötesrummen."
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

export default Hr
