import { Component, Input } from "@angular/core";
import { flatten } from "../../node_modules/@angular/core/src/render3/util";
import { devModeEqual } from "../../node_modules/@angular/core/src/change_detection/change_detection";

@Component({
  selector: "app-root",
  template: `
  <mat-toolbar color="primary">
  <span class="title-center">Tic Tac Toe</span>
  </mat-toolbar>
    <board></board>

  `,
  styles: [
    `
      .title-center {
        margin: 0 auto;
      }
    `
  ]
})
export class AppComponent {}

@Component({
  selector: "board",
  template: `
 
  <mat-card class="status">{{status}}</mat-card>

  <div class="table"  *ngFor="let row of[0,1,2]" >
  <square *ngFor = "let col of [0,1,2]" [state]="squares[col+row*3]" (click)="makeMove(col+row*3)"></square>
  </div>
  <div class="row">
  <button (click)="newGame()" mat-flat-button>{{statusNewGame}}</button>
  </div>


  
  `,
  styles: [
    `
      .status {
        margin: 0 auto;
      }
      .table {
        clear: both;
      }
      .row {
        margin-top: 25px;

        margin: 0 auto;
        width: 80%;
        clear: both;
        text-align: center;
      }
    `
  ]
})
export class Board {
  squares = Array(9).fill(null);
  player = "X";
  winner = null;
  empate = null;
  v = null;
  counter = 0;

  newGame() {
    this.squares = Array(9).fill(null);
    this.player = "X";
    this.winner = null;
    this.empate = null;
    this.v = 0;
    this.counter = 0;
  }

  get status() {
    if (this.winner != null) {
      return `Ganador: ${this.winner}`;
    } else {
      if (this.empate == "empate") {
        return "Empate";
      }
    }
    if (this.player != null) {
      return `Turno Jugador: ${this.player}`;
    } else {
      if (this.empate == "empate") {
        return "Empate";
      }
    }
  }

  get statusNewGame() {
    if (this.winner != null) {
      return `Juego Nuevo`;

    }else{
      if (this.empate == "empate") {
        return "Juego Nuevo";
      }
    }

    return this.winner ? `Juego Nuevo` : `Reiniciar`;
  }

  makeMove(position) {
    if (!this.winner && !this.squares[position]) {
      this.v = this.counter++;
      this.squares[position] = this.player;
      if (this.winningMove()) {
        this.winner = this.player;
      }

      this.player = this.player == "X" ? "O" : "X";
    }

    if (this.verificarM(this.v)) {
      this.empate = "empate";
    }
  }

  verificarM(counter): boolean {
    console.log(counter);
    if (counter == 8) {
      return true;
    }
    return false;
  }

  winningMove(): boolean {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of lines) {
      if (
        this.squares[line[0]] &&
        this.squares[line[0]] == this.squares[line[1]] &&
        this.squares[line[1]] == this.squares[line[2]]
      ) {
        return true;
      }
    }

    return false;
  }
}

@Component({
  selector: "square",
  template: `{{state}}`,
  styles: [
    `
      :host {
        border: 3px solid green;
        width: 128px;
        height: 128px;
        border: solid 7px grey;
        float: left;
        font-size: 128px;
        text-align: center;
      }
    `
  ]
})
export class Square {
  @Input() state;
}
