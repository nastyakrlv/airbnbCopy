import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "../public/data"


export default function App() {
    const cardElements = Data.map(props => {
        return <Card 
            key={props.id}
            {...props}
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}