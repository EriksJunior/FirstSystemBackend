import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovVenda from '../../Models/MovVenda'
import Database from '@ioc:Adonis/Lucid/Database'

export default class MovVendasController {
  public async index({ }: HttpContextContract) {
    try {
      const dataProduct = await MovVenda.all()
      console.log(dataProduct)
      return dataProduct
    } catch (error) {
      console.log(error)
    }
  }

  public async getProductSaleById({ params }: HttpContextContract) {
    try {
      const dataProductById = await Database.rawQuery(`select produtos.id, produtos.nome, mov_vendas.id, mov_vendas.id_venda, mov_vendas.id_produto, mov_vendas.quantidade, mov_vendas.valor, mov_vendas.unidade from mov_vendas inner Join  produtos on mov_vendas.id_produto = produtos.id where  id_venda = ${params.id}`)
      console.log(dataProductById)
      return dataProductById

    } catch (error) {
      console.log(error)
    }
  }

  public async getSalesById({ params }: HttpContextContract) {
    const dataSalesById = await MovVenda.findOrFail(params.id)
    console.log(dataSalesById)
    return dataSalesById
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
