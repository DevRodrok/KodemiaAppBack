const subject = require('../models/subjectMatter')

function getByModule(module = 'helloKoders'){
    return subject.find({moduleName : module})
}

function postResource(moduleName, resources){
    return subject.create({moduleName, resources})
}

module.exports = {
    getByModule
}