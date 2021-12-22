module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f7e2afef67e1b56f3a5f015e8b8e1037'),
  },
});
