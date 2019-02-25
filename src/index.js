let env;

if (process.env.NODE_ENV === 'development') {
  env = require('./dev').default;
} else if (process.env.NODE_ENV === 'test') {
  env = require('./test').default;
} else if (process.env.NODE_ENV === 'production') {
  env = require('./prod').default;
}

export default env;
