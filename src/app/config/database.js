module.exports = {
  dialect: 'sqlite',
  storage: './src/app/database/meters.sqlite',
  define: {
    timestamp: true,
    underscored: true,
  },
};
