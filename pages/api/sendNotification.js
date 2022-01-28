// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const webPush = require('web-push');

const publicKey = 'BBV07YdjrcsUEBGiudP5XY_U0f7LkH-kZTUxaIfsK23sXsaR44U6fIrT2cqplJgSt8vdeMBlPa74jlsntfTbCcI';
const privateKey = 'nChWtk2Jto_-IiL5fk9WiK1dK3kkFJBNf1BgzqfrD5k';

// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
    'https://serviceworker.rs/',
    publicKey,
    privateKey
);

const sendNotification = (req, res) => {
  if (req.method === 'POST') {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl
    };

    setTimeout(function() {
      webPush.sendNotification(subscription, payload, options)
          .catch(function(error) {
            console.log(error);
          });
    }, req.body.delay * 1000);

    res.status(201).send();

  } else {
    res.statusCode = 405
  }
  res.end();
}

export default sendNotification
