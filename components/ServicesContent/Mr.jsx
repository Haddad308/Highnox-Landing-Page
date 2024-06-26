import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Mr = () => {
    const myfeatures = [
        {
            title: "Automatisera underhåll",
            description: "Genom automatisering underhållsförfrågningar kan du beräkna standardstatistik för att hjälpa er att planera underhåll i förväg, inklusive medeltid mellan fel (MTBF), medeltid till reparation (MTTR) och förväntat nästa feldatum,  Låter dig automatisera mätning och schemaläggning av underhåll i förväg."
        },
        {
            title: "Organisera underhållsförfrågningar",
            description: "GNi kan organisera era underhållsförfrågningar genom den fantastiska kanban och kalendervyer. Ni Spårar enkelt framstegen för underhållsbegäranden med hjälp av kanban- vyn.Ni kan använd underhållskalendern för att planera och organisera aktiviteter.Dina anställda kommer att älska det snabba dra - och - släpp - funktionen för att organisera underhållsförfrågningar."
        }
    ];
    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Mr
