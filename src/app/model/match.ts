export class Match {
  winner: string;
  player1: string;
  player2: string;

  constructor(public contestant1: string, public contestant2: string, public winner: string) {
    this.player1 = contestant1;
    this.player2 = contestant2;
    this.winner = winner;          
  }

  getWinner(): string {
    return this.winner;
  }
}
