import { HeroCards } from "./HeroCards"
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react"

export const HeroList = ({ publisher }) => {

    const heroes =  useMemo(()=> getHeroesByPublisher(publisher),[publisher]) 

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCards
                        key={hero.id}
                        {...hero} />
                ))
            }
        </div>
    )
}

