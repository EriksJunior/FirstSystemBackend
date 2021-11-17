import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: String

  @column()
  public marca: String

  @column()
  public quantidade: Number

  @column()
  public preco_custo: Number

  @column()
  public preco_venda: Number

  @column()
  public categoria: String

  @column()
  public data_cadastro: Date

  @column()
  public obs: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
