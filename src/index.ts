import { getTableStockInfo, getTableStockInfoJson } from "./crawl-naver";
import {
  fetchSearchTopStock,
  fetchSiseFall,
  fetchSiseHighDown,
  fetchSiseLowUp,
  fetchSiseRise,
  fetchSiseSteady,
} from "./fetch/fetch";
import {
  ISearchTopStock,
  ISiseFall,
  ISiseHighDown,
  ISiseLowUp,
  ISiseRise,
  ISiseSteady,
  CommonOuptput,
  CommonOuptputJson,
} from "./index.interface";

/**
 * 검색상위종목
 * @returns string[][]
 */
export async function searchTopStock(): Promise<CommonOuptput> {
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
 * 검색상위종목
 * @returns ISearchTopStock[][]
 */
export async function searchTopStockJson(): Promise<CommonOuptputJson<ISearchTopStock>> {
  try {
    const { $$, table } = await fetchSearchTopStock();
    const stockInfos = getTableStockInfoJson<ISearchTopStock>($$, table);
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
 * @returns string[][]
 */
export async function siseLowUp(): Promise<CommonOuptput> {
  try {
    const { $$, table } = await fetchSiseLowUp();
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
 * @returns  {}[][]
 */
export async function siseLowUpJson(): Promise<CommonOuptputJson<ISiseLowUp>> {
  try {
    const { $$, table } = await fetchSiseLowUp();
    const stockInfos = getTableStockInfoJson<ISiseLowUp>($$, table);
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
 * @returns string[][]
 */
export async function siseHighDown(): Promise<CommonOuptput> {
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
 * 고가대비급락
 * @returns ISiseHighDown[][]
 */
export async function siseHighDownJson(): Promise<CommonOuptputJson<ISiseHighDown>> {
  try {
    const { $$, table } = await fetchSiseHighDown();
    const stockInfos = getTableStockInfoJson<ISiseHighDown>($$, table);
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
 * @returns string[][]
 */
export async function SiseRise(): Promise<CommonOuptput> {
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
 * 상승
 * @returns ISiseRise[][]
 */
export async function SiseRiseJson(): Promise<CommonOuptputJson<ISiseRise>> {
  try {
    const { $$, table } = await fetchSiseRise();
    const stockInfos = getTableStockInfoJson<ISiseRise>($$, table);
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
 * @return string[][]
 */
export async function SiseSteady(): Promise<CommonOuptput> {
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
 * 보합
 * @return ISiseSteady[][]
 */
export async function SiseSteadyJson(): Promise<CommonOuptputJson<ISiseSteady>> {
  try {
    const { $$, table } = await fetchSiseSteady();
    const stockInfos = getTableStockInfoJson<ISiseSteady>($$, table);
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
 * @return string[][]
 */
export async function SiseFall(): Promise<CommonOuptput> {
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
/**
 * 하락
 * @return ISiseFall[][]
 */
export async function SiseFallJson(): Promise<CommonOuptputJson<ISiseFall>> {
  try {
    const { $$, table } = await fetchSiseFall();
    const stockInfos = getTableStockInfoJson<ISiseFall>($$, table);
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
  const { ok, error, data } = await siseLowUpJson();
  if (data) {
    // console.log(data[0].등락률);
    console.log(data[0]);
  }
})();
