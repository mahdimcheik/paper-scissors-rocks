import MainManager from "../managers/MainManager.js";

class MainController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await MainManager.login(email, password);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Mauvais identifiants" });
      }
    } catch (error) {
      res.status(401).json({ message: "Mauvais identifiants" });
    }
  }
  async add(req, res) {
    try {
      console.log("called");
      const { email, password, pseudo } = req.body;
      const result = await MainManager.add(email, password, pseudo);
      res.status(201).json({ message: "compte créé" });
    } catch (error) {
      res.status(401).json({ message: `Demande refusée: ${error.message}` });
    }
  }
}
export default MainController;
