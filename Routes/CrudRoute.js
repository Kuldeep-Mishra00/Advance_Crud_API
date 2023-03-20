import Express  from "express";
import { createctrl, DeleteCtrl, GetallCtrl, SearchCtrl, Updatectrl } from "../controller/CrudCtrl.js";

const router = Express.Router()

//create router
router.post('/create',createctrl)

//get all object router
router.get('/get',GetallCtrl)

//update router
router.put('/update/:id',Updatectrl)

//delete router
router.delete('/delete/:id',DeleteCtrl )

//search router
router.get('/get/:keyword',SearchCtrl)

export default router