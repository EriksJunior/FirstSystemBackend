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

  public async create({ }: HttpContextContract) {
  }

  public async store({ }: HttpContextContract) {
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
