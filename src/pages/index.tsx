import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

interface Flight {
  origin: string
  destination: string
  date: string
}

const Home: NextPage = () => {
  const [search, setSearch] = useState<Flight>({
    origin: '',
    destination: '',
    date: ''
  })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Flight) => {
    setSearch(prevState => ({ ...prevState, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Search submitted:', search)
  }

  return (
    <div style={{ backgroundColor: '#009cde', color: '#fff', padding: '1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Air Qazaq!</h1>
      <p style={{ fontSize: '1.5rem' }}>Book your flights today.</p>

      <form onSubmit={handleSubmit} style={{ margin: '2rem 0' }}>
        <input
          type="text"
          placeholder="Origin"
          value={search.origin}
          onChange={(e) => handleSearchChange(e, 'origin')}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Destination"
          value={search.destination}
          onChange={(e) => handleSearchChange(e, 'destination')}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <input
          type="date"
          placeholder="Date"
          value={search.date}
          onChange={(e) => handleSearchChange(e, 'date')}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ backgroundColor: '#fff', color: '#009cde', padding: '0.5rem' }}>Search</button>
      </form>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Popular Routes</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '1rem 0' }}>
          <Link href="/flights?origin=New+York&destination=Los+Angeles" style={{ color: '#fff', textDecoration: 'none' }}>
            New York to Los Angeles
          </Link>
        </li>
        <li style={{ margin: '1rem 0' }}>
          <Link href="/flights?origin=Los+Angeles&destination=San+Francisco" style={{ color: '#fff', textDecoration: 'none' }}>
            Los Angeles to San Francisco
          </Link>
        </li>
        <li style={{ margin: '1rem 0' }}>
          <Link href="/flights?origin=San+Francisco&destination=New+York" style={{ color: '#fff', textDecoration: 'none' }}>
            San Francisco to New York
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
