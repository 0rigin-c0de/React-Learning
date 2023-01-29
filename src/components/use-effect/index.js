import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import validate from "./validate";

function App() {
  let [username, setUsername] = useState("");
  let [validationMessage, setValidationMessage] = useState();

  useEffect(() => {
    let promise = validate(username);
    promise.then((message) => setValidationMessage(message));
  });

  return (
    <label>
      <span className="label">Username</span>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {validationMessage || ""}
    </label>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
