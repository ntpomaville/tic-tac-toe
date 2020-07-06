(function() { //define player globally and add button functionality
    newGame.addEventListener('click', () => {
        playGame();
    })
    b00.addEventListener('click', () => {
        buttonClick('#b00');
    });
    b01.addEventListener('click', () => {
        buttonClick('#b01');
    });
    b02.addEventListener('click', () => {
        buttonClick('#b02');
    });
    b10.addEventListener('click', () => {
        buttonClick('#b10');
    });
    b11.addEventListener('click', () => {
        buttonClick('#b11');
    });
    b12.addEventListener('click', () => {
        buttonClick('#b12');
    });
    b20.addEventListener('click', () => {
        buttonClick('#b20');
    });
    b21.addEventListener('click', () => {
        buttonClick('#b21');
    });
    b22.addEventListener('click', () => {
        buttonClick('#b22');
    });
})();

const playGame = () => { //reset board after clicking New Game
    player = 'O';
    winner = '_';
    document.querySelector('#b00').textContent = '_';
    document.querySelector('#b01').textContent = '_';
    document.querySelector('#b02').textContent = '_';
    document.querySelector('#b10').textContent = '_';
    document.querySelector('#b11').textContent = '_';
    document.querySelector('#b12').textContent = '_';
    document.querySelector('#b20').textContent = '_';
    document.querySelector('#b21').textContent = '_';
    document.querySelector('#b22').textContent = '_';
}

const buttonClick = (btn) => { //
    if (typeof player == 'undefined') {player = 'O'};
    if (typeof winner == 'undefined') {winner = '_'};
    if (document.querySelector(btn).textContent == 'O' || document.querySelector(btn).textContent == 'X') {
        return;
    } else if (winner == '_') {
        if (player == 'O') {
            player = 'X';
        } else if (player == 'X') {
            player = 'O';
        }
        document.querySelector(btn).textContent = player;
        checkWinner();
        if (winner == 'X') {
            setTimeout(function () { window.alert('Player 1 Wins!'); }, 1);
        } else if (winner == 'O') {
            setTimeout(function () { window.alert('Player 2 Wins!'); }, 1);
        }
    }
}

const checkWinner = () => {
    //horizontal X
    if (document.querySelector('#b00').textContent == 'X' 
    && document.querySelector('#b01').textContent == 'X' 
    && document.querySelector('#b02').textContent == 'X') {
        return winner = 'X';
    }
    if (document.querySelector('#b10').textContent == 'X' 
    && document.querySelector('#b11').textContent == 'X' 
    && document.querySelector('#b12').textContent == 'X') {
        return winner = 'X';
    }
    if (document.querySelector('#b20').textContent == 'X' 
    && document.querySelector('#b21').textContent == 'X' 
    && document.querySelector('#b22').textContent == 'X') {
        return winner = 'X';
    }
    //vertical X
    if (document.querySelector('#b00').textContent == 'X' 
    && document.querySelector('#b10').textContent == 'X' 
    && document.querySelector('#b20').textContent == 'X') {
        return winner = 'X';
    }
    if (document.querySelector('#b01').textContent == 'X' 
    && document.querySelector('#b11').textContent == 'X' 
    && document.querySelector('#b21').textContent == 'X') {
        return winner = 'X';
    }
    if (document.querySelector('#b02').textContent == 'X' 
    && document.querySelector('#b12').textContent == 'X' 
    && document.querySelector('#b22').textContent == 'X') {
        return winner = 'X';
    }
    //diagonal X
    if (document.querySelector('#b00').textContent == 'X' 
    && document.querySelector('#b11').textContent == 'X' 
    && document.querySelector('#b22').textContent == 'X') {
        return winner = 'X';
    }
    if (document.querySelector('#b02').textContent == 'X' 
    && document.querySelector('#b11').textContent == 'X' 
    && document.querySelector('#b20').textContent == 'X') {
        return winner = 'X';
    }

    //horizontal O
    if (document.querySelector('#b00').textContent == 'O' 
    && document.querySelector('#b01').textContent == 'O' 
    && document.querySelector('#b02').textContent == 'O') {
        return winner = 'O';
    }
    if (document.querySelector('#b10').textContent == 'O' 
    && document.querySelector('#b11').textContent == 'O' 
    && document.querySelector('#b12').textContent == 'O') {
        return winner = 'O';
    }
    if (document.querySelector('#b20').textContent == 'O' 
    && document.querySelector('#b21').textContent == 'O' 
    && document.querySelector('#b22').textContent == 'O') {
        return winner = 'O';
    }
    //vertical O
    if (document.querySelector('#b00').textContent == 'O' 
    && document.querySelector('#b10').textContent == 'O' 
    && document.querySelector('#b20').textContent == 'O') {
        return winner = 'O';
    }
    if (document.querySelector('#b01').textContent == 'O' 
    && document.querySelector('#b11').textContent == 'O' 
    && document.querySelector('#b21').textContent == 'O') {
        return winner = 'O';
    }
    if (document.querySelector('#b02').textContent == 'O' 
    && document.querySelector('#b12').textContent == 'O' 
    && document.querySelector('#b22').textContent == 'O') {
        return winner = 'O';
    }
    //diagonal O
    if (document.querySelector('#b00').textContent == 'O' 
    && document.querySelector('#b11').textContent == 'O' 
    && document.querySelector('#b22').textContent == 'O') {
        return winner = 'O';
    }
    if (document.querySelector('#b02').textContent == 'O' 
    && document.querySelector('#b11').textContent == 'O' 
    && document.querySelector('#b20').textContent == 'O') {
        return winner = 'O';
    }
}