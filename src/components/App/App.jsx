
import css from './App.module.css'
import Profile from "../Profile/Profile"
import userData from "../UzerBacand/proFile.json"
import Options from "../Options/Options"
import fr from "../UzerBacand/friends.json"
import Feedback from "../Feedback/Feedback"
import tr from "../UzerBacand/transactions.json"

import { useState, useEffect } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });
  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};

return (
  <div className={css.container}>
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />



      <Notification></Notification>
      <Options friends={friends} />
      <Feedback items={transactions} />
      {/* const totalFeedback = good + neutral + bad;  summ total feedback */}
    </>
  </div>
)
}


