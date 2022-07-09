import DAO from "../services/DAOs/newsFactory.js";

export async function getAllNews(req, res) {
  try {
    const allNews = await DAO.getAllNews();
    if (allNews) {
      res.status(200).json({ news: allNews });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getNews(req, res) {}

export async function createNews(req, res) {
  const { body } = req;
  const newNews = await DAO.createNews(body);
  if (newNews) {
    res.status(200).json({ news: newNews });
  } else {
    res.status(400).send("Funcionalidad no implementada");
  }
}
