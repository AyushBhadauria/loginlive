
var baseUrl = 'https://www.logindemomodule.herokuapp.com'
module.exports={
    baseUrl: baseUrl,
    database: 'mongodb://user:123456@ds235840.mlab.com:35840/logindemonew',
    secrets: {
        session: 'slick-call-secret'
    },
    mailer: {
        'service': 'smtp',
        'auth': {
          'user':'Name',
           'pass': 'Password'          
        },
        'from': 'loginModule <admin@loginModule.in>',
    },

}

