import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'

export default class ClientesController {
  public async index({ }: HttpContextContract) {
  }


  public async store({ request }: HttpContextContract) {
    try {
      const data = request.only(['nome', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'cidade', 'uf', 'dataNasc', 'obs'])
      const cliente = await Cliente.create(data)
      console.log("chegou")
      return cliente
    } catch (error) {
      console.log(error)
    }
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }

}


