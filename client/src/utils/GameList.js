// const chessImg = require('./assets/images/chess.png');
import checkersImg from'./assets/images/checkers.png'
import unoImg from'./assets/images/uno.png'
import connect4Img from'./assets/images/connect4.png'
import crazy8sImg from'./assets/images/crazy-8s.png'
import farkleImg from'./assets/images/farkle.png'
import spadesImg from'./assets/images/spades.png'
import yahtzeeImg from'./assets/images/yahtzee.png'
import chessImg from './assets/images/chess.png'

const gameList = [
    {
        game_title: "Chess",
        game_url: "https://buddyboardgames.com/chess",
        game_img: chessImg,
        game_alt: "Image of Chess",
    },
    {
        game_title: "Checkers",
        game_url: "https://buddyboardgames.com/Checkers",
        game_img: checkersImg,
        game_alt: "Image of Checkers",
    },
    {
        game_title: "Uno",
        game_url: "https://buddyboardgames.com/Uno",
        game_img: unoImg,
        game_alt: "Image of Uno",
    },
    {
        game_title: "Spades",
        game_url: "https://buddyboardgames.com/Spades",
        game_img: spadesImg,
        game_alt: "Image of Spades",
    },
    {
        game_title: "Connect 4",
        game_url: "https://buddyboardgames.com/Connect4",
        game_img: connect4Img,
        game_alt: "Image of Connect 4",
    },
    {
        game_title: "Yahtzee",
        game_url: "https://buddyboardgames.com/Yahtzee",
        game_img: yahtzeeImg,
        game_alt: "Image of Yahtzee",
    },
    {
        game_title: "Crazy 8s",
        game_url: "https://buddyboardgames.com/Crazy8s",
        game_img: crazy8sImg,
        game_alt: "Image of Crazy 8s",
    },
    {
        game_title: "Farkle",
        game_url: "https://buddyboardgames.com/Farkle",
        game_img: farkleImg,
        game_alt: "Image of Farkle",
    },
]

export default gameList;