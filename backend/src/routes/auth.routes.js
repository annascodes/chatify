import express from 'express'

const router = express.Router()

router.post('/signup',(req, res)=>{
    console.log('this is sign up controller')
})

export default router;