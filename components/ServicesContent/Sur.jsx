import Feature from '@components/Feature';
import FeatureWrapper from '@components/FeatureWrapper';
import React from 'react'

const Sur = () => {
    const myfeatures = [
        {
            title: "Få fler insikter med undersökningar",
            description: "Skapa unikt engagerande nöjdhetsundersökningar, medarbetarbedömningar, marknadsföringskampanjer, feedbackformulär och mycket mer! En plattform för att hantera allt: automatisera bedömningar, nöjdhetsundersökningar, marknadsföringskampanjer, feedbackformulär, etc."
        },
        {
            title: "Skapa enkelt tilltalande online undersökningar",
            description: "Designa och testa din undersökning. Skapa vackra och tydliga enkätformulär utan ansträngning. Använd bilder på bakgrunden och för att illustrera frågor."
        },
        {
            title: "Dela och samla in data",
            description: "Dela dina undersökningar snabbt med Odoos inbyggda delningssystem. Kommunicera allt om undersökningar med bara några klick."
        },
        {
            title: "Analysera svaren",
            description: "Du behöver inte synkronisera resultat med din databas. Odoo tar hand om det automatiskt! Dra omedelbart nytta av resultatet och skaffa och visa resultatdiagram i realtid."
        }
    ];





    return (
        <FeatureWrapper>
            {myfeatures.map(({ title, description }, index) => <Feature key={index} title={title} description={description} />)}
        </FeatureWrapper>
    )
}

export default Sur
