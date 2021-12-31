import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venda from '../../Models/Venda'
export default class VendasController {
  public async index({ }: HttpContextContract) {
  }

  public async store({ request }: HttpContextContract) {
    const dadosVenda = await request.only(['id_cliente', 'tipo_venda', 'data_venda', 'data_entrega'])
    const data = await Venda.create(dadosVenda)
    console.log(data)
    return data

  }

  public async update({ params, request }: HttpContextContract) {
    const data = await Venda.findOrFail(params.id);
    const dadosVendaUpdate = await request.only(['id', 'id_cliente', 'tipo_venda', 'data_venda', 'data_entrega']);
    await data.merge(dadosVendaUpdate);
    await data.save()
    return data
  }

  public async show({ }: HttpContextContract) {
  }

  public async edit({ }: HttpContextContract) {
  }


  public async destroy({ }: HttpContextContract) {
  }
}
