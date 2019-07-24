//TODO: STEP 1 - Not needed for class syntax... Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

class App extends React.Component {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  state = {
    homeScore: 0,
    awayScore: 0
  }
  
  setScoreFn = (team, points) => {
    this.setState({ team: team+=points });
  }

  render() {
    return (
      <div className="container">
        <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Lions</h2>

              {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

              <div className="home__score">{this.homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
              <h2 className="away__name">Tigers</h2>
              <div className="away__score">{this.awayScore}</div>
            </div>
          </div>
          <BottomRow />
        </section>
        <section className="buttons">
          <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick={ this.setScoreFn(this.homeScore, 7) } className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={ this.setScoreFn(this.homeScore, 3) } className="homeButtons__fieldGoal">Home Field Goal</button>
          </div>
          <div className="awayButtons">
            <button onClick={ this.setScoreFn(this.awayScore, 7) } className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={ this.setScoreFn(this.awayScore, 3) } className="awayButtons__fieldGoal">Away Field Goal</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
