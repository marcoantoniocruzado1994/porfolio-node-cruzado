const Skills = require('../models/Skills')
//TODO: Peticiones get
const CtrlgetHome = (req, res) => {
    res.render('./pages/home')
}
const CtrlgetSkills = async (req, res) => {
    const skills = await Skills.find();
    res.render('./pages/skills',{skills})
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