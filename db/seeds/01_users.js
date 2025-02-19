/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, Name: 'rowValue1'},
    {id: 2, Name: 'rowValue2'},
    {id: 3, Name: 'rowValue3'}
  ]);
};
