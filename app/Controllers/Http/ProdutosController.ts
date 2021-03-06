import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from '../../Models/Produto'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ProdutosController {
  public async index({ }: HttpContextContract) {
    try {
      const dadosGerais = await Produto.all()
      return dadosGerais
    } catch (error) {
      console.log(error)
    }
  }

  public async getStockProductById({ params }: HttpContextContract) {
    try {
      const amountTotalProduct = await Database.rawQuery(`select sum(mov_estoques.quantidade) as quantidadeTotal from mov_estoques where mov_estoques.id_produto = ${params.id} and mov_estoques.tipo_movimentacao = "Compra" or mov_estoques.tipo_movimentacao = "Ajuste Entrada" and mov_estoques.id_produto = ${params.id}`)
      console.log(amountTotalProduct)
      return amountTotalProduct
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const dadosProdutos = request.only(['nome', 'marca', 'preco_custo', 'preco_venda', 'categoria', 'data_cadastro', 'obs'])
      const data = await Produto.create(dadosProdutos)
      response.status(200).json({ message: 'Produto salvo com sucesso!' })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  public async getProductById({ params }: HttpContextContract) {
    const product = await Produto.findOrFail(params.id)
    console.log(product)
    return product
  }


  public async update({ request, response, params }: HttpContextContract) {
    try {
      const data = await Produto.findOrFail(params.id)
      const dadosProduto = request.only(['nome', 'marca', 'quantidade', 'preco_custo', 'preco_venda', 'categoria', 'data_cadastro', 'obs'])
      data.merge(dadosProduto)

      await data.save()
      response.status(200).json({ message: 'Produto atualizado com sucesso' })
      return data

    } catch (error) {
      console.log(error)
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const data = await Produto.findOrFail(params.id)
      data.delete()
      response.status(200).json({ message: 'Produto deletado com sucesso!' })
    } catch (error) {
      console.log(error)
    }
  }
}
