import Route from '@ioc:Adonis/Core/Route'

Route.post('/venda', 'VendasController.store')

export default Route