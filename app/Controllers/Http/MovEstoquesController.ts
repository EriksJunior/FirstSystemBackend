import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovEstoque from '../../Models/MovEstoque'

export default class MovEstoquesController {
  public async index({ }: HttpContextContract) {
    try {
      const data = await MovEstoque.query().preload("fornecedor").preload("produto");
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  public async selectMovInventoryById({ params }: HttpContextContract) {
    try {
      const stockMovementById = await MovEstoque.findOrFail(params.id)
      return stockMovementById;
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ request }: HttpContextContract) {
    const dadosMovimentacaoEstoque = await request.only(['id_produto', 'id_fornecedor', 'quantidade', 'numero_nfe', 'tipo_movimentacao'])
    
    const data = await MovEstoque.create(dadosMovimentacaoEstoque);
    console.log(data)
    return data

  }

  public async show({ }: HttpContextContract) {
  }

  public async edit({ }: HttpContextContract) {
  }

  public async update({ request, params, response }: HttpContextContract) {
    const dataMovEstoque = await MovEstoque.findOrFail(params.id)
    const data = request.only(["id_produto", "id_fornecedor", "quantidade", "numero_nfe", "tipo_movimentacao"])
    dataMovEstoque.merge(data)
    await dataMovEstoque.save()

    response.status(200).json({ message: "Movimentação atualizada com sucesso!" })
    return data
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = await MovEstoque.findOrFail(params.id)
      id.delete();
      response.status(200).json({ message: 'Produto deletado com sucesso!' })
    } catch (error) {
      console.log(error)
    }

  }
}
