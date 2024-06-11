// const fs = require('fs');
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const bodyParser = require('body-parser');

// server.use(bodyParser.json());
// server.use(jsonServer.defaults());
// const recipesPath = './db-json/recipes.json';

// let recipes = JSON.parse(fs.readFileSync(recipesPath, 'UTF-8'));

// server.get('/api/recipes', (req, res) => {
//   res.status(200).json(recipes);
// });

// server.post('/api/recipes/save', (req, res) => {
//   const newRecipe = req.body;
//   recipes.push(newRecipe);
//   fs.writeFileSync(recipesPath, JSON.stringify(recipes, null, 2)); // Update the recipes file
//   res.status(200).json(newRecipe);
// });

// server.listen(3001, () => {
//   console.log('Run Auth API Server');
// });
