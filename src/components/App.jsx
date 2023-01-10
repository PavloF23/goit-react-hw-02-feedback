import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { AppStyle } from './App.styled';
import {FeedbackList} from './FeedbackList.styled';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //функція що піддраховує певний отзив;
  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  //функція що піддраховує кількість отзивів;
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  //функція що підраховує відсоток позитивних отзивів;
  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <AppStyle>
        
         <FeedbackList>
         <Section title="Please leave feedback">
            <FeedbackOptions 
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeedback}
            />
          </Section>
          <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
          </Section>
        </FeedbackList>
      </AppStyle>
    );
  }
}
