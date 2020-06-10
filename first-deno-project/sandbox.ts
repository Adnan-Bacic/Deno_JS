//reading files
const decoder = new TextDecoder('utf-8');

//to allow read: deno run --allow-read FILENAME.ts
/*
const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));
*/

const data = await Deno.readTextFile('readme.txt');
console.log(data);


//writing files

//to allow write: deno run --allow-write FILENAME.ts
const encoder = new TextEncoder();
const text = encoder.encode('hello');
await Deno.writeFile('readme.txt', text);

//both in the same file: deno run --allow-read --allow-write FILENAME.ts   

//renaming and removing file
await Deno.rename('readme.txt', 'deleteme.txt');
await Deno.remove('deleteme.txt');