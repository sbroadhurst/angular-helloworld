import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(YOUR_GOOGLE_CLIENT_ID);
import { sign } from "jsonwebtoken";
export function login(req, res, next) {
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.token,
      audience: "YOUR_GOOGLE_CLIENT_ID",
    });
    const payload = ticket.getPayload();
    const userDetails = {
      email: payload["email"],
      firstname: payload["given_name"],
      lastname: payload["family_name"],
    };
    let token = sign(userDetails, process.env.SECRET_KEY, {
      expiresIn: 1440,
    });
    res.status(200).json({ token: token });
  }
  verify().catch(console.error);
}
