import { Component } from 'react';
import SectionTitle from './section-title/SectionTitle';
import FeedbackOptions from './feedback-options/FeedbackOptions';
import Notification from './notification/Notification';
import Statistics from './statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  count = option => {
    this.setState(state => ({ [option]: state[option] + 1 }));
  };

  sumValue = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.sumValue();
    const { good } = this.state;
    if (totalFeedback === 0) {
      return 0;
    }
    const positivePercentage = (good / totalFeedback) * 100;
    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.count}
          />
        </SectionTitle>
        <SectionTitle title={'Statistics'}>
          {this.sumValue() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.sumValue()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </SectionTitle>
      </>
    );
  }
}
