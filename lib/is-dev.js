export const isDev = () => {
  return (
    process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging'
  )
}
