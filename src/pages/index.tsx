import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

interface Flight {
  origin: string;
  destination: string;
  date: string;
}

const Home: NextPage = () => {
  const [search, setSearch] = useState<Flight>({
    origin: "",
    destination: "",
    date: "",
  });

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Flight
  ) => {
    setSearch((prevState) => ({ ...prevState, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search submitted:", search);
  };

  return (
    <div style={{ backgroundColor: "#009cde", color: "#fff", padding: "1rem" }}>
      <div
        style={{ backgroundColor: "#009cde", color: "#fff", padding: "1rem" }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="/airline-logo.png"
            alt="Air Qazaq logo"
            style={{ height: "50px" }}
          />
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link
              href="/flights"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Flights
            </Link>
            <Link
              href="/destinations"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Destinations
            </Link>
            <Link
              href="/bookings"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              My Bookings
            </Link>
            <Link
              href="/login"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Log In
            </Link>
          </nav>
        </header>

        {/* rest of the content */}
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to Air Qazaq!
      </h1>
      <p style={{ fontSize: "1.5rem" }}>Book your flights today.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          margin: "2rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Origin"
          value={search.origin}
          onChange={(e) => handleSearchChange(e, "origin")}
          style={{
            padding: "0.5rem",
            marginRight: "0.5rem",
            width: "33%",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <input
          type="text"
          placeholder="Destination"
          value={search.destination}
          onChange={(e) => handleSearchChange(e, "destination")}
          style={{
            padding: "0.5rem",
            marginRight: "0.5rem",
            width: "33%",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <input
          type="date"
          placeholder="Date"
          value={search.date}
          onChange={(e) => handleSearchChange(e, "date")}
          style={{
            padding: "0.5rem",
            marginRight: "0.5rem",
            width: "33%",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#fff",
            color: "#009cde",
            padding: "0.5rem",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Search
        </button>
      </form>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        <Link
          href="/flights?origin=New+York&destination=Los+Angeles"
          style={{ color: "#000", textDecoration: "none" }}
        >
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "1rem",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <h3>New York to Los Angeles</h3>
            <p>From $199</p>
            <img
              src="https://placehold.co/600x400"
              alt="New York to Los Angeles route"
              style={{ height: "150px" }}
            />
          </div>
        </Link>
        <Link
          href="/flights?origin=Los+Angeles&destination=San+Francisco"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <div
            style={{
              backgroundColor: "#000",
              padding: "1rem",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <h3>Los Angeles to San Francisco</h3>
            <p>From $149</p>
            <img
              src="https://placehold.co/600x400"
              alt="Los Angeles to San Francisco route"
              style={{ height: "150px" }}
            />
          </div>
        </Link>
        <Link
          href="/flights?origin=San+Francisco&destination=New+York"
          style={{ color: "#000", textDecoration: "none" }}
        >
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "1rem",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <h3>San Francisco to New York</h3>
            <p>From $299</p>
            <img
              src="https://placehold.co/600x400"
              alt="San Francisco to New York route"
              style={{ height: "150px" }}
            />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
