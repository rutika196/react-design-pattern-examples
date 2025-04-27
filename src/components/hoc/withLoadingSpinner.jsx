import React from "react";

export const withLoadingSpinner = (Component) => {
    return function WithLoadingSpinner({ isLoading, ...props }) {
        if (isLoading) {
            return (
                <div style={{ textAlign: "center", margin: "2rem" }}>
                    <h2>Loading...</h2>
                </div>
            );
        }
        return <Component {...props} />;
    };
}