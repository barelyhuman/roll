import { Labels } from 'db/models'

export default (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'post': {
      return Labels.create(req, res)
    }
    case 'get': {
      return Labels.find(req, res)
    }
    default: {
      res.statusCode = 404
      res.json({ error: 'Not Found' })
    }
  }
}
