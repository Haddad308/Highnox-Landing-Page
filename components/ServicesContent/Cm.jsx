import Feature from '@components/Feature'
import Image from 'next/image'
import React from 'react'

const Cm = () => {
    const myfeatures = [
        {
            title: "Anpassat",
            description: "HighNox ERP är helt anpassat för kontorshotell samt fastighetsbranschen. Vi ser till att konfigurera systemet med den funktionalitet och krav ni behöver redan från början, i stället för att bygga ett system som inte är anpassat."
        },
        {
            title: "Full kontroll",
            description: "Ni får full kontroll av din verksamhet samtliga hyresavtal samt effektivisering av era arbetsflöden. Ni får en komplett ekonomisk översikt för att fatta rätt beslut."
        },
        {
            title: "Schema och planritning",
            description: "Ni får tillgång till ett uppdelat schema som visar en hel bild på tolv månader över de uthyrda rummen samt ledig & mötesrum. Utöver detta får ni access till planritning som visar nuvarande och framtida intäkter varje månad."
        },
        {
            title: "Nyckeltal och rapporter",
            description: "Nyckeltalsrapporter visar verksamheten en tydlig översikt över hur intäkterna fördelas, största kunder och statistik uthyra kvm, lediga ytor, beläggningsgrad, snittpriser med mera."
        },
        {
            title: "Mötesrum",
            description: "Ni får full access till ett mötesrum modulen där ni kan hantera alla era bokningar för mötesrum och effektivisera uthyrningen med olika prisstrategier för olika tider under dagen."
        },
        {
            title: "Debiteringar",
            description: "Modulen hanterar de enstaka debiteringar som sker löpande över disken eller via mail."
        },
        {
            title: "Epost",
            description: "Kommunicera på ett professionellt sätt med e-postbekräftelser och påminnelser. Konfigurera ERP-systemet utifrån verksamhetens villkor för att automatisera hyresfaktureringen, skicka ut automatiska påminnelser med mera."
        },
        {
            title: "Kundkortet",
            description: "Ni får en helhetsbild av era kunder med alla kontrakt, fakturor, rabatter, mötesrum, offerter, ordrar, betalningsvillkor, faktureringsvillkor, noteringar med mera."
        },
        {
            title: "App och intranät",
            description: "Genom appen och online intranät kan era kunder boka mötesrummen, läsa viktiga nyheter, delta i event, se era lediga mötesrummen eller kontorsrummen."
        },
        {
            title: "Integrationer",
            description: "Automatisera faktureringen med smarta integrationer med ditt affärs- och ekonomisystem. Med automatisering blir hanteringen enkel genom att de betalda och förfallna fakturorna integreras."
        }
    ];

    return (
        <div className='p-10 px-20 flex flex-col gap-y-20' >
            <div>
                <h1 className='font-bold mb-2 '>Luta digtillbaka –Låt HighNox ERP spara tid och pengar och du missar inga kunder med enlångsiktig lösning för dina affärer.</h1>
                <p className='mb-5'>Omfattande system med smarta funktioner som hanterar helaflödet från offert till fakturering samt ger er en total överblick över era avtalen,kunder, rum, fakturering och rapporter för att underlätta era beslut. Kombinera bokningssystemet med Highnox övriga moduler föratt spara tid och pengar samt för att underlätta flödet i hela organisationen.</p>
            </div>
            <div className='grid grid-cols-2 gap-14' >
                {myfeatures.map(({ title, description },index) => <Feature key={index} title={title} description={description} />)}
            </div>
        </div>
    )
}

export default Cm