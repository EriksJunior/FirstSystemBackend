import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id_venda: number

  @column()
  public tipoVenda: string

  @column()
  public data_venda: DateTime

  @column()
  public data_entrega: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
