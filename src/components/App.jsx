import { useState } from 'react';
import SectionTitle from './section-title/SectionTitle';
import FeedbackOptions from './feedback-options/FeedbackOptions';
import Notification from './notification/Notification';
import Statistics from './statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGood = () => {
    setGood(good + 1);
  };

  const countNeutral = () => {
    setNeutral(neutral + 1);
  };

  const countBad = () => {
    setBad(bad + 1);
  };

  const sumValue = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = sumValue();
    if (totalFeedback === 0) {
      return 0;
    }
    const positivePercentage = (good / totalFeedback) * 100;
    return Math.round(positivePercentage);
  };

  return (
    <>
      <SectionTitle title={'Please leave feedback'}>
        <FeedbackOptions
          options={[
            { value: 'good', func: countGood },
            { value: 'neutral', func: countNeutral },
            { value: 'bad', func: countBad },
          ]}
        />
      </SectionTitle>
      <SectionTitle title={'Statistics'}>
        {sumValue() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={sumValue()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </SectionTitle>
    </>
  );
}
