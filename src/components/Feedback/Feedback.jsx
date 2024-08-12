// Feedback
import css from "./Feedback.module.css"

export default function Feedback({
    stats: { good, neutral, bad } },
) {
    return (
        <div className={css.container}></div>)
}
// const totalFeedback = good + neutral + bad;
const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
}
Math.round((good / totalFeedback) * 100)