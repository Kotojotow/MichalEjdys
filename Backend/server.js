if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
express = require("express")
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.listen(process.env.APP_PORT || 3000)