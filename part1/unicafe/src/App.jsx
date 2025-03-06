import { useState } from 'react'

const StatisticLine = (props) => {
  const { text, value } = props;
  return  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

}

const Statistics = (props) => {
  const {
    good,
    bad,
    neutral
  } = props;
  const getAll = () => good + neutral + bad;
  const getPositiveShare = () => `${(good / (getAll() || 1)).toFixed(2)} %`;
  const getAverage = () => ((good - bad) / (getAll() || 1)).toFixed(2)
  return getAll() ?
    <table>
      <thead>
        <tr>
          <th colSpan={2}><h2>statistics</h2></th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={getAll()}/>
        <StatisticLine text='average' value={getAverage()}/>
        <StatisticLine text='positive' value={getPositiveShare()}/>
      </tbody>
    </table>
    :
    <table>
      <thead>
        <tr>
          <th colSpan={2}><h2>statistics</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2}> No feedback given</td>
        </tr>
      </tbody>
    </table>
}

const Button = (props) => (<button onClick={props.onClick}>{props.text}</button>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App