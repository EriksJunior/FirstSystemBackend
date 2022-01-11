import Route from '@ioc:Adonis/Core/Route'

Route.post('/movVenda', 'MovVendasController.store')
Route.get('/movVenda/venda/:id', 'MovVendasController.getProductById')
Route.get('/movVenda/:id', 'MovVendasController.getSalesById')