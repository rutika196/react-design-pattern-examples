import React, { useState } from 'react';

function BuggyComponent() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("I crashed!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h2>Buggy Component</h2>
      <button onClick={() => setCrash(true)}>Crash Me!</button>
    </div>
  );
}

export default BuggyComponent;
