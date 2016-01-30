import path from 'path'
import Koa from 'koa'
import webpack from 'webpack'
import config from './webpack.config.dev.babel'
import serve from 'koa-static'
import convert from 'koa-convert'

const app = new Koa()
const compiler = webpack(config)

app.use(convert(require('koa-webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})))
app.use(convert(require('koa-webpack-hot-middleware')(compiler)))
app.use(convert(serve(path.resolve(__dirname, 'public'))))

app.listen(process.env.DEV_SERVER_PORT || 3000)
