import Acc from '@components/ServicesContent/Acc';
import Cm from '@components/ServicesContent/Cm';
import Crm from '@components/ServicesContent/Crm';
import Dash from '@components/ServicesContent/Dash';
import Event from '@components/ServicesContent/Event';
import Hr from '@components/ServicesContent/Hr';
import Mr from '@components/ServicesContent/Mr';
import Pay from '@components/ServicesContent/Pay';
import Pm from '@components/ServicesContent/Pm';
import Pos from '@components/ServicesContent/Pos';
import Purchase from '@components/ServicesContent/Purchase';
import Rec from '@components/ServicesContent/Rec';
import Sm from '@components/ServicesContent/Sm';
import Sur from '@components/ServicesContent/Sur';
import Ticket from '@components/ServicesContent/Ticket';
import Time from '@components/ServicesContent/Time';
import Web from '@components/ServicesContent/Web';
import Image from 'next/image'
import React from 'react'


// MR, Internet, website. 
const SERVICES = {
    "crm": {
        "image": "/assets/Services/CRM.svg",
        "logo": "/crm.svg",
        "title": "CRM & Marketing",
        "description": 'Skapa rena, professionella och interaktiva offerter direkt med Highnox kraftfullaoffertbyggare.Hantera dinaförsäljningsorder, kundtjänst och e- handelsbutik på en enda plattform.',
        "content": <Crm />
    },
    "sm": {
        "image": "/assets/Services/SM.svg",
        "logo": "/cm.svg",
        "title": "Conference Management",
        "description": "Ett komplett webbaserat bokningssystem förkonferensanläggningar, kontorshotell, kursgårdar, mötesanläggningar,föreningar, kommuner och statliga myndigheter. Omfattande bokningssystem med smarta funktioner som hanterarhela flödet från bokning till fakturering samt ger er en total överblick överera bokningar, kunder, bekräftelser, fakturering och rapporter för attunderlätta era beslut. Kombinera bokningssystemet med Highnox övriga moduler föratt spara tid och pengar samt för att underlätta flödet i hela organisationen.",
        "content": <Sm />
    },
    "cm": {
        "image": "/assets/Services/CM.svg",
        "logo": "/SM .svg",
        "title": "Space Management",
        "description": "Ett helt kraftfull och webbaserat hyresavtalssystem för kontorshotelloch  fastighetsägare.Modulen är det enkla sättet att övervaka era  rumsuthyrningarsamt att ha sten kontroll över din verksamhets samtliga hyresavtal ocheffektivisering av era arbetsflöden.",
        "content": <Cm />
    },
    "hr": {
        "image": "/assets/Services/HR.svg",
        "logo": "/HR.svg",
        "title": "HR och intranät",
        "description": "Ett nytt huvudkontor för all information om dina anställda Employees- app är mycket mer än bara en personalkatalog.Det ärnavet för en hel uppsättning av HR- funktioner.",
        "content": <Hr />
    },
    "Intranet": {
        "image": "/assets/Services/HR.svg",
        "logo": "/HR.svg",
        "title": "HR och intranät",
        "description": "Ett nytt huvudkontor för all information om dina anställda Employees- app är mycket mer än bara en personalkatalog.Det ärnavet för en hel uppsättning av HR- funktioner.",
        "content": <Hr />
    },
    "pm": {
        "image": "/assets/Services/projectmanganment.svg",
        "logo": "/pm.svg",
        "title": "Project Management",
        "description": "Highnox är den ultimata programvaran förprojektledning. Organisera uppgifter och intressenter, få en heltäckandeöversikt över ditt projekt och öka teamets produktivitet som aldrig förr.",
        "content": <Pm />
    },
    "mr": {
        "image": "/assets/Services/mr.svg",
        "logo": "/mr.svg",
        "title": "Maintenance & Repair",
        "description": "Organisera dina reparationer och underhåll med fantastisk kanban och kalendervyer.",
        "content": <Mr />
    },
    "Recruitment": {
        "image": "/assets/Services/rec.svg",
        "logo": "/Recruitment 1.svg",
        "title": "Recruitment- Rekrytering",
        "description": "Highnox rekryteringsverktyg effektiviserar hela din rekryteringsprocess, så att du snabbt och enkelt kan hitta de bästa personerna till ditt team.",
        "content": <Rec />
    },
    "Payroll": {
        "image": "/assets/Services/payroll.svg",
        "logo": "/Payroll 1.svg",
        "title": "Payroll- Löner",
        "description": "Highnox lönesystem - är så smart för att hantera flödet från drift till lön.",
        "content": <Pay />
    },
    "POS": {
        "image": "/assets/Services/pos.svg",
        "logo": "/POS 1.svg",
        "title": "POS- Kassasystem",
        "description": "Highnox POS är intuitivt, pålitligt online och offline och erbjuder ett brett utbud av alternativ för att möta alla dina affärsbehov. Ställ in det på några minuter, börja sälja på några sekunder och håll både din personal och dina kunder nöjda, Kassasystemet fungerar för Coworking, konferens och för krögare.",
        "content": <Pos />
    },
    "Accounting": {
        "image": "/assets/Services/accounting.svg",
        "logo": "/Accounting 1.svg",
        "title": "Accounting- Bokföring",
        "description": "Highnox bokföring är ett modernt och användarvänlig bokföringsprogram. Användaren kommer att uppleva enkelhen i programmet och fatta att arbetet är annorlunda för att undvika frustrationen av de långsamma gränssnitten, överfulla e-email inkorgar och oändliga data.",
        "content": <Acc />
    },
    "Dashboards": {
        "image": "/assets/Services/dashboard.svg",
        "logo": "/c.svg",
        "title": "Dashboards",
        "description": "Highnox BI-verktyg ger dig översikten för att driva din verksamhet framåt. Ha värdefulla insikter i din ekonomi genom de fina rapporterna.",
        "content": <Dash />
    },
    "Event": {
        "image": "/assets/Services/events.svg",
        "logo": "/Event 1.svg",
        "title": "Event",
        "description": "Med Highnox events kan du prganisera  alla dina events, marknadsföra, publicera samt sälja mer med ett enda program. Användarvänliga dashboards,  Enkla evenemangsformulär,  virtuella evenemang och mycket mer!",
        "content": <Event />
    },
    "Survey": {
        "image": "/assets/Services/survey.svg",
        "logo": "/Survey 1.svg",
        "title": "Survey-Kundnöjdhet",
        "description": "Skapa unikt engagerande nöjdhetsundersökningar, medarbetarbedömningar, marknadsföringskampanjer, feedbackformulär och mycket mer!",
        "content": <Sur />
    },
    "purchase": {
        "image": "/assets/Services/pp.svg",
        "logo": "/purchase 1.svg",
        "title": "Purchase - Inköp",
        "description": "Luta dig tillbaka och låt Highnox inköp (Allt i ett program) göra jobbet. Allt från anbudsförfrågningar till kvitton, från produktvarianter till leverantörsräkningar. ",
        "content": <Purchase />
    },
    "Ticketing": {
        "image": "/assets/Services/help.svg",
        "logo": "/Ticketing system 1.svg",
        "title": "Helpdesk- Ärendehantering",
        "description": "Highnox Helpdesk - Helt integrerat plattform som stödjer ditt team, så att de kan hjälpa dina kunder på ett effektivt och framgångsrikt sätt. Adjö till de gamla komplicerade systemen och hej till en nytt effektivt och kundcentrerad support med Highnox.",
        "content": <Ticket />
    },
    "Web": {
        "image": "/assets/Services/web.svg",
        "logo": "/Web 1.svg",
        "title": "Website",
        "description": "Highnox Website builder förändrar hur folk tänker kring webbdesign. Tack vare de enkla och användarvänliga  funktionerna kan du skapa, anpassa och hantera din hemsida utan ansträngning.",
        "content": <Web />
    },
    "Timesheet": {
        "image": "/assets/Services/t.svg",
        "logo": "/Timesheet 1.svg",
        "title": "Timesheet- Tidsrapportering",
        "description": "Highnox Tidsrapportering låter dig och ditt team spåra och hantera fakturerbara timmar, godkänna tid och underlätta faktureringen av ditt och teamets tjänster. Allt i ett program med underbar gränssnitt.",
        "content": <Time />
    }
};




