//allow fetch: deno run --allow-net FILENAME.ts
const res = await fetch('https://swapi.dev/api/films');
const resData = await res.json();
console.log(resData);