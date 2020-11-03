window.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
  // remove div friend from previous lab
  document.querySelector('.friend').remove();
  // ---------
  // create button
  const singButtun = document.createElement('button');
  singButtun.classList.add('animate__animated', 'animate__backInRight');
  singButtun.innerText = 'Sing!';
  const container = document.querySelector('.container');
  container.insertBefore(singButtun, document.querySelector('.friend'));
  // ---------------------

  const friends = ['Nello', 'Maio', 'Pit', 'Pelle', 'Paolo'];

  const sing = () => {
    singButtun.classList.replace('animate__backInRight', 'animate__heartBeat');

    for (const friend of friends) {
      const div = document.createElement('div');
      div.classList.add('friend');
      div.setAttribute('id', `${friend.toLowerCase()}`);
      const heading = document.createElement('h3');
      heading.innerText = `${friend}`;

      div.appendChild(heading);
      container.appendChild(div);

      let chorus = '';
      for (let j = 99; j >= 1; j--) {
        const para = document.createElement('p');
        para.id = `para${j}${friend}`;

        switch (j) {
          case 1:
            chorus = `${j} line of code in the file, ${j} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`; //last line
            break;
          case 2:
            chorus = `${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, 1 line of code in the file\n`; //2nd top last grammer issue fixed
            break;
          default:
            chorus = `${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, ${
              j - 1
            } lines of code in the file\n`; //all other lines
            break;
        }
        const text = document.createTextNode(`${chorus}`);
        para.appendChild(text);
        div.appendChild(para);
      }

      // console.log(`${friend}:\n${chorus}`);
    }
  };

  singButtun.addEventListener('click', sing);

  // create div for each friend
  // const createDivs = () => {
  //   friends.forEach((friend) => {
  //     const div = document.createElement('div');
  //     div.classList.add('friend');
  //     div.setAttribute('id', `${friend.toLowerCase()}`);
  //     const heading = document.createElement('h3');
  //     heading.innerText = `${friend}`;
  //     const para = document.createElement('p');

  //     div.appendChild(heading);
  //     div.appendChild(para);
  //     container.appendChild(div);
  //   });
  // };
});
