function bingo(ticket, win) {
  let miniWins = 0;
  for (let i = 0; i < ticket.length; i++) {
    const [str, num] = ticket[i];
    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        miniWins++;
        break;
      }
    }
  }
  return miniWins >= win ? "Winner!" : "Loser!";
}
