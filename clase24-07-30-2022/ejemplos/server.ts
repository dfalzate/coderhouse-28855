import { serve } from "https://deno.land/std@0.150.0/http/server.ts";

// serve(() => new Response("Hello Coderhouse!\n"));
// console.log("http://localhost:8000/");

const PORT = 9000;

const handler = (request: Request): Response => {
  const url = new URL(request.url);
  console.log(url);
  const param = url.searchParams.get("parametro");
  console.log("Parametros=>", param);
  // return new Response(JSON.stringify({ message: "Hola Codehouser" }), {
  //   status: 200,
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // });
  return new Response("<h1>Hola CODERHOUSE</h1>", {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
};

await serve(handler, { port: PORT });
