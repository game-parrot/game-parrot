import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import '../styles/layout.css';
import gameList from '../utils/GameList';

function Carousel() {
    return (
        <>
            <div className='caroCont'>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active caroItem">
                            <img src='https://cdn.discordapp.com/attachments/949489439535677440/974208130768584734/scrollthrough.png' className="caroImg" alt='Scroll Through Our Game Library'/>
                        </div>
                        {gameList.map(game => (
                            <div className="carousel-item caroItem">
                                <img src={game.game_img} className="caroImg" alt={game.game_alt}/>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Carousel;
