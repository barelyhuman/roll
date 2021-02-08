import got from 'got'
import template from 'lodash.template'
import fs from 'fs'
import { isDev } from './is-dev'

const postUrl = process.env.MAILER_URL

export const sendVerificationEmail = (toEmail, token_id, verificationLink) => {
  const loginTemplate = fs.readFileSync('templates/email/login.html')
  const compiledTemplate = template(loginTemplate)

  if (isDev()) {
    console.log({ verificationLink })
    return
  }

  got
    .post(postUrl, {
      to: toEmail,
      subject: `Login Verification (token: ${token_id})`,
      html: compiledTemplate({
        verificationLink
      })
    })
    .catch(console.error)
}
