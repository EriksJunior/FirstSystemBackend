import Route from '@ioc:Adonis/Core/Route'

Route.post('/venda', 'VendasController.store')
Route.get('/venda', 'VendasController.index')
Route.get('/venda/:id', 'VendasController.getSaleByTableForFormSale')
Route.put('/venda/:id', 'VendasController.update')

export default Route