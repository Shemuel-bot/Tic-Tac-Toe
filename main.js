let playerOneTurn=true;
let playerCreated=false;

const GameBoard=(function (){
    const gameBoard = Array.from(document.querySelectorAll('.square'));
    let position = ['', '', '', '', '', '', '', '', '']
    gameBoard.map((x)=>{
        x.addEventListener('click', ()=>{
        if(playerCreated){
            if(position[gameBoard.indexOf(x)] == ''){
                const img = document.createElement('img');

             if(playerOneTurn){
                    img.setAttribute('src', 'images/alpha-x.png');
                    position[gameBoard.indexOf(x)]='x';
                    playerOneTurn=false;
                }else{
                    img.setAttribute('src', 'images/circle.png');
                    position[gameBoard.indexOf(x)]='o';
                    playerOneTurn=true;
                }
                x.appendChild(img);
                console.log(position);
            }
        }
        });
    })
    return {position};
})();

(function GameManager(){
    const playButton = document.querySelector('button');
    const player1=new Player();
    const player2=new Player();

    playButton.addEventListener('click', ()=>{
        if(document.querySelector('h2')){document.querySelector('h2').remove(); document.querySelector('h2').remove();}
        player1.score=0;
        player2.score=0;

        console.log(player1.name);
        player1.name=document.getElementById('player-one-input').value;
        player2.name=document.getElementById('player-two-input').value;
        const player1Text = document.createElement('h2');
        const player2Text = document.createElement('h2');

        player1Text.textContent=player1.name +`: ${player1.score}`;
        player2Text.textContent=player2.name +`: ${player2.score}`;
        document.querySelector('.player-fields').appendChild(player1Text);
        document.querySelector('.player-fields').appendChild(player2Text);

        playerCreated=true;
    })
})();

function Player(){
    const score =0;
    let name = '';
    return{name, score}
}