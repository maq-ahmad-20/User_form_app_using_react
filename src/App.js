import React from 'react';
import AddUser from './Components/Users/adduser';
import UserList from './Components/Users/userLists';
import { useState } from 'react';
function App() {

  const [usersList, setUsersList] = useState([]);

  const handleFormData = (obj) => {

    setUsersList((prev) => {

      return [...prev, obj]
    })

  }

  return (
    <div>
      <AddUser getSubmitedDetails={handleFormData} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
