import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Cell } from '../../models/cell/cell';
import { Board } from '../../models/board/board';

@Component({
  selector: 'app-taulell',
  templateUrl: './taulell.component.html',
  styleUrls: ['./taulell.component.css']
})
export class TaulellComponent implements OnInit {
  capturedPiecesW: string[] = [];
  capturedPiecesB: string[] = [];
  private _board: Board;

  constructor() {
    this._board = new Board();
  }

  ngOnInit(): void {

  }

  get board(): Board {
    return this._board;
  }

  getCellClass(cell: Cell) {
    return ['cell', cell.color];
  }

  drop(event: any) {
    const previousCell: Cell = event.previousContainer.data;
    const currentCell: Cell = event.container.data;
    console.log(previousCell);
    console.log(currentCell);
    if (event.previousContainer === event.container) {
      console.log('same container');
    } else {
      console.log('different container');
      if (currentCell.piece !== '') {
        if (currentCell.piece.includes('w')) {
        this.capturedPiecesW.push(currentCell.piece);
        currentCell.piece = previousCell.piece;
        previousCell.piece = '';
        } else {
          this.capturedPiecesB.push(currentCell.piece);
          currentCell.piece = previousCell.piece;
          previousCell.piece = '';
        }
      } else {
        currentCell.piece = previousCell.piece;
        previousCell.piece = '';  
      }
    }
  }

}

