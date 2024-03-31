import Feature from '@components/Feature';
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
        <div className='p-10 px-20 flex flex-col gap-y-20' >
            <div className='grid grid-cols-2 gap-14' >
                {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
            </div>
        </div>
    )
}

export default Purchase
