console.dir(document);
console.log(document.domain);
console.log(document.url);
console.log(document.item);
document.title="Item List";
console.log(document.item);
// console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');

console.log(headerTitle);
// headerTitle.textContent="Triveni";
headerTitle.innerText="My List";
header.style.borderBottom = "solid 3px #000";
let mainItem = document.getElementById('main');
mainItem.style.fontWeight='bold';
mainItem.style.color='green';
