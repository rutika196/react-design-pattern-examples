// This component is responsible for displaying user information. Presentational component
// It receives user data as props and renders it. It does not handle any logic or state management.
// It is a pure component that only focuses on the UI. It is reusable and can be used in different parts of the application.
// It is a good example of a presentational component in React. It is also a good example of a functional component in React.
// It is a simple component that does not require any lifecycle methods or hooks.
import React from "react";
export const UserCard = ({ user }) => {
    if (!user) return <p>Loading user data...</p>;
    // Check if user data is available

    return (
        <div>
            <h2>{user.name.first} {user.name.last}</h2>
            <img src={user.picture.large} alt="User" />
            <p>Email: {user.email}</p>
            <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
    )

}