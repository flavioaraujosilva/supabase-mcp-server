module.exports = {
  name: 'supabase-mcp-server',
  type: 'node',
  engine: '18.x',
  main: 'index.js',
  env: {
    PORT: process.env.PORT || 3000,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY
  },
  scripts: {
    start: 'node index.js'
  }
};