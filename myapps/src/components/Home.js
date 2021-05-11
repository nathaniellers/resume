import ListData from './ListData';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

const Home = () => {
        const [users, setUsers] = useState([ 
            {
                id:'1',
                name:'Goku React',
                message:'my react'
            },
            {  
                id:'2',
                name:'Asta React',
                message:'my react too'
            },
            
        ]); const getData = (id) =>{
            setUsers(users.map(user=>(
                user.id===id?{
                    ...user, name:'Saitama'
                }:user
            )))
        }
        


    return(
        <>
            <div className="p-4">
                <h1>List</h1>

                {
                    users.map((user)=>
                    <ListData key={user.id} id={user.id} name={user.name} message={user.message} getData={getData}/>
                    )
                   
                }   

            </div>
        </>
    )
}

export default Home;