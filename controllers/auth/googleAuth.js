import { OAuth2Client } from 'google-auth-library';
import User from '../../models/User.js';
import generateToken from '../../middlewares/generateToken.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res, next) => {
  try {
    const { token } = req.body;
    
    // Verificar el token de Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Buscar usuario existente
    let user = await User.findOne({ 
      $or: [
        { googleId },
        { email }
      ]
    });

    if (!user) {
      // Crear nuevo usuario si no existe
      user = new User({
        googleId,
        email,
        name,
        photo: picture,
        is_verified: true,
        password: googleId + process.env.SECRET
      });
      await user.save();
    } else if (!user.googleId) {

      // Si el usuario existe pero no tiene googleId, actualizarlo
      user.googleId = googleId;
      user.photo = picture;
      await user.save();
    }

    // Generar token JWT
    const authToken = generateToken(user);

    res.status(200).json({
      success: true,
      token: authToken,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo
      }
    });

  } catch (error) {
    console.error('Google auth error:', error);
    res.status(401).json({
      success: false,
      message: 'Google authentication failed'
    });
  }
};

export default googleAuth;