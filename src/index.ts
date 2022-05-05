import { load } from "cheerio";
import { fetchSearchTopStock, fetchSiseLowUp } from "./fetch";
import { Ouptput } from "./index.interface";
import { getTableStockInfo, getTableTitles } from "./naver-finance";

/**
 * 검색상위종목
 * @returns
 */
async function searchTopStock(): Promise<Ouptput> {
  try {
    const content = await fetchSearchTopStock();
    const $$ = load(content);
    const table = $$(".box_type_l > table").first();
    const titles = getTableTitles($$, table);
    const stockInfos = getTableStockInfo($$, table);
    stockInfos.unshift(titles);
    return {
      ok: true,
      data: stockInfos,
    };
  } catch (err) {
    return {
      ok: false,
      error: err,
    };
  }
}

/**
 * 저가대비 급등
 * @returns
 */
async function siseLowUp(): Promise<Ouptput> {
  try {
    const content = await fetchSiseLowUp();
    const $$ = load(content);
    const table = $$(".box_type_l > table").first();
    const titles = getTableTitles($$, table);
    const stockInfos = getTableStockInfo($$, table);
    stockInfos.unshift(titles);
    return {
      ok: true,
      data: stockInfos,
    };
  } catch (err) {
    return {
      ok: false,
      error: err,
    };
  }
}

(async () => {
  const { ok, error, data } = await siseLowUp();
  if (ok) {
    console.table(data);
  }
})();
