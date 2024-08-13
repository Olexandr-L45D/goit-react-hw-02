
import css from './App.module.css'
import Description from "../Description/Description"
import Notification from "../Notification/Notification"
import Options from "../Options/Options"
// import Feedback from "../Feedback/Feedback"

export default function App() {
  return (
    <div className={css.container}>
      <>
        <Description />
        <Notification />
        <Options />
        {/* <Feedback items={transactions} /> */}
        {/* const totalFeedback = good + neutral + bad;  summ total feedback */}
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
