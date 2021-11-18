import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from '../../Models/Produto'

export default class ProdutosController {
  public async index({ }: HttpContextContract) {
    try {
      const dadosGerais = await Produto.all()
      return dadosGerais
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ request }: HttpContextContract) {
    const dadosProdutos = request.only(['nome', 'marca', 'quantidade', 'preco_custo', 'preco_venda', 'categoria', 'data_cadastro', 'obs'])
    const data = await Produto.create(dadosProdutos)
    console.log(data)
    return data
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
