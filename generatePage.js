import { showMenu } from './showMenu';
import { showHours } from './showHours';

function generatePage() {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const headerContent = document.createElement('p');
  const mainContent = document.createElement('p');
  const footerContent = document.createElement('p');

  const headerText = document.createTextNode('header');
  const mainText = document.createTextNode('main');
  const footerText = document.createTextNode('footer');

  headerContent.appendChild(headerText);
  mainContent.appendChild(mainText);
  footerContent.appendChild(footerText);
  
  header.appendChild(headerContent);
  main.appendChild(mainContent);
  footer.appendChild(footerContent);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
  
  const tabsContainer = document.createElement('div');
  const menu = document.createElement('button');
  const hours = document.createElement('button');
  const menuText = document.createTextNode('menu');
  const hoursText = document.createTextNode('hours');
  menu.appendChild(menuText);
  hours.appendChild(hoursText);
  tabsContainer.appendChild(menu);
  tabsContainer.appendChild(hours);

  main.appendChild(tabsContainer);
  
  menu.addEventListener('click', showMenu);
  hours.addEventListener('click', showHours);
}

export { generatePage }