import { Cheerio, CheerioAPI, Element } from "cheerio";

export interface IFetchOutput {
  $$: CheerioAPI;
  table: Cheerio<Element>;
}
