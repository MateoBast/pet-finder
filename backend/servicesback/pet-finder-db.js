import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres', // tu usuario
  host: 'localhost', // o la dirección IP si está en otro lugar
  database: 'pet-finder-db', // el nombre de tu base de datos
  password: 'Timoteo23', // tu contraseña
  port: 5432, // puerto por defecto
});

export default pool;
