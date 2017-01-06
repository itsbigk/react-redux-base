import { Router } from 'express'
// import controllers

export default () => {
   const api = Router()

   api.get('/', (req, res) => {
     res.json({
       version: '1.0'
     })
   })

   return api
}
