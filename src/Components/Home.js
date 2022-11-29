import React, { useEffect, useState } from "react";
import Card from "./Card";

let pageNumber = 0;
let activeInput = "";
let loadedData = [];

const equaltoinput = (name, input) => {
  const names = name.split(" ");
  const inputs = input.split(" ");
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].toLowerCase() === names[i].toLowerCase()) {
        return true;
      }
    }
  }
  return false;
};

function Home() {
  const [matches, setmatches] = useState([]);
  const [input, setinput] = useState("");
  const [loading, setloading] = useState(false);

  const loadApi = async (page) => {
    setloading(true);
    try {
      let url = `https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      setloading(false);
      let newMatches = [];
      data.fixtures.forEach((p) => newMatches.push(p));
      loadedData = loadedData.concat(newMatches);
      setmatches((oldMatches) => [...oldMatches, ...newMatches]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "" && activeInput === "") return;
    if (input === "" && activeInput !== "") {
      setmatches(loadedData);
      activeInput = "";
      return;
    } else {
      const searchedData = loadedData.filter((match) => {
        return (
          equaltoinput(
            match.team1[0].name.toLowerCase(),
            activeInput.toLowerCase()
          ) ||
          equaltoinput(
            match.team2[0].name.toLowerCase(),
            activeInput.toLowerCase()
          ) ||
          (
            match.tournament[0].name.toLowerCase()===
            activeInput.toLowerCase()
          ) ||
          equaltoinput(match.round.toLowerCase(), activeInput.toLowerCase())
        );
      });
      console.log(searchedData);
      if (searchedData.length !== 0) {
        setmatches(searchedData);
      }
      setinput("");
    }
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight &&
      pageNumber < 9
    ) {
      if (activeInput === "" && loading === false) {
        pageNumber++;
        loadApi(pageNumber);
      }
    }
  };

  useEffect(() => {
    loadApi(pageNumber);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setinput(e.target.value);
    activeInput = e.target.value;
  };

  return (
    <>
      <header>
        <h1 className="level">International Matches</h1>
        <div className="querybox">
          <form action="" id="form" onSubmit={handleSubmit}>
            <button type="submit">
              <i className="fa fa-search "></i>
            </button>
            <input
              value={input}
              type="text"
              name=""
              id="search"
              placeholder="Search for Matches"
              onChange={handleChange}
            />
          </form>
        </div>
      </header>
      <main id="tournaments">
        {matches.map((match, index) => {
          return <Card match={match} key={index} />;
        })}
      </main>
    </>
  );
}

export default Home;
