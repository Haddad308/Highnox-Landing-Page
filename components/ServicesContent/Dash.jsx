import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Dash = () => {
    const myfeatures = [
        {
            title: "Pivot överblick",
            description: "Highnox fina pivot ger dig full överblick över de dynamiska rapporterna. Skapa, visa och anpassa rapporter utan ansträngning med hjälp av en användarvänlig pivotvy och datauppdateringar i realtid."
        },
        {
            title: "Visualisering",
            description: "Genom den användarvänliga dashboarden, kommer du åt all information. All data sorteras eller anpassning utifrån ditt behov och kategorier. Datan översätts till visuella representationer för att låta hela teamet förstå businessen och ger er beslutsfattande underlag."
        }
    ];



    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Dash
