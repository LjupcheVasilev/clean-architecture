import Router from "@koa/router"
import { getUserController } from "../Application/Controllers/GetUserController"
import { ViewProfileController } from "../Application/Controllers/ViewProfileController"

const router: Router = new Router()

router.get("/user/:userId", getUserController)

router.get("/user/:userId/profile/:profileId", ViewProfileController)

export { router }