const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

// console.log(items);
// console.log(categoriesList);

console.log(`Number of categories: ${items.legth}`);

items.forEach(item => { 
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);

})