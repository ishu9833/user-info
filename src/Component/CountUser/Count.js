import React from 'react';

const Count = (props) => {
    const User = props.User;
    // const total = User.reduce( (total, usr ) => total+ usr.balance, 0)
    let total = 0;
    for (let i = 0; i < User.length; i++) {
        const usr = User[i];
        total = total + parseInt(usr.balance);

        
    }
    return (
        <div>
            <h4>User Added:{User.length}</h4>
            <p> <span>
                Yearly Salary :  {total * 12} </span> </p>
        </div>
    );
};

export default Count;