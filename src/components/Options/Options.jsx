// Options
import css from "./Options.module.css"
import { useState, onFeedback } from "react";
export default function Options(
    { values, setValues }
) {

    // let [values, option, setValues] = useState({
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    // });

    const onFeedback = (option) => {
        setValues({
            ...values,
            option: values[option] + 1
        });
    }
    const resetClick = () => { setValues(0) };

    return (
        <>

            <div>
                <button onClick={onFeedback} value={values} className={css.button}>Good </button>
                <button onClick={onFeedback} className={css.button}>Neutral </button>
                <button onClick={onFeedback} className={css.button}>Bad </button>
                <button onClick={resetClick} className={css.button}>Reset</button>


            </div>

        </>
    );
}


// className={css.button}
// const [clicks] = useState(0);

// useEffect(() => {
//     console.log("You can see me only once!");
// }, []);

// useEffect(() => {
//     console.log("Clicks updated: ", clicks);
// }, [clicks]);

// useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
// });
// export default function Options(
//     { updateFeedback, totalFeedback }
// ) {
//     return (
//         <div className={css.container}>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Good {clicks}
//             </button>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Neutral {clicks}
//             </button>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Bad {clicks}
//             </button>
//             <button onClick={() => setClicks(clicks + 1)}>
//                 Reset {clicks}
//             </button>
//         </div>)
// }
//  {/* <p>Positive: {positive}</p> */}