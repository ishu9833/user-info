import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Section.css";

const Section = (props) => {
    const { picture, name, company, email, phone, balance } = props.user;

    return (
        
            <div className="userStyle">
                <img className="userImage" src={picture} alt="" />
                <h2>Name: {name}</h2>
                <h5>Company Name : {company}</h5>
                <p><small>Monthly Salary: {balance}</small></p>
                <p>Email: {email}</p>
                <p>Phone No: {phone}</p>
                <button onClick={() => props.addUser(props.user)}  > <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add on List</button>
            </div>
            
        
    );
};

export default Section;