import { getPage } from "./utils";
const BASE_URL = "https://finance.naver.com";
/**
 * 검색상위 종목
 * @param url
 * @returns string
 */
export const fetchSearchTopStock = async (): Promise<string> =>
  getPage(`${BASE_URL}/sise/lastsearch2.naver`);

/**
 * 저가대비급등
 */
export const fetchSiseLowUp = async (): Promise<string> =>
  getPage(`${BASE_URL}/sise/sise_low_up.naver`);
