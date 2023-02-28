import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';
import { Cell } from '../../models/cell/cell';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.css']
})
export class TaulellComponent implements OnInit {
  board: Cell[][] = [];
  capturedPieces: string[] = [];

  constructor() {
    this.initializeBoard();
  }

  ngOnInit(): void {
    
  }

  getCellClass(cell: Cell) {
    return ['cell', cell.color];
  }

  drop(event: CdkDragDrop<any>): void {
    const previousCell = event.previousContainer.data[event.previousIndex];
    const currentCell = event.container.data[event.currentIndex];

    if (currentCell.piece !== '') {
      this.capturedPieces.push(currentCell.piece);
    }

    currentCell.piece = previousCell.piece;
    previousCell.piece = '';
  }

  private initializeBoard() {
    for (let i = 0; i < 8; i++) {
      this.board.push([]);
      for (let j = 0; j < 8; j++) {
        this.board[i].push({
          piece: '',
          color: (i + j) % 2 === 0 ? 'white' : 'black'
        });
      }
    }

    for (let i = 0; i < 8; i++) {
      this.board[1][i].piece = 'assets/bP.png';
      this.board[6][i].piece = 'assets/wP.png';
    }

    this.board[0][0].piece = 'assets/bR.png';
    this.board[0][7].piece = 'assets/bR.png';
    this.board[7][0].piece = 'assets/wR.png';
    this.board[7][7].piece = 'assets/wR.png';

    this.board[0][1].piece = 'assets/bN.png';
    this.board[0][6].piece = 'assets/bN.png';
    this.board[7][1].piece = 'assets/wN.png';
    this.board[7][6].piece = 'assets/wN.png';

    this.board[0][2].piece = 'assets/bB.png';
    this.board[0][5].piece = 'assets/bB.png';
    this.board[7][2].piece = 'assets/wB.png';
    this.board[7][5].piece = 'assets/wB.png';

    this.board[0][3].piece = 'assets/bQ.png';
    this.board[7][3].piece = 'assets/wQ.png';

    this.board[0][4].piece = 'assets/bK.png';
    this.board[7][4].piece = 'assets/wK.png';
  }

  getCell(row: number, col: number): Cell {
    return this.board[row][col];
  }
}

