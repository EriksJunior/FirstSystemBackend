import Route from '@ioc:Adonis/Core/Route'

Route.get('/movestoque', 'MovEstoquesController.index');
Route.post('/movestoque', 'MovEstoquesController.index');


export default Route