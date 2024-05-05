function rowWeights(array) {
  const team = [0, 0];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      team[1] += array[i];
    } else {
      team[0] += array[i];
    }
  }
  return team;
}

function rowWeights1(array) {
  return array.reduce(
    (acc, el, index) => {
      acc[index % 2] += el;
      return acc;
    },
    [0, 0]
  );
}
