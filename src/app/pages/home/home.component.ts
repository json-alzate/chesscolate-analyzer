import { Component } from '@angular/core';

import { ReadPgnService } from '../../services/read-pgn.service';

interface ColumnData {
  [column: string]: number;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

  constructor(private readPgnService: ReadPgnService) { }

  async readFile() {

    try {
      const pgnText = await this.readPgnService.loadPgnFile();

      const partidas: any[] = [];
      const juegos = pgnText.split(/\n\n(?=\[Event)/); // Divide las partidas en bloques

      juegos.forEach((juego) => {
        partidas.push(juego);
      });

      console.log(this.extractPawnMoves(partidas[0], true));

    } catch (error) {
      console.error('Error al cargar el PGN:', error);
    }
  }

  /*
    Se calcula en que columna se avanza mas un peon
  */
  columnPawnAdvanced(games: any[]) {

    for (const game of games) {

    }

  }


  extractPawnMoves(pgnText: string, evaluateWhite: boolean): ColumnData {

    const whiteMovePattern = /\d+\.\s*([a-h](?:x?[a-h]?[1-8]))/g;
    const blackMovePattern = /\d+\.\.\.\s*([a-h](?:x?[a-h]?[1-8]))/g;

    const pawnMovePattern = /\d+\.\.\.\s*([a-h](?:x?[a-h]?[1-8]))/g;
    const moves = pgnText.match(pawnMovePattern) || [];
    console.log(pgnText);

    console.log(moves);

    const columnCounts: ColumnData = {};

    for (let col of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
      columnCounts[col] = 0;
    }

    const isWhiteTurn = (moveNumber: number) => moveNumber % 2 !== 0;

    let moveNumber = 1;
    for (let move of moves) {
      let column = move[0];
      if (columnCounts[column]) {
        if ((evaluateWhite && isWhiteTurn(moveNumber)) || (!evaluateWhite && !isWhiteTurn(moveNumber))) {
          columnCounts[column] += 1;
        }
      }
      moveNumber++;
    }

    return columnCounts;
  }




}
