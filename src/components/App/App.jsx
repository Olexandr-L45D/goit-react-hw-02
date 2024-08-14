
import css from './App.module.css'
import { useState, setValues } from "react";
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"

export default function App() {
  const [values, option, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const totalFeedback = values.good + values.neutral + values.bad;
  return (
    <div className={css.container}>

      <>
        {/* <>{totalFeedback > 0 ? <Feedback /> : <Notification />}</> */}

        <Description />
        <Notification />
        <Options />
        <Feedback><p className={css.paragrText}>Total: {totalFeedback}</p></Feedback>

      </>
    </div>
  )
}
// стан для зберігання відгуків в АПП
// const [values, setValues] = useState({
//   good: 0,
//   neutral: 0,
//   bad: 0
// });
