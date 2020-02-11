import React from 'react';

// local import 
import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [
        {
        id: 'u1',
        name:  ' Bella Dorothy',
        image: 'https://images.pexels.com/photos/83911/pexels-photo-83911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&=1260',
        places: ' 2 '
    }
];

    return <UsersList items={USERS} />;
}
 
export default Users;