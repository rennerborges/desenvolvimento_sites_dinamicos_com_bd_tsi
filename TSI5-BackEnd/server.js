import dotenv from 'dotenv';

import app from './app';

dotenv.config({ path: './variables.env' });

app.set('port', process.env.PORT || 7778);

const server = app.listen(app.get('port'), () =>
  console.log(
    `\x1b[34mServidor rodando na porta: \x1b[0m${server.address().port}`
  )
);
