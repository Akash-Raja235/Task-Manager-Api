

const errorHandleamiddware = (err,req,res,next)=>{
    return res.status(500).json({msg:'something went wrong atry again'})
}

module.exports=errorHandleamiddware;