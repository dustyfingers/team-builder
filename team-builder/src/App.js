import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Team from './components/Team/Team.component';
import Form from './components/Form/Form.component';
import { data } from './data/data';
import './App.sass';

function App() {
  const [members, setMembers] = useState(data);

  const addMember = member => {
    setMembers([...members, member]);
  };

  console.log(members);

  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" render={() => <Team team={members} />} />
        <Route exact path="/add-member" render={() => <Form isEditing={false} setter={addMember} />} />
        <Route exact path="/edit-member/:member-id" render={() => <Form isEditing={true} setter={editMember} />} />
      </Switch> */}
      <Form isEditing={false} setter={addMember} />
      <Team team={members} />
    </div >
  );
}

export default App;