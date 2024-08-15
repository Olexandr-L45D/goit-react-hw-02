// Notification
import css from "./Notification.module.css"
import { useState, useEffect } from "react";

export default function Notification() {
    return (
        <>
            {/* <button onClick={onClose} >Close</button> */}
            <p className={css.paragraf}>No feedback yet </p>
        </>
    )
}

// export default function Notification() {
//     const [count, setCount] = useState(0);

//     function handleAlertClick() {
//         setTimeout(() => {
//             alert('No feedback yet ' + 'Натисніть на кнопку');
//         }, 2000);
//     }

//     return (
//         <div>
//             <button onClick={handleAlertClick}>
//                 No feedback yet
//             </button>

//             <button onClick={() => setCount(count + 1)}>
//                 Зробіть вибір
//             </button>
//             <p>Ви натиснули {count} раз</p>

//         </div>
//     );
// }
