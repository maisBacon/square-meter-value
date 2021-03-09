module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'ingaia',
  database: 'meters',
  define: {
    timestamp: true,
    underscored: true,
  },
};
