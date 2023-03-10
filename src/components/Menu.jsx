import { useState } from "react"

export default function Menu() {
    const [coffees, setCoffees] = useState();
    const getCoffees = (temp) => {
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
        .then(res => res.json())
        .then(setCoffees)
        .catch(alert)
    }
    return (
        <article>
            <div>
                <button onClick={() => getCoffees('hot')}> Hot Coffees</button>
                <button onClick={() => getCoffees('iced')}> Iced Coffees</button>
            </div>
            {!coffees
                ? <h2>Welcome to the official Beau Café.</h2>
                : <ul>Coffees here.
                  {coffees.map(coffee => (
                    <li key={coffee.id}>{coffee.title}</li>
                  ))}
                  </ul>
            }
        </article>
    )
}