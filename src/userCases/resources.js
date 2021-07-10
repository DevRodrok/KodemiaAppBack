const resources = require('../models/subjectMatter')

function getByModule(module = 'helloKoders'){
    return resources.find({moduleName : module})
}

module.exports = {
    getByModule
}