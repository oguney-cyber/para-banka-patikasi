CONTENT.push(String.raw`
=== UNIT u6 | Bölüm 6 | Tahviller, Tahvil Fiyatları ve Faizin Belirlenmesi | Tahvil türleri, YTM, cari getiri, elde tutma getirisi, arz-talep, tahvil riskleri

--- LESSON u6a | B | Tahvil türleri ve fiyatları
FX: Sıfır kuponlu: $P = 100/(1+i)^n$ :: tek ödeme, iskontolu satılır (hazine bonosu)
FX: 6 aylık bono: $P = 100/(1+i)^{1/2}$ :: yıllık faizle yarım yıl
FX: Sabit ödemeli kredi :: değer = taksitlerin bugünkü değerleri toplamı
FX: Kuponlu tahvil :: kuponların PV'si + anaparanın PV'si
FX: Konsol: $P = C/i$ :: kupon sonsuza kadar, anapara hiç ödenmez
FX: Fiyat ↑ ⇔ faiz ↓ :: her tahvil türünde

## CARD Dört temel tahvil türü
Standart bir tahvil ödenecek sabit tutarları ve tarihlerini belirtir. Ne kadar ödemeye razı olmalıyız? Tahvilin özelliklerine bağlı.
| Tür | İngilizce | Ödemeler | Örnek |
| Sıfır kuponlu | zero-coupon, discount bond | gelecekte **tek** ödeme | hazine bonosu (T-bill) |
| Sabit ödemeli kredi | fixed-payment loan | eşit aralıklarla **sabit** taksitler | konut, taşıt kredisi |
| Kuponlu tahvil | coupon bond | dönemsel faiz + vadede anapara | ABD hazine tahvilleri, çoğu şirket tahvili |
| Konsol | consol, perpetuity | **sonsuza kadar** faiz, anapara hiç ödenmez | 1900'de ABD'nin bir kez sattığı (hepsi geri alındı) |

## CARD Sıfır kuponlu tahvil (hazine bonosu)
Her T-bill, ABD hükümetinin belirli bir tarihte **100 dolar** ödeme sözüdür; kupon yoktur. Fiyatı nominal değerin altında olduğu için **iskontolu satılır** (pure discount bond).
$$P = \frac{100}{(1+i)^n}$$
:::ornek $i = 5\%$
• 1 yıllık bono: $100/1.05 = 95.24$
• 6 aylık bono: $100/(1.05)^{1/2} = 97.59$
:::
**Ters yön:** fiyat 95 ise $i = 100/95 - 1 = 0.0526$, yani **%5.26**. Fiyat hareket edince faiz **ters yönde** hareket eder.
:::dikkat 100 − 95 = 5 değil
Getiri ödediğin fiyata göre hesaplanır: 5 dolar kazanç, 95 dolarlık yatırımın %5.26'sıdır. Nominale (100) bölmek getiriyi düşük gösterir.
:::

## CARD Sabit ödemeli kredi, kuponlu tahvil, konsol
• **Sabit ödemeli kredi:** konut ve taşıt kredileri. Eşit aralıklarla sabit sayıda eşit ödeme. ==Amortismanlı (amortized)== kredidir: her taksit faizle birlikte anaparanın bir kısmını öder. Değeri = taksitlerin bugünkü değerlerinin toplamı.
$$\text{Kredinin değeri} = \frac{C}{1+i} + \frac{C}{(1+i)^2} + \dots + \frac{C}{(1+i)^n}$$
• **Kuponlu tahvil:** dönemsel kupon + vadede anapara:
$$P_{CB} = \frac{C}{1+i} + \dots + \frac{C}{(1+i)^n} + \frac{F}{(1+i)^n}$$
• **Konsol:** kupon ödemeleri sonsuza kadar sürer; borçlu sadece faiz öder, anaparayı hiç geri ödemez. Fiyatı bütün kuponların bugünkü değeri:
$$P = \frac{C}{i}$$
:::ornek Konsol
Yılda 5 dolar ödeyen konsol, faiz %5 iken $5/0.05 = 100$; faiz %10 olursa $5/0.10 = 50$ dolar. Faiz iki katına çıkınca fiyat yarıya iner.
:::
:::ipucu Konut kredisi türleri
Sabit faizli konut kredisi basittir. ==Değişken faizli (ARM)== kredide faiz, dolayısıyla taksit değişir; seçmeden önce faiz endeksi, marj, tavan (cap), negatif amortisman gibi kavramları bilmek gerekir.
:::

## Q
EN: If the interest rate is 5%, the price of a one-year Treasury bill with a face value of 100 dollars is:
TR: Faiz %5 iken 100 dolar nominalli 1 yıllık hazine bonosunun fiyatı kaçtır?
+ 95.24
- 95.00
- 105.00
- 97.59
HINT: Tek ödeme: 1 yıl sonra 100. Bugünkü değeri?
EX: **Doğru cevap: 95.24.**
$P = 100/1.05 = 95.24$.
**Diğer şıklar ne?**
• 95.00: 100'den %5 çıkarmak; iskonto bölmeyle yapılır.
• 105.00: gelecek değer.
• 97.59: 6 aylık bononun fiyatı, $100/(1.05)^{1/2}$.

## Q
EN: The price of a one-year Treasury bill with a face value of 100 dollars is 95 dollars. Its interest rate is:
TR: 100 dolar nominalli 1 yıllık hazine bonosunun fiyatı 95 dolar. Faizi kaçtır?
+ 5.26%
- 5.00%
- 4.75%
- 95.00%
HINT: $95 = 100/(1+i)$. $1+i$'yi yalnız bırak.
EX: **Doğru cevap: %5.26.**
$1 + i = 100/95 = 1.0526$, yani $i = 0.0526$.
**Diğer şıklar neden yanlış?**
• %5.00: kazancı (5) nominale (100) bölmek. Getiri ödenen fiyata (95) göre hesaplanır.
• %4.75: anlamsız.
• %95: fiyatı oran sanmak.

## Q
EN: A consol pays 4 dollars per year forever. If the interest rate is 5%, its price is:
TR: Yılda sonsuza kadar 4 dolar ödeyen konsolun fiyatı, faiz %5 iken kaçtır?
+ 80
- 20
- 3.81
- 84
HINT: $P = C/i$.
EX: **Doğru cevap: 80.**
$P = 4/0.05 = 80$.
**Diğer şıklar ne?**
• 20: kuponu unutup sadece $1/i = 1/0.05$ almak.
• 3.81: sadece ilk kuponun bugünkü değeri ($4/1.05$).
• 84: 80'e bir kupon eklemek.

## Q
EN: Which type of bond never repays its principal?
TR: Hangi tahvil türü anaparasını hiç geri ödemez?
+ A consol
- A zero-coupon bond
- A coupon bond
- A fixed-payment loan
HINT: Hangisi "sonsuza kadar" sadece faiz ödüyor?
EX: **Doğru cevap: consol (sürekli tahvil).**
Borçlu sadece faiz öder; anapara hiç geri ödenmez. Fiyatı $C/i$.
**Diğer şıklar neden yanlış?**
• Sıfır kuponlu: sadece anaparayı (tek ödeme) öder.
• Kuponlu: vadede anaparayı öder.
• Sabit ödemeli kredi: anapara taksitlerle (amortisman) ödenir.

## Q
EN: A home mortgage on which each monthly payment includes both interest and part of the principal is an example of:
TR: Her aylık taksidin hem faiz hem anaparanın bir kısmını içerdiği konut kredisi neye örnektir?
+ a fixed-payment (amortized) loan
- a zero-coupon bond
- a consol
- a Treasury bill
HINT: Eşit taksitler, anapara yavaş yavaş azalıyor.
EX: **Doğru cevap:** sabit ödemeli (amortismanlı) kredi.
Konut ve taşıt kredileri bu türdendir; değeri taksitlerin bugünkü değerlerinin toplamıdır.
**Diğer şıklar neden yanlış?**
• Sıfır kuponlu tahvil ve hazine bonosu: tek ödeme.
• Konsol: anapara hiç ödenmez.

## Q
EN: Treasury bills are called discount bonds because:
TR: Hazine bonolarına neden iskontolu tahvil denir?
+ they sell at a price below their face value
- they pay a higher coupon than other bonds
- they are sold only to discount stores
- their face value is discounted at maturity
HINT: Kupon yok; tek kazanç fiyat ile 100 arasındaki fark.
EX: **Doğru cevap:** nominal değerlerinin altında bir fiyata satılırlar.
Kupon olmadığı için yatırımcının kazancı, bugün ödediği fiyat ile vadede aldığı 100 dolar arasındaki farktır.
**Diğer şıklar neden yanlış?**
• Yüksek kupon: hiç kupon yok.
• İndirim mağazası: şaka.
• Vadede nominal indirilir: vadede tam 100 ödenir.

## GEN zeroBond
## GEN consol
## GEN fixedLoan

--- LESSON u6b | YTM | Getiri ölçüleri: YTM, cari getiri, elde tutma getirisi
FX: Vadeye kadar getiri (YTM) :: fiyatı bütün ödemelerin PV'sine eşitleyen $i$
FX: 1 yıllık tahvil: $i = (C+F)/P - 1$ :: YTM
FX: Cari getiri $= C/P$ :: sadece kupon kısmı
FX: Elde tutma getirisi $= C/P_0 + (P_1-P_0)/P_0$ :: cari getiri + sermaye kazancı
FX: $P < F$: kupon < cari < YTM; $P > F$: YTM < cari < kupon :: Tablo 6.1

## CARD Vadeye kadar getiri (YTM)
Bir tahvili tutmanın getirisinin en kullanışlı ölçüsü ==vadeye kadar getiri (yield to maturity)==: tahvili son anapara ödemesine kadar elinde tutan kişinin aldığı getiri. Fiyat formülünü sağlayan $i$ değeridir:
$$P = \frac{C}{1+i} + \dots + \frac{C}{(1+i)^n} + \frac{F}{(1+i)^n}$$
**Fiyat ile YTM ilişkisi:**
| Fiyat | YTM ile kupon oranı |
| $P = 100$ (nominal) | YTM = kupon oranı |
| $P > 100$ | YTM < kupon oranı |
| $P < 100$ | YTM > kupon oranı |
**Fiyat ↑ ⇒ YTM ↓.** Mantığı: 100 nominalli tahvile 95 ödersen hem kuponları hem de değerin 95'ten 100'e yükselişini alırsın. Bu yükseliş ==sermaye kazancı (capital gain)==, getirinin parçasıdır. Fiyat nominalden yüksekse tahvil sahibi ==sermaye kaybı (capital loss)== yaşar.

## CARD Cari getiri
==Cari getiri (current yield)==: yıllık kupon ödemesinin fiyata oranı. Getirinin **sadece kupondan** gelen kısmını ölçer.
$$\text{Cari getiri} = \frac{C}{P}$$
:::ornek Kitap
1 yıllık, %5 kuponlu tahvil 99 dolar.
• Cari getiri: $5/99 = 5.05\%$
• YTM: $99 = 105/(1+i) \Rightarrow i = 105/99 - 1 = 6.06\%$
• Kupon oranı: %5
Fiyat nominalin altında: **kupon oranı (%5) < cari getiri (%5.05) < YTM (%6.06)**.
:::
**Tablo 6.1 (özet):**
| Fiyat nominale göre | Sıralama |
| altında (iskontolu) | kupon oranı < cari getiri < YTM |
| eşit | kupon oranı = cari getiri = YTM |
| üstünde (primli) | kupon oranı > cari getiri > YTM |

## CARD Elde tutma getirisi
==Elde tutma getirisi (holding period return)==: tahvili alıp **vadeden önce** satmanın getirisi. YTM'den farklı olabilir.
$$\text{Elde tutma getirisi} = \frac{C}{P_0} + \frac{P_1 - P_0}{P_0}$$
= cari getiri + sermaye kazancı (ya da kaybı). İki parça da **alış fiyatına** ($P_0$) bölünür.
:::ornek
%6 kuponlu 10 yıllık tahvili 100'e aldın. Bir yıl sonra faizler düştü, tahvili 105'e sattın: $6/100 + 5/100 = 11\%$. Faizler yükselip fiyat 95'e düşseydi: $6/100 - 5/100 = 1\%$.
:::
• Fiyat her değiştiğinde sermaye kazancı ya da kaybı olur; fiyat değişimi ne kadar büyükse bu parça o kadar önemlidir.
• Tahvilin vadesi uzadıkça fiyat hareketleri ve risk büyür.

## Q
EN: If a coupon bond's price is above its face value, then its yield to maturity is:
TR: Kuponlu tahvilin fiyatı nominal değerinin üstündeyse vadeye kadar getirisi nasıldır?
+ below the coupon rate
- above the coupon rate
- equal to the coupon rate
- equal to zero
HINT: Pahalı aldın; vadede sadece 100 alacaksın. Bu fark getiriyi artırır mı, azaltır mı?
EX: **Doğru cevap:** kupon oranının altında.
Nominalin üstünde ödediğin para vadede geri gelmez (sermaye kaybı); bu kayıp getiriyi kupon oranının altına çeker. Fiyat ↑ ⇒ YTM ↓.
**Diğer şıklar neden yanlış?**
• Kupon oranının üstünde: fiyat nominalin **altındayken** olur.
• Eşit: fiyat tam nominalde olur.
• Sıfır: yanlış.

## Q
EN: A one-year bond with a 5% coupon and a face value of 100 dollars sells for 99 dollars. Its current yield is:
TR: 1 yıllık, %5 kuponlu, 100 dolar nominalli tahvil 99 dolara satılıyor. Cari getirisi kaçtır?
+ 5.05%
- 5.00%
- 6.06%
- 1.01%
HINT: Cari getiri = kupon ÷ fiyat.
EX: **Doğru cevap: %5.05.**
$5/99 = 0.0505$.
**Diğer şıklar ne?**
• %5.00: kupon oranı (kupon ÷ nominal).
• %6.06: YTM, $105/99 - 1$; sermaye kazancını da içerir.
• %1.01: sadece sermaye kazancı, $1/99$.

## Q
EN: The same bond (one year, 5% coupon, face value 100, price 99) has a yield to maturity of:
TR: Aynı tahvilin (1 yıl, %5 kupon, nominal 100, fiyat 99) vadeye kadar getirisi kaçtır?
+ 6.06%
- 5.05%
- 5.00%
- 4.04%
HINT: 1 yıl sonra 105 alacaksın, bugün 99 ödüyorsun.
EX: **Doğru cevap: %6.06.**
$99 = 105/(1+i) \Rightarrow 1+i = 105/99 = 1.0606$.
YTM = cari getiri (%5.05) + sermaye kazancı ($1/99 = \%1.01$).
**Diğer şıklar ne?**
• %5.05: cari getiri; sermaye kazancı eksik.
• %5.00: kupon oranı.
• %4.04: anlamsız.

## Q
EN: For a bond selling below its face value, which ordering is correct?
TR: Nominal değerinin altında satılan tahvil için hangi sıralama doğrudur?
+ coupon rate < current yield < yield to maturity
- yield to maturity < current yield < coupon rate
- coupon rate = current yield = yield to maturity
- current yield < coupon rate < yield to maturity
HINT: Cari getiride payda fiyat (100'den küçük); YTM'ye bir de sermaye kazancı eklenir.
EX: **Doğru cevap:** kupon oranı < cari getiri < YTM.
• Cari getiri $C/P$, kupon oranı $C/F$; $P < F$ olduğu için cari getiri büyük.
• YTM'ye ayrıca fiyatın nominale yükselişi (sermaye kazancı) eklenir; en büyük o.
**Diğer şıklar ne?**
• Ters sıralama: fiyat nominalin **üstündeyken**.
• Hepsi eşit: fiyat tam nominaldeyken.
• Son şık: hiçbir durumda geçerli değil.

## Q
EN: The holding period return on a bond consists of:
TR: Bir tahvilin elde tutma getirisi nelerden oluşur?
+ the current yield plus the capital gain or loss
- the coupon rate only
- the yield to maturity minus inflation
- the face value divided by the price
HINT: Elinde tuttuğun sürede iki şey kazanırsın: kupon ve fiyat değişimi.
EX: **Doğru cevap:** cari getiri + sermaye kazancı/kaybı, $C/P_0 + (P_1-P_0)/P_0$.
**Diğer şıklar neden yanlış?**
• Sadece kupon oranı: fiyat değişimini atlar.
• YTM − enflasyon: reel YTM'ye benzer, elde tutma getirisi değil.
• Nominal ÷ fiyat: anlamsız.

## Q
EN: You buy a 6% coupon bond (face value 100) for 100 dollars. One year later, after receiving the coupon, you sell it for 95 dollars. Your one-year holding period return is:
TR: %6 kuponlu tahvili 100 dolara aldın. Bir yıl sonra kuponu aldıktan sonra 95 dolara sattın. Bir yıllık elde tutma getirin kaçtır?
+ 1%
- 6%
- −5%
- 11%
HINT: Kupon kısmı + fiyat değişimi kısmı. Fiyat değişimi negatif.
EX: **Doğru cevap: %1.**
Kupon kısmı: $6/100 = \%6$. Sermaye kaybı: $(95 - 100)/100 = -\%5$. Toplam $6 - 5 = \%1$.
Faizler yükselince tahvil fiyatı düştü; elde tutma getirisi YTM'den (%6) çok düşük çıktı.
**Diğer şıklar ne?**
• %6: sadece kupon.
• −%5: sadece sermaye kaybı.
• %11: fiyat 105'e çıksaydı olacak getiri.

## Q
EN: The holding period return can differ from the yield to maturity because:
TR: Elde tutma getirisi neden vadeye kadar getiriden farklı olabilir?
+ the bond's price can change before maturity, creating capital gains or losses
- coupon payments change every year on all bonds
- the face value changes over time
- the holding period return ignores coupons
HINT: Vadeden önce satarsan satış fiyatını belirleyen şey ne?
EX: **Doğru cevap:** tahvilin fiyatı vadeden önce değişebilir; bu sermaye kazancı ya da kaybı yaratır.
Faizler değişirse satış fiyatı değişir. Vade ne kadar uzunsa fiyat hareketleri o kadar büyük.
**Diğer şıklar neden yanlış?**
• Kuponlar her yıl değişir: standart tahvilde sabit.
• Nominal değer değişir: sabit.
• Kuponu yok sayar: kuponu içerir.

## GEN currentYield
## GEN ytm1
## GEN hpr
## GEN yieldOrder

--- LESSON u6c | ⇅ | Tahvil arzı, talebi ve denge
FX: Arz eğrisi yukarı eğimli :: fiyat ↑ ⇒ satılmak istenen miktar ↑
FX: Talep eğrisi aşağı eğimli :: fiyat ↑ ⇒ talep edilen miktar ↓
FX: Arzı kaydıranlar :: devlet borçlanması · iş koşulları · beklenen enflasyon
FX: Talebi kaydıranlar :: servet · beklenen enflasyon · beklenen getiri/faiz · göreli risk · göreli likidite
FX: Fiyat ↑ ⇔ faiz ↓ :: kayma yönünü bul, sonra faize çevir

## CARD Arz, talep ve denge
Tahvil fiyatlarını (ve getirilerini) arz ve talep belirler. Basitleştirmeler: piyasadaki tahvil **stoğuna** bakıyoruz; faiz yerine **fiyatla** konuşuyoruz; 100 dolar nominalli **1 yıllık sıfır kuponlu** tahvili düşünüyoruz. 1 yıllık yatırımcı için elde tutma getirisi = YTM = $(100-P)/P$.
• ==Tahvil arz eğrisi==: fiyat ile satılmak istenen miktar ilişkisi. Fiyat yüksekse borçlanmak ucuz, daha çok tahvil arz edilir: **yukarı eğimli**.
• ==Tahvil talep eğrisi==: fiyat ile yatırımcıların talep ettiği miktar ilişkisi. Fiyat yükseldikçe getiri düşer, talep azalır: **aşağı eğimli**.
• ==Denge==: arz = talep.
**Dengeye dönüş:**
• Fiyat dengenin **üstünde**: arz edilen > talep edilen (arz fazlası). Satıcılar fiyatı düşürür.
• Fiyat dengenin **altında**: talep fazlası. Alıcılar fiyatı yükseltir.
:::dikkat Eğri boyunca mı, eğri mi kayıyor?
Fiyat değişince eğri **üzerinde** hareket edilir (arz/talep edilen miktar değişir). Fiyat dışındaki bir faktör değişince **eğrinin kendisi** kayar. Eğri kayınca fiyat değişir, dolayısıyla getiri de değişir.
:::

## CARD Arzı ve talebi kaydıranlar
**Arzı kaydıranlar:**
| Değişim | Arz |
| Devlet borçlanma ihtiyacı ↑ | sağa (daha çok tahvil) |
| İş koşulları iyileşir (yatırım fırsatı ↑) | sağa |
| Beklenen enflasyon ↑ (borçlanmanın reel maliyeti ↓) | sağa |
**Talebi kaydıranlar:**
| Değişim | Talep |
| Servet ↑ | sağa |
| Beklenen enflasyon ↓ (vaat edilen ödemelerin reel değeri ↑) | sağa |
| Tahvilin beklenen getirisi alternatiflere göre ↑ | sağa |
| Faizlerin düşmesi beklenir (fiyat ↑ beklenir) | sağa |
| Tahvil alternatiflere göre daha az riskli | sağa |
| Tahvil alternatiflere göre daha likit | sağa |
**Kural:** arz sağa ⇒ fiyat ↓, faiz ↑. Talep sağa ⇒ fiyat ↑, faiz ↓.

## CARD İki örnek: enflasyon ve resesyon
**Beklenen enflasyon artarsa:**
• Borçlanmanın reel maliyeti düşer → **arz sağa**.
• Borç vermenin reel getirisi düşer → **talep sola**.
• İki etki aynı yönde: **fiyat düşer, faiz yükselir.** Miktar belirsiz.
**Resesyon (konjonktür daralması):**
• Yatırım fırsatları azalır → **arz sola**.
• Servet azalır → **talep sola**.
• Grafikte fiyat belirsiz görünür ama veriler net: resesyonda **faizler düşer**, yani fiyatlar yükselir. Demek ki arz talepten daha çok kayıyor.
:::ornek 1998 güvenli liman
Rusya 1998'de temerrüde düştü, yatırımcılar gelişmekte olan ülkelere güvenini kaybetti. En güvenli varlık ABD hazine tahvilleri: talep arttı, fiyat yükseldi, getiri düştü.
:::

## Q
EN: When the government increases its borrowing, the bond supply curve shifts to the:
TR: Devlet borçlanmasını artırınca tahvil arz eğrisi hangi yöne kayar?
+ right, lowering bond prices and raising interest rates
- left, raising bond prices and lowering interest rates
- right, raising bond prices and lowering interest rates
- left, lowering bond prices and raising interest rates
HINT: Daha çok borçlanma = piyasada daha çok tahvil. Sonra fiyatı ve faizi ters yönde düşün.
EX: **Doğru cevap:** sağa; tahvil fiyatları düşer, faizler yükselir.
Devletin borçlanma ihtiyacı arttıkça dolaşımdaki tahvil miktarı artar: arz sağa kayar. Yeni dengede fiyat düşük, getiri yüksek.
**Diğer şıklar neden yanlış?**
• Sola kayma: borçlanma **azalırsa** olur.
• Sağa kayma ama fiyat ↑: arz artarsa fiyat düşer.
• Sola kayma ama fiyat ↓: arz azalırsa fiyat yükselir.

## Q
EN: An increase in wealth, all else equal, causes:
TR: Diğer her şey sabitken servetteki artış neye yol açar?
+ the bond demand curve to shift right, raising bond prices
- the bond demand curve to shift left, lowering bond prices
- the bond supply curve to shift right, lowering bond prices
- no change in the bond market
HINT: Zenginleşen insanlar tahvil dahil her varlıktan daha çok ister.
EX: **Doğru cevap:** talep eğrisi sağa kayar, tahvil fiyatları yükselir (faizler düşer).
**Diğer şıklar neden yanlış?**
• Talep sola: servet **azalırsa**.
• Arz sağa: servet talep tarafını etkiler.
• Değişiklik yok: servet talebin temel belirleyicisi.

## Q
EN: An increase in expected inflation:
TR: Beklenen enflasyondaki artış ne yapar?
+ shifts bond supply to the right and bond demand to the left, lowering bond prices and raising interest rates
- shifts bond supply to the left and bond demand to the right, raising bond prices
- shifts only bond demand to the right
- has no effect on bond prices
HINT: Borçlu için borçlanmanın reel maliyeti ne olur? Borç veren için reel getiri ne olur?
EX: **Doğru cevap:** arzı sağa, talebi sola kaydırır; fiyatlar düşer, faizler yükselir.
• Borçlu: reel borç maliyeti düşer, daha çok tahvil ihraç eder (arz sağa).
• Borç veren: reel getiri düşer, daha az tahvil ister (talep sola).
İki etki birbirini güçlendirir. Miktarın ne olacağı ise belirsiz.
**Diğer şıklar neden yanlış?**
• Ters kaymalar ya da tek kayma: enflasyon iki eğriyi de etkiler.

## Q
EN: During a recession, bond supply and bond demand both shift to the left. Interest rates tend to:
TR: Resesyonda tahvil arzı da talebi de sola kayar. Faizler ne olma eğilimindedir?
+ fall, because supply shifts more than demand, so bond prices rise
- rise, because demand shifts more than supply
- stay exactly the same
- become negative in every recession
HINT: Grafik tek başına belirsiz. Veriler resesyonda faizler için ne söylüyor?
EX: **Doğru cevap:** düşer; arz talepten daha çok kayar, tahvil fiyatları yükselir.
Yatırım fırsatları azalınca firmalar çok daha az borçlanır (arz büyük ölçüde sola). Servet düşüşü talebi daha az etkiler. Sonuç: fiyat ↑, faiz ↓.
**Diğer şıklar neden yanlış?**
• Faizler yükselir: veriler tersini gösterir.
• Aynı kalır, hep negatif olur: yanlış.

## Q
EN: If bonds become more liquid relative to other investments, the demand for bonds:
TR: Tahviller diğer yatırımlara göre daha likit hale gelirse tahvil talebi ne olur?
+ shifts right, raising bond prices
- shifts left, lowering bond prices
- does not change
- shifts right, lowering bond prices
HINT: Yatırımcılar likiditeyi sever mi?
EX: **Doğru cevap:** sağa kayar, tahvil fiyatları yükselir.
Yatırımcılar likiditeyi sever: tahvil kolay alınıp satılabiliyorsa daha cazip olur.
**Diğer şıklar neden yanlış?**
• Sola: daha az likit olursa.
• Değişmez: likidite talebin belirleyicilerinden.
• Sağa ama fiyat düşer: talep artarsa fiyat yükselir.

## Q
EN: If the price of bonds is above the equilibrium price:
TR: Tahvil fiyatı denge fiyatının üstündeyse ne olur?
+ quantity supplied exceeds quantity demanded, putting downward pressure on the price
- quantity demanded exceeds quantity supplied, putting upward pressure on the price
- the market is in equilibrium
- the interest rate is too high
HINT: Fiyat yüksekse kim daha istekli: satıcı mı, alıcı mı?
EX: **Doğru cevap:** arz edilen miktar talep edilenden fazladır (arz fazlası); fiyat aşağı baskılanır.
Satıcılar istedikleri kadar tahvil satamaz, fiyatı düşürür; arz = talep olana kadar sürer.
**Diğer şıklar neden yanlış?**
• Talep fazlası: fiyat dengenin **altındayken**.
• Dengede: tanım gereği değil.
• Faiz çok yüksek: fiyat yüksekse faiz **düşüktür**.

## Q
EN: When investors expect interest rates to fall in the future, the demand for bonds today:
TR: Yatırımcılar ileride faizlerin düşeceğini bekliyorsa bugünkü tahvil talebi ne olur?
+ increases, because bond prices are expected to rise
- decreases, because bond prices are expected to fall
- does not change
- becomes zero
HINT: Faiz düşerse elindeki tahvilin fiyatına ne olur?
EX: **Doğru cevap:** artar; tahvil fiyatlarının yükselmesi beklenir.
Faiz düşünce tahvil fiyatı yükselir, sermaye kazancı oluşur; tahvilin beklenen getirisi artar, talep sağa kayar.

## GEN bondShift

--- LESSON u6d | ⚠ | Tahviller neden risklidir?
FX: Temerrüt riski :: borçlu ödemeyebilir; fiyat ↓, getiri ↑
FX: $P = \text{beklenen ödeme}/(1+i^{rf})$ :: riske nötr fiyat
FX: Temerrüt risk primi = vaat edilen YTM − risksiz faiz :: kitapta %16.67 − %5 = %11.67
FX: Faiz = reel faiz + beklenen enflasyon + enflasyon riski telafisi :: enflasyon riski
FX: Faiz oranı riski :: elde tutma süresi vadeden kısaysa; vade uzadıkça artar

## CARD Temerrüt riski
Tahvil gelecekte belli bir ödeme sözü; nasıl riskli olabilir? Üç büyük risk: **temerrüt, enflasyon, faiz oranı**.
==Temerrüt riski (default risk)==: borçlunun ödememe ihtimali. ABD hazine tahvillerinde neredeyse yok; diğer devlet ve şirket tahvillerinde var.
:::ornek Kitap
1 yıllık risksiz faiz %5. Şirket %5 kuponlu, 100 dolar nominalli tahvil ihraç etmiş.
• Risksiz olsaydı: $P = (100 + 5)/1.05 = 100$.
• Ama %10 ihtimalle şirket batacak, getiri ya 105 ya 0. Beklenen değer: $0.9\times105 = 94.50$.
• Fiyat: $94.50/1.05 = 90$ dolar.
• Bu fiyatın ima ettiği **vaat edilen** getiri: $105/90 - 1 = 0.1667$.
• ==Temerrüt risk primi== = vaat edilen YTM − risksiz faiz $= 16.67 - 5 = 11.67$ puan.
:::
Yatırımcılar riskten kaçınıyorsa ek bir risk primi isterler: fiyat 90'ın altına düşer, YTM %16.67'nin üstüne çıkar. **Temerrüt riski ne kadar yüksekse getiri o kadar yüksek.**

## CARD Enflasyon riski
Tahviller (birkaç istisna dışında) sabit **dolar** ödemeleri vaat eder. Bizi ilgilendiren satın alma gücüdür; tahvil sahipleri **reel** faizi önemser.
Faizin üç bileşeni vardır:
$$\text{faiz} = \text{reel faiz} + \text{beklenen enflasyon} + \text{enflasyon riski telafisi}$$
:::ornek Kitap
Reel faiz %3. Enflasyon %1 ya da %3 olabilir: beklenen enflasyon %2, standart sapma 1 puan. Nominal faiz = %3 + %2 + enflasyon riski telafisi. Enflasyon riski ne kadar büyükse telafi o kadar büyük.
:::
:::ipucu Enflasyona endeksli tahviller
Devlet sabit bir faiz **artı TÜFE'deki değişimi** ödemeyi taahhüt eder. ABD Hazinesi'nin iki türü: Series I tasarruf bonoları ve ==TIPS (Treasury Inflation Protected Securities)==. Enflasyon riskini yatırımcıdan alır.
:::

## CARD Faiz oranı riski ve menkul kıymetleştirme
==Faiz oranı riski (interest-rate risk)==: yatırımcının uzun vadeli tahvilin elde tutma getirisini bilmemesinden doğar.
• Vade uzadıkça, aynı faiz değişimi için fiyat değişimi büyür.
• Elde tutma süresi tahvilin vadesinden **kısa** olan yatırımcı için faiz değişimi risk yaratır.
• Yatırım ufku içinde faizlerin değişme ihtimali ne kadar yüksekse risk o kadar büyük.
:::dikkat Kim faiz riskine maruz değil?
Vadesi yatırım ufkuyla aynı olan tahvili alıp vadeye kadar tutan yatırımcı (temerrüt yoksa) YTM'yi kesin alır. 1 yıllık ufku olan biri için 1 yıllık bononun faiz riski yoktur ama 10 yıllık tahvilin vardır.
:::
==Menkul kıymetleştirme (securitization)==: finansal kurumların ödeme akışı yaratan çeşitli varlıkları (konut kredileri gibi) havuzlayıp, bu ödemeler üzerinde hak veren bir tahvile dönüştürmesi. Son 35 yılda büyüdü; en büyük pay (%90) ipoteğe dayalı menkul kıymetler. Piyasaların verimliliğiyle borçlanma maliyetini düşürür: riskleri çeşitlendirir, varlıkları likit yapar, uzmanlaşmayı ve piyasaları genişletir, yeniliği teşvik eder.

## Q
EN: The one-year risk-free rate is 5%. A firm's one-year bond promises 105 dollars, but there is a 10% chance it pays nothing. What price would a risk-neutral investor pay?
TR: 1 yıllık risksiz faiz %5. Şirketin 1 yıllık tahvili 105 dolar vaat ediyor ama %10 ihtimalle hiç ödemiyor. Riske nötr yatırımcı kaç öder?
+ 90
- 100
- 94.50
- 95.24
HINT: Önce beklenen ödeme, sonra risksiz faizle iskonto.
EX: **Doğru cevap: 90 dolar.**
**Adım 1:** Beklenen ödeme $0.9\times105 + 0.1\times0 = 94.50$.
**Adım 2:** $94.50/1.05 = 90$.
**Diğer şıklar ne?**
• 100: temerrüt riski olmasaydı ($105/1.05$).
• 94.50: beklenen ödeme, iskontolanmamış.
• 95.24: 100'ün bugünkü değeri; alakasız.

## Q
EN: In the previous example, the bond sells for 90 dollars and promises 105. With a 5% risk-free rate, the default risk premium is:
TR: Önceki örnekte tahvil 90 dolar, vaat edilen ödeme 105. Risksiz faiz %5 iken temerrüt risk primi kaçtır?
+ 11.67 percentage points
- 16.67 percentage points
- 10 percentage points
- 5 percentage points
HINT: Önce vaat edilen getiri: $105/90 - 1$. Sonra risksiz faizi çıkar.
EX: **Doğru cevap: 11.67 puan.**
Vaat edilen YTM: $105/90 - 1 = 16.67\%$. Risk primi: $16.67 - 5 = 11.67$ puan.
**Diğer şıklar ne?**
• 16.67: vaat edilen getirinin kendisi.
• 10: temerrüt olasılığı.
• 5: risksiz faiz.

## Q
EN: Holding everything else constant, an increase in a bond's default risk will:
TR: Diğer her şey sabitken tahvilin temerrüt riskindeki artış ne yapar?
+ lower its price and raise its yield
- raise its price and lower its yield
- raise both its price and its yield
- have no effect on its price
HINT: Yatırımcılar riskli tahvile daha az öder. Fiyat düşerse getiri?
EX: **Doğru cevap:** fiyatı düşürür, getiriyi yükseltir.
Temerrüt riski ne kadar yüksekse yatırımcı o kadar fazla telafi ister: fiyat düşer, YTM yükselir.
**Diğer şıklar neden yanlış?**
• Fiyat ↑: tersi.
• İkisi birlikte ↑: sabit ödemeli tahvilde fiyat ve getiri ters hareket eder.
• Etkisi yok: temerrüt riski fiyatın temel belirleyicisi.

## Q
EN: According to the textbook, the nominal interest rate on a bond can be thought of as the sum of:
TR: Kitaba göre bir tahvilin nominal faizi hangi bileşenlerin toplamı olarak düşünülebilir?
+ the real interest rate, expected inflation and compensation for inflation risk
- the coupon rate, the current yield and the yield to maturity
- the default risk premium and the tax rate
- the price of the bond and its face value
HINT: Fisher denklemine bir de belirsizlik için telafi ekle.
EX: **Doğru cevap:** reel faiz + beklenen enflasyon + enflasyon riski telafisi.
Örnek: %3 reel + %2 beklenen enflasyon + enflasyon riski telafisi. Enflasyon belirsizliği büyüdükçe telafi büyür.

## Q
EN: Interest-rate risk is larger for:
TR: Faiz oranı riski hangi durumda daha büyüktür?
+ bonds with a longer time to maturity, held by investors with shorter holding periods
- bonds held exactly to maturity with no default risk
- one-year bonds held by investors with a one-year horizon
- cash held in a wallet
HINT: Vade uzadıkça aynı faiz değişimi fiyatı ne kadar oynatır? Vadeden önce satmak zorunda mısın?
EX: **Doğru cevap:** vadesi uzun olan ve vadesinden kısa süre elde tutulan tahviller.
Vade uzadıkça aynı faiz değişimi fiyatı daha çok değiştirir; vadeden önce satacak yatırımcı bu fiyat değişimine maruz kalır.
**Diğer şıklar neden yanlış?**
• Vadeye kadar tutulan temerrütsüz tahvil, 1 yıllık ufka 1 yıllık bono: getiri kesin, faiz riski yok.
• Cüzdandaki nakit: faiz riski yok (enflasyon riski var).

## Q
EN: Treasury Inflation Protected Securities (TIPS) are designed to protect investors from:
TR: TIPS (enflasyona karşı korumalı hazine tahvilleri) yatırımcıyı neye karşı korur?
+ inflation risk
- default risk of corporations
- all interest-rate changes
- exchange-rate risk
HINT: Devlet sabit faiz artı TÜFE'deki değişimi ödüyor.
EX: **Doğru cevap:** enflasyon riski.
Ödeme TÜFE ile birlikte arttığı için satın alma gücü korunur; TIPS getirisi bir **reel** getiridir.
**Diğer şıklar neden yanlış?**
• Şirket temerrüdü: TIPS'i ABD Hazinesi çıkarır.
• Bütün faiz değişimleri: reel faiz değişirse TIPS fiyatı da değişir.
• Kur riski: alakasız.

## Q
EN: In 1998, after Russia defaulted, investors lost confidence in emerging markets. What happened to U.S. Treasuries?
TR: 1998'de Rusya temerrüde düşünce yatırımcılar gelişmekte olan piyasalara güvenini kaybetti. ABD hazine tahvillerine ne oldu?
+ Demand increased, prices rose and yields fell.
- Demand fell, prices fell and yields rose.
- Supply increased sharply and yields rose.
- Nothing, because Treasuries are unaffected by risk.
HINT: Yatırımcılar riskli varlıklardan kaçınca en güvenli varlık hangisi?
EX: **Doğru cevap:** talep arttı, fiyatlar yükseldi, getiriler düştü.
Hazine tahvilleri göreli olarak daha güvenli hale geldi; talep sağa kaydı. Buna güvenli limana kaçış denir (Bölüm 7).

## Q
EN: Securitization lowers the cost of borrowing by doing all of the following EXCEPT:
TR: Menkul kıymetleştirme aşağıdakilerin hepsini yaparak borçlanma maliyetini düşürür, BİRİ HARİÇ:
+ guaranteeing that the underlying borrowers never default
- facilitating diversification of risks
- making assets liquid
- broadening markets
HINT: Havuzlamak riski dağıtır. Ortadan kaldırır mı?
EX: **Doğru cevap:** alttaki borçluların hiç temerrüde düşmeyeceğini garanti etmek.
Menkul kıymetleştirme riski çeşitlendirir ama yok etmez; subprime ipoteğe dayalı kâğıtlar 2007–2009'da bunu gösterdi.
**Diğer şıklar neden yanlış?**
• Çeşitlendirme, likidite, piyasaları genişletme: kitabın saydığı faydalar (bir de uzmanlaşma ve yenilik).

## GEN defaultBond
## GEN inflRisk
`);
