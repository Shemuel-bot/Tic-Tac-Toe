let playerOneTurn=true;
let playerCreated=false;
let position=['', '', '', '', '', '', '', '', ''];
const GameBoard=(function (){
    const gameBoard = Array.from(document.querySelectorAll('.square'));
    let pieces=[];
    function ResetPosition(){position=['', '', '', '', '', '', '', '', ''];}

    gameBoard.map((x)=>{
        x.addEventListener('click', ()=>{
        if(playerCreated){
            if(position[gameBoard.indexOf(x)] == ''){
                const img = document.createElement('img');
                pieces.push(img);
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
                console.log(CheckWhoWon('x'));
                if(CheckWhoWon('x')){
                    GameManager.player1.score++;
                    GameManager.UpdateScoreText();
                    pieces.map((x)=> x.remove())
                    ResetPosition();
                }
                if(CheckWhoWon('o')){
                    GameManager.player2.score++;
                    GameManager.UpdateScoreText();
                    pieces.map((x)=> x.remove())
                    ResetPosition();
                }
            }
        }
        console.log(position);
        });
    })
    return {pieces, ResetPosition};
})();
//Sees if someone got three in arrow
function CheckWhoWon(variable){
    if(position[0]==variable && position[1]==variable && position[2]==variable){return true;}
    if(position[0]==variable && position[4]==variable && position[8]==variable){return true;}
    if(position[0]==variable && position[3]==variable && position[6]==variable){return true;}
    if(position[1]==variable && position[4]==variable && position[7]==variable){return true;}
    if(position[2]==variable && position[4]==variable && position[6]==variable){return true;}
    if(position[2]==variable && position[5]==variable && position[8]==variable){return true;}
    if(position[6]==variable && position[7]==variable && position[8]==variable){return true;}
    if(position[3]==variable && position[4]==variable && position[5]==variable){return true;}
    return false;
}

const GameManager=(function GameManager(){
    const playButton = document.querySelector('button');
    const player1=new Player();
    const player2=new Player();
    function UpdateScoreText(){
        document.querySelector('.player1-text').textContent = 'x '+player1.name+`: ${player1.score}`;
        document.querySelector('.player2-text').textContent = 'o '+player2.name+`: ${player2.score}`;
    }
    playButton.addEventListener('click', ()=>{
        GameBoard.pieces.map((x)=> x.remove())
        GameBoard.ResetPosition();

        if(document.querySelector('h2')){document.querySelector('h2').remove(); document.querySelector('h2').remove();}
        player1.score=0;
        player2.score=0;

        player1.name=document.getElementById('player-one-input').value;
        player2.name=document.getElementById('player-two-input').value;
        const player1Text = document.createElement('h2');
        const player2Text = document.createElement('h2');
        player1Text.classList.add('player1-text');
        player2Text.classList.add('player2-text');

        player1Text.textContent='x '+player1.name +`: ${player1.score}`;
        player2Text.textContent='o '+player2.name +`: ${player2.score}`;
        document.querySelector('.player-fields').appendChild(player1Text);
        document.querySelector('.player-fields').appendChild(player2Text);

        playerCreated=true
    })

    return{player1, player2, UpdateScoreText}
})();

function Player(){
    const score =0;
    let name = '';
    return{name, score}
}