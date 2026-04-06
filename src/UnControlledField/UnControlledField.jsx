import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef('')

const handleSubmit = e=>{
    e.preventDefault()
    
}
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="email" ref={emailRef} name="email" placeholder="Email" /><br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder="Password" /><br />
                <input type="submit" value='Submit' /><br />

            </form>
        </div>
    );
};

export default UnControlledField;