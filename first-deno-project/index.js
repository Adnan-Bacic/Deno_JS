//run with: deno run FILENAME.js
console.log('hello world');

//to allow fetch:
//deno run --allow-net FILENAME.js
//more safe, add url: 
//deno run --allow-net=https://jsonplaceholder.typicode.com/todos/1 FILENAME.js
/*
await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  */

window.addEventListener('load', () => {
    console.log('loaded');
})