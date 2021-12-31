import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovEstoque from '../../Models/MovVenda'

export default class MovVendasController {
  public async index({ }: HttpContextContract) {
  }

  public async create({ }: HttpContextContract) {
  }

  public async store({ request }: HttpContextContract) {

    const dadosMovVendas = await request.only(['id_venda', 'id_produto', 'quantidade', 'valor', 'unidade'])
    const data = MovEstoque.create(dadosMovVendas)
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
