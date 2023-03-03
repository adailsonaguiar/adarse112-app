import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const response = await fetch("https://adailsondev.wordpress.com/");
  const pageContent = await response.text();
  const $ = cheerio.load(pageContent);
  const postTitles = [];
  $(".wp-block-post-template > li").each((_idx, el) => {
    const title = $(el).find("h2").text();
    const image = $(el).find("img").attr('data-orig-file');
    const info = $(el).find(".wp-block-post-excerpt__excerpt").text();
    postTitles.push({ title, image, info });
  });
  res.status(200).json(postTitles);
}
