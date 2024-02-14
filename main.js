let playerOneTurn = true;

const GameBoard=(function (){
    const gameBoard = Array.from(document.querySelectorAll('.square'));
    let position = ['', '', '', '', '', '', '', '', '']
    gameBoard.map((x)=>{
        x.addEventListener('click', ()=>{
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
            
        });
    })
    return {position};
})();

(function GameManager(){
    const playButton = document.querySelector('button');
    const player1=new Player('j');
    const player2=new Player('k');

    playButton.addEventListener('click', ()=>{

        player1.name=document.getElementById('player-one-input').textContent;
        player2.name=document.getElementById('player-two-input').textContent;
        const player1Text = document.createElement('h2');
        const player2Text = document.createElement('h2');
        console.log(player1.name)
        player1Text.textContent=player1.name +':';
        player2Text.textContent=player2.name;
        document.querySelector('.player-fields').appendChild(player1Text);
        document.querySelector('.player-fields').appendChild(player2Text);
    })
})();

function Player(name){
    let score = 0;
    return{name, score}
}