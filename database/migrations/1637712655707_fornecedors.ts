import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fornecedors extends BaseSchema {
  protected tableName = 'fornecedors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique()
      table.string('razao_social', 100).notNullable()
      table.string('nome_fantasia', 100).defaultTo(null)
      table.string('endereco', 50).defaultTo(null)
      table.string('bairro', 50).defaultTo(null)
      table.integer('numero', 10).defaultTo(null)
      table.string('cidade', 30).defaultTo(null)
      table.string('uf', 2).defaultTo(null)
      table.string('cnpj', 18).defaultTo(null)
      table.string('ie', 25).defaultTo(null)
      table.string('telefone', 17).defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
