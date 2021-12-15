import Route from '@ioc:Adonis/Core/Route'

Route.get('/movestoque', 'MovEstoquesController.index');
Route.get('/movestoque/:id', 'MovEstoquesController.getMovEstoqueById');
Route.post('/movestoque', 'MovEstoquesController.store');
Route.put('/movestoque/:id', 'MovEstoquesController.update');
Route.delete('/movestoque/:id', 'MovEstoquesController.destroy');



export default Route