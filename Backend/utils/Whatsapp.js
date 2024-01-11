const accountSid = 'AC41b08d526a3b6281f5a51a48533f6d21';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hey, MoonDevHq, i am interested in your listing, can we negotiate? http://www.yummycupcakes.com/',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+254743168819'
    })
    .then(message => console.log(message.sid))
    .done();