import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card  from './Card'


function Home() {
    return (
        <div className = "home">
            <Banner></Banner>

            <div className="home__section">
                <Card
                    src = "https://wallpapercave.com/wp/wp6957431.jpg"
                    title = "Blue Sweet Couple"
                    description = "These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries."/>
                <Card
                    src = "https://wallpapercave.com/wp/wp6957481.jpg"
                    title = "Beach House"
                    description = "These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries."/>
                <Card
                    src = "https://wallpapercave.com/wp/wp6957478.jpg"
                    title = "Garden Dual"
                    description = "These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries."/>

            </div>
            <div className="home__section">
                <Card
                    src = "https://wallpapercave.com/wp/wp6957233.jpg"
                    title = "Honeymoon Sweets"
                    description = "These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries."/>
                <Card
                    src = "https://wallpapercave.com/wp/wp6957260.jpg"
                    title = "Sky High"
                    description = "These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries."/>
                <Card
                    src = "https://wallpapercave.com/wp/wp6957272.jpg"
                    title = "Queen Size"
                    description = "These rooms have been recently refurbished and are fully ensuite with toilet, shower and bath and toileteries."/>

            </div>
        </div>
    )
}

export default Home
