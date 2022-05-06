export interface CommonOuptput {
  ok: boolean;
  error?: unknown;
  data?: string[][];
}

export interface CommonOuptputJson<T> {
  ok: boolean;
  error?: unknown;
  data?: T[];
}

/**
 * N: string;
 * 등락률: string;
 * 종목명: string;
 * 현재가: string;
 * 전일비: string;
 * 등락률: string;
 * 시가: string;
 * 고가: string;
 * 저가: string;
 * 거래량: string;
 * PER: string;
 * ROE: string;
 */
export interface ISiseUpDown {
  [key: string]: string;
}

export interface ISiseCommon {
  N: string;
  종목명: string;
  현재가: string;
  전일비: string;
  등락률: string;
  거래량: string;
  매수호가: string;
  매도호가: string;
  매수총잔량: string;
  매도총잔량: string;
  PER: string;
  ROE: string;
}

export interface ISearchTopStock {
  순위: string;
  종목명: string;
  검색비율: string;
  현재가: string;
  전일비: string;
  등락률: string;
  거래량: string;
  시가: string;
  고가: string;
  저가: string;
  PER: string;
  ROE: string;
}
export interface ISiseLowUp extends ISiseUpDown {}
export interface ISiseHighDown extends ISiseUpDown {}
export interface ISiseRise extends ISiseCommon {}
export interface ISiseSteady extends ISiseCommon {}
export interface ISiseFall extends ISiseCommon {}
