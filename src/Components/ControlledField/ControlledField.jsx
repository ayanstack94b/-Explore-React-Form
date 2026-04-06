import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submitted');
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('Password must be 6 character or long')
        } else {
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="email" name="email" placeholder="Email" /><br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder="Password" /><br />
                <input type="submit" value='Submit' /><br />

            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;