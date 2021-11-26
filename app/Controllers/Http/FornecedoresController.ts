import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fornecedor from 'App/Models/Fornecedor'

export default class FornecedoresController {
  public async index({ }: HttpContextContract) {
    try {
      const todosFornecedores = await Fornecedor.all();
      console.log(todosFornecedores)
      return todosFornecedores;
    } catch (error) {
      console.log(error)
    }
  }

  public async buscarFornecedor({ params }: HttpContextContract) {
    try {
      const dadosFornecedor = await Fornecedor.findOrFail(params.id)
      console.log(dadosFornecedor)
      return dadosFornecedor
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ request }: HttpContextContract) {
    const pegarDadosFornecedor = await request.only(['razao_social', 'nome_fantasia', 'endereco', 'bairro', 'numero', 'cidade', 'uf', 'cnpj', 'ie', 'telefone'])
    const saveFornecedor = await Fornecedor.create(pegarDadosFornecedor)
    console.log(saveFornecedor)

    return saveFornecedor
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
