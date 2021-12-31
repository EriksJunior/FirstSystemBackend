import Route from '@ioc:Adonis/Core/Route'

Route.post('/venda', 'VendasController.store')
Route.put('/venda/:id', 'VendasController.update')

export default Route