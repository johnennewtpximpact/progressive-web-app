import webPush from "web-push";

const publicKey = 'BBV07YdjrcsUEBGiudP5XY_U0f7LkH-kZTUxaIfsK23sXsaR44U6fIrT2cqplJgSt8vdeMBlPa74jlsntfTbCcI';

const vapidPublicKey = (req, res) => {
    res.send(publicKey);
}

export default vapidPublicKey
