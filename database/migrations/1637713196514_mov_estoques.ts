import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MovEstoques extends BaseSchema {
  protected tableName = 'mov_estoques'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.integer('id_produto').unsigned().references('id').inTable('produtos').onUpdate('CASCADE').notNullable()
      table.integer('id_fornecedor').unsigned().references('id').inTable('fornecedors').onUpdate('CASCADE').notNullable()
      table.integer('quantidade', 10).notNullable()
      table.integer('numero_nfe', 10).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
