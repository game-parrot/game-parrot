import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
// import TestData from 'test';

function UserList() {

    /*
    const [ users, setUsers ] = useState("")
    
    
    // This function should be a fetch request to get all users. The query should be utilize useState to append the data to the page
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const query = await fetch("/api/users", {
            method: "get",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(query)
        const result = await query.json()
        console.log(result)
    }
    */

    return (
        <>
            <div className='playersCont'>
                <h2>List of Players:</h2>
                <div className='userContainer'>
                    <ul className='playerUl'>
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Andrew</h4>
                                <p>Games played: Chess, Checkers, Uno</p>
                            </button>
                        </li>
                        <li className='playerLi'>
                            <button className='userBtn'>
                                <h4>Username: Eugene</h4>
                                <p>Games played: Chess, Connect 4, Yahtzee</p>
                            </button>
                        </li>
                        {/* {TestData.map(testdata => (
                            <li>
                                <button className='userBtn'>
                                    <h4>Username: {testdata.username}</h4>
                                    <p>Games played:{testdata.games}</p>
                                </button>
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserList;
