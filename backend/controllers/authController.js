
import { login, signup } from '../services/goApiService.js';


export async function handleLogin(req, res) {
  const { email, pass } = req.body;

  try {
    const response = await login(email, pass);
    res.status(201).json({
      message:"login avec succès",
      data:response.data
    });
  } catch (error) {
    console.error('Erreur login:', error.message);
    res.status(401).json({ error: 'Email ou mot de passe invalide.' });
  }
}

export async function handleSignup(req, res) {
  const userData = req.body;
  

  try {
    const response = await signup(userData)
    res.status(201).json({
      message:"Ajouté avec succès",
      data:response.data
    });
  } catch (error) {
    console.error('Erreur signup:', error.message);
    res.status(500).json({ error: "Échec de l'inscription." });
  }
}
