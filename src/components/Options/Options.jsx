// Options
import css from "./Options.module.css"

export default function Options(
    { updateFeedback, totalFeedback }
) {
    return (
        <div className={css.container}>
            <button onClick={() => setClicks(clicks + 1)}>
                Good {clicks}
            </button>
            <button onClick={() => setClicks(clicks + 1)}>
                Neutral {clicks}
            </button>
            <button onClick={() => setClicks(clicks + 1)}>
                Bad {clicks}
            </button>
            <button onClick={() => setClicks(clicks + 1)}>
                Reset {clicks}
            </button>
        </div>)
}