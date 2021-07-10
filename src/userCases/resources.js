
const subject = require('../models/subjectMatter')
var isDuplicated

function getByModule(module = 'helloKoders'){
    return subject.find({moduleName : module})
}

async function postResource(moduleName, resources){
    await subject.findOne({'resources' : resources}, (err, resource) => {
        if (resource){
            return isDuplicated = resource
        }else{
            return isDuplicated = resource
        }
    })
    if(isDuplicated){
        return `Duplicate Resource: ${isDuplicated.resources}`
    }
    return subject.create({moduleName, resources})
}

module.exports = {
    getByModule,
    postResource
