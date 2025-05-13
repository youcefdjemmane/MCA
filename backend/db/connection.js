import knex from 'knex';
import knexConfig from '../../knexfile.js'; // Chemin relatif depuis connection.js

const db = knex(knexConfig.development);

export default db;
