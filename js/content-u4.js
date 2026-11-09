CONTENT.push(String.raw`
=== UNIT u4 | Bölüm 4 | Gelecek Değer, Bugünkü Değer ve Faiz | Bileşik faiz, iskonto, iç verim oranı, tahvil temelleri, Fisher denklemi

--- LESSON u4a | FV | Gelecek değer ve bileşik faiz
FX: $FV = PV(1+i)$ :: 1 yıl sonra
FX: $FV_n = PV(1+i)^n$ :: n yıl sonra (bileşik faiz)
FX: $(1+i_m)^{12} = 1+i$ :: aylık ve yıllık faiz denkliği
FX: $i = (FV/PV)^{1/n} - 1$ :: yıllık ortalama büyüme
FX: 72 kuralı: süre ≈ 72 / yüzde faiz :: ikiye katlanma
FX: 1 baz puan = %0.01 :: yüzde puanın yüzde biri

## CARD Faiz neden var?
Kredi, kaynak dağıtmanın en önemli mekanizmalarından biri. Faiz tarih boyunca sevilmedi; bunun nedeni borç vermenin ==fırsat maliyetini (opportunity cost)== görmemekti: parayı veren, o parayı kendisi kullanamaz.
**Faiz oranları:**
• bugünü geleceğe bağlar,
• bugün borç vermenin gelecekteki ödülünü söyler,
• bugün borçlanıp sonra ödemenin maliyetini söyler.
Farklı araçların faizlerini karşılaştırmak için iki alete ihtiyaç var: **gelecek değer** ve **bugünkü değer**.

## CARD Gelecek değer
==Gelecek değer (future value)==: bugün yapılan yatırımın gelecekteki bir tarihteki değeri.
:::ornek 1 yıl
Bugün 100 dolar, %5 faizle: $100 + 100\times0.05 = 105$. Yani 100 doların %5'teki gelecek değeri 105. 100 dolar 5 dolar "getirdi"; faize bu yüzden ==getiri (yield)== de denir.
:::
$$FV = PV + PV\times i = PV(1+i)$$
Faiz ya da yatırılan tutar ne kadar yüksekse gelecek değer o kadar yüksek.
**Birden fazla yıl: bileşik faiz.** ==Bileşik faiz (compound interest)== faizin faizidir.
:::ornek 2 yıl, %5
$100 + 100(0.05) + 100(0.05) + 5(0.05) = 110.25$, yani $100(1.05)(1.05) = 100(1.05)^2 = 110.25$. Son terim $5(0.05) = 0.25$: ilk yılın faizinin kazandığı faiz.
:::
$$FV_n = PV(1+i)^n$$
| Yıl | Gelecek değer (100 dolar, %5) |
| 1 | 105.00 |
| 2 | 110.25 |
| 5 | 127.63 |
| 10 | 162.89 |
| 20 | 265.33 |

## CARD Aylık faiz, baz puan, 72 kuralı
**Aylık faiz.** Yıllık %5 ise aylık faiz $i_m$ kaç? Bir yıl boyunca aylık büyümek, yıllık büyümeyle aynı sonucu vermeli:
$$(1+i_m)^{12} = 1.05 \Rightarrow 1+i_m = (1.05)^{1/12} = 1.0041$$
Aylık faiz yaklaşık %0.41. Bu küçük kesirlere ==baz puan (basis point)== denir: **1 baz puan = yüzde puanın yüzde biri = %0.01**. %0.41 = 41 baz puan.
**Ters yön.** Aylık %0.5 büyüyen yatırımın yıllık bileşik oranı: $(1.005)^{12} = 1.0617$, yani **%6.17**. Bu $12\times0.5 = 6.0$'dan büyük: aradaki fark bileşiklenme.
**Yıllık ortalama büyüme.** Yatırım 5 yılda 100'den 120'ye çıktıysa: $120 = 100(1+i)^5 \Rightarrow i = (1.2)^{1/5} - 1 = 0.0371$, yani yılda **%3.71** (4 değil).
:::ipucu 72 kuralı
Paranın ikiye katlanma süresi ≈ $72 / (\text{yüzde faiz})$. %5'te $72/5 = 14.4$ yıl. Kontrol: $(1.05)^{14.4} = 2.02$.
:::

## Q
EN: You invest 100 dollars at 5% annual interest for two years, compounded annually. What is the future value?
TR: 100 doları yıllık %5 bileşik faizle 2 yıllığına yatırıyorsun. Gelecek değer kaçtır?
+ 110.25
- 110.00
- 105.00
- 115.76
HINT: $FV_n = PV(1+i)^n$. $n = 2$.
EX: **Doğru cevap: 110.25.**
**Adım 1:** Yıllık çarpan $1 + 0.05 = 1.05$.
**Adım 2:** İki yıl: $100\times(1.05)^2 = 100\times1.1025 = 110.25$.
110.25 ile 110 arasındaki 0.25 dolar, ilk yılın 5 dolarlık faizinin ikinci yıl kazandığı faizdir (faizin faizi).
**Diğer şıklar ne?**
• 110.00: basit faiz, faizin faizini atlar.
• 105.00: sadece 1 yıl.
• 115.76: 3 yıl, $100(1.05)^3$.

## Q
EN: Compound interest is best described as:
TR: Bileşik faiz en iyi nasıl tanımlanır?
+ interest earned on previously earned interest
- interest paid only on the original principal
- interest that is paid by the government
- the difference between nominal and real interest rates
HINT: 110.25'teki fazladan 0.25 nereden geliyordu?
EX: **Doğru cevap:** daha önce kazanılan faizin kazandığı faiz (faizin faizi).
Bu yüzden $FV_n = PV(1+i)^n$ formülünde üs var.
**Diğer şıklar ne?**
• Sadece anaparaya faiz: **basit faiz**.
• Devletin ödediği faiz, nominal-reel farkı: alakasız.

## Q
EN: One basis point is equal to:
TR: Bir baz puan neye eşittir?
+ one one-hundredth of a percentage point (0.01 percent)
- one percentage point
- one-tenth of a percentage point
- one percent of the principal
HINT: Faiz %5.00'ten %5.25'e çıkarsa kaç baz puan artmış olur?
EX: **Doğru cevap:** yüzde puanın yüzde biri, yani %0.01.
%5.00'ten %5.25'e çıkış = 25 baz puan. 100 baz puan = 1 yüzde puan.
**Diğer şıklar neden yanlış?**
• Bir yüzde puan: 100 baz puan.
• Onda bir: 10 baz puan.
• Anaparanın %1'i: bir oran değil, tutar.

## Q
EN: An investment grows 0.5% per month. What is its compound annual rate?
TR: Ayda %0.5 büyüyen yatırımın yıllık bileşik büyüme oranı kaçtır?
+ 6.17%
- 6.00%
- 5.84%
- 0.50%
HINT: 12 ay boyunca her ay 1.005 ile çarp, sonra 1 çıkar.
EX: **Doğru cevap: %6.17.**
**Adım 1:** $(1.005)^{12} = 1.0617$.
**Adım 2:** $1.0617 - 1 = 0.0617$, yani %6.17.
$12\times0.5 = 6.0$ daha küçüktür çünkü bileşiklenmeyi (faizin faizini) atlar.
**Diğer şıklar neden yanlış?**
• %6.00: basit çarpım.
• %5.84: anlamsız bir değer.
• %0.50: aylık oran, yıllık değil.

## Q
EN: An investment increased from 100 to 120 over five years. What was its average annual (compound) rate of growth?
TR: Bir yatırım 5 yılda 100'den 120'ye çıktı. Yıllık ortalama (bileşik) büyüme oranı kaçtır?
+ 3.71%
- 4.00%
- 20.00%
- 2.00%
HINT: $120 = 100(1+i)^5$. 5. kökü al.
EX: **Doğru cevap: %3.71.**
**Adım 1:** $(1+i)^5 = 120/100 = 1.2$.
**Adım 2:** $1 + i = (1.2)^{1/5} = 1.0371$.
**Adım 3:** $i = 0.0371$, yani %3.71.
**Diğer şıklar neden yanlış?**
• %4.00: toplam %20'yi 5'e bölmek; bileşiklenmeyi atlar.
• %20: toplam büyüme, yıllık değil.
• %2: anlamsız.

## Q
EN: According to the rule of 72, at 5% annual interest, about how long does it take for 100 dollars to grow to 200 dollars?
TR: 72 kuralına göre yıllık %5 faizle 100 dolar yaklaşık kaç yılda 200 dolar olur?
+ 14.4 years
- 20 years
- 7.2 years
- 36 years
HINT: 72'yi yüzde faize böl.
EX: **Doğru cevap: 14.4 yıl.**
$72/5 = 14.4$. Kontrol: $(1.05)^{14.4} = 2.02$, yani yaklaşık iki katı.
**Diğer şıklar neden yanlış?**
• 20 yıl: basit faizle ikiye katlanma (her yıl 5, 20 yılda 100).
• 7.2 yıl: %10 faizde ikiye katlanma.
• 36 yıl: %2 faizde ikiye katlanma.

## Q
EN: Holding the interest rate constant, the future value of an investment is higher when:
TR: Faiz sabitken bir yatırımın gelecek değeri ne zaman daha yüksek olur?
+ the amount invested is larger or the investment is held longer
- the amount invested is smaller
- the investment is held for a shorter time
- the interest is paid as simple rather than compound interest
HINT: $FV_n = PV(1+i)^n$ formülünde $PV$ ve $n$ büyürse ne olur?
EX: **Doğru cevap:** yatırılan tutar büyükse ya da yatırım daha uzun tutulursa.
Formülde $PV$ çarpan, $n$ üs: ikisi de büyüdükçe $FV$ büyür (pozitif faizde).
**Diğer şıklar neden yanlış?**
• Daha küçük tutar, daha kısa süre: gelecek değeri düşürür.
• Basit faiz: bileşik faizden daha az kazandırır.

## GEN fv
## GEN rate
## GEN rule72

--- LESSON u4b | PV | Bugünkü değer
FX: $PV = FV_n/(1+i)^n$ :: gelecekteki ödemenin bugünkü değeri
FX: PV yükselir :: ödeme büyükse · ödeme yakınsa · faiz düşükse
FX: Ödemeyi ikiye katla ⇒ PV ikiye katlanır :: süre ve faiz sabitken
FX: Akışın PV'si $= \sum C_t/(1+i)^t$ :: her ödeme kendi yılı kadar iskontolanır

## CARD Bugünkü değer
Finansal araçlar gelecekte ödeme vaat eder; bu ödemelere bugün ne kadar değer biçmeliyiz?
==Bugünkü değer (present value)==: gelecekte yapılacağı vaat edilen bir ödemenin **bugünkü** değeri. Ya da: belirli bir gelecek tarihte belli bir tutara ulaşmak için **bugün** yatırılması gereken miktar.
Gelecek değer formülünü $PV$ için çöz:
$$PV = \frac{FV}{1+i}\qquad\text{ve genel olarak}\qquad PV = \frac{FV_n}{(1+i)^n}$$
Bu sadece gelecek değer hesabının tersidir; $(1+i)^n$'ye bölme işlemine ==iskontolama (discounting)== denir.
:::ornek
%5 faizle 1 yıl sonraki 100 doların bugünkü değeri $100/1.05 = 95.24$. Bugün 95.24 yatırırsan bir yıl sonra 100 olur.
:::

## CARD Bugünkü değer nasıl değişir? (Tablo 4.2)
Bugünkü değer **daha yüksektir**:
• gelecekteki ödeme ($FV_n$) **büyükse**,
• ödemeye kadarki süre ($n$) **kısaysa**,
• faiz ($i$) **düşükse**.
Ödemeyi ikiye katlamak (süre ve faiz sabit) bugünkü değeri ikiye katlar. Ödeme ne kadar erken yapılırsa o kadar değerlidir.
@fig pv
| Vade | %1 | %5 | %10 | %15 |
| 1 yıl | 99.01 | 95.24 | 90.91 | 86.96 |
| 5 yıl | 95.15 | 78.35 | 62.09 | 49.72 |
| 10 yıl | 90.53 | 61.39 | 38.55 | 24.72 |
| 20 yıl | 81.95 | 37.69 | 14.86 | 6.11 |
Tablodan iki sonuç: **faiz yükselince bugünkü değer düşer** (ödemenin büyüklüğü ve zamanı ne olursa olsun); **faiz sabitken süre uzadıkça bugünkü değer düşer.** Tablolar sekmesinde tam tablo var.
:::dikkat Uzun vade daha hassas
Faiz yükselirse uzun vadeli tahvildeki kayıp kısa vadeli tahvildekinden büyüktür. Uzun vadeli tahviller faizin değişme riskine daha duyarlıdır. Tablo: faiz %5'ten %10'a çıkınca 1 yıllık ödeme 95.24 → 90.91 (%4.5 düşüş), 20 yıllık ödeme 37.69 → 14.86 (%61 düşüş).
:::
:::ipucu Getiri arayışı (search for yield)
Yatırımcılar riski yanlış değerlendirebilir: getiri arayışı riskli menkul kıymetlerin fiyatını şişirip risk karşılığını sürdürülemez bir düzeyin altına itebilir. Risk gerçekleşince (temerrütler artınca) riskli kâğıtların fiyatı orantısız düşer; 2007–2009'da şirket ve ipotek menkul kıymetlerinin çöküşü böyleydi.
:::

## Q
EN: What is the present value of 100 dollars to be received in one year if the interest rate is 5%?
TR: Faiz %5 iken 1 yıl sonra alınacak 100 doların bugünkü değeri kaçtır?
+ 95.24
- 95.00
- 105.00
- 100.00
HINT: Gelecek değeri $(1+i)$'ye böl.
EX: **Doğru cevap: 95.24.**
$PV = 100/1.05 = 95.24$. Kontrol: $95.24\times1.05 = 100$.
**Diğer şıklar neden yanlış?**
• 95.00: 100'ün %5'ini çıkarmak; iskonto bölme ile yapılır, çıkarma ile değil.
• 105.00: gelecek değer hesabı (çarpma).
• 100.00: zamanın değerini yok saymak.

## Q
EN: Holding other things constant, the present value of a future payment is HIGHER when:
TR: Diğer şeyler sabitken gelecekteki bir ödemenin bugünkü değeri ne zaman DAHA YÜKSEKTİR?
+ the interest rate is lower
- the payment is further in the future
- the payment is smaller
- the interest rate is higher
HINT: $PV = FV_n/(1+i)^n$. Payda küçülürse ne olur?
EX: **Doğru cevap:** faiz daha düşükse.
Faiz düşerse payda $(1+i)^n$ küçülür, bugünkü değer büyür.
**Diğer şıklar neden yanlış?**
• Ödeme daha uzakta: $n$ büyür, PV düşer.
• Ödeme daha küçük: PV düşer.
• Faiz daha yüksek: PV düşer.

## Q
EN: If the future payment is doubled, while the time to payment and the interest rate stay the same, the present value:
TR: Süre ve faiz aynı kalırken gelecekteki ödeme ikiye katlanırsa bugünkü değer ne olur?
+ doubles
- stays the same
- is cut in half
- increases by the interest rate
HINT: $PV = FV_n/(1+i)^n$ formülünde $FV_n$ doğrudan çarpan.
EX: **Doğru cevap:** ikiye katlanır.
Bugünkü değer gelecekteki ödemeyle orantılı: payı iki katına çıkarırsan sonuç iki katına çıkar.
**Diğer şıklar neden yanlış?**
• Aynı kalır, yarıya iner: formülle çelişir.
• Faiz kadar artar: alakasız.

## Q
EN: At a 5% interest rate, the present value of 100 dollars to be paid in 10 years is about:
TR: %5 faizle 10 yıl sonra ödenecek 100 doların bugünkü değeri yaklaşık kaçtır?
+ 61.39
- 50.00
- 95.24
- 162.89
HINT: $100/(1.05)^{10}$. $(1.05)^{10} = 1.6289$.
EX: **Doğru cevap: 61.39.**
$PV = 100/(1.05)^{10} = 100/1.6289 = 61.39$.
**Diğer şıklar neden yanlış?**
• 50.00: basit iskonto $100(1 - 10\times0.05)$; yanlış yöntem.
• 95.24: 1 yıllık bugünkü değer.
• 162.89: 10 yıllık **gelecek** değer.

## Q
EN: Why are long-term bonds riskier than short-term bonds when interest rates may change?
TR: Faizler değişebilecekken uzun vadeli tahviller neden kısa vadelilerden daha risklidir?
+ When interest rates rise, the present value of distant payments falls by more, so losses on long-term bonds are larger.
- Long-term bonds never repay their principal.
- Short-term bonds pay no interest.
- Long-term bonds are always issued by riskier borrowers.
HINT: Tablo 4.2'de faiz %5'ten %10'a çıkınca 1 yıllık ve 20 yıllık ödemenin değeri ne kadar düşüyor?
EX: **Doğru cevap:** faiz yükselince uzak ödemelerin bugünkü değeri daha çok düşer, bu yüzden uzun vadeli tahvildeki kayıp daha büyüktür.
Tablo 4.2: %5 → %10'da 1 yıllık ödeme 95.24'ten 90.91'e (%4.5), 20 yıllık ödeme 37.69'dan 14.86'ya (%61) düşer. Faiz $(1+i)^n$ içinde $n$ kez etki eder.
**Diğer şıklar neden yanlış?**
• Anapara hiç ödenmez: bu konsol, uzun vadeli tahvil değil.
• Kısa vadeli tahvil faiz ödemez: yanlış.
• Hep riskli borçlu: vade ile borçlunun riski ayrı konular.

## Q
EN: The "search for yield" can lead to financial losses because:
TR: "Getiri arayışı" neden finansal kayıplara yol açabilir?
+ it can bid up the prices of risky securities and push the compensation for risk below a sustainable level
- it always lowers the prices of risky securities
- it makes all investments risk-free
- it eliminates defaults
HINT: Herkes yüksek getiri için riskli kâğıda koşarsa o kâğıtların fiyatı ve risk primi ne olur?
EX: **Doğru cevap:** riskli kâğıtların fiyatını şişirip risk karşılığını sürdürülemez düzeyin altına iter.
Risk gerçekleştiğinde (temerrütler artınca) riskli kâğıtların fiyatı orantısız düşer. 2007–2009'da şirket ve ipotek kâğıtlarının çöküşü buna örnek.
**Diğer şıklar neden yanlış?**
• Fiyatları düşürür: önce yükseltir.
• Risksiz yapar, temerrüdü yok eder: tam tersine riski gizler.

## GEN pv
## GEN pvStream

--- LESSON u4c | IRR | İç verim oranı ve tahvil temelleri
FX: İç verim oranı (IRR) :: yatırımın maliyetini gelecekteki gelirlerin bugünkü değerine eşitleyen faiz
FX: Borç faizi < IRR ⇒ yatırım yap :: tenis raketi makinesi: IRR %8.14
FX: Kuponlu tahvil :: yıllık kupon $C$ + vadede nominal değer $F$
FX: $P_{CB} = \dfrac{C}{1+i} + \dots + \dfrac{C}{(1+i)^n} + \dfrac{F}{(1+i)^n}$ :: kuponların ve anaparanın PV'si
FX: Tahvil fiyatı ↔ faiz :: ters yönde

## CARD İç verim oranı
Tenis raketi şirketi işletiyorsun; yeni makine alıp almamaya karar vereceksin.
• Makine **1 milyon dolar**, yılda 3000 raket üretiyor; raket 50 dolar, yani yılda **150.000 dolar** gelir.
• Makine tek girdi, gelir kesin, bakım yok, ömrü **10 yıl**.
1 milyon doları borçlanırsan gelir taksitleri karşılar mı? ==İç verim oranı (internal rate of return)==: bir yatırımın bugünkü değerini maliyetine eşitleyen faiz.
$$1{,}000{,}000 = \frac{150{,}000}{1+i} + \frac{150{,}000}{(1+i)^2} + \dots + \frac{150{,}000}{(1+i)^{10}}$$
Çözüm: $i = 0.0814$, yani **%8.14**.
**Karar kuralı:** Borçlanma faizin **%8.14'ten düşükse** makineyi al. Faiz daha yüksekse makinenin geliri borcun maliyetini karşılamaz.
:::ipucu Daha basit hali
Tek ödemeli yatırımda iç verim oranı kolay: 1000 dolar yatırıp 1 yıl sonra 1080 alıyorsan $1000 = 1080/(1+i)$, yani $i = \%8$.
:::

## CARD Tahvil temelleri
==Tahvil (bond)==: belirli gelecek tarihlerde bir dizi ödeme yapma sözü. Yasal sözleşmedir: borçluyu ödeme yapmakla yükümlü kılar ve ödemezse ne olacağını belirtir.
En yaygın tür ==kuponlu tahvil (coupon bond)==:
| Terim | İngilizce | Anlamı |
| Kupon ödemesi $C$ | coupon payment | ihraççının her yıl yaptığı faiz ödemesi |
| Kupon oranı $i_c$ | coupon rate | yıllık faiz ödemesi ÷ nominal değer |
| Vade $n$ | maturity, term to maturity | ödemelerin durduğu ve borcun geri ödendiği tarih |
| Nominal değer $F$ | principal, face value, par value | vadedeki son ödeme |
Adı eskiden tahvil sertifikasına iliştirilen tarihli kuponlardan gelir.
**Tahvilin değeri** = kuponların bugünkü değeri + anaparanın bugünkü değeri:
$$P_{CB} = \frac{C}{1+i} + \frac{C}{(1+i)^2} + \dots + \frac{C}{(1+i)^n} + \frac{F}{(1+i)^n}$$
@fig cbond
• Anaparanın değeri $F/(1+i)^n$: vade ($n$) uzadıkça düşer.
• Kuponlar kredi taksitlerine benzer: ne kadar uzun sürerse toplam değeri o kadar yüksek; faiz yükseldikçe bugünkü değeri düşer.
• Fiyat yükselir: kupon ($C$) artarsa ya da faiz ($i$) düşerse.
:::dikkat En önemli ilişki
Tahvil sabit ödemeler vaat ettiği için **faiz yükselirse fiyat düşer**. Tahvilin değeri, ödemeleri iskontolamak için kullanılan faizle **ters yönde** değişir.
:::
:::ornek Kitaptaki diğer örnekler
• **Üniversite:** 4 yıllık okul yılda yaklaşık 26.500 dolar, diploma yaklaşık 106.000 dolar (2019 medyan ev fiyatının üçte birinden fazla). 2010 çalışması diplomanın bugünkü değerini erkekler için 500.000, kadınlar için 300.000 dolar buldu: getiri yüksek ama borçlanırken dikkatli ol.
• **Borcunu öde:** Emeklilik fonuna yatırım yapmanın fırsat maliyeti, konut kredisi, kredi kartı gibi borçlarına ödediğin faizdir. Hiçbir risksiz yatırım borcunu azaltmanın getirisine yetişemez.
:::

## Q
EN: The internal rate of return of an investment is the interest rate that:
TR: Bir yatırımın iç verim oranı hangi faizdir?
+ equates the present value of the investment's future revenues with its cost
- the central bank charges on loans to banks
- makes the future value of the investment equal to zero
- equals the coupon rate on a government bond
HINT: Maliyet bir tarafta, gelecekteki gelirlerin bugünkü değeri öbür tarafta. Onları eşitleyen faiz.
EX: **Doğru cevap:** yatırımın gelecekteki gelirlerinin bugünkü değerini maliyetine eşitleyen faiz.
Tenis raketi örneğinde 1 milyon dolar = 10 yıl boyunca 150.000 doların bugünkü değeri, $i = \%8.14$.
**Diğer şıklar neden yanlış?**
• Merkez bankasının faizi: alakasız.
• Gelecek değeri sıfır yapan: anlamsız.
• Devlet tahvilinin kupon oranı: alakasız.

## Q
EN: A machine costs 1 million dollars and has an internal rate of return of 8.14%. You should buy it if you can borrow at:
TR: Makine 1 milyon dolar, iç verim oranı %8.14. Hangi faizle borçlanabiliyorsan makineyi almalısın?
+ any rate below 8.14%
- any rate above 8.14%
- only exactly 8.14%
- any rate, because the machine produces revenue
HINT: Makine yılda %8.14 kazandırıyor. Borcun maliyeti bundan az mı olmalı, çok mu?
EX: **Doğru cevap:** %8.14'ün altındaki herhangi bir faizle.
Borç faizi iç verim oranından düşükse makinenin getirisi borcun maliyetini karşılar ve üstüne kâr bırakır.
**Diğer şıklar neden yanlış?**
• %8.14'ün üstü: makine borcun faizini bile karşılamaz.
• Tam %8.14: kâr sıfır; "sadece" bu oranda almak gerekmez, altındaki her oran daha iyi.
• Her oranda: gelir olması yetmez; paranın zaman değeri hesaba katılmalı.

## Q
EN: In a coupon bond, the final payment made at maturity is called the:
TR: Kuponlu tahvilde vadede yapılan son ödemeye ne denir?
+ principal, face value or par value
- coupon rate
- yield to maturity
- current yield
HINT: Üç ismi var ve hepsi aynı şeyi anlatıyor.
EX: **Doğru cevap:** principal, face value ya da par value (anapara, nominal değer).
**Diğer şıklar ne?**
• Coupon rate: yıllık faiz ödemesinin nominal değere oranı.
• Yield to maturity, current yield: getiri ölçüleri (Bölüm 6).

## Q
EN: The value of a coupon bond rises when:
TR: Kuponlu tahvilin değeri ne zaman yükselir?
+ the coupon payments rise or the interest rate falls
- the interest rate rises
- the coupon payments fall
- the maturity date is announced
HINT: Fiyat = kuponların ve anaparanın bugünkü değeri. Pay ve payda nasıl değişmeli?
EX: **Doğru cevap:** kupon ödemeleri artarsa ya da faiz düşerse.
Kupon artarsa pay büyür; faiz düşerse payda küçülür. İkisi de fiyatı artırır.
**Diğer şıklar neden yanlış?**
• Faiz yükselir: fiyat düşer.
• Kupon düşer: fiyat düşer.
• Vade ilanı: değeri değiştirmez.

## Q
EN: A bond promises a single payment of 100 dollars in 3 years. If the interest rate is 4%, what is its value today?
TR: Tahvil 3 yıl sonra tek seferde 100 dolar ödüyor. Faiz %4 iken bugünkü değeri kaçtır?
+ 88.90
- 88.00
- 96.15
- 112.49
HINT: $100/(1.04)^3$.
EX: **Doğru cevap: 88.90.**
$(1.04)^3 = 1.1249$; $100/1.1249 = 88.90$.
**Diğer şıklar neden yanlış?**
• 88.00: basit iskonto $100(1 - 3\times0.04)$.
• 96.15: sadece 1 yıl iskontolanmış.
• 112.49: gelecek değer.

## Q
EN: Why does the textbook advise paying down your debt before investing in a retirement fund?
TR: Kitap neden emeklilik fonuna yatırım yapmadan önce borcunu ödemeni öneriyor?
+ No riskless investment is likely to match the interest rate you save by reducing your debt.
- Retirement funds always lose money.
- Debt has no interest cost.
- Paying debt raises your credit card limit to zero.
HINT: Emeklilik fonuna yatırmanın fırsat maliyeti nedir?
EX: **Doğru cevap:** borcunu azaltarak kurtardığın faize hiçbir risksiz yatırım yetişemez.
Emeklilik fonuna yatırmanın fırsat maliyeti, konut kredisi, kredi kartı, kredi gibi borçlara ödediğin faizdir. Kredi kartı %20 faiz alıyorsa borcu ödemek risksiz %20 kazanmak gibidir.
**Diğer şıklar neden yanlış?**
• Emeklilik fonu hep kaybettirir, borcun maliyeti yok: yanlış.
• Limit sıfıra iner: anlamsız.

## GEN couponBond
## GEN irr1

--- LESSON u4d | r | Reel ve nominal faiz
FX: $i = r + \pi^e$ :: Fisher denklemi
FX: $r = i - \pi^e$ :: reel faiz gözlenmez, tahmin edilir
FX: Nominal faiz :: cari dolar cinsinden faiz; piyasada kote edilen
FX: Reel faiz :: enflasyondan arındırılmış faiz

## CARD Reel ve nominal faiz
Borçlu, geri ödemek için gereken kaynakları önemser; borç veren, aldığı ödemelerin **satın alma gücünü** önemser. İkisi de dolar sayısıyla değil, dolarların **ne alabildiğiyle** ilgilenir.
| Kavram | Sembol | Tanım |
| ==Nominal faiz== | $i$ | cari dolar cinsinden ifade edilen faiz |
| ==Reel faiz== | $r$ | enflasyona göre düzeltilmiş faiz |
Anlaşılan nominal faiz, kredi süresince beklenen enflasyona ($\pi^e$) ve anlaşılan reel faize dayanmalı:
$$i = r + \pi^e$$
Buna ==Fisher denklemi== denir. **Beklenen enflasyon ne kadar yüksekse nominal faiz o kadar yüksek.**
:::ornek
Borç veren %3 reel getiri istiyor, %2 enflasyon bekliyor: nominal faiz $3 + 2 = \%5$.
:::

## CARD Reel faizi tahmin etmek
Piyasalar **nominal** faiz kote eder; "faiz" denince nominal faiz kastedilir. Reel faizi doğrudan **gözlemleyemeyiz**, tahmin etmemiz gerekir:
$$r = i - \pi^e$$
• Şekil 4.2: nominal faiz, enflasyon ve reel faiz zaman içinde birlikte hareket eder; reel faiz zaman zaman **negatif** olur.
@fig nomreal
• 2016 başında 50 ülke ve euro bölgesi: enflasyonu yüksek ülkelerin nominal faizi de yüksek.
@fig countries
:::dikkat Beklenen ve gerçekleşen
Sözleşme anında $\pi^e$ (beklenen) kullanılır. Sonradan enflasyon beklenenden **yüksek** çıkarsa gerçekleşen reel faiz düşer: **borç veren kaybeder, borçlu kazanır.** Düşük çıkarsa tersi.
:::
:::ipucu Kesin formül
Daha kesin hali $(1+i) = (1+r)(1+\pi^e)$; düşük oranlarda $i \approx r + \pi^e$. Kitap ve sınav yaklaşık hali kullanır.
:::

## Q
EN: The Fisher equation states that:
TR: Fisher denklemi neyi söyler?
+ the nominal interest rate equals the real interest rate plus expected inflation
- the real interest rate equals the nominal rate plus expected inflation
- the nominal interest rate equals expected inflation minus the real rate
- the real interest rate is always equal to zero
HINT: Borç veren hem reel getiri hem de enflasyonun telafisini ister. Nominal faiz bu ikisinin ne kadarı?
EX: **Doğru cevap:** nominal faiz = reel faiz + beklenen enflasyon, $i = r + \pi^e$.
**Diğer şıklar neden yanlış?**
• $r = i + \pi^e$: işaret ters.
• $i = \pi^e - r$: yanlış düzen.
• Reel faiz hep sıfır: yanlış.

## Q
EN: If the nominal interest rate is 6% and expected inflation is 4%, the real interest rate is:
TR: Nominal faiz %6, beklenen enflasyon %4 ise reel faiz kaçtır?
+ 2%
- 10%
- 1.5%
- 24%
HINT: $r = i - \pi^e$.
EX: **Doğru cevap: %2.**
$r = 6 - 4 = 2$.
**Diğer şıklar neden yanlış?**
• %10: topladın.
• %1.5: böldün ($6/4$).
• %24: çarptın.

## Q
EN: Why can't we directly observe the real interest rate?
TR: Reel faizi neden doğrudan gözlemleyemeyiz?
+ Because it depends on expected inflation, which is not directly observed.
- Because banks keep the real rate secret.
- Because real interest rates are always zero.
- Because nominal rates are not quoted in financial markets.
HINT: $r = i - \pi^e$. $i$ piyasada görünüyor; $\pi^e$ nerede yazıyor?
EX: **Doğru cevap:** beklenen enflasyona bağlıdır ve beklenen enflasyon doğrudan gözlenmez.
Nominal faiz piyasada kote edilir ama insanların enflasyon beklentisi bir yerde yazmaz; tahmin etmek gerekir.
**Diğer şıklar neden yanlış?**
• Bankalar gizliyor: değil.
• Hep sıfır: değil, zaman zaman negatif bile olur.
• Nominal faiz kote edilmez: tam tersine kote edilen odur.

## Q
EN: When people use the term "interest rate" without qualification, they usually mean:
TR: İnsanlar "faiz" derken genellikle hangisini kastederler?
+ the nominal interest rate
- the real interest rate
- the inflation rate
- the rate of return on gold
HINT: Piyasalar hangi faizi kote ediyor?
EX: **Doğru cevap:** nominal faiz.
Finansal piyasalar nominal faiz kote eder; ek bir niteleme olmadan "faiz" denince nominal faiz anlaşılır.

## Q
EN: A lender and a borrower agree on a nominal rate based on expected inflation of 2%. Inflation turns out to be 5%. Who gains?
TR: Borç veren ve borçlu %2 beklenen enflasyona göre nominal faizde anlaşıyor. Enflasyon %5 çıkıyor. Kim kazanır?
+ The borrower, because the real value of the repayment is lower than expected
- The lender, because inflation was higher
- Neither, because the nominal rate was fixed
- Both gain equally
HINT: Gerçekleşen reel faiz $i - \pi$. Enflasyon beklenenden 3 puan yüksek; reel faiz ne oldu?
EX: **Doğru cevap:** borçlu kazanır; geri ödemenin reel değeri beklenenden düşüktür.
Gerçekleşen reel faiz, beklenen reel faizden 3 puan düşük çıktı. Borçlu, daha az satın alma gücüne sahip dolarlarla geri öder; borç veren kaybeder.
**Diğer şıklar neden yanlış?**
• Borç veren kazanır: tersi.
• Kimse kazanmaz: nominal faiz sabit olduğu için tam da reel değer değişir.
• İkisi de kazanır: biri kazanırsa öbürü kaybeder.

## Q
EN: According to Figure 4.2 and the cross-country data, countries with higher inflation tend to have:
TR: Şekil 4.2 ve ülkeler arası verilere göre enflasyonu yüksek ülkelerde ne gözlenir?
+ higher nominal interest rates
- lower nominal interest rates
- nominal interest rates equal to zero
- no relation between inflation and nominal rates
HINT: Fisher: $i = r + \pi^e$. $\pi^e$ yüksekse $i$?
EX: **Doğru cevap:** daha yüksek nominal faiz.
Fisher denklemine göre beklenen enflasyon yüksekse nominal faiz de yüksek olmalı; 2016'daki 50 ülke verisi bunu gösteriyor.

## GEN fisher
`);
