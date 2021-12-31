import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Cliente from '../Models/Cliente'


export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_cliente: number
  @belongsTo(() => Cliente, { foreignKey: 'id_cliente' })
  public cliente: BelongsTo<typeof Cliente>

  @column()
  public tipo_venda: string

  @column()
  public data_venda: DateTime

  @column()
  public data_entrega: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
