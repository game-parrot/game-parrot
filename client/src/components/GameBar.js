import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import gameList from '../utils/GameList';

function GameBar() {
    return (
        <>
            <h2>Choose A Game To Play!</h2>
            <div className='gameBarCont'>
                {gameList.map(game => (
                <div className='gameCard'>
                    <div className='gameImgCont'>
                        <img className='gameCardImg' src={game.game_img} alt={game.game_alt}/>
                    </div>
                    <p className='gameTitle'>{game.game_title}</p>
                    <button className='playBtn'>Play Game!</button>
                </div>
                ))}
            </div>
        </>
    )
}

export default GameBar;