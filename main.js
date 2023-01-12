// console.log(document.getElementsByClassName('list-group-item'));
// let item = document.getElementsByClassName('list-group-item');
// item[1].textContent = 'Second Item';
// item[1].style.fontWeight = 'bold';
// item[1].style.backgroundColor = 'red';
// item[3].style.backgroundColor = 'green';
// for( let i=0 ; i <item.length; i++)
// {
//     item[i].style.fontWeight = 'bold';
// }
let li = document.getElementsByTagName('li');
console.log(li[1]);
li[1].textContent = 'Second Item';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'red';
li[4].style.backgroundColor = 'green';
for( let i=0 ; i <li.length; i++)
{
    li[i].style.fontWeight = 'bold';
}
li[4].textContent = 'Last Item';