import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbach = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((good * 100) / total);
    return total ? positivePercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedbach();
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={options} onLeaveFeedback={this.hendleClick} />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
