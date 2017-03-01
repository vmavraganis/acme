var configValues=require('./config');


module.exports={

getDbConnectionString :  function() {
                //mongodb://localhost:27017/integration_test
        
       return `mongodb://${configValues.username}:${configValues.password}@localhost:27017/${configValues.db}`;;
}
}