import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.string('nome', 100).notNullable().defaultTo(null)
      table.string('cpfcnpj', 25).defaultTo(null)
      table.string('endereco', 100).defaultTo(null)
      table.string('bairro', 100).defaultTo(null)
      table.integer('numero', 10).defaultTo(null)
      table.string('cidade', 50).defaultTo(null)
      table.string('uf', 2).defaultTo(null)
      table.date('data_nasc').defaultTo(null)
      table.string('obs', 300).defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
