import express from 'express'

const router = express.Router()

router.get('/signup',(req, res)=>{
    console.log('this is sign up controller')
    res.send('here we go')
})

export default router;