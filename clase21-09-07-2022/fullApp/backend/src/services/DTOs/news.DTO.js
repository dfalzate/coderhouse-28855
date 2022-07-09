import fns from "date-fns";
export default function newsDTO(news) {
  const { title, body, author, image } = news;
  return {
    id: news.id || news._id,
    title,
    body,
    author,
    image,
    createdAt: fns.format(news.createdAt, "dd/MM/yyyy"),
  };
}
