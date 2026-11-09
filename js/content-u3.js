CONTENT.push(String.raw`
=== UNIT u3 | Bölüm 3 | Finansal Araçlar, Piyasalar ve Kurumlar | Doğrudan/dolaylı finansman, araç türleri, piyasa yapısı, aracılar

--- LESSON u3a | ✎ | Finansal araçlar
FX: Doğrudan finansman :: borçlu menkul kıymeti doğrudan borç verene satar
FX: Dolaylı finansman :: araya bir kurum girer (banka kredisi)
FX: Araçların 3 kullanımı :: ödeme aracı · değer saklama · risk transferi (paradan farkı)
FX: Değeri artıran 4 özellik :: büyük ödeme · erken ödeme · ödenme ihtimali yüksek · ihtiyaç anında ödeme
FX: Kaldıraç oranı = varlık / özsermaye :: borçla finanse etme; kayıpları büyütür

## CARD Doğrudan ve dolaylı finansman
• ==Doğrudan finansman (direct finance)==: borçlu, menkul kıymeti (hisse, tahvil) **doğrudan** borç verene finansal piyasada satar. Devletler ve şirketler böyle finanse edilir.
• ==Dolaylı finansman (indirect finance)==: borç veren ile borçlu arasında bir **kurum** vardır. Araba almak için bankadan ya da finansman şirketinden kredi almak.
• ==Varlık (asset)==: sahip olduğun değerli şey. ==Yükümlülük (liability)==: borçlu olduğun şey.
Finansal gelişme ekonomik büyümeyle bağlantılıdır: sistemin rolü üretimi, istihdamı ve tüketimi kolaylaştırmak, kaynakları en verimli kullanıma yönlendirmektir (Şekil 3.1: fonların sistemden akışı).

## CARD Finansal araç nedir, ne işe yarar?
==Finansal araç (financial instrument)==: bir tarafın diğerine gelecekte, belirli koşullar altında değerli bir şey (genelde para) aktarmasını gerektiren **yazılı yasal yükümlülük**. Önemli olan yükümlülüğün **uygulanabilir** olması.
**Üç kullanım:**
| Kullanım | Örnek | Para da yapar mı? |
| Ödeme aracı | çalışanlara hisse opsiyonu ile ödeme | evet |
| Değer saklama | satın alma gücünü geleceğe taşımak | evet |
| ==Risk transferi== | vadeli işlem sözleşmesi, sigorta | **hayır**, paradan farkı bu |
**Özellikleri:** Sözleşmeler karmaşık ve bu karmaşıklık maliyetlidir; çözüm ==standartlaştırma==. Araçlar ihraççı hakkında bilgi de **iletir**. ==Karşı taraf (counterparty)== sözleşmenin öbür tarafındaki kişi/kurumdur; onu izleme maliyetini düşüren mekanizmalar vardır. Araçlar ==asimetrik bilgi== sorununu ele alacak şekilde tasarlanır: borçlu, borç verene söylemediği bilgilere sahiptir.
:::dikkat Temel (underlying) ve türev (derivative)
• **Temel araçlar:** tasarruf edenin kaynağı doğrudan yatırımcıya aktarmasını sağlar; kaynak dağılımını iyileştirir. Örnek: hisse, tahvil.
• **Türev araçlar:** değeri ve ödemesi temel aracın davranışından **türetilir**. Örnek: vadeli işlem (futures), opsiyon, swap. Asıl kullanımı riski yatırımcılar arasında kaydırmaktır.
:::

## CARD Değer ve araç türleri
**Değeri belirleyen dört özellik:**
| Özellik | Değeri artıran yön |
| Ödemenin büyüklüğü | daha büyük ödeme |
| Ödemenin zamanı | daha **erken** ödeme |
| Ödenme ihtimali | daha **yüksek** ihtimal |
| Hangi koşulda ödendiği | **ihtiyaç duyduğumuz anda** ödeme (sigorta gibi) |
**Esas olarak değer saklayan araçlar:** banka kredisi, tahvil (piyasada alınıp satılabilen kredi), konut kredisi (ev ==teminat (collateral)==), hisse (firmanın küçük bir parçası, kârdan pay), ==varlığa dayalı menkul kıymetler== (konut kredisi, öğrenci kredisi gibi varlıkların ödemelerinden pay; subprime ipoteğe dayalı olanlar 2007–2009 krizinde önemli rol oynadı).
**Esas olarak riski transfer eden araçlar:**
• **Sigorta:** belirli, çoğu zaman nadir durumlarda ödeme garantisi.
• ==Vadeli işlem (futures)==: belirli miktar mal ya da varlığı **sabit fiyattan** belirli bir gelecek tarihte değiştirme anlaşması. Fiyat her zaman belli. Türevdir.
• ==Opsiyon (option)==: belirli bir fiyattan alma ya da satma **hakkı, ama zorunluluğu değil**.
• ==Swap==: gelecekte belirli zamanlarda iki nakit akışını değiştirme anlaşması.

## CARD Kaldıraç ve kaldıraç sarmalı
==Kaldıraç (leverage)==: bir yatırımın bir kısmını borçla finanse etmek. Kaldıraç ne kadar yüksekse, beklenmedik kötü bir gelişmenin iflasa yol açma riski o kadar büyük.
• Kriz sırasında bazı finans kuruluşlarının kaldıracı özsermayelerinin **30 katından** fazlaydı: varlıklarda küçük bir düşüş bile onları savunmasız bıraktı.
• Kayıp yaşayan firmalar özsermayelerini korumak için ==kaldıraç azaltır (deleverage)==: varlık satar. Herkes aynı anda satınca fiyatlar düşer, kayıplar büyür, özsermaye daha da azalır. Buna ==kaldıracın paradoksu (paradox of leverage)== denir; ==kaldıraç sarmalını== güçlendirir. Bu sarmallar 2007–2009 krizinin ayırt edici özelliğiydi.
:::ornek
Kaldıraç 30 ise varlıkların %3.3'ü kadar düşüş özsermayeyi tamamen siler: $30\times 3.3\% \approx 100\%$.
:::

## Q
EN: When a firm sells bonds directly to investors in the financial markets, this is an example of:
TR: Bir firma tahvillerini finansal piyasada doğrudan yatırımcılara sattığında bu neye örnektir?
+ direct finance
- indirect finance
- a derivative transaction
- commodity money
HINT: Arada bir banka var mı?
EX: **Doğru cevap: direct finance (doğrudan finansman).**
Borçlu menkul kıymeti doğrudan borç verene satıyor; arada aracı kurum yok.
**Diğer şıklar ne?**
• Indirect finance: araya banka girer (araba kredisi gibi).
• Türev işlem: değeri başka bir araçtan türetilen sözleşme.
• Mal para: Bölüm 2.

## Q
EN: Getting a loan from a bank to buy a car is an example of:
TR: Araba almak için bankadan kredi almak neye örnektir?
+ indirect finance
- direct finance
- a futures contract
- an option
HINT: Parayı kim veriyor: doğrudan tasarruf eden mi, araya giren bir kurum mu?
EX: **Doğru cevap: indirect finance (dolaylı finansman).**
Banka, mevduat sahiplerinin parasını alıp sana kredi olarak verir; kurum borç verenle borçlunun arasında durur.
**Diğer şıklar neden yanlış?**
• Direct finance: menkul kıymetin doğrudan satılması.
• Futures ve option: risk transfer eden türev araçlar.

## Q
EN: Which function do financial instruments perform that money does NOT?
TR: Finansal araçların yapıp paranın yapmadığı işlev hangisidir?
+ Transferring risk
- Serving as a means of payment
- Serving as a store of value
- Being an asset
HINT: Üç kullanımdan ikisi parayla ortak. Sigorta ve vadeli işlem sözleşmesi ne yapıyor?
EX: **Doğru cevap:** riski transfer etmek.
Vadeli işlem ve sigorta sözleşmeleri riski bir kişiden diğerine aktarır; para bunu yapmaz.
**Diğer şıklar neden yanlış?**
• Ödeme aracı (hisse opsiyonuyla ödeme) ve değer saklama: hem araçlar hem para yapar.
• Varlık olmak: para da bir varlıktır.

## Q
EN: Holding everything else constant, which of the following makes a financial instrument MORE valuable?
TR: Diğer her şey sabitken aşağıdakilerden hangisi bir finansal aracı DAHA değerli yapar?
+ The payment is made when we most need it.
- The payment is made later.
- The payment is less likely to be made.
- The payment is smaller.
HINT: Dört özellik: büyüklük, zaman, ihtimal, koşul. Her birinde hangi yön değeri artırıyordu?
EX: **Doğru cevap:** ödemenin tam ihtiyaç duyduğumuz anda yapılması.
Sigorta bu yüzden değerlidir: evin yandığında öder.
**Diğer şıklar neden yanlış?**
• Daha geç ödeme: değeri düşürür (zamanın değeri var).
• Daha düşük ihtimal: değeri düşürür (risk).
• Daha küçük ödeme: değeri düşürür.

## Q
EN: A futures contract is:
TR: Vadeli işlem sözleşmesi (futures) nedir?
+ an agreement to exchange a fixed quantity of a commodity or asset at a fixed price on a set future date
- the right, but not the obligation, to buy an asset at a fixed price
- an agreement to exchange two cash flows at several future dates
- a share of ownership in a firm
HINT: Hak mı, zorunluluk mu? Fiyat önceden belli mi?
EX: **Doğru cevap:** belirli miktar mal ya da varlığı, sabit fiyattan, belirli bir gelecek tarihte değiştirme anlaşması.
İki taraf da yükümlüdür ve fiyat her zaman belirtilir. Türev araçtır.
**Diğer şıklar ne?**
• Hak ama zorunluluk değil: **opsiyon**.
• İki nakit akışını değiştirme: **swap**.
• Firma sahipliği: **hisse**.

## Q
EN: An option gives its holder:
TR: Opsiyon, sahibine ne verir?
+ the right, but not the obligation, to buy or sell an asset at a predetermined price
- the obligation to buy an asset at the market price
- a guaranteed fixed interest payment every year
- a claim on the payments from a pool of mortgages
HINT: Opsiyonun kelime anlamı "seçenek".
EX: **Doğru cevap:** belirli bir fiyattan alma ya da satma **hakkı**, ama zorunluluğu değil.
Hak belirli bir tarihte ya da belirli bir süre içinde kullanılabilir.
**Diğer şıklar ne?**
• Zorunluluk: vadeli işlem sözleşmesine benzer.
• Sabit faiz: tahvil.
• İpotek havuzundan pay: ipoteğe dayalı menkul kıymet.

## Q
EN: Which of the following is a derivative instrument?
TR: Aşağıdakilerden hangisi bir türev araçtır?
+ A swap
- A stock
- A bond
- A home mortgage
HINT: Değeri başka bir aracın davranışından "türetilen" hangisi?
EX: **Doğru cevap: swap.**
Türevler (futures, opsiyon, swap) değerini temel araçlardan alır ve esas olarak riski kaydırmak için kullanılır.
**Diğer şıklar ne?**
• Hisse ve tahvil: temel (underlying) araçlar.
• Konut kredisi: değer saklayan bir borç aracı.

## Q
EN: The "paradox of leverage" refers to the fact that:
TR: "Kaldıracın paradoksu" neyi anlatır?
+ when many institutions deleverage at once by selling assets, prices fall, losses grow and net worth falls further
- more leverage always reduces risk
- leverage has no effect on the chance of bankruptcy
- borrowing money increases a firm's net worth
HINT: Kayıp yaşayan firma özsermayesini korumak için varlık satıyor. Herkes aynı anda satarsa ne olur?
EX: **Doğru cevap:** birçok kurum aynı anda varlık satarak kaldıraç azaltınca fiyatlar düşer, kayıplar büyür ve özsermaye daha da azalır.
Tek bir firma için mantıklı olan (satmak), herkes yapınca durumu kötüleştirir. Bu kaldıraç sarmalını güçlendirir; 2007–2009 krizinin ayırt edici özelliği.
**Diğer şıklar neden yanlış?**
• Kaldıraç riski azaltır: tersine, artırır.
• İflas ihtimaline etkisi yok: kaldıraç ne kadar yüksekse iflas riski o kadar büyük.
• Borç özsermayeyi artırır: borç özsermaye değildir.

## Q
EN: During the 2007–2009 crisis, some financial firms were leveraged more than 30 times their net worth. Roughly what percentage decline in asset values would wipe out the net worth of a firm leveraged 30 times?
TR: Kaldıracı 30 olan bir firmanın özsermayesini varlık değerlerinde yaklaşık yüzde kaçlık bir düşüş siler?
+ about 3.3%
- about 30%
- about 50%
- about 0.3%
HINT: Varlık = 30 × özsermaye. Özsermaye, varlıkların yüzde kaçı?
EX: **Doğru cevap: yaklaşık %3.3.**
Kaldıraç 30 ise özsermaye varlıkların $1/30 \approx 3.3\%$'ü kadardır. Varlıklar bu kadar düşerse kayıp özsermayeyi tamamen siler.
**Diğer şıklar neden yanlış?**
• %30: kaldıraç oranının kendisini yüzde sanmak.
• %50, %0.3: hesapla uyuşmuyor.

--- LESSON u3b | ⇄ | Finansal piyasalar
FX: Piyasaların 3 rolü :: likidite (düşük işlem maliyeti) · bilgi toplama · risk paylaşımı
FX: Birincil piyasa / ikincil piyasa :: yeni ihraç / mevcut menkul kıymet alım-satımı
FX: Para piyasası / tahvil piyasası :: vade 1 yıldan kısa / uzun
FX: Merkezi borsa · tezgâhüstü (OTC) · ECN :: işlem yapılan yerin türleri
FX: İyi işleyen piyasa :: düşük işlem maliyeti, doğru bilgi, inandırıcı vaat, hızlı ve ucuz tahsil

## CARD Piyasaların rolü
==Finansal piyasa==: finansal araçların alınıp satıldığı yer; ekonominin "merkezi sinir sistemi". Firmalar ve bireyler finansman bulur, ekonomik verimlilik artar.
| Rol | Açıklama |
| ==Piyasa likiditesi== | sahiplerin araçları ucuza alıp satabilmesi; işlem maliyetini düşük tutmak |
| ==Bilgi== | ihraççılar hakkındaki bilgiyi toplamak ve iletmek |
| ==Risk paylaşımı== | bireylere riski alıp satabilecekleri bir yer sağlamak |

## CARD Piyasaların yapısı
**Birincil ve ikincil piyasa:**
• ==Birincil piyasa (primary)==: borçlu, **yeni ihraç edilen** menkul kıymeti satarak borç verenden fon alır.
• ==İkincil piyasa (secondary)==: insanlar **mevcut** menkul kıymetleri alıp satar. Şirket buradan para kazanmaz ama ikincil piyasa likidite sağlar.
**İşlem şekline göre:**
• ==Merkezi borsa (centralized exchange)==: alıcı ve satıcı fiziksel bir merkezde buluşur.
• ==Tezgâhüstü piyasa (OTC)==: merkeziyetsiz; aracılar (dealers) elektronik olarak almaya-satmaya hazır bekler.
• ==Elektronik iletişim ağı (ECN)==: alıcı ve satıcıyı broker ya da dealer olmadan buluşturan elektronik sistem.
• **Emir türleri:** ==piyasa emri (market order)== mevcut fiyattan hemen; ==limit emir== belirlenen fiyattan. NYSE'de likiditeyi ==belirlenmiş piyasa yapıcılar (DMM)== destekler.
**İşlem gören araca göre:**
| Piyasa | Ne işlem görür? |
| Borç (debt) | kredi, konut kredisi, tahvil |
| Özsermaye (equity) | hisse |
| Türev | futures, opsiyon, swap: anlaşma bugün, ödeme **sonra** |
Borç araçları vadeye göre: **1 yıldan kısa → para piyasaları (money markets)**, **1 yıldan uzun → tahvil piyasaları (bond markets)**.

## CARD Elektronik işlem: fayda ve riskler
**Faydalar:** müşteri emrini görür, emirler hızlı, 24 saat işlem, düşük maliyet, operasyonel risk azalır (11 Eylül'den sonra NYSE günlerce kapalı kalmıştı). Teknoloji ve küreselleşme borsaların fiziksel yerini önemsizleştirdi, sınır ötesi birleşmeleri artırdı.
**Riskler:** sistem hataya açık. ==İşlem algoritması (trading algorithm)==: binlerce işlemi otomatik yapan kural tabanlı program. ==Yüksek frekanslı işlemciler (HFT)== saniyeler içinde binlerce hisse alıp satar.
**HFT'nin beş sorunu:**
• elektronik işlemlerin risklerini büyütür,
• algoritmaların karmaşık etkileşimi platformları bunaltıp piyasayı bozabilir,
• piyasa yapıcıların konumunu zayıflatır (geleneksel yatırımcıya likidite sağlayanlar),
• müşteri emirlerinin önüne geçme (front-running) cazibesi yaratır, güveni zedeler,
• toplumsal açıdan verimsiz bir silahlanma yarışına yol açar.
**İyi işleyen piyasanın özellikleri:** işlem maliyetleri düşük; topladığı ve ilettiği bilgi doğru ve yaygın erişilebilir; borçlunun ödeme vaadi inandırıcı; borç veren alacağını hızlı ve ucuza tahsil edebilmeli.

## Q
EN: A primary financial market is one in which:
TR: Birincil finansal piyasa nedir?
+ a borrower obtains funds from a lender by selling newly issued securities
- people buy and sell existing securities
- only derivatives are traded
- only short-term debt is traded
HINT: "Primary" = ilk. Menkul kıymet ilk kez mi satılıyor, yoksa el mi değiştiriyor?
EX: **Doğru cevap:** borçlu yeni ihraç ettiği menkul kıymeti satarak borç verenden fon alır.
**Diğer şıklar ne?**
• Mevcut menkul kıymetlerin alım-satımı: **ikincil piyasa**.
• Sadece türev: türev piyasası.
• Sadece kısa vadeli borç: para piyasası.

## Q
EN: Debt instruments with a maturity of less than one year are traded in:
TR: Vadesi 1 yıldan kısa borç araçları hangi piyasada işlem görür?
+ money markets
- bond markets
- equity markets
- derivative markets
HINT: Vade sınırı 1 yıl: altı ve üstü farklı isim alır.
EX: **Doğru cevap: money markets (para piyasaları).**
1 yıldan uzun vadeli borç araçları **tahvil piyasalarında** işlem görür.
**Diğer şıklar ne?**
• Bond markets: 1 yıldan uzun vade.
• Equity markets: hisse.
• Derivative markets: futures, opsiyon, swap.

## Q
EN: Which of the following is NOT one of the three roles of financial markets?
TR: Aşağıdakilerden hangisi finansal piyasaların üç rolünden biri DEĞİLDİR?
+ Guaranteeing that every borrower repays
- Providing market liquidity
- Pooling and communicating information about issuers
- Allowing risk sharing
HINT: Üç rol: likidite, bilgi, risk paylaşımı. Hangisi bir "garanti" vaat ediyor?
EX: **Doğru cevap:** her borçlunun geri ödemesini garanti etmek.
Piyasalar böyle bir garanti vermez; temerrüt riski hep vardır (Bölüm 6–7).
**Diğer şıklar neden yanlış?**
• Likidite, bilgi, risk paylaşımı: üç rolün kendisi.

## Q
EN: In derivative markets, unlike debt and equity markets:
TR: Türev piyasalarında, borç ve özsermaye piyasalarından farklı olarak:
+ investors make agreements that are settled later
- actual claims are bought and sold for immediate cash payment
- only governments can trade
- no prices are ever specified
HINT: Hisse alınca para hemen ödenir. Vadeli işlem sözleşmesinde ödeme ne zaman?
EX: **Doğru cevap:** yatırımcılar daha sonra ödenecek anlaşmalar yapar.
Borç ve özsermaye piyasalarında gerçek talepler hemen nakit karşılığında alınıp satılır.
**Diğer şıklar neden yanlış?**
• Anında nakit: borç ve özsermaye piyasalarının özelliği.
• Sadece devlet, fiyat yok: yanlış (futures'ta fiyat her zaman belli).

## Q
EN: An electronic communication network (ECN) is:
TR: Elektronik iletişim ağı (ECN) nedir?
+ an electronic system that brings buyers and sellers together without the use of a broker or dealer
- a physical exchange where traders meet on a floor
- a government agency that regulates stock trading
- a type of bond issued by telecommunications firms
HINT: Merkezi borsa = fiziksel yer; OTC = aracı dealer'lar. ECN'de aracı var mı?
EX: **Doğru cevap:** alıcı ve satıcıyı broker ya da dealer olmadan buluşturan elektronik sistem.
**Diğer şıklar ne?**
• Fiziksel salon: merkezi borsa.
• Düzenleyici kurum: alakasız.
• Telekom tahvili: kelime oyunu.

## Q
EN: Which is NOT one of the problems of high-frequency trading listed in the textbook?
TR: Kitapta sayılan yüksek frekanslı işlem (HFT) sorunlarından hangisi DEĞİLDİR?
+ It raises the transaction costs of all traditional investors to zero.
- It weakens the position of market makers who provide liquidity.
- It creates a temptation to front-run customer orders.
- It can trigger a socially unproductive arms race.
HINT: Beş sorun: riskleri büyütme, platformları bunaltma, piyasa yapıcıları zayıflatma, front-running, silahlanma yarışı.
EX: **Doğru cevap:** geleneksel yatırımcıların işlem maliyetini sıfırlaması.
Bu ne bir sorun ne de kitapta geçen bir iddia.
**Diğer şıklar neden yanlış?**
• Piyasa yapıcıları zayıflatma, front-running, silahlanma yarışı: üçü de listedeki sorunlardan.

## Q
EN: Which of the following is an essential characteristic of a well-run financial market?
TR: İyi işleyen bir finansal piyasanın temel özelliklerinden hangisidir?
+ Lenders must be able to enforce their right of repayment quickly and at low cost.
- Only a few large investors can trade.
- Information about issuers is kept secret.
- Transaction costs are kept high to discourage trading.
HINT: Dört özellik: düşük işlem maliyeti, doğru ve yaygın bilgi, inandırıcı vaat, hızlı ve ucuz tahsil.
EX: **Doğru cevap:** borç veren geri ödeme hakkını hızlı ve düşük maliyetle uygulatabilmeli.
**Diğer şıklar neden yanlış?**
• Az sayıda yatırımcı: likiditeyi azaltır.
• Bilginin gizli tutulması: bilgi doğru ve yaygın erişilebilir olmalı.
• Yüksek işlem maliyeti: tersi gerekir.

--- LESSON u3c | ⌂ | Finansal kurumlar
FX: Finansal aracı :: piyasaya erişim sağlayan firma (banka, sigorta, aracı kurum, emeklilik fonu)
FX: 3 rol :: işlem maliyetini düşür · tarama ve izleme maliyetini düşür · tasarrufa kolay erişim
FX: Mevduat kabul eden / etmeyen :: ayrım yükümlülük tarafına (fon kaynağına) göre
FX: Gölge bankalar :: mevduat almayan, daha az düzenlenen, daha riskli ve az şeffaf kurumlar

## CARD Kurumların rolü
==Finansal kurumlar (financial intermediaries, aracılar)==: hem doğrudan araç almak isteyen tasarrufçulara hem de araç ihraç etmek isteyen borçlulara piyasaya erişim sağlayan firmalar. Örnek: bankalar, sigorta şirketleri, aracı kurumlar, emeklilik fonları.
**Rolleri:**
• Standart menkul kıymet ihracında uzmanlaşarak ==işlem maliyetlerini== düşürmek.
• Borçluları ==tarama (screening) ve izleme (monitoring)== bilgi maliyetini düşürmek. Böylece asimetrik bilgiyi azaltır, kaynakların en verimli kullanıma gitmesine yardım ederler.
• Tasarrufçulara fonlarına ==kolay erişim== sağlamak.

## CARD Kurum türleri
| Tür | Ne yapar? |
| ==Mevduat kabul eden kurumlar== (ticari bankalar, tasarruf kurumları, kredi kooperatifleri) | mevduat alır, kredi verir; çoğu kişinin "banka" dediği |
| Sigorta şirketleri | prim toplar, yatırır; belirli olaylarda poliçe sahibine öder |
| Emeklilik fonları | çalışan ve şirket katkılarını hisse, tahvil, gayrimenkule yatırır; emeklilere ödeme yapar |
| Aracı kurumlar ve yatırım bankaları | şirketler için hisse ve tahvil ihraç eder, alıp satar, danışmanlık verir |
| Yatırım fonları (mutual funds) | birçok kişinin parasını havuzlayıp portföye yatırır; **pasif** yatırım |
| Hedge fonlar | aynı işi küçük, varlıklı yatırımcı grupları için yapar |
| Özel sermaye ve girişim sermayesi | birkaç firmada kontrol payı alıp **aktif** yönetir |
| Finansman şirketleri | piyasadan doğrudan fon toplayıp bireylere ve firmalara kredi verir |
| Devlet destekli kuruluşlar (GSE) | çiftçilere ve konut kredisi alanlara doğrudan kredi veren federal kredi kuruluşları |
:::dikkat Gölge bankacılık
Finansal aracılık ve kaldıraç ABD'de geleneksel bankalardan, devlet düzenlemesine **daha az tabi** kurumlara (aracı kurumlar, sigortacılar, hedge fonlar) kaydı. Bunlara ==gölge bankalar (shadow banks)== denir: bankalarla rekabet eden hizmetler verirler ama **mevduat kabul etmezler**; geleneksel bankalardan daha çok risk alırlar ve daha az şeffaftırlar. Yüksek kaldıraçlı gölge bankalar ve gevşetilen kurallar, sistem genelinde kaldıracın artmasına izin verdi. Kriz gölge bankacılığı dönüştürdü: artık risk alarak sisteme tehdit oluşturabilecek **her** kurum yakından izleniyor.
:::
:::ipucu Finansal erişim
Finansal erişim hem eşitliği hem büyümeyi destekler: ülkelerin yurt içi tasarrufu harekete geçirmesini sağlar, işlem maliyetini düşürür; verimli ödeme araçları piyasaları genişletir ve iş bölümünü kolaylaştırır.
:::

## Q
EN: Which of the following is a depository institution?
TR: Aşağıdakilerden hangisi mevduat kabul eden bir kurumdur?
+ A credit union
- A pension fund
- An insurance company
- A hedge fund
HINT: Hangisi mevduat alıp kredi veriyor?
EX: **Doğru cevap: credit union (kredi kooperatifi).**
Mevduat kabul eden kurumlar: ticari bankalar, tasarruf kurumları (savings and loans), kredi kooperatifleri.
**Diğer şıklar neden yanlış?**
• Emeklilik fonu, sigorta şirketi, hedge fon: mevduat kabul etmeyen kurumlar.

## Q
EN: Mutual-fund companies differ from private equity firms mainly because mutual funds:
TR: Yatırım fonları özel sermaye firmalarından esas olarak nasıl ayrılır?
+ pool the resources of many investors and invest passively in portfolios, while private equity firms take controlling stakes in a few firms and manage them actively
- accept deposits and make loans
- are owned by the government
- only invest in derivatives
HINT: Biri pasif, biri aktif. Biri çok sayıda küçük yatırımcı, biri birkaç firmada kontrol payı.
EX: **Doğru cevap:** yatırım fonları birçok yatırımcının parasını havuzlayıp pasif yatırır; özel sermaye firmaları birkaç firmada kontrol payı alıp aktif yönetir.
**Diğer şıklar neden yanlış?**
• Mevduat ve kredi: bankaların işi.
• Devlet mülkiyeti: GSE'ler için geçerli olabilir, yatırım fonları için değil.
• Sadece türev: yanlış.

## Q
EN: Shadow banks are financial institutions that:
TR: Gölge bankalar nedir?
+ provide services that compete with banks but do not accept deposits, and are less regulated and less transparent
- are secret banks owned by central banks
- accept deposits but do not make loans
- are banks that operate only at night
HINT: Kitaptaki örnekler: aracı kurumlar, sigortacılar, hedge fonlar. Bunlar mevduat alıyor mu?
EX: **Doğru cevap:** bankalarla rekabet eden hizmetler verir ama mevduat kabul etmez; daha az düzenlenir, daha az şeffaftır.
Geleneksel bankalardan daha çok risk alırlar. Yüksek kaldıraçlı gölge bankalar kriz öncesinde sistemdeki kaldıracın artmasına katkıda bulundu.
**Diğer şıklar neden yanlış?**
• Merkez bankasının gizli bankaları, gece çalışan bankalar: kelime oyunları.
• Mevduat alıp kredi vermeyen: tanımla çelişir.

## Q
EN: Which of the following is NOT a role of financial institutions?
TR: Aşağıdakilerden hangisi finansal kurumların rollerinden biri DEĞİLDİR?
+ Setting the money supply
- Reducing transaction costs by specializing in standardized securities
- Reducing the cost of screening and monitoring borrowers
- Giving savers ready access to their funds
HINT: Para arzını kim kontrol eder?
EX: **Doğru cevap:** para arzını belirlemek.
Bu merkez bankasının işidir.
**Diğer şıklar neden yanlış?**
• İşlem maliyetini düşürmek, tarama/izleme maliyetini düşürmek, fonlara kolay erişim: kurumların üç rolü.

## Q
EN: Depository and non-depository institutions differ mainly in:
TR: Mevduat kabul eden ve etmeyen kurumlar esas olarak neye göre ayrılır?
+ their primary source of funds, the liability side of the balance sheet
- whether they have any assets
- the color of their logo
- whether they are allowed to have customers
HINT: Bölüm 12'nin girişi: ayrım bilançonun hangi tarafında?
EX: **Doğru cevap:** ana fon kaynakları, yani bilançonun yükümlülük tarafı.
Mevduat kabul eden kurumların fonu esas olarak mevduattan gelir; sigortacılar primden, emeklilik fonları katkılardan fon toplar.
**Diğer şıklar neden yanlış?**
• Varlık sahibi olmak, müşteri: hepsinin var.
• Logo rengi: şaka şık.

## Q
EN: Insurance companies:
TR: Sigorta şirketleri ne yapar?
+ accept premiums, invest them, and promise compensation to policyholders if certain events occur
- accept deposits and make commercial loans
- issue currency
- only trade stocks for their own profit
HINT: Prim → yatırım → olay olursa ödeme.
EX: **Doğru cevap:** prim toplar, yatırır ve belirli olaylar gerçekleşirse poliçe sahibine ödeme sözü verir.
**Diğer şıklar ne?**
• Mevduat ve ticari kredi: ticari bankalar.
• Para basmak: merkez bankası.
• Sadece kendi hesabına hisse alıp satmak: tanımı değil.
`);
