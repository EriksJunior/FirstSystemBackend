import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fornecedor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public razao_social: String

  @column()
  public nome_fantasia: String

  @column()
  public endereco: String

  @column()
  public bairro: String

  @column()
  public numero: Number

  @column()
  public cidade: String

  @column()
  public uf: String

  @column()
  public cnpj: String

  @column()
  public ie: String

  @column()
  public telefone: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
