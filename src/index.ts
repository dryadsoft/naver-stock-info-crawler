import { getTableStockInfo, getTableStockInfoJson } from "./crawl-naver";
import {
  fetchSearchTopStock,
  fetchSiseFall,
  fetchSiseHighDown,
  fetchSiseLowUp,
  fetchSiseRise,
  fetchSiseSteady,
} from "./fetch/fetch";
import { Ouptput } from "./index.interface";

/**
 * 검색상위종목
 * @returns
 */
async function searchTopStock(): Promise<Ouptput> {
  try {
    const { $$, table } = await fetchSearchTopStock();
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
    const { $$, table } = await fetchSiseLowUp();
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
 * 고가대비급락
 * @returns
 */
async function siseHighDown(): Promise<Ouptput> {
  try {
    const { $$, table } = await fetchSiseHighDown();
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
    const { $$, table } = await fetchSiseRise();
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
    const { $$, table } = await fetchSiseSteady();
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
    const { $$, table } = await fetchSiseFall();
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
