import React, { useState } from 'react';


const Form = ({ isEditing, setter }) => {
    const [member, setMember] = useState({ name: '', email: '', role: '' });

    const handleChange = evt => {
        setMember({ ...member, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        setter(member);
    };
    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <h2>{isEditing ? 'Edit an Existing Team Member' : 'Add a New Team Member'}</h2>
                <label>
                    Full Name:
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Role:
                      <input
                        type="text"
                        name="role"
                        onChange={handleChange}
                    />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default Form;
