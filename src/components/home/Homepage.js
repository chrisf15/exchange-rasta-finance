import React from 'react'
import HeroSection from './section/HeroSection';
import Community from './section/Community';
import FavCreator from "./section/FavoriteCreator";
import MetaDecorator from '../elements/MetaDecorator';
export default function Homepage() {
    return (
        <div>
            <section>
                <HeroSection/>
                <Community/>
                <FavCreator/>
            </section>
        </div>
    )
}
