import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Ticket = () => {
    const myfeatures = [
        {
            title: "Fantastiskt användargränssnitt",
            description: "Highnox Helpdesk - plattformen stödjer ditt team, så att de kan stötta dina kunder på ett framgångsrikt sätt. Adjö till komplicerade system och hej till en nytt effektivt och kundcentrerad support med Highnox."
        },
        {
            title: "Spåra, prioritera och lös kundärenden",
            description: "Organisera dina ärende som du vill med den fantastiska kanban-vyn. Få en omedelbar överblick över ditt teams arbetsbelastning och kontrollera statusen för ärenden baserat på dina skräddarsydda SLA-regler."
        },
        {
            title: "Kundnöjdhet genom leveransen",
            description: "Du tappar aldrig nöjdheten genom ärendehanterinssystemet där dina kunder når dig enkelt via telefon eller mail. Kunden får en bekräftelse att supportteamet har tagit emot ärendet och att de jobbar på det."
        },
        {
            title: "Optimerat produktiviteten",
            description: "Highnox Helpdesk är optimerad för ditt teams produktivitet. Automatisera e-postmeddelanden eller åtgärder vid olika stadier av Ärenden. Definiera dynamiska e-postmallar för att automatisera de vanligaste svaren. Skapa dina SLA-regler och låt Odoo vidta åtgärder automatiskt. Eskalera ärenden till din chef med bara ett klick."
        }
    ];






    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Ticket
