const multer = require('multer')
const store = multer.diskStorage({
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:store})
module.exports = upload;