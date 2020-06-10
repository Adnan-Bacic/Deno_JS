//using modules in deno
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

//unstable module: deno run --allow-read --unstable FILENAME.ts
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";
const jsonObj = await readJson('ninjas.json');
console.log(jsonObj);

const booksArray = [
    {
        title: 'title1',
        auther: 'auther1'
    },
    {
        title: 'title2',
        auther: 'auther2'
    }
]

await writeJson('books.json', booksArray, { spaces: 2 });
console.log('books.json created')