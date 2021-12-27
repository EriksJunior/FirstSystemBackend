import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vendas extends BaseSchema {
  protected tableName = 'vendas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_venda').primary().unique()
      table.string('tipoVenda', 50).defaultTo('venda').notNullable()
      table.date('data_venda').defaultTo(null)
      table.date('data_entrega').defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
