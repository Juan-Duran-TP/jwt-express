const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
    passReqToCallback: true
};


async function verify(request, payload, done) {
    try {
    // to do
        return done(null, true);
    }
    catch (error) {
        return done(err,false);
    }
}

passport.use(new JwtStrategy(options, verify));


module.exports = passport