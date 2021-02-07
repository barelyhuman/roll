import { Todos } from 'db/models'

export default (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'post': {
      return Todos.create(req, res)
    }
    case 'get': {
      return Todos.find(req, res)
    }
    default: {
      res.statusCode = 404
      res.json({ error: 'Not Found' })
    }
  }
}
