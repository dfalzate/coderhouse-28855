import { createApp } from "https://deno.land/x/servest@v1.3.4/mod.ts";

const app = createApp();

app.handle("/coderhouse", async (req: any) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      // "content-type": "text/plain",
      // "content-type": "text/html",
      // "content-type": "application/html",
      // "content-type": "application/json",
      "content-type": "application/xml",
    }),
    // body: "Hola CODERHOUSE",
    body: "<h1>Hola CODERHOUSE</h1>",
  });
});

const port = 3000;
console.log(`Server running on http://localhost:${port}`);
app.listen({ port });
