require('../bootstrap');

module.exports = {
  url: process.env.DATABASE_URL,
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamp: true,
    underscored: true,
  },
};
