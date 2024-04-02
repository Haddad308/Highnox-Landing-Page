import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Web = () => {
    const myfeatures = [
        {
            title: "Drömmer du om att bygga om din hemsida",
            description: "Med Hignox Web Builder kan du nu skapa din dröm hemsida och desgina det med bara  dra och släpp funktioner. Du kan justera och göra om layouten som du önskar och vill.  Du kan lägga till filter och effekter till bilder, du kan animera ett element utan problem. "
        },
        {
            title: "Helt integrerad och skalbar",
            description: "Genom de fantastiska funktionerna kan du utveckla ditt företagshemsida. Förbättra användarupplevelsen och tillhandahålla ett enhetligt system för att driva och växa ditt företag på ett effektivt sätt."
        }
    ];
    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Web
