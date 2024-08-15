// Feedback
import css from "./Feedback.module.css"
import { useState } from "react";
export default function Feedback(
    { good, neutral, bad }
) {

    return (
        <>
            <p className={css.paragrText}>Good: {values.good} </p>
            <p className={css.paragrText}>Neutral: {values.neutral}</p>
            <p className={css.paragrText}>Bad: {values.bad}</p>

        </>
    )
}




// // const totalFeedback = good + neutral + bad;
// const updateFeedback = feedbackType => {
//     // Тут використовуй сеттер, щоб оновити стан
// }
// Math.round((good / totalFeedback) * 100)