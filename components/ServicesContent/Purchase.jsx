import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Purchase = () => {
    const myfeatures = [
        {
            title: "Effektivisering",
            description: "Effektivisera offertförfrågningar och inköpsorder med den automatiserade reglen för ombeställningar. Anpassade och skapa regler för påfyllningsmetoder samt synkronisera dina viktigaste processer genom programmet."
        },
        {
            title: "Flexibla köpeavtal",
            description: "Optimera varje upphandlingen med automatiserade och anpassningsbara köpavtal. Du kan säkra de bästa priserna genom de alternativa offertförfrågningarna, jämför produktlinjer och effektivisera de återkommande beställningarna."
        }
    ];






    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Purchase
