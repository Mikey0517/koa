const Koa = require( 'koa' );
const app = new Koa();

app.use( async ( ctx, next ) => {
  console.log( `${ ctx.request.method } ${ ctx.request.url }` );
  await next();
} )

app.use( async ( ctx, next ) => {
  await next();
  console.log( 'end' );
} )

app.use( async ( ctx, next ) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hellow, koa2!</h1>'
} )

app.listen( 3000 );