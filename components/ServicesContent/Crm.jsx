import Image from 'next/image'
import React from 'react'

const Crm = () => {
    return (
        <div className='p-10 px-20 flex flex-col gap-y-20' >
            <div>
                <h1 className='font-bold' >Säljteam från bra till bra</h1>
                <ul className='list-disc' >
                    <li>Highnox CRM och Marknad är det verkliga kundcentrerade verktyget för dina försäljningsbehov. Spåra potentiella kunder, få korrekta prognoser och fokusera på det som är viktigt</li>
                    <li>Skapa rena, professionella och interaktiva offerter direkt med Highnox kraftfulla offertbyggare.</li>
                    <li>Hantera dina försäljningsorder, kundtjänst och e-handelsbutik på en enda plattform.</li>
                    <li>Använd offertmallar för att automatisera vanliga beställningar.</li>
                    <li>Tillämpa automatiskt rätt prissättning och skatter för varje kund.</li>
                    <li>Hoppa över tidskrävande uppgifter för att fokusera på det som är viktigast: att sälja!</li>
                    <li>Stäng affärer snabbare med kundportalen.</li>
                    <li>Låt kunderna hjälpa sig själva! Kunder kan få tillgång till sina offerter, försäljningsorder, leveransorder och mer...</li>
                    <li>Spara tid med online betalningar och avsluta affärer snabbare med e-signaturer på offerter, kontrakt och andra PDF-filer.</li>
                    <li>Skapa anpassade prisstrategier.</li>
                </ul>
            </div>
            <div className='grid md:grid-cols-2 gap-5' >
                <div>
                    <h1 className='font-bold mb-5'>Håll möjligheter framför dig</h1>

                    <h1 className='font-bold '>Vårpipelines överblick.</h1>
                    <p className='mb-2'>Varjetillfälle listas som ett kort med all viktig information; och varje steg ger enöversikt över dina förväntade intäkter.</p>

                    <h1 className='font-bold '>Effektivorganisation</h1>
                    <p className='mb-2'>Kanban-vynorganiserar möjligheter efter etapp. Dra och släpp dem på pipelinen för attflytta dem mellan olika stegar.</p>

                    <h1 className='font-bold '>Missa aldrig en uppföljning</h1>
                    <p>Schedule calls, meetings, mailings, or quotations, and Odooautomatically plans the next activity based on your sales script.</p>
                </div>
                <div>
                    <Image
                        src="/assets/Services/CRM.svg"
                        alt="aa"
                        width={700}
                        height={400}
                        className='border-2  overflow-hidden'
                    />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <div>
                    <Image
                        src="/assets/Services/crm2.svg"
                        alt="aa"
                        width={700}
                        height={400}
                        className='border-2  overflow-hidden'
                    />
                </div>
                <div>
                    <h1 className='font-bold mb-5'>Enkelkommunikation betyder ingen felkommunikation</h1>
                    <p className='mb-5'>Kommunikationär nyckeln. Inkommande e-postmeddelanden läggs automatiskt till i din pipeline,och all kontakt med ditt team och kunder sker från en enda plats, vilket säkerställerenkel tillgång till information hela tiden.</p>
                    <h1 className='font-bold mb-5'>Integreras med</h1>
                    <Image
                        src="/assets/Services/crm1.svg"
                        alt="aa"
                        width={600}
                        height={400}
                        className='border-2  overflow-hidden'
                    />
                </div>
            </div>
            <div>
                <h1 className='font-bold mb-5'>Marknad</h1>
                <h1 className='font-bold mb-2'>Slutabetala för att skicka mejl</h1>
                <p className='mb-5'>HighnoxEmail Marketing hjälper alla att skapa professionella e-postmeddelanden pånågra sekunder och levererar dem till rätt målgrupp - vid perfekt tidpunkt!</p>

                <h1 className='font-bold mb-2'>Skapafantastiska kampanjer</h1>
                <p className='mb-5'>Börja frånbörjan eller välj ett av våra teman. Skapaframgångsrika e-postkampanjer som resonerar med dina potentiella kunder utannågon IT-kunskap. Få total kontroll över ditt e-postinnehåll och din layouttack vare en intuitiv och lättanvänd programvara.</p>

                <h1 className='font-bold mb-2'>Ettkraftfullt SMS-marknadsföringsverktyg</h1>
                <p className='mb-5'>Dinakampanjer levereras direkt i dina kontakters fickor. SMS ärsnabbare än e-post och har den bästa öppningshastigheten
                    Behöver dupåminna dina deltagare om ditt evenemang imorgon? Har du en flashkampanj somvarar i fem timmar? Gå på en sms-kampanj!</p>

                <h1 className='font-bold mb-2'>Events</h1>

                <h1 className='font-bold mb-2'>Hantera evenemang på plats och online</h1>
                <p className='mb-5'>Organisera, publicera, marknadsföra och sälj med en enda applikation inklusive användarvänliga instrumentpaneler, djupgående evenemangsformulär, enkla metoder för att hantera sponsorer, montrar, föredrag, virtuella evenemang, automatiserade webbplatser och så mycket mer!</p>
            </div>
        </div>
    )
}

export default Crm
