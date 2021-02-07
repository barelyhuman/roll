import { Todos } from 'db/models'

export default (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'get': {
      return Todos.findById(req, res)
    }
    default: {
      res.statusCode = 404
      res.json({ error: 'Not Found' })
    }
  }
}
