import { useState } from "react";

function UserForm() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 return (
 <div style={{ textAlign: "left", marginTop: "20px" }}>
    <form>
        <label>
            Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>
        <br />
        <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <br></br>
        <label>
            Password:
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </label>
    </form>
    <h2>Welcome, {name}</h2>
    <br></br>
    <h2>{new Date().toLocaleDateString()}</h2>
 </div>
 );
}

export default UserForm;