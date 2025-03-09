function toggleSuperman(superMinion) {
  const minions = document.querySelector(".minions");
  const superman = minions.querySelector(".superman");// classe minion seleciona todos e da para retirar.
  if (superman !== null) {
    superman.classList.remove("superman");
  } else if (minions == superman) {
    superman.classList.remove("superman");
  } else {
    const minion = document.querySelector(".minion" + "." + superMinion);
    minion.classList.toggle("superman");
  }
}

