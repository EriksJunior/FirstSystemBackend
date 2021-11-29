import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovEstoque from '../../Models/MovEstoque'

export default class MovEstoquesController {
  public async index({ }: HttpContextContract) {
    try {
      const data = MovEstoque.all();
      console.log(data)
      return data
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
