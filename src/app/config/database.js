require('../bootstrap');

module.exports = {
  url: process.env.DATABASE_URL,
  dialect: process.env.DB_DIALECT,
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamp: true,
    underscored: true,
  },
  storage: process.env.STORAGE,
};
