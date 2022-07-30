import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";
import ReactDOMServer from "https://esm.sh/react-dom@18.2.0/server";
import React from "https://esm.sh/react@18.2.0";

const app = createApp();

let conteo: number = 0

app.handle("/coderhouse", async (req: any) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=utf-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <body>
          <h1>
            Hello servest CODERHOUSE
          </h1>
          <h2>Visitas {conteo++}</h2>
        </body>
      </html>
    )
  });
});

const port = 3000;
console.log(`Server running on http://localhost:${port}`);
app.listen({ port });