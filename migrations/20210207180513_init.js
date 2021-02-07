exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.uuid('id').unique().primary().notNullable()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.boolean('is_active').notNullable().default(true)
      table.timestamps(true, true)
    })
    .createTable('todos', function (table) {
      table.uuid('id').unique().primary().notNullable()
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.boolean('is_active').notNullable().default(true)

      table.uuid('user_id').notNullable()
      table.uuid('label_id').notNullable()

      table.timestamps(true, true)

      table
        .foreign('user_id')
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .foreign('label_id')
        .references('labels.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('labels', function (table) {
      table.uuid('id').unique().primary().notNullable()
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.boolean('is_active').notNullable().default(true)

      table.uuid('user_id').notNullable()

      table.timestamps(true, true)

      table
        .foreign('user_id')
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('tokens', function (table) {
      table.uuid('id').primary().unique().notNullable()
      table.string('token_name').notNullable()
      table.text('token_pair').unique().notNullable()
      table.text('token').unique().notNullable()
      table.string('email').notNullable()

      table.boolean('is_verified').defaultTo('false').notNullable()

      table.timestamps(true, true)
    })
    .createTable('access_tokens', function (table) {
      table.uuid('id').primary().unique().notNullable()
      table.text('token').notNullable()
      table.date('expires_at').notNullable()
      table.boolean('is_active').notNullable().default(true)
      table.uuid('user_id').notNullable()

      table.timestamps(true, true)

      table
        .foreign('user_id')
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('access_tokens')
    .dropTableIfExists('tokens')
    .dropTableIfExists('todos')
    .dropTableIfExists('users')
}
