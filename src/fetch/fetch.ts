import { getNaverTableTag } from "../crawl-naver";
import { IFetchOutput } from "./fetch.interface";

const BASE_URL = "https://finance.naver.com";

/**
 * 검색상위 종목
 * @param url
 * @returns string
 */
export const fetchSearchTopStock = async (): Promise<IFetchOutput> =>
  getNaverTableTag(`${BASE_URL}/sise/lastsearch2.naver`);

/**
 * 저가대비급등
 */
export const fetchSiseLowUp = async (): Promise<IFetchOutput> =>
  getNaverTableTag(`${BASE_URL}/sise/sise_low_up.naver`);

/**
 * 고가대비급락
 * @returns
 */
export const fetchSiseHighDown = (): Promise<IFetchOutput> =>
  getNaverTableTag(`${BASE_URL}/sise/sise_high_down.naver`);

/**
 * 상승
 * @returns
 */
export const fetchSiseRise = (): Promise<IFetchOutput> =>
  getNaverTableTag(`${BASE_URL}/sise/sise_rise.naver`);

/**
 * 보합
 * @returns
 */
export const fetchSiseSteady = (): Promise<IFetchOutput> =>
  getNaverTableTag(`${BASE_URL}/sise/sise_steady.naver`);

/**
 * 하락
 * @returns
 */
export const fetchSiseFall = (): Promise<IFetchOutput> =>
  getNaverTableTag(`${BASE_URL}/sise/sise_fall.naver`);
