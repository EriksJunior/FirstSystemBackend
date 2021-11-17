import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from '../../Models/Cliente'

export default class ClientesController {
  public async index({ }: HttpContextContract) {
    try {
      const data = await Cliente.all()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  public async buscarCliente({ params }: HttpContextContract) {
    try {
      const data = await Cliente.find(`${params.id}`)
      return data
    } catch (error) {
      console.log(error)
    }
  }



  public async store({ request }: HttpContextContract) {
    try {
      const data = request.only(['nome', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'cidade', 'uf', 'dataNasc', 'obs'])
      const cliente = await Cliente.create(data)
      return cliente
    } catch (error) {
      console.log(error)
    }
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ request, params }: HttpContextContract) {
    try {
      const data = await Cliente.findOrFail(params.id)
      const cliente = request.only(['nome', 'cpfcnpj', 'endereco', 'bairro', 'numero', 'cidade', 'uf', 'dataNasc', 'obs'])
      data.merge(cliente)
      await data.save()
      return data

    } catch (error) {
      console.log(error)
    }

  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const data = await Cliente.findOrFail(params.id)
      await data.delete()
    } catch (error) {
      console.log(error)
    }
  }

}


