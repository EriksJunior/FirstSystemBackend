import Route from '@ioc:Adonis/Core/Route'

Route.post('/movVenda', 'MovVendasController.store')
Route.get('/movVenda/produtoVenda/:id', 'MovVendasController.getProductSaleById')
Route.get('/movVenda/:id', 'MovVendasController.getSalesById')
Route.delete('/movVenda/:id', 'MovVendasController.destroy')