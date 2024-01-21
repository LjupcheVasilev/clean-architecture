import Koa from "koa"
import koaBody from "koa-body"
import { router } from "./router"

const app = new Koa()

const routes = router.routes()

app.use(koaBody())
app.use(routes)
app.listen(3000)