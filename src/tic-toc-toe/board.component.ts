import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  styleUrl: 'board.component.css',
  templateUrl: 'board.component.html',
})
export default class BoardComponent {
  winner: string | null = null;
  startGame: boolean = true;
  nextPlayer: string = 'X';
  board: Array<string | null> = [...Array(9).fill(null)];
  boardisEmpty: boolean = true;

  nextMove(index: number) {
    if(!this.board[index] && this.startGame) {
      this.board[index] = this.nextPlayer;
      this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
      this.boardisEmpty = this.board.some(item => item === null);
      this.checkWinner();
    }
  }

  private checkWinner() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    winConditions.forEach((item) => {
      const [a, b, c] = item;
      if(this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.board[a];
        this.startGame = false;
      }
    })
  }

  restartGame() {
    this.winner = null;
    this.startGame = true;
    this.nextPlayer = 'X';
    this.board = [...Array(9).fill(null)];
    this.boardisEmpty = true;
  }
}
