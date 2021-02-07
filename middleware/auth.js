import { connector } from 'db'

export const checkAuth = async (req, res, handler) => {
  try {
    /*
        Get token from cookies
        and continue with the relational check for it
    */
    const token = null

    const db = connector()

    const tokenUser = db('access_tokens')
      .where({ token, is_active: true })
      .select('id')

    if (!tokenUser) {
      res.statusCode = 401
      return res.json({ error: 'Unauthorized Access!' })
    }

    return await handler(req, res)
  } catch (err) {
    console.error(err)
    throw err
  }
}
