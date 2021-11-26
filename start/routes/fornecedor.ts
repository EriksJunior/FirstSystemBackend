import Route from '@ioc:Adonis/Core/Route'


Route.get('/fornecedor', 'FornecedoresController.index')
Route.post('/fornecedor', 'FornecedoresController.store')

export default Route