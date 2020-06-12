import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} id={monster.id} monster={monster.name} description={monster.description}></Card>
        ))}
    </div>
) 