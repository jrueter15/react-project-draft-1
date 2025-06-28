import { useState } from "react";
import './UserDailyLog.css';

function UserDailyLog() {
 const [dailyLog, setLog] = useState("");

 return (
 <div style={{ textAlign: "center", marginTop: "20px" }}>
    <form>
        <label className="dailyLogInput">
            <h1>What's on your mind today?</h1>
            <input
                type="text"
                value={dailyLog}
                onChange={(e) => setLog(e.target.value)}
            />
        </label>
    </form>
    <div className="dailyLogOutput">
        <h1>Your Thoughts:</h1>
        <p>{dailyLog}</p>
    </div>

    <br></br>
    <br></br>
 </div>
 );
}

export default UserDailyLog;