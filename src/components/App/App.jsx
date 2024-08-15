
import css from './App.module.css'
import { useState, useEffect } from "react";
import Description from "../Description/Description"
import Options from "../Options/Options"
//import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const openOption = () => setIsOptionsOpen(false);

  // console.log(setTimeout(openOption, 2000));

  // useEffect(() => {
  // }, []); 

  useEffect(() => {
    console.log("Clicks updated: ", openOption);
  }, [openOption]);


  const onFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
  }

  const totalFeedback = values.good + values.neutral + values.bad;
  return (
    <div className={css.container}>

      <>
        {/* <>{totalFeedback > 0 ? <Feedback /> : <Notification />}</> */}

        <Description />
        {isOptionsOpen && <Notification onClose={openOption} />}

        <>
          <button onClick={() => onFeedback("good")} className={css.button} >Good </button>
          <button onClick={() => onFeedback("neutral")} className={css.button}>Neutral </button>
          <button onClick={() => onFeedback("bad")} className={css.button}>Bad </button>
          <button onClick={() => setValues(0)} className={css.button}>Reset</button>

          <p className={css.paragrText}>Good: {values.good} </p>
          <p className={css.paragrText}>Neutral: {values.neutral}</p>
          <p className={css.paragrText}>Bad: {values.bad}</p>
          <p className={css.paragrText}>Total: {totalFeedback}</p>
        </>
        {/* <Options /> */}
        {/* <Feedback><p className={css.paragrText}>Total: {totalFeedback}</p></Feedback> */}

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
