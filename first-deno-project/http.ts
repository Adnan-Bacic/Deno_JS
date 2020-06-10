import { serve } from "https://deno.land/std/http/server.ts";

//open http: deno run --allow-net FILENAME.ts
const server = serve({
    port: 3000
});
console.log(`open on port 3000`);

for await (const req of server){
    console.log('req made');

    const url = req.url;
    req.respond({
        body: `hello world, we are on ${url}`
    });
}