const page = ({ params }) => {
    const serviceUrl = params.service;
    return (
        <div>
            <div className='relative h-[calc(100vh-64px)] bg-[#e1f4ff]'  >
                <div className=' 
                border-r-[1500px] border-r-white
                border-t-[400px] border-t-[#e1f4ff]
                h-0 w-0 
                absolute bottom-0 right-0
                z-0
                ' >
                </div>
                <div className='absolute w-full h-full  z-20 flex flex-col md:flex-row mx-10  md:items-center justify-center' >
                    <div className="  flex flex-col justify-start gap-5 items-start w-[80%] md:w-[44%]">
                        <Image
                            src={SERVICES[serviceUrl]?.logo}
                            alt="aa"
                            width={130}
                            height={150}
                        />
                        <h1 className="text-4xl font-bold" >{SERVICES[serviceUrl]?.title}</h1>
                        <p className="text-left mb-20 ">{SERVICES[serviceUrl]?.description}</p>
                    </div>
                    <div className="relative pr-14 md:mr-10 overflow-hidden flex items-center justify-center ">
                        <Image
                            src={SERVICES[serviceUrl]?.image}
                            alt="Serivce"
                            width={700}
                            height={400}
                            className='border-2  overflow-hidden'
                        />
                    </div>
                </div>
            </div>
            {SERVICES[serviceUrl]?.content}
        </div>

    )
}

export default page
