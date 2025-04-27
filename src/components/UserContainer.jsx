// This component is responsible for fetching user data and passing it to the UserCard component.
// It handles the logic and state management. It is a container component that uses the UserCard component to display the user data.


import React, {useEffect, useState} from "react";
import {UserCard} from "./UserCard";
import { withLoadingSpinner } from "./hoc/withLoadingSpinner";
import { UserList } from "./UserList/UserList";

const UserListWithSpinner = withLoadingSpinner(UserList);

export const UserContainer = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('https://randomuser.me/api/?results=5', { mode: 'cors' });
            const data = await res.json();
            setUser(data.results);
            setIsLoading(false);
        }
        fetchUser();

    }, []);

    return (
        <div>
            {/* <UserCard user={user} /> */}
            <UserListWithSpinner isLoading={isLoading} users={user} />
        </div>
    )
}