module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['cRjWhjiATMRvuzGxsv8wcLMvHSuREorIONiNgQgjiNA=', 'l4Nl1uPuJWgkS5yxwwRStKp79XxONh0AIVPtp7d2sHs=']),
  },
});
