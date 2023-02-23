'use strict';


async function pageSwitcher(target) {
  await fetch(target).then(response => response.text()).then(text => {
    const mainElement = document.getElementsByTagName('main')[0];
    mainElement.innerHTML = text;
  });
}