const express = require('express')
const router = express.Router()
const upload = require('./multer')
const cloudinary = require('./cloudinary')
router.post('/',upload.single('img'),(req,res)=>{
    cloudinary.uploader.upload(req.file.path,function(err,result){
        if(err){
            console.log(err)
            return res.status(500).json(({message:"Error",err}))
        }
    res.status(200).json({message:"Uploaded"})
    })

})





module.exports = router;