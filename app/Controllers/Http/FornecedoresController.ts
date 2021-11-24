import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fornecedor from 'App/Models/Fornecedor'

export default class FornecedoresController {
  public async index({ response }: HttpContextContract) {
    try {
      const todosFornecedores = await Fornecedor.all();
      response.status(200).json({ message: "busca realizada com sucesso" })
      return todosFornecedores;
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ }: HttpContextContract) {
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
