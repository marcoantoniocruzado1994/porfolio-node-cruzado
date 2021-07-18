const { Router } = require('express');
const router = Router();
const { CtrlgetHome,
    CtrlgetSkills,
    CtrlgetPersonalInformation,
    CtrlgetJobs,
    CtrlgetSocialMedia } = require('../controllers/apiControllers')

//TODO: :GET initial routes
router.get('/', CtrlgetHome);
router.get('/skills', CtrlgetSkills);
router.get('/personal-information', CtrlgetPersonalInformation);
router.get('/jobs', CtrlgetJobs);
router.get('/social-media', CtrlgetSocialMedia)





module.exports = router;