import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Pm = () => {
    const myfeatures = [
        {
            title: "Planera och schemanlägg",
            description: "Använd Klisterlappar i Kanban-vyn för att organisera uppgifter efter steg. Dra och släpp dem som klisterlappar för att hålla din pipeline snyggt organiserad. Gantt-vyn ger en tidslinjeöversikt över dina uppgifter, deras beroenden och planerade datum."
        },
        {
            title: "Främja samarbete för att öka effektiviteten",
            description: "Listvyn visar all data du behöver och låter dig utföra batchåtgärder. Enkelt och kraftfullt. Hantera all din kommunikation på ett enkelt gränssnitt och involvera dina kunder genom att bestämma vilka delar av dina projektintressenter som kan se och redigera."
        },
        {
            title: "Tid är pengar",
            description: "Fakturera dina kunder efter den tid som spenderas på uppgifter eller sätt upp milstolpar för att fördela kostnaderna för större projekt. Projektuppdateringar genereras i realtid och ger en detaljerad översikt över lönsamhet, milstolpar, resurser och uppgifter."
        },
        {
            title: "Uppgiftshantering",
            description: "Spåra kostnader och intäkter genom att skapa uppgifter, återkommande uppgifter och hantera beroenden. Integrera med budgetar, tidrapporter, inköp och försäljning för att hålla kontroll över var ditt projekt står."
        },
        {
            title: "Kraften med klisterlappar",
            description: "Använd Kanban-vyn för att organisera uppgifter efter steg. Dra och släpp dem som klisterlappar för att hålla din pipeline snyggt organiserad."
        },
        {
            title: "Gantt-vyn",
            description: "Ger en tidslinjeöversikt över dina uppgifter, deras beroenden och planerade datum."
        },
        {
            title: "Kontroll över var ditt projekt står",
            description: "Projektuppdateringar genereras i realtid och ger en detaljerad översikt över lönsamhet, milstolpar, resurser och uppgifter."
        },
        {
            title: "Involvera dina kunder",
            description: "Bestäm vilka delar av dina projektintressenter som kan se och redigera. Hantera all din kommunikation på ett enkelt gränssnitt."
        }
    ];

    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Pm
