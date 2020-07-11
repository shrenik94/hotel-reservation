import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cockatails',
                infor: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum!'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                infor: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum!'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free shuttle',
                infor: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum!'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest beer',
                infor: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum!'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'></Title>
                <div className="services-center">
                    {this.state.services.map((service, index) => {
                        return <article key={index} className='service'>
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.infor}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
