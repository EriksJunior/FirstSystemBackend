import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vendas extends BaseSchema {
  protected tableName = 'vendas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_venda').primary().unique()
      table.integer('id_produto').unsigned().references('id').inTable('produtos').onUpdate('CASCADE').notNullable()
      table.integer('id_cliente').unsigned().references('id').inTable('clientes').onUpdate('CASCADE').notNullable()
      table.string('tipoVenda', 50).defaultTo('venda').notNullable()
      table.date('data_venda').defaultTo(null)
      table.date('data_entrega').defaultTo(null)
      table.integer('quantidade', 10).notNullable()
      table.integer('valor', 10).notNullable()
      table.string('unidade', 25)
      table.string('ipi', 25)
      table.string('pis', 25)
      table.string('cofins', 25)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
