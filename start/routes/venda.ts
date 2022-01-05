import Route from '@ioc:Adonis/Core/Route'

Route.post('/venda', 'VendasController.store')
Route.get('/venda', 'VendasController.index')
Route.put('/venda/:id', 'VendasController.update')

export default Route