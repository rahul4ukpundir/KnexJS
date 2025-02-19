/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table)=>{
    table.increments();
    table.string("Name").notNullable();
    table.string("Email").notNullable();
    table.integer("Age").notNullable();
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
  
};
