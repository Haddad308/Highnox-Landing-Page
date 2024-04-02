import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Sm = () => {
    const myfeatures = [
        {
            title: "Anpassat",
            description: "Omfattande bokningssystem som kan användas för din verksamhet. Systemet är helt webbaserat och hanterar hela flödet från bokning till fakturering. De smarta funktionerna som finns i systemet hjälper er att få kontroll över alla era bokningar, minimera risken för manuella fel, missa aldrig ändringar eller matavvikelser, automatiserade bekräftelser, automatiserade välkomstbrev med möjlighet för kunden att uppdatera sina bokningar."
        },
        {
            title: "Schema och planritning",
            description: "Ni får tillgång till ett uppdelat schema med en översiktlig bild över era rum för att hantera era bokningar och förfrågningar."
        },
        {
            title: "Ekonomi",
            description: "Ni får en full ekonomisk översikt i era bokningar. Översikten ger er anställda korrekt underlag för att fatta rätt beslut."
        },
        {
            title: "Nyckeltal och rapporter",
            description: "Nyckeltalsrapporter visar verksamheten en tydlig översikt över hur intäkterna fördelas, största kunder och statistik för att fatta rätt beslut. ERP-systemet kan konfigureras för att skicka ut automatiska påminnelser, förskottsfakturor t.ex. 30 dagar före bokningsdatumet."
        },
        {
            title: "Debiteringar",
            description: "Modulen hanterar de enstaka debiteringar ifall projektledaren missat något."
        },
        {
            title: "Kassasystem",
            description: "En modul som kan användas i baren eller under event för mer försäljning. Modulen kan integreras med vilket betalsystem som helst utöver detta kan ni debitera mer försäljning på kundens räkning."
        },
        {
            title: "Epost",
            description: "Kommunicera på ett professionellt sätt med e-postbekräftelser och påminnelser. Konfigurera ERP-systemet utifrån verksamhetens villkor för att automatisera hyresfaktureringen, skicka ut automatiska påminnelser med mera."
        },
        {
            title: "Kundkortet",
            description: "Ni får en helhetsbild av era kunder med alla bokningar, fakturor, rabatter, offerter, ordrar, betalningsvillkor, faktureringsvillkor, noteringar m.m. Genom appen och online intranät, kan era kunder boka mötesrummen, läsa viktiga nyheter, delta i event, se era lediga mötesrum."
        },
        {
            title: "Integrationer",
            description: "Automatisera faktureringen med smarta integrationer med ditt affärs- och ekonomisystem. Med automatisering blir hanteringen enkel genom att de betalda och förfallna fakturorna."
        }
    ];
    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Sm
