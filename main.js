

const GameBoard=(function (){
    const gameBoard = Array.from(document.querySelectorAll('.square'));
    let position = ['', '', '', '', '', '', '', '', '']
    gameBoard.map((x)=>{
        x.addEventListener('click', ()=>{
            const img = document.createElement('img');
            img.setAttribute('src', 'images/alpha-x.png');
            x.appendChild(img);
            position[gameBoard.indexOf(x)]='x'
        });
    })
    return {position};
})();