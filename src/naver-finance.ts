import { Cheerio, CheerioAPI, Element } from "cheerio";

export function getTableTitles($$: CheerioAPI, table: Cheerio<Element>) {
  const titles: string[] = [];
  $$(table)
    .find("tr")
    .first()
    .find("th")
    .each((_, element) => {
      titles.push($$(element).text().trim());
    });
  return titles;
}

export function getTableStockInfo($$: CheerioAPI, table: Cheerio<Element>) {
  const itemInfos: string[][] = [];
  let itemRowInfo: string[] = [];
  $$(table)
    .find("tr > .no")
    .each((_, element) => {
      const noElement = $$(element);
      noElement
        .parent()
        .find("td")
        .each((_, elem) => {
          itemRowInfo.push($$(elem).text().trim());
        });
      itemInfos.push(itemRowInfo);
      itemRowInfo = [];
    });
  return itemInfos;
}
