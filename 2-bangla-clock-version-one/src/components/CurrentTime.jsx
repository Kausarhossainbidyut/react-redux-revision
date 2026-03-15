import React from 'react';

const CurrentTime = () => {
    let time = new Date();
    return (
        <p>This is the current time: {time.toLocaleString()} </p>
    );
};

export default CurrentTime;