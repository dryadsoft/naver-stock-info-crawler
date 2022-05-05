import { load } from "cheerio";
import {
  fetchSearchTopStock,
  fetchSiseFall,
  fetchSiseHighDown,
  fetchSiseLowUp,
  fetchSiseRise,
  fetchSiseSteady,
} from "./fetch";
import { Ouptput } from "./index.interface";
import { getTableStockInfo, getTableStockInfoJson, getTableTitles } from "./naver-finance";

/**
 * 검색상위종목
 * @returns
 */
async function searchTopStock(): Promise<Ouptput> {
  try {
    const content = await fetchSearchTopStock();
    const $$ = load(content);
    const table = $$(".box_type_l > table").first();
    const stockInfos = getTableStockInfo($$, table);

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
    const stockInfos = getTableStockInfoJson($$, table);

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
 * 고갸대비급락
 * @returns
 */
async function siseHighDown(): Promise<Ouptput> {
  try {
    const content = await fetchSiseHighDown();
    const $$ = load(content);
    const table = $$(".box_type_l > table").first();
    const stockInfos = getTableStockInfo($$, table);

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
 * 상승
 */
async function SiseRise() {
  try {
    const content = await fetchSiseRise();
    const $$ = load(content);
    const table = $$(".box_type_l > table").first();
    const stockInfos = getTableStockInfo($$, table);

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
 * 보합
 */
async function SiseSteady() {
  try {
    const content = await fetchSiseSteady();
    const $$ = load(content);
    const table = $$(".box_type_l > table").first();
    const stockInfos = getTableStockInfo($$, table);

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
 * 하락
 */
async function SiseFall() {
  try {
    const content = await fetchSiseFall();
    const $$ = load(content);
    const table = $$(".box_type_l > table").first();
    const stockInfos = getTableStockInfo($$, table);

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
  const { ok, error, data } = await SiseFall();
  if (ok) {
    console.table(data);
  }
})();
