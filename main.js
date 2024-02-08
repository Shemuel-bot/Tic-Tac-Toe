(function GameBoard(){
    const gameBoard = Array.from(document.querySelectorAll('.square'));
    gameBoard.map((x)=>{
        x.addEventListener('click', ()=>{
            const img = document.createElement('img');
            img.setAttribute('src', 'images/alpha-x.png');
            x.appendChild(img);
        });
            
    })
})();