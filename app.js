window.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
  // create button
  const singButtun = document.createElement('button');
  singButtun.innerText = 'Sing!';
  const container = document.querySelector('.container');
  container.insertBefore(singButtun, document.querySelector('.friend'));
  // ---------------------

  const friends = ['Nello', 'Maio', 'Pit', 'Pelle', 'Paolo'];

  const sing = () => {
    for (const friend of friends) {
      let chorus = '';
      for (let j = 99; j >= 1; j--) {
        switch (j) {
          case 1:
            chorus += `${j} line of code in the file, ${j} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`; //last line
            break;
          case 2:
            chorus += `${j} lines of code in the file, ${j} lines of code; ${friend} strikes strikes one out, 1 line of code in the file\n`; //2nd top last grammer issue fixed
            break;
          default:
            chorus += `${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, ${
              j - 1
            } lines of code in the file\n`; //all other lines
            break;
        }
      }
      console.log(`${friend}:\n${chorus}`);
    }
  };

  singButtun.addEventListener('click', sing);
  // remove div friend
  document.querySelector('.friend').remove();
});
