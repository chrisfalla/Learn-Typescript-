import pool from '../config/connection';

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conexión exitosa a la base de datos');
    console.log('⏰ Timestamp:', result.rows[0].now);
    await pool.end();
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    process.exit(1);
  }
}

testConnection();
