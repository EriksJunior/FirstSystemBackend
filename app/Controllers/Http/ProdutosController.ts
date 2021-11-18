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

  public async store({ request, response }: HttpContextContract) {
    try {
      const dadosProdutos = request.only(['nome', 'marca', 'quantidade', 'preco_custo', 'preco_venda', 'categoria', 'data_cadastro', 'obs'])
      const data = await Produto.create(dadosProdutos)
      response.status(200).json({ message: 'Cliente salvo com sucesso!' })
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  public async show({ params }: HttpContextContract) {
    const dadosProdutos = await Produto.findOrFail(params.id)
    return dadosProdutos
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
