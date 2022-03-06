/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Projection', function (table) {
        table.string('id').primary();
        table.string('description').notNullable();        
        table.number('value').notNullable();        
        table.date('date').notNullable();       
        table.string('type').notNullable();       
        table.string('status').notNullable();       
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Projection');
};
