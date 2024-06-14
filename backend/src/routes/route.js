import { Router } from "express";
const router = Router()


router.route('/register').post((req, res) => res.json('Register Page'))
router.route('/registerMail').post()
router.route('/authenticate').post()
router.route('/login').post()


router.route('/user/:username').get()
router.route('/genarateOTP').get()
router.route('/verifyOTP').get()
router.route('/createResetOTP').get()


router.route('/updateuser').put()
router.route('/resetPassword').put()

export default router