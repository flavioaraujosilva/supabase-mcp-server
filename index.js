require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());

// Rota para consultar dados de uma tabela
app.get('/api/:table', async (req, res) => {
  try {
    const { table } = req.params;
    const { data, error } = await supabase
      .from(table)
      .select(req.query.select || '*');

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para consultar um registro específico
app.get('/api/:table/:id', async (req, res) => {
  try {
    const { table, id } = req.params;
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para inserir dados
app.post('/api/:table', async (req, res) => {
  try {
    const { table } = req.params;
    const { data, error } = await supabase
      .from(table)
      .insert(req.body)
      .select();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar dados
app.patch('/api/:table/:id', async (req, res) => {
  try {
    const { table, id } = req.params;
    const { data, error } = await supabase
      .from(table)
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});