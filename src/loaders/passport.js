const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy

const EMAIL = 'SOMEEMAIL@email.com'
const PASS = 'SOMEPASS'
const user = {
  name: 'some name',
  age: '99',
  admin: true
}

passport.use(new BasicStrategy((username, password, done) => {
  if (username === EMAIL && password === PASS) {
    return done(null, user)
  }
  done(null, false)
}))
