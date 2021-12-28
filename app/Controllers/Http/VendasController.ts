import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venda from '../../Models/Venda'
export default class VendasController {
  public async index({ }: HttpContextContract) {
  }

  public async store({ request }: HttpContextContract) {
    const dadosVenda = await request.only(['id', 'tipoVenda', 'data_venda', 'data_entrega'])
    const data = Venda.create(dadosVenda)
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
