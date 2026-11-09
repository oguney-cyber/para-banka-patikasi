CONTENT.push(String.raw`
=== UNIT u5 | Bölüm 5 | Riski Anlamak | Beklenen değer, varyans, VaR, kaldıraç, risk primi, çeşitlendirme

--- LESSON u5a | E | Risk ve beklenen değer
FX: Risk :: belirli bir sürede, bir ölçüte göre, gelecekteki getirinin belirsizliği
FX: Olasılık :: 0 ile 1 arası; bütün olasılıkların toplamı 1
FX: $E = \sum p_k\,x_k$ :: beklenen değer: olasılıkla ağırlıklı ortalama
FX: Beklenen getiri $= (E - \text{yatırım})/\text{yatırım}$ :: yüzde olarak

## CARD Risk nedir?
Sözlükte risk "kayıp ya da zarar ihtimali". Finansta tanım farklı:
==Risk==: bir yatırımın gelecekteki getirisine (payoff) dair **belirsizliğin** ölçüsü; **belirli bir zaman ufkunda** ve **bir ölçüte (benchmark) göre** değerlendirilir.
Tanımın parçaları:
• Risk **ölçülebilir** bir şeydir. Yatırım ne kadar riskliyse o kadar az cazip, fiyatı o kadar düşük.
• Risk **gelecek** hakkındaki belirsizlikten doğar; olası sonuçların hangisinin gerçekleşeceğini bilmeyiz.
• Risk yatırımın **getirisiyle** ilgilidir; bütün olası getirileri ve her birinin olasılığını düşünmeliyiz.
• Risk bir **zaman ufku** üzerinden değerlendirilir; genelde kısa sürede risk daha düşüktür.
• Risk tek başına değil, bir **ölçüte göre** ölçülür. İyi bir ölçüt: deneyimli yatırım danışmanlarının ya da fon yöneticilerinin performansı.

## CARD Olasılık ve beklenen değer
Belirsizliği düşünmek için: **bütün olası sonuçları listele**, **her birinin olasılığını bul**. ==Olasılık (probability)== bir olayın gerçekleşme ihtimalinin ölçüsüdür, her zaman 0 ile 1 arasındadır; olasılıklar sütunu doğru kurulmuşsa toplamı 1'dir.
==Getiri (payoff)==: yatırımdan geri alabileceğin tutar. ==Beklenen değer (expected value)==: olası getirilerin olasılıklarla ağırlıklı ortalaması.
$$E = \sum_k p_k\times\text{getiri}_k$$
:::ornek Durum 1 (kitap)
1000 dolarlık hisse ya 1400'e çıkar ya 700'e düşer, olasılıklar ½:
$E = \tfrac12(1400) + \tfrac12(700) = 1050$
:::
:::ornek Durum 2 (kitap)
| Olasılık | Getiri | Olasılık × getiri |
| 0.1 | 2000 | 200 |
| 0.4 | 1400 | 560 |
| 0.4 | 700 | 280 |
| 0.1 | 100 | 10 |
| **Toplam** | | **1050** |
:::
İkisinde de beklenen getiri 1000 dolarda 50 dolar, yani **%5**. Yüzde, farklı büyüklükteki yatırımları karşılaştırmayı sağlar. Ama iki yatırım aynı mı? **Hayır**: ikincinin sonuçları çok daha geniş bir aralığa yayılıyor. **Değişkenlik = risk.**
@fig prob
:::ipucu Emeklilik için yeterli biriktiriyor musun?
1000 dolar 40 yıl %6 ile 160.000 dolardan fazla olur; %3 ile 80.000'den az. %6 beklenen getiri için risk almak gerekir ve getiri %3 çıkarsa fark çok büyük.
:::

## Q
EN: In economics and finance, risk is best defined as:
TR: İktisat ve finansta risk en iyi nasıl tanımlanır?
+ a measure of uncertainty about the future payoff of an investment, over some time horizon and relative to a benchmark
- the possibility of loss or injury
- the certainty that an investment will lose money
- the interest rate on a risk-free bond
HINT: Sözlük tanımı başka, finans tanımı başka. Finans tanımında üç parça var: belirsizlik, zaman ufku, ölçüt.
EX: **Doğru cevap:** belirli bir zaman ufkunda ve bir ölçüte göre, yatırımın gelecekteki getirisine dair belirsizliğin ölçüsü.
**Diğer şıklar neden yanlış?**
• "Possibility of loss or injury": sözlük tanımı; finans için yetersiz.
• Kesin kayıp: belirsizlik yok, risk değil.
• Risksiz faiz: riskin karşıtı.

## Q
EN: A 1,000-dollar investment can rise to 2,000 (probability 0.1), rise to 1,400 (0.4), fall to 700 (0.4) or fall to 100 (0.1). What is its expected value?
TR: 1000 dolarlık yatırım 0.1 olasılıkla 2000, 0.4 ile 1400, 0.4 ile 700, 0.1 ile 100 oluyor. Beklenen değer kaçtır?
+ 1,050
- 4,200
- 1,400
- 1,000
HINT: Her getiriyi olasılığıyla çarp ve topla: $0.1\times2000 + 0.4\times1400 + \dots$
EX: **Doğru cevap: 1050.**
$0.1(2000) + 0.4(1400) + 0.4(700) + 0.1(100) = 200 + 560 + 280 + 10 = 1050$.
Beklenen getiri: $(1050 - 1000)/1000 = \%5$.
**Diğer şıklar neden yanlış?**
• 4200: getirilerin toplamı; olasılıklarla çarpılmamış.
• 1400: en olası iki sonuçtan biri, beklenen değer değil.
• 1000: yatırılan tutar.

## Q
EN: Two investments both have an expected return of 5%, but the second has a much wider range of possible payoffs. Compared with the first, the second investment:
TR: İki yatırımın beklenen getirisi %5, ama ikincinin olası getirileri çok daha geniş bir aralığa yayılıyor. İkinci yatırım için ne söylenir?
+ is riskier
- is less risky
- has the same risk because the expected returns are equal
- must have a higher expected return
HINT: Kitap: "Variability equals risk."
EX: **Doğru cevap:** daha risklidir.
Beklenen getiri aynı olsa da sonuçların yayılımı daha geniş; yayılım (değişkenlik) risktir.
**Diğer şıklar neden yanlış?**
• Daha az riskli: tersi.
• Beklenen getiri eşitse risk eşit: beklenen değer riski ölçmez.
• Daha yüksek beklenen getiri olmalı: soruda ikisi de %5 verilmiş.

## Q
EN: In a correctly constructed table of possible outcomes, the probabilities must:
TR: Doğru kurulmuş bir olası sonuçlar tablosunda olasılıklar ne yapmalıdır?
+ sum to one
- sum to zero
- all be equal
- be larger than the payoffs
HINT: Bütün olası sonuçlar listelendiyse, "bir şey olma" olasılığı kaçtır?
EX: **Doğru cevap:** toplamı 1 olmalı.
Bütün olası sonuçları listeledik; bunlardan biri kesin gerçekleşecek. Her olasılık da 0 ile 1 arasında olmalı.
**Diğer şıklar neden yanlış?**
• Toplam 0, hepsi eşit, getiriden büyük: tanımla çelişir.

## Q
EN: Why do we compute returns as percentages of the initial investment?
TR: Getiriyi neden başlangıç yatırımının yüzdesi olarak hesaplarız?
+ It allows comparison of returns regardless of the size of the initial investment.
- Percentages remove all risk.
- Percentages are required by law.
- It makes the expected value equal to the payoff.
HINT: 1000 dolarlık ve 1 milyon dolarlık iki yatırımı nasıl karşılaştırırsın?
EX: **Doğru cevap:** başlangıç yatırımının büyüklüğünden bağımsız karşılaştırma sağlar.
1000 dolarda 50 dolar kazanmak ile 1 milyonda 50 dolar kazanmak çok farklıdır: ilki %5, ikincisi %0.005.

## Q
EN: An investment has a payoff of 1,200 with probability 0.25 and 900 with probability 0.75. What is its expected value?
TR: Yatırım 0.25 olasılıkla 1200, 0.75 olasılıkla 900 ödüyor. Beklenen değer kaçtır?
+ 975
- 1,050
- 900
- 2,100
HINT: $0.25\times1200 + 0.75\times900$.
EX: **Doğru cevap: 975.**
$0.25(1200) + 0.75(900) = 300 + 675 = 975$.
**Diğer şıklar neden yanlış?**
• 1050: iki getirinin düz ortalaması; olasılıklar eşit değil.
• 900: en olası sonuç, beklenen değer değil.
• 2100: getirilerin toplamı.

## GEN expVal

--- LESSON u5b | σ | Varyans, standart sapma, VaR, kaldıraç
FX: $\sigma^2 = \sum p_k(x_k - E)^2$ :: varyans: karesel birimde
FX: $\sigma = \sqrt{\sigma^2}$ :: standart sapma: normal birimde, daha kullanışlı
FX: Riske maruz değer (VaR) :: belirli sürede, belirli olasılıkta en kötü kayıp
FX: Kaldıraç oranı = yatırım maliyeti / sahibin katkısı :: beklenen getiri ve sd bu oranla çarpılır

## CARD Varyans ve standart sapma
Sonuçların aralığı genişledikçe risk artar. ==Risksiz varlık (risk-free asset)==: gelecekteki değeri kesin bilinen yatırım; getirisi ==risksiz getiri oranı==. Riski ölçmek için yayılımı ölçeriz.
==Varyans (variance)==: olası sonuçların beklenen değerden sapmalarının karelerinin, olasılıklarla ağırlıklı ortalaması.
• Beklenen değeri hesapla.
• Her getiriden beklenen değeri çıkar, karesini al.
• Her sonucu olasılığıyla çarp.
• Topla.
:::ornek Durum 1
$E = 1050$. Sapmalar: $1400 - 1050 = 350$ ve $700 - 1050 = -350$; kareleri $122{,}500$ (dolar²).
$\sigma^2 = \tfrac12(122{,}500) + \tfrac12(122{,}500) = 122{,}500$
$\sigma = \sqrt{122{,}500} = 350$ dolar
:::
==Standart sapma (standard deviation)==: varyansın pozitif karekökü. **Daha kullanışlıdır** çünkü dolar² gibi karesel birimde değil, normal birimde (dolar) ölçülür; başlangıç yatırımının yüzdesine çevrilip başka yatırımlarla karşılaştırılabilir (350/1000 = %35).
Beklenen getirisi eşit iki yatırımdan çoğu kişi **standart sapması düşük** olanı seçer. Standart sapma büyüdükçe risk artar. Durum 2'nin sd'si $\sqrt{278{,}500} = 527.73$: daha yayılmış, daha riskli.

## CARD Riske maruz değer (VaR)
Bazen yayılımdan çok **en kötü sonuç** önemlidir; örneğin bir bankanın batmasını istemeyiz.
==Riske maruz değer (value at risk, VaR)==: belirli bir zaman ufkunda, belirli bir olasılıkta karşılaşılabilecek **en kötü kayıp**.
:::ornek Sabit mi, değişken faizli mi konut kredisi?
Konut kredisinde en kötü senaryo, taksiti ödeyemeyip evini kaybetmendir. Beklenen değer ve standart sapma bu riski tam anlatmaz; VaR şu soruyu cevaplar: "En kötü senaryo gerçekleşirse ne kadar kaybederim?" Bazen en önemli soru budur.
:::

## CARD Kaldıraç riski büyütür
==Kaldıraç (leverage)==: bir yatırımın bir kısmını borçla finanse etmek. Beklenen getiriyi artırır ama **standart sapmayı da artırır**; fiyat değişimlerinin etkisini büyütür.
$$\text{Kaldıraç oranı} = \frac{\text{yatırımın maliyeti}}{\text{sahibin satın almaya katkısı}}$$
Borçla bir varlık alırsan (faizi ihmal edince) hem beklenen getiri hem standart sapma **kaldıraç oranıyla çarpılır**. Kaldıraç en kötü sonucu da ağırlaştırır.
**Kitaptaki tablo: kaldıraç oranı 2**
| | Kaldıraçsız | Kaldıraç 2 |
| Kendi paran | 1000 | 1000 |
| + Borç | 0 | 1000 |
| = Toplam yatırım | 1000 | 2000 |
| Olası getiriler | 1400 ya da 700 | 2800 ya da 1400 |
| Borç ödendikten sonra | 1400 ya da 700 | 1800 ya da 400 |
| Beklenen değer (net) | 1050 (%5) | 1100 (%10) |
| Standart sapma | 350 (%35) | 700 (%70) |
Beklenen getiri de standart sapma da ikiye katlandı. Kötü durumda kaldıraçsız yatırımcı 300 dolar (%30) kaybeder, kaldıraçlı yatırımcı 600 dolar (%60).
:::dikkat Sistemik risk
==Sistemik risk==: tek bir hane, firma ya da piyasaya değil, **sistemin bütününe** yönelik tehdit. Ortak bir riske maruz kalmak birçok aracıyı aynı anda tehdit edebilir; sistemin, olmadan çalışamayacağı kritik parçaları olabilir; likidite akışının önündeki engeller sistem için felaket olabilir.
:::

## Q
EN: An investment of 1,000 dollars pays either 1,400 or 700 with equal probability. What is the standard deviation of the payoff?
TR: 1000 dolarlık yatırım eşit olasılıkla 1400 ya da 700 ödüyor. Getirinin standart sapması kaçtır?
+ 350
- 122,500
- 1,050
- 700
HINT: Önce beklenen değer (1050). Sapmalar ±350. Varyans, sonra karekök.
EX: **Doğru cevap: 350 dolar.**
**Adım 1:** $E = 0.5(1400) + 0.5(700) = 1050$.
**Adım 2:** Sapmalar 350 ve −350; kareleri 122.500.
**Adım 3:** $\sigma^2 = 0.5(122{,}500) + 0.5(122{,}500) = 122{,}500$.
**Adım 4:** $\sigma = \sqrt{122{,}500} = 350$.
**Diğer şıklar ne?**
• 122.500: varyans (dolar²), standart sapma değil.
• 1050: beklenen değer.
• 700: en yüksek ile en düşük getiri arasındaki fark.

## Q
EN: Why is the standard deviation often more useful than the variance as a measure of risk?
TR: Risk ölçüsü olarak standart sapma neden çoğu zaman varyanstan daha kullanışlıdır?
+ It is measured in the same units as the payoffs (e.g., dollars), not squared units.
- It is always larger than the variance.
- It does not depend on probabilities.
- It measures the expected value.
HINT: Varyansın birimi dolar², standart sapmanınki?
EX: **Doğru cevap:** getirilerle aynı birimde (dolar) ölçülür, karesel birimde değil.
Bu sayede başlangıç yatırımının yüzdesine çevrilip başka yatırımlarla karşılaştırılabilir.
**Diğer şıklar neden yanlış?**
• Hep varyanstan büyük: varyans 1'den büyükse sd daha küçüktür.
• Olasılıklara bağlı değil: bağlı.
• Beklenen değeri ölçer: hayır, yayılımı ölçer.

## Q
EN: Value at risk (VaR) measures:
TR: Riske maruz değer (VaR) neyi ölçer?
+ the worst possible loss over a specific horizon at a given probability
- the average payoff of an investment
- the spread of payoffs around their mean
- the interest rate on a risk-free asset
HINT: Kitaptaki banka ve konut kredisi örneklerini düşün: neyin olmasını istemiyoruz?
EX: **Doğru cevap:** belirli bir zaman ufkunda, belirli bir olasılıkta en kötü olası kayıp.
**Diğer şıklar ne?**
• Ortalama getiri: beklenen değer.
• Ortalama etrafındaki yayılım: standart sapma.
• Risksiz faiz: alakasız.

## Q
EN: You buy a 1,000-dollar asset with 250 dollars of your own money and borrow the rest. Your leverage ratio is:
TR: 1000 dolarlık varlığı 250 dolar kendi paranla, kalanı borçla alıyorsun. Kaldıraç oranın kaçtır?
+ 4
- 0.25
- 3
- 1.33
HINT: Yatırımın maliyeti ÷ kendi katkın.
EX: **Doğru cevap: 4.**
$1000/250 = 4$.
**Diğer şıklar ne?**
• 0.25: oranı ters almak (katkı ÷ maliyet).
• 3: borç ÷ kendi para (750/250).
• 1.33: maliyet ÷ borç.

## Q
EN: Leverage affects the expected return and the standard deviation of the return on the owner's investment by:
TR: Kaldıraç, sahibin yatırımının beklenen getirisini ve standart sapmasını nasıl etkiler?
+ multiplying both by the leverage ratio
- increasing the expected return but lowering the standard deviation
- lowering both
- leaving both unchanged
HINT: Kitap: "increase both the expected return and the standard deviation by a leverage ratio".
EX: **Doğru cevap:** ikisini de kaldıraç oranıyla çarpar.
Kaldıraç fiyat değişimlerinin etkisini büyütür: hem kazanç hem kayıp büyür. En kötü sonuç da ağırlaşır.
**Diğer şıklar neden yanlış?**
• Getiri artar, risk azalır: bedava öğle yemeği yok.
• İkisini düşürür, değiştirmez: yanlış.

## Q
EN: Systemic risk refers to:
TR: Sistemik risk neyi ifade eder?
+ threats to the financial system as a whole rather than to a single household, firm or market
- the risk that a single firm's CEO resigns
- risk that can always be eliminated by diversification
- the risk of holding cash
HINT: "Systemic" = sistemin bütünü.
EX: **Doğru cevap:** tek bir hane, firma ya da piyasa yerine finansal sistemin bütününe yönelik tehditler.
Ortak bir riske maruz kalmak birçok aracıyı aynı anda tehdit edebilir; likidite akışının tıkanması sistem için felaket olabilir.
**Diğer şıklar neden yanlış?**
• CEO istifası: firmaya özgü (idiosyncratic) risk.
• Çeşitlendirmeyle yok edilir: sistemik risk böyle değildir.
• Nakit tutma riski: alakasız.

## GEN varSd
## GEN leverage

--- LESSON u5c | ⚖ | Riskten kaçınma, risk primi, risk türleri
FX: Riskten kaçınan yatırımcı :: aynı beklenen getiride kesin olanı seçer
FX: Risk primi :: riskli varlığı tutmak için istenen ek getiri; risk ↑ ⇒ prim ↑
FX: Firmaya özgü (idiosyncratic) risk :: az sayıda kişiyi etkiler; çeşitlendirmeyle azalır
FX: Sistematik risk :: herkesi, bütün ekonomiyi etkiler

## CARD Riskten kaçınma ve risk primi
Çoğu insan riski sevmez ve ondan kaçınmak için para öder: çoğumuz ==riskten kaçınan (risk averse)== kişileriz. Sigorta bunun en iyi örneği.
**Riskten kaçınan yatırımcı**, aynı beklenen getirili iki yatırımdan **kesin** getirisi olanı, belirsiz olanına **her zaman** tercih eder.
Bu yüzden yatırım ne kadar riskliyse ==risk primi (risk premium)== o kadar yüksektir: riskli varlığı tutması için yatırımcının istediği karşılık.
$$\text{Risk primi} = \text{riskli varlığın beklenen getirisi} - \text{risksiz getiri}$$
@fig riskret
**Risk–getiri ödünleşimi (risk-return tradeoff):** daha yüksek beklenen getiri ancak daha yüksek risk alarak elde edilir.
:::ipucu Ne kadar risk almalısın?
Kendine sor: yatırımından bir ay sonra değer %20 düşerse ne yaparsın? "Ne kadarını kaybetmeyi göze alabilirim?" Zaman ufkun uzunsa (ve servetin büyükse) daha fazla risk taşıyabilirsin.
:::

## CARD Riskin kaynakları
Bütün riskler iki gruba ayrılır:
| Tür | İngilizce | Kimi etkiler? | Çeşitlendirmeyle? |
| Firmaya/sektöre özgü | ==idiosyncratic (unique) risk== | az sayıda kişi/firma | **azaltılabilir** |
| Sistematik | ==systematic (economy-wide) risk== | herkesi, bütün ekonomiyi | azaltılamaz |
@fig idio
Firmaya özgü riskin iki türü:
• Bir sektör için kötü, öbürü için iyi olan risk: petrol fiyatı artışı otomobil sektörüne kötü, enerji sektörüne iyi.
• Sadece bir kişiye ya da şirkete özgü risk: bir fabrikada yangın, yöneticinin istifası.
**Sistematik risk** örnekleri: genel resesyon, ekonomi genelindeki faiz değişimleri; her şirketi aynı yönde etkiler.

## Q
EN: A risk-averse investor will always prefer:
TR: Riskten kaçınan bir yatırımcı her zaman neyi tercih eder?
+ an investment with a certain return to one with the same expected return but any amount of uncertainty
- the investment with the highest possible payoff, whatever the risk
- the investment with the widest range of payoffs
- to hold no assets at all
HINT: İki yatırım aynı ortalama getiriyi veriyor; biri kesin, biri belirsiz.
EX: **Doğru cevap:** aynı beklenen getiride kesin getiriyi, belirsiz olana.
Riskten kaçınan kişi riski ancak karşılığında prim alırsa üstlenir.
**Diğer şıklar neden yanlış?**
• En yüksek olası getiri: risk sever (risk loving) davranışı.
• En geniş aralık: daha riskli, tercih edilmez.
• Hiç varlık tutmamak: riskten kaçınma risk almamak değil, karşılık istemektir.

## Q
EN: The risk premium is:
TR: Risk primi nedir?
+ the compensation investors require to hold a risky asset, measured as its expected return minus the risk-free return
- the price of an insurance policy on a bank deposit
- the return on a risk-free asset
- the standard deviation of a risky asset
HINT: Riskli varlığın getirisinden, risksiz varlığın getirisini çıkar.
EX: **Doğru cevap:** yatırımcının riskli varlığı tutmak için istediği karşılık: beklenen getiri − risksiz getiri.
Yatırım ne kadar riskliyse prim o kadar büyüktür.
**Diğer şıklar ne?**
• Mevduat sigortası primi: başka bir "prim".
• Risksiz getiri: primin hesaplandığı taban.
• Standart sapma: riskin ölçüsü, primin kendisi değil.

## Q
EN: A sharp rise in oil prices hurts car manufacturers but helps oil companies. This is an example of:
TR: Petrol fiyatlarındaki ani artış otomobil üreticilerine zarar verip petrol şirketlerine yarıyor. Bu neye örnektir?
+ idiosyncratic risk
- systematic risk
- inflation risk
- value at risk
HINT: Herkes aynı yönde mi etkileniyor, yoksa bir sektör kaybedip diğeri kazanıyor mu?
EX: **Doğru cevap: idiosyncratic risk (firmaya/sektöre özgü risk).**
Kitap firmaya özgü riskin bir türünü böyle tanımlar: bir sektör için kötü, bir diğeri için iyi. Bu yüzden iki sektörü birlikte tutarak azaltılabilir (hedging).
**Diğer şıklar neden yanlış?**
• Sistematik: herkesi aynı yönde etkiler.
• Enflasyon riski, VaR: alakasız.

## Q
EN: Which of the following is an example of systematic risk?
TR: Aşağıdakilerden hangisi sistematik riske örnektir?
+ A general recession that lowers the profits of almost all firms
- A fire at one company's factory
- The resignation of a firm's CEO
- A lawsuit against a single firm
HINT: Hangisi ekonomideki herkesi etkiliyor?
EX: **Doğru cevap:** neredeyse bütün firmaların kârını düşüren genel resesyon.
Sistematik risk ekonominin tamamını etkiler; çeşitlendirmeyle yok edilemez.
**Diğer şıklar neden yanlış?**
• Fabrika yangını, CEO istifası, dava: tek bir firmaya özgü riskler.

## Q
EN: The riskier an investment, the:
TR: Yatırım ne kadar riskliyse:
+ higher the risk premium investors require
- lower the risk premium investors require
- lower the expected return investors require
- more people want to buy it at any price
HINT: 2. temel ilke: risk karşılık ister.
EX: **Doğru cevap:** yatırımcıların istediği risk primi o kadar yüksek olur.
Riskten kaçınan yatırımcı daha fazla risk için daha fazla karşılık ister: risk–getiri ödünleşimi.
**Diğer şıklar neden yanlış?**
• Daha düşük prim ya da getiri: tersi.
• Herkes her fiyata ister: riskli varlık ancak düşük fiyata (yüksek getiriye) cazip olur.

## Q
EN: According to the textbook, an investor can tolerate more risk if:
TR: Kitaba göre bir yatırımcı ne zaman daha fazla risk taşıyabilir?
+ his or her time horizon is longer and he or she is wealthier
- he or she needs the money next month
- he or she has no savings
- he or she cannot afford any loss
HINT: Değer %20 düşerse beklemeye vaktin ve parası olan kim?
EX: **Doğru cevap:** zaman ufku daha uzunsa ve daha varlıklıysa.
Uzun ufuklu yatırımcı kötü dönemin geçmesini bekleyebilir; varlıklı yatırımcı kaybı daha kolay karşılar.

## GEN riskPrem

--- LESSON u5d | ∑ | Çeşitlendirme: hedging ve riski yayma
FX: Çeşitlendirme :: birden fazla riski aynı anda tutmak; firmaya özgü riski azaltır
FX: Hedging :: zıt yönlü iki yatırım; risk tamamen yok olabilir
FX: Riski yayma :: birbiriyle ilişkisiz yatırımlar; sd düşer
FX: $n$ bağımsız eşit risk: sd $= \sigma/\sqrt n$ :: n büyüdükçe sd sıfıra yaklaşır (sigortanın temeli)

## CARD Hedging
Bazı insanlar o kadar çok risk alır ki tek bir büyük kayıp onları siler; işlemciler buna "==blowing up==" der. Risk ==çeşitlendirmeyle (diversification)== azaltılabilir: aynı anda birden fazla risk tutmak. Bu, yatırımcının taşıdığı **firmaya özgü** riski azaltır. İki yol var: hedging ve riski yayma.
==Hedging==: **zıt yönlü** riskleri olan iki yatırım yaparak firmaya özgü riski azaltma stratejisi.
:::ornek 100 doları yatırmanın üç yolu
Petrol fiyatı artarsa sanayi şirketi (3M gibi) kaybeder, petrol şirketi (Texaco gibi) kazanır; düşerse tersi. Getiriler (olasılıklar ½):
| | Petrol artar | Petrol düşer | Beklenen | sd |
| 100 sanayiye | 100 | 120 | 110 | 10 |
| 100 petrole | 120 | 100 | 110 | 10 |
| 50 + 50 | 110 | 110 | 110 | **0** |
Yarı yarıya yatırınca getiri her durumda 110: **hedging riski tamamen yok etti**, beklenen getiri değişmedi.
:::

## CARD Riski yaymak
Her zaman hedge yapamayız; yatırımlar her zaman öngörülebilir biçimde zıt hareket etmez. Alternatif: getirileri **birbiriyle ilişkisiz** yatırımlar bulup riski yaymak.
:::ornek Kitaptaki örnek (Tablo 5.7): 100 doları yatırmanın üç yolu
3M ve Microsoft birbirinden bağımsız. 100 dolarlık yatırım her birinde ½ olasılıkla 120 ya da 100 eder.
| Strateji | Olası getiriler | Beklenen | sd |
| 100 3M'ye | 120 (½), 100 (½) | 110 | 10 |
| 100 Microsoft'a | 120 (½), 100 (½) | 110 | 10 |
| 50 + 50 | 120 (¼), 110 (½), 100 (¼) | 110 | **7.07** |
Yarı yarıya yatırınca "biri iyi biri kötü" durumu (110) ortaya çıkar, uçlar seyrekleşir; sd $10/\sqrt 2 = 7.07$'ye düşer. (Slayttaki yazıda 1000 dolar ve GE geçiyor, tablo 3M ile 100 dolar kullanıyor; mantık aynı.)
:::
@fig spreadbars
• Portföydeki **bağımsız** risk kaynağı arttıkça toplam risk düşer. Çok sayıda bağımsız risk eklenince standart sapma ihmal edilebilir hale gelir: $\sigma/\sqrt n$.
• Riski yayarak çeşitlendirme **sigortacılığın temelidir**.
:::dikkat
Çeşitlendirme firmaya özgü riski azaltır; **sistematik riski** yok edemez. Bütün hisseler aynı resesyondan etkilenir.
:::

## Q
EN: Hedging reduces risk by:
TR: Hedging riski nasıl azaltır?
+ making two investments with opposing risks
- putting all your money in the investment with the highest expected return
- borrowing to increase the size of an investment
- buying only government bonds
HINT: Petrol artınca biri kazanıyor, öbürü kaybediyor.
EX: **Doğru cevap:** zıt yönlü riskleri olan iki yatırım yaparak.
Biri kaybettiğinde öbürü kazanır; getiriler dengelenir. Kitaptaki örnekte risk tamamen yok oldu.
**Diğer şıklar neden yanlış?**
• Hepsini en yüksek getiriliye koymak: çeşitlendirmenin tersi.
• Borçlanmak: kaldıraç, riski artırır.
• Sadece devlet tahvili: riski azaltabilir ama hedging'in tanımı değil.

## Q
EN: You invest 50 dollars in an oil company and 50 dollars in an industrial firm. When oil prices rise, the oil company's 100-dollar investment pays 120 and the industrial firm's pays 100; when oil prices fall, the payoffs are reversed. What is the standard deviation of your payoff?
TR: 50 dolar petrol şirketine, 50 dolar sanayi şirketine yatırıyorsun. Petrol artınca 100 dolarlık yatırım petrol şirketinde 120, sanayide 100 ödüyor; düşünce tersi. Getirinin standart sapması kaçtır?
+ 0
- 10
- 5
- 110
HINT: Her durumda toplam getirin ne? İki durumda da aynıysa yayılım var mı?
EX: **Doğru cevap: 0.**
Petrol artarsa: $0.5(120) + 0.5(100) = 110$. Petrol düşerse: $0.5(100) + 0.5(120) = 110$. Getiri her durumda 110, sapma yok.
**Diğer şıklar ne?**
• 10: tek bir şirkete 100 yatırmanın sd'si.
• 5: yarısını hesaplamak.
• 110: beklenen getiri.

## Q
EN: As more and more independent sources of risk are added to a portfolio, the portfolio's standard deviation:
TR: Portföye birbirinden bağımsız risk kaynakları ekledikçe portföyün standart sapması ne olur?
+ falls and eventually becomes negligible
- rises without limit
- stays the same
- becomes equal to the expected return
HINT: $n$ bağımsız eşit risk için sd $= \sigma/\sqrt n$. $n$ çok büyürse?
EX: **Doğru cevap:** düşer ve sonunda ihmal edilebilir hale gelir.
Bu sigortacılığın temelidir: binlerce bağımsız poliçe birlikte neredeyse kesin bir sonuç verir.
**Diğer şıklar neden yanlış?**
• Sınırsız artar, aynı kalır: bağımsız risklerde tersi olur.
• Beklenen getiriye eşit: alakasız.

## Q
EN: Diversification can reduce which type of risk?
TR: Çeşitlendirme hangi tür riski azaltabilir?
+ Idiosyncratic risk
- Systematic risk
- Both idiosyncratic and systematic risk completely
- Neither
HINT: Herkesi aynı yönde etkileyen risk farklı hisseler alarak dağıtılabilir mi?
EX: **Doğru cevap:** firmaya özgü (idiosyncratic) risk.
Farklı firmaların kendine özgü olayları birbirini dengeler. Sistematik risk (genel resesyon) bütün yatırımları aynı yönde etkilediği için çeşitlendirmeyle yok olmaz.

## Q
EN: The principle of holding more than one risk at a time is called:
TR: Aynı anda birden fazla risk tutma ilkesine ne denir?
+ diversification
- leverage
- securitization
- value at risk
HINT: Bütün yumurtaları aynı sepete koymamak.
EX: **Doğru cevap: diversification (çeşitlendirme).**
**Diğer şıklar ne?**
• Leverage: borçla yatırım.
• Securitization: varlıkları havuzlayıp tahvile çevirme (Bölüm 6).
• VaR: en kötü kayıp ölçüsü.

## Q
EN: Two independent stocks each pay 1,400 or 700 dollars per 1,000 invested, with equal probability. If you put 500 in each instead of 1,000 in one, what happens to your expected payoff and its standard deviation?
TR: Bağımsız iki hisse 1000 dolar başına eşit olasılıkla 1400 ya da 700 ödüyor. Hepsini birine koymak yerine her birine 500 koyarsan beklenen getiri ve standart sapma ne olur?
+ The expected payoff stays at 1,050 and the standard deviation falls from 350 to about 247
- Both the expected payoff and the standard deviation fall
- The expected payoff rises to 1,400 and the standard deviation stays at 350
- Nothing changes because the stocks are identical
HINT: Riski yaymak ortalamayı değiştirir mi? Uçlardaki sonuçların olasılığına ne olur?
EX: **Doğru cevap:** beklenen getiri 1050'de kalır, sd 350'den yaklaşık 247'ye düşer.
Olası sonuçlar: 1400 (¼), 1050 (½), 700 (¼). Beklenen değer 1050. Varyans: $0.25(350)^2 + 0.5(0) + 0.25(350)^2 = 61{,}250$; sd $= 247.49 = 350/\sqrt2$.
**Diğer şıklar neden yanlış?**
• İkisi de düşer: beklenen getiri değişmez.
• Beklenen getiri 1400: en iyi sonuç, beklenen değil.
• Hiçbir şey değişmez: hisseler aynı dağılımda ama bağımsız; birlikte tutmak riski azaltır.

## GEN diversify
`);
