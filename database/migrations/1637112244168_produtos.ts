import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique().defaultTo(null)
      table.string('nome', 100).notNullable().defaultTo(null)
      table.string('marca', 50).defaultTo(null)
      table.integer('quantidade', 10).defaultTo(null)
      table.decimal('preco_custo', 15.3).defaultTo(null)
      table.decimal('preco_venda', 15.3).defaultTo(null)
      table.string('categoria', 50).defaultTo(null)
      table.date('data_cadastro').defaultTo(null)
      table.string('obs', 300).defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
