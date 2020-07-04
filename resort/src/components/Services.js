import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaUtensilSpoon } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "This is random text for various services offered by the random site"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "This is random text for various services offered by the random site"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "This is random text for various services offered by the random site"
            },
            {
                icon: <FaBeer />,
                title: "Cervezas For Days",
                info: "This is random text for various services offered by the random site"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        )
    }
}


