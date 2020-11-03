const friends = ['Nello', 'Maio', 'Pit', 'Pelle', 'Paolo'];

for (let i = 0; i < friends.length; i++) {
  let chorus = '';
  for (let j = 99; j >= 1; j--) {
    if (j === 1) {
      chorus += `${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file
      `;
    } else {
      chorus += `${j} lines of code in the file, ${j} lines of code; ${
        friends[i]
      } strikes one out, clears it all out, ${
        j - 1
      } lines of code in the file\n`;
    }
  }

  // console.log(friends[i] + ':\n', chorus);
  console.log(`${friends[i]}:\n${chorus}`);
}
