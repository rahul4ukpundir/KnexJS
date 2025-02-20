/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    {id: 1, Name: 'amar'},
    {id: 2, Name: 'akbar'},
    {id: 3, Name: 'anthony'}
  ]);
};
