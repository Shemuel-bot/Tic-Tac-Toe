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