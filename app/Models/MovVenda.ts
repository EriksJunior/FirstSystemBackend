import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Produto from '../Models/Produto'
import Cliente from '../Models/Cliente'
import Venda from '../Models/Venda'

export default class MovVenda extends BaseModel {
  @column({ isPrimary: true })
  public id_mov_venda: number

  @column()
  public id_produto: number
  @belongsTo(() => Produto, { foreignKey: 'id_produto' })
  public produto: BelongsTo<typeof Produto>

  @column()
  public id_cliente: number
  @belongsTo(() => Cliente, { foreignKey: 'id_cliente' })
  public cliente: BelongsTo<typeof Cliente>

  @column()
  public id_venda: number
  @belongsTo(() => Venda, { foreignKey: 'id_venda' })
  public venda: BelongsTo<typeof Venda>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
