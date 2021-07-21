//TODO: Peticiones get
const CtrlgetHome = (req, res) => {
    res.render('./pages/home')
}
const CtrlgetSkills = (req, res) => {
    res.render('./pages/skills')
}
const CtrlgetPersonalInformation = (req, res) => {
    res.render('./pages/informationPersonal')
}
const CtrlgetJobs = (req, res) => {
    res.render('./pages/jobs')
}
const CtrlgetSocialMedia = (req, res) => {
    res.render('./pages/socialMedia')
}





module.exports = {
    CtrlgetHome,
    CtrlgetSkills,
    CtrlgetPersonalInformation,
    CtrlgetJobs,
    CtrlgetSocialMedia
}