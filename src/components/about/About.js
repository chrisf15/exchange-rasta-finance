import React from 'react'
import DataBank from '../DataBank';
import Header from './section/HeroSection';
import Card from './section/CardSection';
import Dsc from './section/DescriptionSection';
import CardButton from './section/CardButton';
import TeamSlide from './section/TeamSlide';

export default function About() {
    const data = DataBank.about;
    return (
        <div>
        <Header images={data.heroSection.image} title={data.heroSection.title} desc={data.heroSection.desc} btn={data.heroSection.button}/>
            <section className=" w-full flex bg-white md:mx-auto items-center items-center md:flex-row  pb-8">
                <Card items={data.cardSection}/>
            </section>
            <section className=" w-full flex bg-white md:mx-auto items-center items-center md:flex-row py-16">
                <Dsc text={data.descSection}/>
            </section>
            <section className=" w-full flex bg-white md:mx-auto items-center items-center md:flex-row py-16">
                <Dsc text={data.descSection}/>
            </section>
            <section className=" w-full flex bg-white md:mx-auto items-center items-center md:flex-row py-16">
                <CardButton items={data.cardBtnItem}/>
            </section>
            
            <section className=" w-full bg-white md:mx-auto items-center items-center py-16">
                <TeamSlide items={data.team}/>
            </section>
        </div>
    )
}
