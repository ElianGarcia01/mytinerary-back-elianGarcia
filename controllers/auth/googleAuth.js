import { OAuth2Client } from 'google-auth-library';
import User from '../../models/User.js';
import generateUsefulToken from '../../middlewares/generateUsefulToken.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Token de Google no proporcionado'
      });
    }

    // 1. Verificar el token con Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    
    if (!payload.email_verified) {
      return res.status(403).json({
        success: false,
        message: 'El email de Google no está verificado'
      });
    }

    const { sub: googleId, email, name, picture } = payload;

    // 2. Buscar usuario existente
    let user = await User.findOne({ 
      $or: [
        { googleId },
        { email }
      ]
    });

    // 3. Manejo de casos de usuario
    if (!user) {
      // Usuario nuevo con Google
      user = new User({
        googleId,
        email,
        name,
        photo: picture,
        is_verified: true,
        from_google: true,
        password: googleId + process.env.SECRET
      });
    } else {
      // Usuario existente
      if (!user.googleId) {
        // Actualizar usuario existente con datos de Google
        user.googleId = googleId;
        user.photo = picture;
        user.from_google = true;
        if (!user.is_verified) user.is_verified = true;
      }
      
      if (user.from_google && !user.password) {
        // Asegurar password para usuarios de Google
        user.password = googleId + process.env.SECRET;
      }
    }

    await user.save();

    // 4. Generar token JWT
    const authToken = generateUsefulToken(user);

    return res.status(200).json({
      success: true,
      token: authToken,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo,
        from_google: user.from_google
      }
    });

  } catch (error) {
    console.error('Error en autenticación con Google:', error);
    return res.status(500).json({
      success: false,
      message: 'Error en autenticación con Google',
      error: error.message
    });
  }
};

export default googleAuth;