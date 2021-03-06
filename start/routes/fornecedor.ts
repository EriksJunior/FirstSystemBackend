import Route from '@ioc:Adonis/Core/Route'


Route.get('/fornecedor', 'FornecedoresController.index')
Route.get('/fornecedor/:id', 'FornecedoresController.buscarFornecedor')
Route.post('/fornecedor', 'FornecedoresController.store')
Route.put('/fornecedor/:id', 'FornecedoresController.update')
Route.delete('/fornecedor/:id', 'FornecedoresController.destroy')
export default Route