import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovEstoque from '../../Models/MovEstoque'

export default class MovEstoquesController {
  public async index({ }: HttpContextContract) {
    try {
      const data = await MovEstoque.all();
      console.log(data)
      return data
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

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
