import Service from "@components/Service";
import Image from "next/image";

const services = [
  {
    "title": "CRM & Marketing",
    "description": "Skapa rena, professionella och interaktiva offerter direkt med Highnox kraftfulla offert-byggare.",
    "src": "/crm.svg",
    "page": "/crm"
  },
  {
    "title": "Space Management",
    "description": "Ett helt kraftfull och webbaserat hyresavtalssystem för kontorshotell",
    "src": "/SM .svg",
    "page": "/sm"
  },
  {
    "title": "Conference Management",
    "description": "Omfattande bokningssystem med smarta funktioner som hanterar hela flödet från bokning till fakturering",
    "src": "/cm.svg",
    "page": "/cm"
  },
  {
    "title": "Human Resources",
    "description": "Highnox är mycket mer än bara en personalkatalog. Det är navet för en hel uppsättning av HR-funktioner.",
    "src": "/HR.svg",
    "page": "/hr"
  },
  {
    "title": "Intranet",
    "description": "Företagsstrategi, bolagets-information, kommunikation, chattkanaler och engagemang på en och samma plats.",
    "src": "/A.svg",
    "page": "/Intranet"
  },
  {
    "title": "Project Management  ",
    "description": "Den ultimata programvaran för att organisera uppgifter och få en heltäckande översikt över dina projekt",
    "src": "/pm.svg",
    "page": "/pm"
  },
  {
    "title": "Maintenance & Repair",
    "description": "Organisera dina reparationer och underhåll med fantastisk kanban och kalendervyer.",
    "src": "/mr.svg",
    "page": "/mr"
  },
  {
    "title": "Recruitment",
    "description": "Highnox rekryteringsverktyg effektiviserar hela din rekryteringsprocess",
    "src": "/Recruitment 1.svg",
    "page": "/Recruitment"
  },
  {
    "title": "Payroll",
    "description": "Hantera löner och rapportering digitalt och automatisera bokföringen",
    "src": "/Payroll 1.svg",
    "page": "/Payroll"
  },
  {
    "title": "Point of Sale",
    "description": "POS erbjuder ett brett utbud av alternativ för att möta alla dina affärsbehov",
    "src": "/POS 1.svg",
    "page": "/POS"
  },
  {
    "title": "Accounting",
    "description": "Ett modernt bokföringsprogram. Så rent att du kommer att uppleva arbetet annorlunda",
    "src": "/Accounting 1.svg",
    "page": "/Accounting"
  },
  {
    "title": "Dashboards",
    "description": "Effortlessly organize and prioritize your tasks. ",
    "src": "/c.svg",
    "page": "/Dashboards"
  },
  {
    "title": "Event",
    "description": "Organisera, publicera, marknadsföra och sälj med en enda applikation",
    "src": "/Event 1.svg",
    "page": "/Event"
  },
  {
    "title": "Survey",
    "description": "Skapa unikt marknadsföringskampanjer, feedbackformulär och så mycket mer!",
    "src": "/Survey 1.svg",
    "page": "/Survey"
  },
  {
    "title": "Purchase",
    "description": "Luta dig tillbaka och låt Odoos allt-i-ett-programvara för inköp göra jobbet åt dig.",
    "src": "/purchase 1.svg",
    "page": "/purchase"
  },
  {
    "title": "Ticketing & Helpdesk",
    "description": "Helpdesk - biljettplattformen som stödjer ditt team, så att de kan stötta dina kunder.",
    "src": "/Ticketing system 1.svg",
    "page": "/Ticketing"
  },
  {
    "title": "Website ",
    "description": "Webbplatsen förändrar hur människor tänker om webbdesign.",
    "src": "/Web 1.svg",
    "page": "/Web"
  },
  {
    "title": "Timesheet",
    "description": "Tidrapporter låter ditt team spåra och validera fakturerbara timmar",
    "src": "/Timesheet 1.svg",
    "page": "/Timesheet"
  }
]

export default function Home() {
  return (
    <div>
      {/* Section1 */}
      <div className='relative h-[calc(100vh-70px)] bg-[#e1f4ff]'  >
        <div className=' h-0 w-0 
                hidden
                md:block
                border-r-[1519px] border-r-white
                border-t-[400px] border-t-transparent
                absolute bottom-0 right-0
                z-0
                ' >
        </div>
        <div className="absolute w-full h-full z-20 sm:flex md:flex lg:flex justify-center items-center md:gap-10 px-5 pt-10" >
          <div className="flex flex-col justify-center gap-5 items-center ">
            <h1 className="text-5xl font-bold" >Alla dina affärer <br />  på en plattform.</h1>
            <p className="text-right mb-20">Håll dig organiserad, fokuserad och uppnå mer <br /> med vår kraftfulla webbapp för produktivitet. Ta <br /> kontroll över dina uppgifter, erövra dina mål.</p>
          </div>
          <div className="relative">
            <Image
              src={"/erp.svg"}
              alt="aa"
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>
      {/* Section2 */}
      <div className="bg-white grid md:grid-cols-3 gap-10 px-10 pb-20 md:py-20 md:px-40 " >
        {services.map(({ title, description, src, page }, index) => (
          <Service key={index} title={title} description={description} src={src} page={page} />
        ))}
      </div>
      {/* Section3 */}
      <div className="flex flex-col md:flex-row gap-10 items-center px-10 md:px-52" >
        <div>
          <h1 className="text-5xl font-bold mb-7">Sätt upp och spåra dina mål <br />
            för framgång</h1>
          <p className="mb-5" >Embrace life&apos;s vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
          <p>
            Embrace life&apos;s vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!          </p>
        </div>
        <Image
          src={"/Features 2.svg"}
          alt="Features"
          width={800}
          height={800}
        />
      </div>
      {/* Section4 */}
      <div className='relative h-[calc(100vh-64px)] bg-[#e1f4ff]  '  >
        <div className=' h-0 w-0 
                hidden
                md:block
                md:border-l-[1519px] border-l-white
                border-t-[400px] border-t-[#e1f4ff]
                absolute bottom-0 left-0
                z-0
                ' >
        </div>
        <div className=' absolute w-full h-full z-20 sm:flex md:flex lg:flex justify-center items-center md:gap-10 px-10 md:px-32 py-10' >

          <Image
            src={"/Features 1.svg"}
            alt="Features"
            width={800}
            height={800}
          />
          <div>
            <h1 className="text-5xl font-bold mb-7">Set and track your goals <br />
              for success
            </h1>
            <p className="mb-5" >Embrace life&apos;s vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
            <p>
              Embrace life&apos;s vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//todo 1- Make transintions like Jquery 
//todo 2- Make it responsive 