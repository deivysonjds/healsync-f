// API REST básica para Monitores (mock, sem persistência real)
let monitores = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(monitores);
  } else if (req.method === 'POST') {
    const { nome } = req.body;
    if (!nome || typeof nome !== 'string') {
      return res.status(400).json({ error: 'Nome do monitor inválido' });
    }
    monitores.push(nome);
    res.status(201).json(monitores);
  } else if (req.method === 'DELETE') {
    const { nome } = req.body;
    monitores = monitores.filter(m => m !== nome);
    res.status(200).json(monitores);
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
