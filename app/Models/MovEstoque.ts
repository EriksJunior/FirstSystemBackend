import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Produto from 'app/Models/Produto'
import Fornecedor from 'app/Models/Fornecedor'

export default class MovEstoque extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_produto: number
  @belongsTo(() => Produto, { foreignKey: 'id_produto' })
  public produto: BelongsTo<typeof Produto>

  @column()
  public id_fornecedor: number
  @belongsTo(() => Fornecedor, { foreignKey: 'id_fornecedor' }),
  public fornecedor: BelongsTo<typeof Fornecedor>

  @column()
  public quantidade: Number

  @column()
  public numero_nfe: Number

  @column()
  public tipo_movimentacao: String


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
