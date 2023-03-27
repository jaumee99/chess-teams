export class Player {

  id!: string;
  team!: number;
  name!: string;

  constructor() {

  }

   movePiece(): void {
    if (this.team === 1) {
      this.movePieceWhite();
    } else {
      this.movePieceBlack();
    }
  }

   movePieceWhite(): void {

    console.log('movePieceWhite');
  }

   movePieceBlack(): void {
    console.log('movePieceBlack');
  }
}
