import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form Submitted');
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" placeholder='Enter Name' /> <br />
                <input type="submit" value='submit' /> <br />

            </form>
        </div>
    );
};

export default SimpleForm;