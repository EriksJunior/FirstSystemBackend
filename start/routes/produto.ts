/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/produto', 'ProdutosController.store')
Route.get('/produto', 'ProdutosController.index')
Route.get('/produto/:id', 'ProdutosController.show')
Route.get('/quantEstoque/prod/:id', 'ProdutosController.selectAmountProductById')
Route.get('/produto/quantEstoque/:id', 'ProdutosController.show')
Route.put('/produto/:id', 'ProdutosController.update')
Route.delete('/produto/:id', 'ProdutosController.destroy')

export default Route