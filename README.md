## 네이버 주식정보 크롤러

**주의**

> 해당 _네이버 주식정보 크롤러_ 는 개인적인 투자 참고 목적으로 개발되었습니다. 따라서 개인적인 투자 참고 목적 외에 데이터를 재가공하여 개인 프로그램 또는 웹 페이지에 사용하는 것은 네이버에서 금지하고 있습니다. 지속적으로 불법적인 접근을 시도할 경우 네이버에서 서비스 이용에 제한을 둘 수 있으니 참고해 주시기 바랍니다.

```typescript
/* 검색상위종목 */
const { ok, error, data } = await searchTopStock;
/* 검색상위종목 */
const { ok, error, data } = await searchTopStockJson;
/* 저가대비 급등 */
const { ok, error, data } = await siseLowUp;
/* 저가대비 급등 */
const { ok, error, data } = await siseLowUpJson;
/* 고가대비급락 */
const { ok, error, data } = await siseHighDown;
/* 고가대비급락 */
const { ok, error, data } = await siseHighDownJson;
/* 상승 */
const { ok, error, data } = await SiseRise;
/* 상승 */
const { ok, error, data } = await SiseRiseJson;
/* 보합 */
const { ok, error, data } = await SiseSteady;
/* 보합 */
const { ok, error, data } = await SiseSteadyJson;
/* 하락 */
const { ok, error, data } = await SiseFall;
/* 하락 */
const { ok, error, data } = await SiseFallJson;
```
