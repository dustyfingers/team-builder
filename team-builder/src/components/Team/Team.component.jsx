import React from 'react';
import './Team.styles.sass';

const Team = ({ team }) => {
    return (
        <div>
            {
                !team ?
                    <p>Loading the team...</p> :
                    <div className='teamMembers'>
                        <h1>Our Team!</h1>
                        {team.map(member => (
                            <div className="card">
                                <h1 className="memberName">{member.name}</h1>
                                <p className="memberEmail">{member.email}</p>
                                <p className="memberRole">{member.role}</p>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}

export default Team;