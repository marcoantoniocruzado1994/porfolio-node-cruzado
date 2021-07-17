const {Router} = require('express');
const router = Router()


//TODO: initial routes
router.get('/',(req,res)=>{
    res.render('./pages/home');
})

router.get('/skills',(req,res)=>{
    res.render('./pages/skills');
})

router.get('/personal-information',(req,res)=>{
    res.render('./pages/informationPersonal');
})
router.get('/jobs',(req,res)=>{
    res.render('./pages/jobs');
})
router.get('/social-media',(req,res)=>{
    res.render('./pages/socialMedia');
})





module.exports = router;