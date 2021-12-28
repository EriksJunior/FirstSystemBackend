import Route from '@ioc:Adonis/Core/Route'

Route.post('/produto', 'ProdutosController.store')
Route.get('/produto', 'ProdutosController.index')
Route.get('/produto/estoqueTotal/:id', 'ProdutosController.getStockProductById')
Route.get('/produto/:id', 'ProdutosController.getProductById')
Route.put('/produto/:id', 'ProdutosController.update')
Route.delete('/produto/:id', 'ProdutosController.destroy')

export default Route