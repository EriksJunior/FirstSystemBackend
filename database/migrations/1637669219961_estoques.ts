import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Estoques extends BaseSchema {
  protected tableName = 'estoques'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique().defaultTo(null)
      table.integer('id_produto').references('id').inTable('produtos').onUpdate('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
