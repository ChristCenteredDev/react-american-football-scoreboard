//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let initialCount = 0;

  const [homeScore, setHomeScore] = useState(initialCount);
  const [awayScore, setAwayScore] = useState(initialCount);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <div onClick={ ()=> setHomeScore(prevCount => prevCount + 7) } className="App">
            <button className="homeButtons__touchdown">Home Touchdown</button>
          </div>
          
          <div onClick={ ()=> setHomeScore(prevCount => prevCount + 3) } className="App">
            <button className="homeButtons__fieldGoal">Home Field Goal</button>
          </div>
        </div>
        <div className="awayButtons">
          <div onClick={ ()=> setAwayScore(prevCount => prevCount + 7) } className="App">
            <button className="awayButtons__touchdown">Away Touchdown</button>
          </div>
          <div onClick={ ()=> setAwayScore(prevCount => prevCount + 3) } className="App">
            <button className="awayButtons__fieldGoal">Away Field Goal</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
