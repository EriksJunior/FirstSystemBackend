import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: String

  @column()
  public cpfcnpj: String

  @column()
  public endereco: String

  @column()
  public bairro: String

  @column()
  public numero: Int32Array

  @column()
  public cidade: String

  @column()
  public uf: String

  @column()
  public dataNasc: Date

  @column()
  public obs: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
