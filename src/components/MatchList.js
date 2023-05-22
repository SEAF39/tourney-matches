/* MatchList.js */
import React from "react";
import Match from "./Match";
import matchData from "../data/matchData";

function MatchList(props) {
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matchData.map((match) => (
        <Match
          key={match.matchNumber}
          players={match.players}
          winner={match.winner}
          scoreDifference={match.scoreDifference}
        />
      ))}
    </section>
  );
}

export default MatchList;
