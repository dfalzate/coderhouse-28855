import DAO from "../services/DAOs/newsFactory.js";
import DTO from "../services/DTOs/news.DTO.js";

export async function getAllNews(req, res) {
  try {
    const allNews = await DAO.getAllNews();
    if (allNews) {
      const newNews = allNews.map((news) => DTO(news));
      res.status(200).json({ news: newNews });
    }
  } catch (error) {
    res.status(501).send(error.message);
  }
}

export async function getNews(req, res) {
  try {
    const { id } = req.params;
    const news = await DAO.getNews(id);
    if (news) {
      res.status(200).json({ news: DTO(news) });
    }
  } catch (error) {
    res.status(501).send(error.message);
  }
}

export async function createNews(req, res) {
  try {
    const { body } = req;
    const newNews = await DAO.createNews(body);
    if (newNews) {
      res.status(200).json({ news: DTO(newNews) });
    }
  } catch (error) {
    res.status(501).send(error.message);
  }
}
