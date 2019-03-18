### In package.json
- Add build to scripts - ```”scripts": { "build": "webpack -p" }```

### In terminal
- `yarn build` to build
- The project has now been ‘baked’  into a dist folder

#### Then we need to build a server for this

### In terminal
- `touch index.js`
- `yarn add express dotenv`

### In .env
- `PORT=4000`

### In index.js
- Require dotenv with config (`require(‘dotenv’).config()`)
- Require express
- Declare a variable of port that gets the PORT from .env OR is 8080
- Declare a variable called app and run `express()`
- app.listen

### In package.json
- Under scripts, add `”start": "node index.js"`

### In index.js
- ```app.use(express.static(`${__dirname}/dist`))```
- ```app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))```
