
const subject = require('../models/subjectMatter')
var isDuplicated

function getByModule(module = 'helloKoders'){
    return subject.find({moduleName : module})
}

async function postResource(moduleName, resources){
    await subject.findOne({'resources' : resources}, (err, resource) => {
            return isDuplicated = resource
    })
    if(isDuplicated){
        return `Duplicated Resource: ${isDuplicated.resources}`
    }
    return subject.create({moduleName, resources})
}

module.exports = {
    getByModule,
    postResource
}