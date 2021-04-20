import app from './app';
import env from './config';

app.set('PORT', env.port);

app.listen(app.get('PORT'))

console.log(`API RUN ON PORT: ${app.get('PORT')}`);



 

