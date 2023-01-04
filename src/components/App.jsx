import { Component } from "react"
// import { Feedbacks } from "./Feedbacks/Feedbacks";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  // leaveFeedback = option => {
  //   this.setState(prevState => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // };

  render() {
  return (
    <>
      <h1>Please leave feetback</h1>
      {/* <Feedbacks /> */}
      <div>
        <button type="button" onClick={() => (console.log('good +1'))}>Good</button>
        <button type="button" onClick={() => (console.log('neutral +1'))}>Neutral</button>
        <button type="button" onClick={() => (console.log('bad +1'))}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <p>Good:<span>{this.state.good}</span></p>
      <p>Neutral:<span>{this.state.neutral}</span></p>
      <p>bad:<span>{this.state.bad}</span></p>

    </>
  );
}};
