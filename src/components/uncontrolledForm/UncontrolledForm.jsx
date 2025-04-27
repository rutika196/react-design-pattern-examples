import React, { useRef } from "react";

export const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`
    );
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
