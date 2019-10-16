const app = require('./config/server')

const Admin = require('./app/routes/admin');
Admin(app);

const Home = require('./app/routes/home');
Home(app);

const Noticias = require('./app/routes/noticias');
Noticias(app);

app.listen(3000);