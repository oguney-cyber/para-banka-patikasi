CONTENT.push(String.raw`
=== UNIT u7 | Bölüm 7 | Faizin Risk ve Vade Yapısı | Kredi notları, junk bond, vergi muafiyeti, getiri eğrisi, beklentiler ve likidite primi teorileri

--- LESSON u7a | AAA | Kredi notları ve faizin risk yapısı
FX: Yatırım yapılabilir sınıf :: Moody's Baa ve üstü, S&P BBB ve üstü (ilk dört basamak)
FX: Junk / high-yield :: yatırım yapılabilir sınıfın altındaki bütün tahviller
FX: Düşmüş melek (fallen angel) :: eskiden yatırım yapılabilir, ihraççı zora girmiş
FX: Tahvil getirisi = Hazine getirisi + temerrüt risk primi :: farka "spread" denir
FX: Not ↓ ⇒ risk ↑ ⇒ fiyat ↓, getiri ↑ :: borçlanma maliyeti artar

## CARD Kredi notları
Temerrüt, tahvil sahibinin en önemli risklerinden biri. Borçluların kredi değerliliğini ölçen bağımsız şirketler (==derecelendirme kuruluşları==) doğdu. ABD hükümeti birkaçını "ulusal olarak tanınmış istatistiksel derecelendirme kuruluşu" (NRSRO) saydı. Dodd-Frank Yasası kısmen bu notlara bağımlılığı azaltmayı amaçladı.
En bilinenleri **Moody's** ve **Standard & Poor's**: ihraççıları izler ve borç verenin geri ödeme alma ihtimalini değerlendirir. Yüksek not, ihraççının ödemelerde sorun yaşamayacağını gösterir.
| Moody's | S&P | Sınıf |
| Aaa, Aa, A, Baa | AAA, AA, A, BBB | ==yatırım yapılabilir (investment grade)==: çok düşük temerrüt riski |
| Ba, B | BB, B | spekülatif: ödemede zorlanabilir ama hemen temerrüt riski yok |
| Caa, Ca, C | CCC, CC, C, D | yüksek derecede spekülatif: ciddi temerrüt riski |
• **Sınır önemli:** bazı düzenlemeye tabi kurumsal yatırımcıların yatırım yapılabilir sınıfın **altındaki** (Baa / BBB altı) tahvillere yatırım yapması yasak.
• Yatırım yapılabilir sınıfın altındaki her tahvile ==junk bond== ya da ==high-yield bond== denir.
• Junk türleri: ==düşmüş melekler (fallen angels)==: bir zamanlar yatırım yapılabilir sınıftaydı, ihraççı zor duruma düştü; ve hakkında az şey bilinen ihraççıların tahvilleri.
• Finansal durumda önemli değişiklik olursa not değişir: ==not indirimi (downgrade)==, ==not artırımı (upgrade)==.

## CARD Ticari senet ve subprime
==Ticari senet (commercial paper)==: tahvilin kısa vadeli hali.
• Teminatsız (unsecured): borçlu teminat göstermez.
• **İskontolu** ihraç edilir (sıfır kuponlu gibi), vadesi **270 günden kısa**; çoğu 5–45 gün, sadece kısa vadeli finansman için.
• Yaklaşık üçte biri para piyasası fonlarında. Neredeyse hepsi Moody's **P-1 ya da P-2** notlu (P = prime). Spekülatif ticari senet vardır ama öyle ihraç edildiği için değil, sonradan not düştüğü için.
**Tablo 7.2 · Ticari senet notları**
| Moody's | S&P | Anlamı |
| P-1 | A-1+, A-1 | zamanında geri ödeme ihtimali güçlü (prime) |
| P-2 | A-2 | güvenlik derecesi tatmin edici |
| P-3 | A-3 | güvenlik derecesi yeterli |
| – | B, C | spekülatif, prime altı |
| – | D | temerrüt |
==Subprime konut kredisi==: geleneksel (prime) kredinin kredi değerliliği standartlarını karşılamayan kredi. Standartlar kredi tutarını, ev fiyatını ve ikisinin oranını (==LTV, loan-to-value==) kapsar. Subprime krediler genelde ==değişken faizliydi (ARM)==: ilk birkaç yıl düşük "teaser" faiz, sonra yüksek faiz. Zirvede bütün konut kredilerinin %15'inden azdı ama 2007–2009 krizini tetiklemeye yardım etti, çünkü bazı büyük, yüksek kaldıraçlı kurumlar bunlara dayalı çok miktarda ipotek kâğıdı tutuyordu.
:::dikkat Derecelendirme kuruluşlarının sorunu
Kuruluşların ipotek kâğıtlarına verdiği çok yüksek notlar krizde merkezi rol oynadı. Sorun "**ihraççı öder**" düzeniydi (çıkar çatışması, teşvik sorunu). SEC iki düzenleme getirdi: çıkar çatışmasını sınırlayan kontroller ve notlanan havuzlar hakkında bilgi yayımlama (şeffaflık).
:::

## CARD Notların getiriye etkisi
Not ne kadar düşükse temerrüt riski o kadar yüksek, **fiyat o kadar düşük, getiri o kadar yüksek**. ABD hazine tahvillerinin temerrüt riski çok düşük olduğu için ölçüt (benchmark) olarak kullanılır; diğer getiriler Hazine'nin **üstündeki fark (spread)** olarak ölçülür:
$$\text{Tahvil getirisi} = \text{ABD Hazine getirisi} + \text{temerrüt risk primi}$$
• Notlar riski doğru yansıtıyorsa not düştükçe prim yükselir.
• Hazine getirileri hareket edince diğer bütün getiriler de onlarla hareket eder (Şekil 7.2: faizin risk yapısı). Aaa ve Baa getirilerindeki hareketin çoğu Hazine getirisindeki değişimden gelir.
@fig riskstr
• 1979–2016: 10 yıllık Hazine getirisi ortalamada Aaa'dan yaklaşık **1 puan**, Baa'dan yaklaşık **2 puan** düşüktü.
:::ornek Not indirimi pahalıdır
Getiri %4'ten %6'ya çıkarsa 10 yıl sonraki 100 doların bugünkü değeri $100/1.04^{10} = 67.56$'dan $100/1.06^{10} = 55.84$'e düşer: **11.72 dolar**, yaklaşık **%17**.
Not: Slaytta bu rakam "12.62 dolar, %19" olarak yazıyor; formülle hesap 11.72 dolar ve %17.3 veriyor. Sınavda formülle hesapla.
:::
Notlar şirketlerin finansman bulabilmesi için hayati; düşük not fon maliyetini artırır. Senin de bir kredi notun (kredi skoru) var: skor ne kadar iyiyse borçlarına o kadar düşük faiz ödersin.

## Q
EN: Which of the following is the lowest rating that still counts as investment grade?
TR: Hâlâ yatırım yapılabilir sınıfta sayılan en düşük not hangisidir?
+ Baa (Moody's) or BBB (Standard & Poor's)
- Ba (Moody's) or BB (Standard & Poor's)
- A (Moody's) or A (Standard & Poor's)
- Caa (Moody's) or CCC (Standard & Poor's)
HINT: İlk dört basamak yatırım yapılabilir. Dördüncü basamak hangisi?
EX: **Doğru cevap:** Baa (Moody's) ya da BBB (S&P).
Sıra: Aaa, Aa, A, **Baa** / AAA, AA, A, **BBB**. Bunun altındaki her şey junk (high-yield).
**Diğer şıklar neden yanlış?**
• Ba/BB: spekülatif sınıfın ilk basamağı.
• A/A: yatırım yapılabilir ama en düşüğü değil.
• Caa/CCC: yüksek derecede spekülatif.

## Q
EN: A "fallen angel" is:
TR: "Düşmüş melek (fallen angel)" nedir?
+ a bond that was once investment grade but whose issuer has fallen on hard times
- a bond issued by a government that has never defaulted
- a bond whose rating has just been upgraded
- a short-term commercial paper rated P-1
HINT: Melek eskiden yukarıdaydı, şimdi düştü.
EX: **Doğru cevap:** bir zamanlar yatırım yapılabilir sınıftayken ihraççısı zora girdiği için notu junk seviyesine düşen tahvil.
**Diğer şıklar neden yanlış?**
• Hiç temerrüde düşmemiş devlet: yüksek notlu ihraççı.
• Notu yükseltilen tahvil: upgrade, düşüş değil.
• P-1 ticari senet: en yüksek notlu kısa vadeli borç.

## Q
EN: Commercial paper is:
TR: Ticari senet (commercial paper) nedir?
+ a short-term, unsecured debt issued on a discount basis with a maturity of less than 270 days
- a long-term bond secured by real estate
- a share of stock in a commercial bank
- a government bond with a maturity of 30 years
HINT: Tahvilin kısa vadeli versiyonu; teminat var mı? Kupon var mı?
EX: **Doğru cevap:** 270 günden kısa vadeli, teminatsız, iskontolu ihraç edilen kısa vadeli borç.
Çoğu 5–45 gün vadeli; neredeyse hepsi P-1 ya da P-2 notlu.
**Diğer şıklar neden yanlış?**
• Gayrimenkul teminatlı uzun vadeli tahvil: ipotek tahvili.
• Banka hissesi: özsermaye.
• 30 yıllık devlet tahvili: uzun vade, devlet ihracı.

## Q
EN: The yield on a corporate bond can be thought of as:
TR: Şirket tahvilinin getirisi nasıl düşünülebilir?
+ the U.S. Treasury yield plus a default risk premium
- the U.S. Treasury yield minus a default risk premium
- the coupon rate times the tax rate
- the inflation rate plus the face value
HINT: Hazine ölçüt; şirket tahvili onun üstüne ne ekler?
EX: **Doğru cevap:** ABD Hazine getirisi + temerrüt risk primi.
Hazine tahvilinin temerrüt riski çok düşük olduğu için ölçüttür; diğer tahvillerin getirisi Hazine'nin üstündeki fark (spread) olarak ölçülür.
**Diğer şıklar neden yanlış?**
• Eksi prim: riskli tahvil **daha fazla** öder.
• Kupon × vergi, enflasyon + nominal: anlamsız.

## Q
EN: A firm's bond rating is downgraded from Aaa to Baa. All else equal, the bond's price and yield will:
TR: Bir şirketin tahvil notu Aaa'dan Baa'ya indiriliyor. Diğer her şey sabitken tahvilin fiyatı ve getirisi ne olur?
+ price falls and yield rises
- price rises and yield falls
- both rise
- both stay the same, because Baa is still investment grade
HINT: Not düştü = temerrüt riski arttı. Yatırımcı daha fazla telafi ister.
EX: **Doğru cevap:** fiyat düşer, getiri yükselir.
Daha yüksek risk için daha yüksek prim istenir; aynı ödemelere daha az ödenir. Baa hâlâ yatırım yapılabilir ama Aaa'dan daha riskli.
**Diğer şıklar neden yanlış?**
• Fiyat ↑: tersi.
• İkisi birlikte ↑: fiyat ve getiri ters hareket eder.
• Değişmez: yatırım yapılabilir sınıf içinde de not düşüşü prim artışı demektir.

## Q
EN: Between 1979 and 2016, the 10-year U.S. Treasury yield averaged about:
TR: 1979–2016 arasında 10 yıllık ABD Hazine getirisi ortalamada nasıldı?
+ one percentage point below Aaa yields and two percentage points below Baa yields
- two percentage points above Aaa yields
- equal to Baa yields
- five percentage points below Aaa yields
HINT: Hazine en güvenli; Aaa biraz riskli, Baa daha riskli.
EX: **Doğru cevap:** Aaa'dan yaklaşık 1 puan, Baa'dan yaklaşık 2 puan düşük.
En güvenli tahvil en düşük getiriyi verir; not düştükçe prim artar.

## Q
EN: Why did credit rating agencies face criticism after the 2007–2009 crisis?
TR: 2007–2009 krizinden sonra derecelendirme kuruluşları neden eleştirildi?
+ Their very high ratings of mortgage-backed securities, influenced by the "issuer pays" arrangement, played a central role in the crisis.
- They refused to rate any mortgage-backed securities.
- They rated all government bonds as junk.
- They were owned by central banks.
HINT: Notu kim ödüyordu ve bu hangi teşvik sorununu yaratır?
EX: **Doğru cevap:** ipotek kâğıtlarına verdikleri çok yüksek notlar krizde merkezi rol oynadı; "ihraççı öder" düzeni çıkar çatışması yarattı.
SEC iki önlem aldı: çıkar çatışmasını sınırlayan kontroller ve notlanan havuzlar hakkında bilgi yayımlama zorunluluğu.

## GEN spread
## GEN yieldShock

--- LESSON u7b | t | Vergi ve belediye tahvilleri
FX: Vergiye tabi tahvil :: şirket tahvili; faiz geliri vergilenir
FX: Belediye tahvili (municipal) :: eyalet ve yerel yönetim tahvili; kuponu federal vergiden muaf
FX: $i_{muaf} = i_{vergili}\times(1-t)$ :: vergi oranı ↑ ⇒ fark ↑
FX: Karar :: vergi sonrası getiriye göre

## CARD Vergi ve getiri
Vergi de getiriyi etkileyen önemli bir faktör.
• **Vergiye tabi tahviller (taxable):** özel ihraç tahvillerden alınan faize gelir vergisi ödenir.
• ==Belediye tahvilleri (municipal, tax-exempt)==: eyalet ve yerel yönetimlerin tahvillerinin kupon ödemeleri vergiden **muaftır**.
ABD'de genel kural: bir devletin ihraç ettiği tahvilin faizini **başka** bir devlet vergilendirmez (ihraç eden vergileyebilir). Eyalet ve yerel yönetimler tahvillerini cazip yapmak için genelde kendi tahvillerinin faizini de vergilemez.
Yatırımcılar **vergi sonrası** getiriye bakar:
$$\text{Vergiden muaf tahvil getirisi} = \text{vergili tahvil getirisi}\times(1 - \text{vergi oranı})$$
Vergi oranı ne kadar yüksekse vergili ve muaf getiriler arasındaki fark o kadar büyük.
:::ornek
Vergili tahvil %6, vergi oranı %30: vergi sonrası $6\times0.7 = 4.2\%$. Benzer riskteki belediye tahvili %4.2'den fazla veriyorsa belediye tahvili daha iyi.
:::
:::ipucu Ters soru
"Vergili eşdeğer getiri": muaf getiri %3, vergi %25 ise vergili tahvilin aynı vergi sonrası getiriyi vermesi için $3/(1-0.25) = 4\%$ vermesi gerekir.
:::

## Q
EN: A taxable bond yields 8%. For an investor in the 25% tax bracket, what tax-exempt yield is equivalent?
TR: Vergili tahvil %8 getiriyor. %25 vergi dilimindeki yatırımcı için eşdeğer vergiden muaf getiri kaçtır?
+ 6%
- 2%
- 10.67%
- 8%
HINT: Vergili getiriyi $(1 - t)$ ile çarp.
EX: **Doğru cevap: %6.**
$8\times(1 - 0.25) = 8\times0.75 = 6$.
**Diğer şıklar ne?**
• %2: vergiye giden kısım ($8\times0.25$).
• %10.67: ters işlem ($8/0.75$), vergili eşdeğer getiri hesabı.
• %8: vergiyi yok saymak.

## Q
EN: As the income tax rate rises, the gap between yields on taxable and tax-exempt bonds:
TR: Gelir vergisi oranı yükseldikçe vergili ve vergiden muaf tahvil getirileri arasındaki fark ne olur?
+ widens
- narrows
- stays the same
- disappears
HINT: $i_{muaf} = i_{vergili}(1-t)$. $t$ büyürse aradaki fark $i_{vergili}\times t$?
EX: **Doğru cevap:** büyür.
Fark $= i_{vergili} - i_{vergili}(1-t) = i_{vergili}\times t$. Vergi oranı yükseldikçe muafiyetin değeri artar; yatırımcılar muaf tahvili daha düşük getiriyle de kabul eder.

## Q
EN: Interest on municipal bonds in the United States is generally:
TR: ABD'de belediye tahvillerinin faizi genelde nasıldır?
+ exempt from federal income tax
- taxed at a higher rate than corporate bond interest
- taxed by every level of government
- paid only in commodity money
HINT: Bir devletin ihraç ettiği tahvilin faizini başka bir devlet vergiler mi?
EX: **Doğru cevap:** federal gelir vergisinden muaftır.
Genel kural: bir devletin tahvil faizini başka bir devlet vergilendirmez. Eyaletler de çoğunlukla kendi tahvillerinin faizini vergilemez.

## Q
EN: An investor in the 35% tax bracket compares a corporate bond yielding 6% with a municipal bond of the same risk yielding 4.2%. Which is better after taxes?
TR: %35 vergi dilimindeki yatırımcı %6 getirili şirket tahvilini, aynı riskteki %4.2 getirili belediye tahviliyle karşılaştırıyor. Vergi sonrası hangisi daha iyi?
+ The municipal bond, because the corporate bond yields only 3.9% after tax
- The corporate bond, because 6% is greater than 4.2%
- They are exactly equivalent
- The corporate bond, because municipal bonds pay no interest
HINT: Şirket tahvilinin vergi sonrası getirisi $6\times(1 - 0.35)$.
EX: **Doğru cevap:** belediye tahvili; şirket tahvili vergi sonrası sadece %3.9 getiriyor.
$6\times0.65 = 3.9 < 4.2$.
**Diğer şıklar neden yanlış?**
• %6 > %4.2: vergi öncesi karşılaştırma; yanlış ölçüt.
• Eşdeğer: değil.
• Belediye tahvili faiz ödemez: öder, sadece vergisi yok.

## Q
EN: A municipal bond yields 3%. For an investor in the 25% tax bracket, what yield must a comparable taxable bond offer to give the same after-tax return?
TR: Belediye tahvili %3 getiriyor. %25 vergi dilimindeki yatırımcı için benzer vergili tahvil aynı vergi sonrası getiriyi vermek için kaç getiri sunmalı?
+ 4%
- 2.25%
- 3.75%
- 3%
HINT: $i_{vergili}\times(1 - 0.25) = 3$. $i_{vergili}$'yi çöz.
EX: **Doğru cevap: %4.**
$i_{vergili} = 3/(1 - 0.25) = 3/0.75 = 4$. Kontrol: $4\times0.75 = 3$.
**Diğer şıklar ne?**
• %2.25: 3'ü 0.75 ile çarpmak (yanlış yön).
• %3.75: $3\times1.25$; yaklaşık ama yanlış.
• %3: vergiyi yok saymak.

## GEN taxExempt

--- LESSON u7c | ↗ | Vade yapısı: beklentiler hipotezi
FX: Faizin vade yapısı :: aynı risk ve vergi durumunda farklı vadelerin getirileri
FX: Getiri eğrisi :: dikey eksen YTM, yatay eksen vade
FX: $(1+i_{2t})^2 = (1+i_{1t})(1+i^e_{1t+1})$ :: iki strateji aynı getiriyi vermeli
FX: $i_{2t} \approx (i_{1t} + i^e_{1t+1})/2$ :: 2 yıllık faiz = 1 yıllıkların ortalaması
FX: $i_{nt} = (i_{1t} + i^e_{1t+1} + \dots + i^e_{1t+n-1})/n$ :: genel hali

## CARD Üç gözlem
Aynı temerrüt riski ve vergi durumundaki ama vadeleri farklı tahvillerin getirileri neden farklı? Uzun vadeli tahvil, art arda kısa vadeli tahvillerin bileşimi gibidir; getirisi insanların gelecekten ne beklediğine bağlıdır.
==Faizin vade yapısı (term structure)==: risk özellikleri aynı, vadeleri farklı tahviller arasındaki ilişki. 3 aylık ve 10 yıllık Hazine getirileri karşılaştırılınca:
• Farklı vadelerin faizleri **birlikte hareket eder**.
• Kısa vadeli getiriler uzun vadelilerden **daha oynaktır**.
• Uzun vadeli getiriler genelde kısa vadelilerden **daha yüksektir**.
@fig termstr
@fig yc
İyi bir teori üçünü de açıklamalı.

## CARD Beklentiler hipotezi
==Beklentiler hipotezi (expectations hypothesis)== risksiz faize odaklanır: gelecek hakkında belirsizlik yoksa yatırımcı 2 yıllık bir tahvil ile art arda iki 1 yıllık tahvil arasında **kayıtsızdır**. Kesinlik, farklı vadelerin **tam ikame** olması demektir.
İki strateji aynı getiriyi vermeli:
• 2 yıllık tahvil al, vadeye kadar tut.
• Bugün 1 yıllık al, vadesi gelince yine 1 yıllık al.
$$(1 + i_{2t})(1 + i_{2t}) = (1 + i_{1t})(1 + i^e_{1t+1})$$
Yaklaşık olarak 2 yıllık faiz, bugünkü 1 yıllık faiz ile 1 yıl sonra beklenen 1 yıllık faizin **ortalaması**:
$$i_{2t} \approx \frac{i_{1t} + i^e_{1t+1}}{2}\qquad\qquad i_{nt} = \frac{i_{1t} + i^e_{1t+1} + \dots + i^e_{1t+n-1}}{n}$$
@fig ehtime
:::ornek
Bugün 1 yıllık %2, gelecek yıl %4 bekleniyor: 2 yıllık faiz $(2+4)/2 = \%3$. Ters soru: 1 yıllık %2, 2 yıllık %3 ise beklenen gelecek yıl faizi $2\times3 - 2 = \%4$.
:::
**Getiri eğrisi (yield curve):** dikey eksende YTM, yatay eksende vade.
| Beklenti | Getiri eğrisi |
| faizler yükselecek | yukarı eğimli |
| faizler düşecek | aşağı eğimli |
| aynı kalacak | düz |
@fig ycshapes

## CARD Beklentiler hipotezi neyi açıklar, neyi açıklayamaz?
| Gözlem | Açıklıyor mu? |
| Farklı vadeler birlikte hareket eder | **evet**: uzun faizler kısa faizlerin ortalaması |
| Kısa vadeliler daha oynak | **evet**: bir kısa faizin değişmesi ortalamayı az etkiler |
| Uzun vadeliler genelde daha yüksek | **hayır**: bunun için faizlerin hep yükselmesinin beklenmesi gerekirdi |
Üçüncü gözlem için risk gerekir: likidite primi teorisi (sonraki ders).

## Q
EN: According to the expectations hypothesis, if the current one-year rate is 3% and the one-year rate expected next year is 5%, the current two-year rate is approximately:
TR: Beklentiler hipotezine göre bugünkü 1 yıllık faiz %3, gelecek yıl beklenen 1 yıllık faiz %5 ise bugünkü 2 yıllık faiz yaklaşık kaçtır?
+ 4%
- 8%
- 5%
- 2%
HINT: İki faizin ortalaması.
EX: **Doğru cevap: %4.**
$(3 + 5)/2 = 4$.
**Diğer şıklar ne?**
• %8: toplam; ortalama alınmalı.
• %5: sadece beklenen faiz.
• %2: fark.

## Q
EN: Under the expectations hypothesis, if interest rates are expected to fall, the yield curve will:
TR: Beklentiler hipotezine göre faizlerin düşmesi bekleniyorsa getiri eğrisi nasıl olur?
+ slope downward
- slope upward
- be flat
- be vertical
HINT: Uzun vadeli faiz = bugünkü ve beklenen (daha düşük) kısa faizlerin ortalaması.
EX: **Doğru cevap:** aşağı eğimli.
Gelecekteki kısa faizler bugünkünden düşükse onların ortalaması (uzun faiz) bugünkü kısa faizden düşük olur; uzun vadeli getiriler daha düşük, eğri aşağı eğimli.

## Q
EN: The expectations hypothesis assumes that bonds of different maturities are:
TR: Beklentiler hipotezi farklı vadeli tahvilleri nasıl varsayar?
+ perfect substitutes, because there is no uncertainty about the future
- completely unrelated
- equally risky as junk bonds
- illegal to combine in one portfolio
HINT: Gelecek kesinse 2 yıllık tahvil ile iki tane 1 yıllık tahvil arasında fark var mı?
EX: **Doğru cevap:** tam ikame; gelecek hakkında belirsizlik yoktur.
Yatırımcı iki strateji arasında kayıtsızdır; bu yüzden aynı getiriyi vermeleri gerekir.

## Q
EN: Which observation about the term structure can the expectations hypothesis NOT explain?
TR: Beklentiler hipotezi vade yapısıyla ilgili hangi gözlemi açıklayamaz?
+ Long-term yields are usually higher than short-term yields.
- Interest rates of different maturities move together.
- Short-term yields are more volatile than long-term yields.
- Long-term rates are averages of expected short-term rates.
HINT: Üç gözlemden hangisi faizlerin hep artacağının beklenmesini gerektirir?
EX: **Doğru cevap:** uzun vadeli getirilerin genelde kısa vadelilerden yüksek olması.
Hipoteze göre bunun için faizlerin neredeyse hep yükselmesinin beklenmesi gerekirdi; bu makul değil. Açıklaması likidite primi teorisinde.
**Diğer şıklar ne?**
• Birlikte hareket ve kısa vadenin oynaklığı: hipotez açıklar.
• Son şık: hipotezin kendi önermesi, gözlem değil.

## Q
EN: The one-year rate is 2% and the two-year rate is 3%. Under the expectations hypothesis, the market expects next year's one-year rate to be:
TR: 1 yıllık faiz %2, 2 yıllık faiz %3. Beklentiler hipotezine göre piyasa gelecek yılın 1 yıllık faizini kaç bekliyor?
+ 4%
- 3%
- 1%
- 2.5%
HINT: $3 = (2 + x)/2$. $x$'i çöz.
EX: **Doğru cevap: %4.**
$x = 2\times3 - 2 = 4$.
**Diğer şıklar ne?**
• %3: 2 yıllık faizin kendisi.
• %1: fark.
• %2.5: iki faizin ortalaması.

## Q
EN: Why are short-term yields more volatile than long-term yields according to the expectations hypothesis?
TR: Beklentiler hipotezine göre kısa vadeli getiriler neden uzun vadelilerden daha oynaktır?
+ Long-term rates are averages of many short-term rates, so a change in one short-term rate has little effect on them.
- Long-term bonds are never traded.
- Short-term bonds have higher default risk.
- The central bank fixes long-term rates.
HINT: 10 yıllık faiz 10 tane 1 yıllık faizin ortalaması. Biri 1 puan değişirse ortalama ne kadar değişir?
EX: **Doğru cevap:** uzun vadeli faizler birçok kısa faizin ortalamasıdır; tek bir kısa faizin değişmesi onları az etkiler.
Örnek: 10 yıllık faizde sadece bu yılın faizi 1 puan değişirse ortalama 0.1 puan değişir.

## GEN expHyp

--- LESSON u7d | ⌒ | Likidite primi teorisi ve faizlerdeki bilgi
FX: $i_{nt} = \dfrac{i_{1t} + \dots + i^e_{1t+n-1}}{n} + rp_n$ :: likidite primi teorisi
FX: $rp_n$ vadeyle artar :: enflasyon riski + faiz oranı riski
FX: Güvenli limana kaçış (flight to quality) :: krizde devlet tahviline talep ↑, risk farkı ↑
FX: Risk farkı ↑ ⇒ resesyon yaklaşıyor :: Baa − Hazine
FX: Ters getiri eğrisi ⇒ yavaşlama :: vade farkı ↓ ⇒ 1 yıl sonra büyüme ↓

## CARD Likidite primi teorisi
Getiri eğrisinin genelde yukarı eğimli olmasının anahtarı **risk**. Tahvil sahipleri iki riskle karşı karşıya:
• **Enflasyon riski:** reel getiriyi bulmak için gelecekteki enflasyonu tahmin etmek gerekir; tahvilin enflasyon riski vadeyle artar.
• **Faiz oranı riski:** yatırımcının ufku ile tahvilin vadesi arasındaki uyumsuzluktan doğar. Vadeden önce satılacaksa faiz değişimi sermaye kazancı ya da kaybı yaratır; vade uzadıkça fiyat değişimi ve olası kayıp büyür.
Yatırımcılar uzun vadeli tahvilin ek riski için **telafi** ister. Getirinin iki parçası:
• risksiz kısım: beklentiler hipotezi,
• risk primi: enflasyon ve faiz riskinin karşılığı.
$$i_{nt} = \frac{i_{1t} + i^e_{1t+1} + \dots + i^e_{1t+n-1}}{n} + rp_n$$
Bu ==likidite primi teorisi (liquidity premium theory)==; prim $rp_n$ vadeyle **artar**. Faizlerin aynı kalması beklense bile eğri hafif yukarı eğimlidir. Üç gözlemi birden açıklar.
@fig lpt
:::ornek
1 yıllık faiz %2, gelecek yıl %2 bekleniyor, 2 yıllık prim 0.5 puan: $i_2 = (2+2)/2 + 0.5 = \%2.5$. Beklentiler hipotezi %2 derdi.
:::

## CARD Faiz yapısındaki bilgi
**Risk yapısı:** Yaklaşan resesyonun ilk etkisi özel tahvillerde risk primini artırmaktır. Devlet tahvilini tutmanın riski değişmez; yüksek notlu şirketlerde etki küçüktür; **ilk notu ne kadar düşükse** koşullar kötüleşince temerrüt primi o kadar yükselir. Şekil 7.6: Baa − Hazine farkı (risk spread) yükselince üretim düşer.
@fig spreadgdp
==Güvenli limana kaçış (flight to quality)==: krizde insanlar riskli yatırımları satıp güvenli olanları alır. Devlet tahviline talep artarken neredeyse her şeye talep azalır; **risk farkı açılır**.
**Vade yapısı:** Getiri eğrisinin eğimi genel ekonomik koşulları tahmin etmeye yardım eder.
• Eğri genelde yukarı eğimlidir. Nadiren kısa faizler uzun faizleri aşar: ==ters getiri eğrisi (inverted yield curve)==. Genel bir **yavaşlamayı** öngörür; para politikasının sıkı olduğunu, politika yapıcıların büyümeyi ve enflasyonu yavaşlatmaya çalıştığını gösterir.
• Şekil 7.7: ==vade farkı (term spread)== = 10 yıllık getiri − kısa vadeli (3 aylık) getiri. Vade farkı düşünce **bir yıl sonra** GSYH büyümesi düşer.
@fig termgdp
:::dikkat 2007–2009 istisnası
Getiri eğrisi bu resesyonun derinliğini ve süresini öngöremedi: 1 ve 2 yıllık faizler gecelik faizlerin uzun süreli çöküşünü tahmin etmedi. Bu kez **açılan risk farkı** ciddi bir daralmanın daha yararlı sinyaliydi.
:::
:::ipucu ABCP ve devir riski
==Varlığa dayalı ticari senet (ABCP)==: 270 güne kadar vadeli, özel bir portföye konan varlıklarla teminatlı kısa vadeli borç. Bazı büyük bankalar ABCP ihraç edip parasıyla konut kredisi alan firmalar (bir tür gölge banka) kurdu. ABCP vadesi gelince yeniden borçlanmak (ya da varlık satmak) gerekiyordu: ==devir riski (rollover risk)==. İpotek değerleri belirsizleşince alıcılar çekildi; varlığını satamayan ya da fon bulamayan çok sayıda firma battı.
:::

## Q
EN: The liquidity premium theory explains why the yield curve usually slopes upward by noting that:
TR: Likidite primi teorisi getiri eğrisinin genelde yukarı eğimli olmasını nasıl açıklar?
+ investors require a risk premium that rises with maturity to compensate for inflation and interest-rate risk
- short-term rates are always expected to rise
- long-term bonds have no risk
- the central bank always sets long rates above short rates
HINT: Uzun vadeli tahvili tutmak hangi iki riski artırır?
EX: **Doğru cevap:** yatırımcılar enflasyon ve faiz oranı riski için vadeyle artan bir risk primi ister.
Faizlerin sabit kalması beklense bile prim uzun vadeli faizleri yükseltir.
**Diğer şıklar neden yanlış?**
• Kısa faizlerin hep yükselmesi beklenir: beklentiler hipotezinin gerektirdiği ama gerçekçi olmayan durum.
• Uzun vade risksiz: tersine daha riskli.
• Merkez bankası belirler: uzun vadeli faizler piyasada oluşur.

## Q
EN: The one-year rate is 2%, the one-year rate expected next year is 2%, and the risk premium on a two-year bond is 0.5 percentage points. According to the liquidity premium theory, the two-year rate is:
TR: 1 yıllık faiz %2, gelecek yıl beklenen %2, 2 yıllık tahvilin risk primi 0.5 puan. Likidite primi teorisine göre 2 yıllık faiz kaçtır?
+ 2.5%
- 2%
- 4.5%
- 1.5%
HINT: Önce ortalama, sonra primi ekle.
EX: **Doğru cevap: %2.5.**
$(2 + 2)/2 + 0.5 = 2.5$. Faizlerin değişmesi beklenmediği halde eğri yukarı eğimli: farkı prim yaratıyor.
**Diğer şıklar ne?**
• %2: primi unutmak (beklentiler hipotezi).
• %4.5: ortalama yerine toplamak.
• %1.5: primi çıkarmak.

## Q
EN: An inverted yield curve, in which short-term rates exceed long-term rates, is a signal of:
TR: Kısa vadeli faizlerin uzun vadelileri aştığı ters getiri eğrisi neyin sinyalidir?
+ a coming economic slowdown
- an economic boom next year
- rising inflation expectations
- a decline in default risk
HINT: Para politikası sıkıysa ve politika yapıcılar büyümeyi yavaşlatmaya çalışıyorsa ne olur?
EX: **Doğru cevap:** yaklaşan ekonomik yavaşlama.
Ters eğri para politikasının sıkı olduğunu gösterir; vade farkı düşünce bir yıl sonra GSYH büyümesi düşer.

## Q
EN: A "flight to quality" during a financial crisis causes:
TR: Finansal krizde "güvenli limana kaçış" neye yol açar?
+ higher demand for government bonds and a wider risk spread
- lower demand for government bonds and a narrower risk spread
- equal yields on all bonds
- a fall in the price of Treasury bonds
HINT: İnsanlar riskli varlıkları satıp güvenli olanları alıyor.
EX: **Doğru cevap:** devlet tahvillerine talep artar, risk farkı açılır.
Devlet tahvili fiyatı yükselir (getirisi düşer), riskli tahvillerin fiyatı düşer (getirisi yükselir): aradaki fark büyür.
**Diğer şıklar neden yanlış?**
• Devlet tahviline talep düşer, fark daralır: tersi.
• Bütün getiriler eşit: risk farkı açılır.
• Hazine fiyatı düşer: yükselir.

## Q
EN: When economic conditions worsen ahead of a recession, the default risk premium rises most for:
TR: Resesyon öncesinde koşullar kötüleşince temerrüt risk primi en çok hangi tahvillerde yükselir?
+ bonds with the lowest initial ratings
- U.S. Treasury bonds
- Aaa-rated corporate bonds
- all bonds equally
HINT: Kitap: "The lower the initial grade of the bond, the more ..."
EX: **Doğru cevap:** ilk notu en düşük olan tahvillerde.
Resesyon devlet tahvilinin riskini değiştirmez; yüksek notlu şirketlere etkisi küçüktür. Not ne kadar düşükse prim o kadar çok yükselir.

## Q
EN: According to Figure 7.7, when the term spread (long-term minus short-term yield) falls:
TR: Şekil 7.7'ye göre vade farkı (uzun vadeli − kısa vadeli getiri) düşünce ne olur?
+ GDP growth tends to fall about one year later
- GDP growth immediately doubles
- inflation always falls to zero
- the risk spread must narrow
HINT: B panelinde bu yılın büyümesi, bir yıl önceki eğimle karşılaştırılıyor.
EX: **Doğru cevap:** yaklaşık bir yıl sonra GDP büyümesi düşer.
Eğrinin eğimi gelecekteki büyümenin öncü göstergesidir; ama 2007–2009 resesyonunun derinliğini öngöremedi.

## Q
EN: In the 2007–2009 recession, which signal provided a more useful warning than the slope of the yield curve?
TR: 2007–2009 resesyonunda hangi sinyal getiri eğrisinin eğiminden daha yararlı bir uyarı verdi?
+ The widening risk spread
- The narrowing risk spread
- The level of the 30-year Treasury yield
- The number of fallen angels in 1998
HINT: Getiri eğrisi gecelik faizlerin çöküşünü öngöremedi. Diğer bilgi kaynağı risk yapısıydı.
EX: **Doğru cevap:** açılan risk farkı.
1 ve 2 yıllık faizler gecelik faizlerin uzun süreli düşüşünü öngörmedi; açılan risk farkı ise ciddi bir daralmanın sinyalini verdi.

## Q
EN: Asset-backed commercial paper (ABCP) issuers faced "rollover risk" in 2007 because:
TR: 2007'de ABCP ihraççıları neden "devir riski" ile karşılaştı?
+ when their short-term paper matured they had to borrow again or sell assets, and buyers stopped purchasing ABCP
- their paper had a maturity of 30 years
- they held only U.S. Treasury bonds
- the Fed banned all commercial paper
HINT: Kısa vadeli borçla uzun vadeli ipotek tutuyorlardı. Kısa borç vadesi gelince ne yapmaları gerekir?
EX: **Doğru cevap:** kısa vadeli kâğıtlarının vadesi gelince yeniden borçlanmak ya da varlık satmak zorundaydılar ve alıcılar ABCP almayı bıraktı.
İpotek değerleri belirsizleşince alıcılar çekildi; varlığını satamayan ya da fon bulamayan çok sayıda firma battı. Bazı bankalar gölge bankalarını kurtarmak zorunda kaldı.

## GEN liqPrem
`);
