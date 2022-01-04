import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovVenda from '../../Models/MovVenda'

export default class MovVendasController {
  public async index({ }: HttpContextContract) {
  }

  public async create({ }: HttpContextContract) {
  }

  public async store({ request }: HttpContextContract) {
    const dadosMovVendas = await request.only(['id_venda', 'id_produto', 'quantidade', 'valor', 'unidade'])
    console.log(dadosMovVendas)
    const data = await MovVenda.create(dadosMovVendas)
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
