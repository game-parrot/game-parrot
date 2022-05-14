import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import { Card } from 'react-bootstrap';
import connect from '../assets/connect.jpg';
import play from '../assets/play1.jpg'
import chat from '../assets/chat.jpg'

function LandingMain() {
    return (
        <>
            <section className='intro'>
                <h1> Welcome</h1>
                <p>
                    Game Parrot is a place where you can connect with friends and play a variety of our favorite board games online. Gaming is the perfect way to interact with friends, meet new people, and make new friends. Connect with people that share you interests. Try to best your friends or strangers. Join us at Game Parrot!
                </p>
            </section>

            <section className='row mx-auto' style={{width: '100%'}}>
                <div className='cardHolder mx-auto'>
                    <Card style={{ width: '27rem' }}>
                        <Card.Img variant="top" className='cardimg' src={play} />
                        <Card.Body>
                            <Card.Title>Play</Card.Title>
                            <Card.Text>
                                Choose what you want to play and get your game on!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardHolder mx-auto'>
                    <Card style={{ width: '27rem' }}>
                        <Card.Img variant="top" className='cardimg' src={chat} />
                        <Card.Body>
                            <Card.Title>Chat</Card.Title>
                            <Card.Text>
                                Prepare yourselves! Here, trash talking is encouraged.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cardHolder mx-auto'>
                    <Card style={{ width: '27rem' }}>
                        <Card.Img variant="top" className='cardimg' src={connect} />
                        <Card.Body>
                            <Card.Title>Connect</Card.Title>
                            <Card.Text>
                                Make a bitter rival or a new friend, your choice!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </>
    )
}

export default LandingMain;