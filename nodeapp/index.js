require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
app.use(cors({
    origin: "*"
})); // Enable CORS for all origins
app.use(express.json());


async function createMessage(num, user) {
  const message = await client.messages.create({
    body: `Hey ${user}, this was built by victor`,
    from: "Removed for safety",
    to: "+1"+num
  });
}
app.post('/api/data', function (req, res) {
    
createMessage(req.body.phone, req.body.user)
  const response = {
    message: 'Text sent successfully',
  };

  // Send the JSON response
  res.json(response);
});

  
  app.listen(3000)