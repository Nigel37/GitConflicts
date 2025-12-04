import { useState } from "react"

export default function Anvandare() {
  const [namn, setNamn] = useState("")
  const [lista, setLista] = useState([])

  function laggTill() {
    if (namn.trim() === "") return
    setLista([...lista, namn])
    setNamn("")
  }

  function taBort(index) {
    setLista(lista.filter((_, i) => i !== index))
  }

  return (
    <div>
      <input
        value={namn}
        onChange={e => setNamn(e.target.value)}
        placeholder="skriv namn"
      />
      <button onClick={laggTill}>lägg till</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => taBort(index)}>ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
