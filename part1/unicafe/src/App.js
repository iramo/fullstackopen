import React, { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <tr>
          <td>all</td>
          <td>{good + neutral + bad}</td>
        </tr>
        {good + neutral + bad > 0 && (
          <tr>
            <td>average</td>
            <td>
              {good / (good + neutral + bad) - bad / (good + neutral + bad)}
            </td>
          </tr>
        )}
        {good + neutral + bad > 0 && (
          <tr>
            <td>positive</td>
            <td>{(good / (good + neutral + bad)) * 100} %</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        text="good"
        onClick={() => {
          setGood(good + 1);
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          setBad(bad + 1);
        }}
      />
      <h2>statistics</h2>
      {good + neutral + bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
