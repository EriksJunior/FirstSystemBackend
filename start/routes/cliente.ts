import Route from '@ioc:Adonis/Core/Route'

Route.post('/cliente', 'ClientesController.store')
Route.get('/cliente', 'ClientesController.index')
Route.get('/cliente/:id', 'ClientesController.buscarCliente')
Route.delete('/cliente/:id', 'ClientesController.destroy')
Route.put('/cliente/:id', 'ClientesController.update')



export default Route