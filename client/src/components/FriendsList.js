import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';

function FriendsList() {

    /*
    const [ friends, setFriends ] = useState("")

    // This function should be a fetch request to get all friends of the user. The query should be utilize useState to append the data to the page
    const placeholder = async (e) => {
        const query = await fetch("/api/users", {
            method: "get",
            body: JSON.stringify("anotherPlaceholder"),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    */

    return (
        <>
            <div className='gameroomFrame'>
                <iframe src='https://buddyboardgames.com/' title='games' className='iframe'></iframe>
            </div>
        </>
    )
}

export default FriendsList;
