const passport = require('passport');
const passportJWT = require('passport-jwt');
const dotenv = require('dotenv');

dotenv.config();

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

const strategy = new JWTStrategy(jwtOptions, (jwtPayload, next) => {
  
  const user = user.id

  if (user) {
    return next(null, user);
  } else {
    return next(null, false);
  }
});

passport.use(strategy);

module.exports = passport;
