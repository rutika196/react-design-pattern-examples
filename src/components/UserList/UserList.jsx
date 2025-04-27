import React from "react";

export const UserList = ({ users }) => {
    if (!users || users.length === 0) {
        return <p>No users to display</p>;
      }
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    <img src={user.picture.thumbnail} alt="user" style={{ borderRadius: "50%" }} />
                    <p>{user.name.first} {user.name.last}</p>
                    <p>Email: {user.email}</p>
                </li>
            ))}
        </ul>
    );
};