import React, { useState } from 'react';

export const ControlledForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefualt();
        console.log(`Name: ${name}, Email: ${email}`);
        // Handle form submission logic here
    }
    
        return(
            <div>
                <h1>Controlled Component</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
}