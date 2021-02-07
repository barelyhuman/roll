import { Labels } from 'db/models'

export default (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'get': {
      return Labels.findById(req, res)
    }
    default: {
      res.statusCode = 404
      res.json({ error: 'Not Found' })
    }
  }
}
