import axios, { AxiosResponseHeaders } from "axios";
import iconv from "iconv-lite";
import fs from "fs";

async function customAxios(url: string, timeout: number) {
  const source = axios.CancelToken.source();
  setTimeout(() => {
    source.cancel(`request ${timeout} ms timeout error`);
  }, timeout);
  return axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
    },
    responseType: "arraybuffer",
    cancelToken: source.token,
  });
}

export async function getDecodedPage(url: string, timeout: number): Promise<string> {
  try {
    const res = await customAxios(url, timeout);
    if (res.status === 200) {
      return iconv.decode(res.data, getPageEncoding(res.headers));
    }
    throw new Error(`${res.status}: ${res.statusText}`);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(`${err.code}: ${err.message}`);
    } else {
      throw err;
    }
  }
}

function getPageEncoding(headers: AxiosResponseHeaders) {
  if (headers["content-type"].toLowerCase().indexOf("euc-kr") !== -1) {
    return "euc-kr";
  }
  return "utf-8";
}

export function fnMakeHtml(html: any) {
  fs.writeFile("page2.html", html, "utf-8", function (e: any) {
    if (e) {
      console.log(e);
    }
  });
}
