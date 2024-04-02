import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Time = () => {
    const myfeatures = [
        {
            title: "Tidspårning",
            description: "Sätt på en timer och se till att rapportera alltid dina tider som är kopplade till rätt uppdrag, kostnadsprojekt, kundprojekt eller försäljningsorder. Få en överblick över de fakturerbara tiderna efter anställd, uppdrag, kundprojekt, kostnadsprojekt mm."
        },
        {
            title: "Håll de sökande organiserade",
            description: "Klicka på en jobbannonsen för att se alla sökande organiserade efter fas. Dra och släpp sökandekort mellan faser. Klicka på ett sökandekort för att snabbt se informationen och ändra var de är i pipelinen, eller få sökande att automatiskt flyttas i pipelinen efter att vissa aktiviteter är gjorda."
        },
        {
            title: "Håll utkik på lönsamhet",
            description: "Få en överblick över de fakturerbara tiderna efter anställd, uppdrag, kundprojekt, kostnadsprojekt mm. Direkt överblick över vem som jobbar med vad samt för att kontrollera teamets övertid."
        },
        {
            title: "Påminnelser och fakturering",
            description: "Skicka påminnelser till användare som har tidrapporter att kontrollera tiderna. Timer för att Starta och stoppa tiden var som helst."
        }
    ];





    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Time
