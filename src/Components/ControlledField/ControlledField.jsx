import React, { useState } from 'react';

const ControlledField = () => {
    
    const [password, setPassword] = useState('')
    
    const handleSubmit= e =>{
        e.preventDefault()
        console.log('submitted');
    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="email" name="email" placeholder="Email" /><br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder="Password" /><br />
                <input type="submit" value='submit' /><br />

            </form>
        </div>
    );
};

export default ControlledField;