import Feature from '@components/Feature';
import React from 'react'

const Event = () => {
    const myfeatures = [
        {
            title: "Arrangera events",
            description: "Allt-i-ett-program för att organisera dina events, hantera händelser av vilken typ event och skala som helst. Highnox Events har alla aspekter för en Event Planners uppdrag allt från eventorganisation och biljettförsäljning till synlighet och marknadsföring."
        },
        {
            title: "Organisera kalendrar",
            description: "Genom Gantt View kan du organisera dina event och lägg till ett formulär för presentatören på din evenemangssida för att underlätta det för besökarna att skicka in föredrag och nomineringar av talare. Organisera varje event och presentation samt schemalägg dem på några minuter."
        },
        {
            title: "Biljettförsäljning",
            description: "Hantera eventsregistrering och biljettförsäljning online. Du kan också välja gratis event alternativt att deltagarna ska kunna köpa biljetter via Eventets hemsidan. Du kan välja betalningsmetod med kreditkort online eller kundfakturering. Sätta dina villkor, medlemsförmåner och biljettnivåer."
        },
        {
            title: "Sponsorer kommer till dig",
            description: "Få eventsponsring och marknadsför dina partners genom att hantera dina befintliga och nya sponsorer med Highnox Events. Lägg upp dina sponsorer till dina events."
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

export default Event
