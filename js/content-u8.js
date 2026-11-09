CONTENT.push(String.raw`
=== UNIT u8 | Bölüm 12 | Mevduat Kurumları: Bankalar ve Banka Yönetimi | Bilanço, sermaye, ROA/ROE, net faiz marjı, bilanço dışı işlemler, banka riskleri

--- LESSON u8a | A | Bankanın bilançosu: varlıklar
FX: Varlıklar = yükümlülükler + banka sermayesi :: bilanço kimliği
FX: Varlıklar (fonların kullanımı) :: nakit · menkul kıymetler · krediler · diğer
FX: Nakit :: rezervler (kasa + Fed'deki mevduat) · tahsildeki çekler · diğer bankalardaki hesaplar
FX: Menkul kıymetler = ikincil rezervler :: sadece tahvil (banka hisse tutamaz)
FX: Krediler :: varlıkların yarısından fazlası; en önemli varlık

## CARD Mevduat kurumları ve bilanço
"Banka" kelimesi genelde **mevduat kabul eden kurum** için kullanılır: ticari bankalar, tasarruf ve kredi kurumları (S&L), kredi kooperatifleri. Mevduat kabul eden ve etmeyen kurumlar **fon kaynaklarına**, yani bilançonun **yükümlülük** tarafına göre ayrılır.
==Ticari bankalar==: işletmelere banka hizmeti vermek için kuruldu: fonlarını güvenle yatırabilsinler, gerektiğinde borç alabilsinler.
$$\text{Toplam varlıklar} = \text{toplam yükümlülükler} + \text{banka sermayesi}$$
• Bankalar fonlarını mevduat sahiplerinden ve işletmelerden, ayrıca piyasalarda başka kurumlardan borçlanarak toplar.
• Varlıklar ile yükümlülükler arasındaki fark ==banka sermayesi (net worth)==: bankanın sahipleri için değeri.
• Kâr iki kaynaktan gelir: **hizmet ücretleri** ve yükümlülüklere ödenen ile varlıklardan kazanılan **faiz farkı**.

## CARD Varlıklar: fonların kullanımı
Varlık tarafı bankanın topladığı fonlarla ne yaptığını gösterir. Dört grup: **nakit, menkul kıymetler, krediler, diğer.**
**Nakit kalemleri:**
• ==Rezervler (reserves)==: en önemlisi. Kasadaki nakit (==vault cash==) + bankanın **Fed'deki mevduatı**. Düzenlemeler belli bir yüzdeyi rezerv olarak tutmayı ister. Nakit en likit varlık.
• ==Tahsildeki nakit kalemleri==: henüz tahsil edilmemiş çeklerin tutarı.
• **Diğer bankalardaki hesaplar:** küçük bankaların büyük bankalardaki hesapları (==muhabir banka mevduatı==).
Aralık 2018'de bankalar varlıklarının **%11'inden fazlasını** nakit tutuyordu; kriz öncesinde yaklaşık **%3**. Bankalar nakdi az tutmak ister çünkü nakit az kazandırır.
**Menkul kıymetler:** ikinci büyük kalem. Bankalar **hisse tutamaz**, sadece tahvil: ABD devlet ve kurum kâğıtları (varlıkların %15.7'si) ve diğerleri (eyalet ve yerel yönetim tahvilleri, %4.9). Yaklaşık yarısı ipoteğe dayalı. Büyük kısmı çok likittir, gerekirse hızla satılabilir: bu yüzden ==ikincil rezervler (secondary reserves)== denir. Payı 1979–2019 arasında %20 civarında dalgalandı.
**Krediler:** modern ticari bankanın **ana varlığı**, varlıkların yarısından fazlası. Beş tür:
| Tür | Açıklama |
| Ticari ve sanayi (C&I) | işletme kredileri |
| Gayrimenkul | konut ve ticari ipotek, ev teminatlı krediler |
| Tüketici | taşıt, kredi kartı |
| Bankalar arası | diğer bankalara verilen krediler |
| Diğer | menkul kıymet alımı için krediler vb. |
Kredi türlerinin likiditesi farklıdır. Mevduat kurumları kredi portföyleriyle ayrılır: ticari bankalar esas olarak **işletmelere**, S&L'ler bireylere **konut kredisi**, kredi kooperatifleri **tüketici kredisi** verir. Kriz öncesinde ticari bankalar gayrimenkule daha çok girdi (ticari senet piyasası büyük firmalara alternatif sundu; ipotek kâğıtları bankaların kredilerini satmasını sağladı); krizden sonra gayrimenkul payını azalttılar.

## Q
EN: The bank balance sheet identity is:
TR: Banka bilanço kimliği hangisidir?
+ Total bank assets = Total bank liabilities + Bank capital
- Total bank assets = Total bank liabilities − Bank capital
- Bank capital = Total bank assets + Total bank liabilities
- Total deposits = Total loans
HINT: Bankanın sahip olduğu her şey ya borçla ya sahiplerin parasıyla finanse edilmiştir.
EX: **Doğru cevap:** toplam varlıklar = toplam yükümlülükler + banka sermayesi.
Dolayısıyla sermaye = varlıklar − yükümlülükler (net değer).
**Diğer şıklar neden yanlış?**
• Eksi sermaye, toplam: işaretler yanlış.
• Mevduat = kredi: bilanço kimliği değil.

## Q
EN: Bank reserves consist of:
TR: Banka rezervleri neden oluşur?
+ vault cash and the bank's deposits at the Federal Reserve
- the bank's holdings of corporate stock
- loans to businesses
- the bank's borrowing from other banks
HINT: Kasadaki nakit ve bir de merkez bankasındaki hesap.
EX: **Doğru cevap:** kasadaki nakit (vault cash) ve bankanın Fed'deki mevduatı.
Rezervler nakit kalemlerinin en önemlisidir ve bankanın en likit varlığıdır.
**Diğer şıklar neden yanlış?**
• Şirket hissesi: bankalar hisse tutamaz.
• İşletme kredisi: kredi kalemi.
• Diğer bankalardan borçlanma: yükümlülük, varlık değil.

## Q
EN: Why are a bank's securities holdings sometimes called "secondary reserves"?
TR: Bankanın menkul kıymetlerine neden bazen "ikincil rezervler" denir?
+ Because a sizeable portion is very liquid and can be sold quickly if the bank needs cash
- Because they are held at the Federal Reserve
- Because they earn no interest
- Because they are the second-largest liability
HINT: Rezerv = nakit gerektiğinde kullanılacak şey. Menkul kıymetler ne kadar hızlı nakde döner?
EX: **Doğru cevap:** büyük kısmı çok likittir; banka nakde ihtiyaç duyarsa hızla satılabilir.
Çoğu ABD hazine kâğıdıdır ve düşük maliyetle hızla satılabilir.
**Diğer şıklar neden yanlış?**
• Fed'de tutulmaları: rezervlerin bir kısmı Fed'dedir, menkul kıymetler değil.
• Faiz getirmemeleri: getirir.
• İkinci büyük yükümlülük: menkul kıymetler varlıktır.

## Q
EN: The largest category of assets of modern commercial banks is:
TR: Modern ticari bankaların en büyük varlık kalemi hangisidir?
+ loans
- cash
- securities
- bank capital
HINT: Varlıkların yarısından fazlası.
EX: **Doğru cevap:** krediler.
Krediler varlıkların yarısından fazlasını oluşturur. Menkul kıymetler ikinci sırada (yaklaşık %20).
**Diğer şıklar neden yanlış?**
• Nakit: 2018'de %11, kriz öncesi %3.
• Menkul kıymetler: ikinci büyük kalem.
• Banka sermayesi: varlık değil, bilançonun öbür tarafında.

## Q
EN: Which of the following can U.S. commercial banks NOT hold as assets?
TR: ABD ticari bankaları aşağıdakilerden hangisini varlık olarak tutamaz?
+ Corporate stocks
- U.S. Treasury securities
- State and local government bonds
- Mortgage-backed securities
HINT: Kitap: "Banks cannot hold ..., so these are only bonds."
EX: **Doğru cevap:** şirket hisseleri.
Bankaların menkul kıymetleri sadece tahvillerden oluşur: devlet ve kurum kâğıtları, eyalet ve yerel yönetim tahvilleri, ipoteğe dayalı kâğıtlar.

## Q
EN: Credit unions mainly specialize in:
TR: Kredi kooperatifleri esas olarak hangi alanda uzmanlaşır?
+ consumer loans
- loans to large businesses
- home mortgages only
- trading derivatives
HINT: Mevduat kurumları kredi portföyleriyle ayrılır: ticari bankalar işletme, S&L konut, kredi kooperatifleri?
EX: **Doğru cevap:** tüketici kredileri.
Ticari bankalar esas olarak işletmelere, tasarruf ve kredi kurumları (S&L) bireylere konut kredisi verir.

--- LESSON u8b | L | Yükümlülükler ve banka sermayesi
FX: Çekle çekilebilir mevduat :: 1970'lerde yükümlülüklerin %40'ı, 2018 sonunda yaklaşık %14
FX: Vadeli olmayan mevduat :: tasarruf ve vadeli mevduat; 2018'de yükümlülüklerin yarısından fazlası
FX: Borçlanma (yaklaşık %13) :: Fed'den, diğer bankalardan (fed funds), repo
FX: Repo :: menkul kıymet karşılığı kısa vadeli teminatlı borç; genelde ertesi gün geri alınır
FX: Sermaye = varlık − yükümlülük :: kayıplara karşı tampon; kredi zarar karşılıkları dahil

## CARD Yükümlülükler: fonların kaynağı
**Mevduatın iki türü:**
• ==Çekle çekilebilir (işlem) mevduat (transaction accounts, checkable deposits)==: en büyük parçası ==vadesiz mevduat (demand deposits)==. Finansal yenilik bunların önemini azalttı: 1970'lerde yükümlülüklerin %40'ı, 2018 sonunda yaklaşık **%14**. Getirileri düşük; artık bankanın ana fon kaynağı değil.
• ==İşlem dışı mevduat (nontransaction)==: Aralık 2018'de ticari banka yükümlülüklerinin **yarısından fazlası**. Tasarruf mevduatı onlarca yıl popülerdi, bugün daha az. ==Vadeli mevduat== belirli vadeli mevduat sertifikalarıdır (CD). 100.000 doların üstündeki ==büyük CD'ler pazarlığa açıktır== (piyasada alınıp satılabilir) ve bankanın finansmanında önemli rol oynar.
**Borçlanma:** ikinci büyük fon kaynağı, yükümlülüklerin yaklaşık **%13**'ü.
• **Fed'den** borçlanma.
• **Diğer bankalardan:** fazla rezervi olan bankalar ihtiyacı olanlara ==federal fon piyasasında (fed funds market)== borç verir. Bu krediler **teminatsızdır**: borç veren banka borç alana güvenmeli.
• Yabancı bankalardan ve devlet destekli kuruluşlardan borçlanma.
• ==Geri alım anlaşması (repo)==: menkul kıymetin nakit karşılığında verildiği kısa vadeli **teminatlı** borç; taraflar işlemi belirli bir tarihte (genelde ertesi gün) tersine çevirmeyi kabul eder.
:::dikkat Repo ve kriz
2007'de repo hacmi ticari bankacılık sisteminin toplam yükümlülüklerinin neredeyse yarısıydı. 2008'de repo piyasası ciddi şekilde daraldı ve krizi derinleştirdi. Reformlar yeni repo kredilerinin açılması ile vadesi gelenlerin kapanmasını eşzamanlı yapmayı hedefliyor; böylece takas bankalarının gün içinde aldığı risk azalır.
:::

## CARD Banka sermayesi
Net değere ==banka sermayesi (bank capital)== ya da ==özsermaye (equity capital)== denir: **sahiplerin bankadaki payı**.
• Sermaye, varlık değerindeki ani düşüşe ya da yükümlülüklerin beklenmedik çekilmesine karşı ==tampondur== (cushion); iflasa (insolvency) karşı bir tür sigorta.
• ==Kredi zarar karşılıkları (loan loss reserves)==: temerrüde düşecek kredilerin olası zararı için ayrılan tutar; sermayenin önemli bir parçası. Banka bir kredinin geri ödenmeyeceğine kanaat getirince krediyi ==siler (write off)==, yani bilançodan çıkarır; karşılık da o kadar azalır.
:::ornek Kayıp kimden düşer?
Varlıklar 100, yükümlülükler 92, sermaye 8. Banka 3'lük krediyi siler: varlıklar 97, yükümlülükler hâlâ 92, sermaye **5**. Kaybın tamamı sermayeden düşer; sermaye %37.5 azaldı.
:::

## Q
EN: Over the past several decades, the share of checkable deposits in commercial bank liabilities has:
TR: Son on yıllarda çekle çekilebilir mevduatın ticari banka yükümlülükleri içindeki payı ne oldu?
+ fallen sharply, from about 40% in the 1970s to about 14% at the end of 2018
- risen from 14% to 40%
- stayed constant at about 25%
- fallen to zero
HINT: Finansal yenilik bu hesapların önemini artırdı mı, azalttı mı?
EX: **Doğru cevap:** 1970'lerde yaklaşık %40'tan 2018 sonunda yaklaşık %14'e düştü.
Getirileri düşük olduğu için müşteriler başka hesaplara geçti; geleneksel vadesiz hesaplar artık bankanın ana fon kaynağı değil.

## Q
EN: In the federal funds market, banks:
TR: Federal fon piyasasında bankalar ne yapar?
+ lend their excess reserves to other banks on an unsecured basis
- borrow from the Treasury using stock as collateral
- sell their loans to households
- issue new currency
HINT: Fazla rezervi olan bankadan ihtiyacı olana; teminat var mı?
EX: **Doğru cevap:** fazla rezervlerini diğer bankalara teminatsız olarak borç verir.
Teminat olmadığı için borç veren banka borç alana güvenmek zorundadır.
**Diğer şıklar neden yanlış?**
• Hazine'den hisse teminatıyla: yanlış.
• Kredileri hanelere satmak: alakasız.
• Para basmak: merkez bankası.

## Q
EN: A repurchase agreement (repo) is:
TR: Geri alım anlaşması (repo) nedir?
+ a short-term collateralized loan in which a security is exchanged for cash, with an agreement to reverse the transaction later
- an unsecured loan between banks
- a long-term bond with no maturity
- a deposit insured by the government
HINT: Menkul kıymet teminat olarak veriliyor; ertesi gün geri alınıyor.
EX: **Doğru cevap:** menkul kıymetin nakit karşılığında verildiği ve işlemin daha sonra (genelde ertesi gün) tersine çevrildiği kısa vadeli teminatlı borç.
**Diğer şıklar ne?**
• Bankalar arası teminatsız borç: fed funds.
• Vadesiz uzun tahvil: konsol.
• Devlet sigortalı mevduat: mevduat hesabı.

## Q
EN: Bank capital serves mainly as:
TR: Banka sermayesi esas olarak ne işe yarar?
+ a cushion against a sudden drop in the value of assets or an unexpected withdrawal of liabilities
- the bank's main source of interest income
- cash held in the vault
- a type of deposit account
HINT: Kayıp olursa önce kimin parası erir?
EX: **Doğru cevap:** varlık değerindeki ani düşüşe ya da yükümlülüklerin beklenmedik çekilmesine karşı tampon.
İflasa karşı bir tür sigortadır. Sermaye ne kadar büyükse kötü bir sürprizin bankayı batırma ihtimali o kadar düşük.

## Q
EN: When a bank writes off a 2-million-dollar loan that will not be repaid, its bank capital:
TR: Banka geri ödenmeyecek 2 milyon dolarlık krediyi sildiğinde sermayesi ne olur?
+ falls by 2 million dollars
- rises by 2 million dollars
- does not change, because deposits fall by 2 million
- falls by 4 million dollars
HINT: Varlıklar 2 azalır. Yükümlülükler değişir mi?
EX: **Doğru cevap:** 2 milyon dolar azalır.
Krediler (varlık) 2 milyon azalır; mevduat ve borçlar (yükümlülük) aynı kalır. Sermaye = varlık − yükümlülük, dolayısıyla 2 milyon düşer.

## Q
EN: Large certificates of deposit (over 100,000 dollars) are important for bank financing because they:
TR: Büyük mevduat sertifikaları (100.000 doların üstü) banka finansmanında neden önemlidir?
+ are negotiable and let banks raise funds without changing the asset side of the balance sheet
- are counted as bank capital
- pay no interest
- can be withdrawn by check at any time
HINT: Piyasada alınıp satılabilirler; banka ihtiyaç duyunca bunlarla ne yapabilir?
EX: **Doğru cevap:** pazarlığa açıktırlar ve bankanın varlık tarafını değiştirmeden fon toplamasını sağlarlar.
Likidite yönetiminde (ders 4) yükümlülük yönetiminin temel aracıdır.

## GEN bankBS

--- LESSON u8c | ROE | Kârlılık ve bilanço dışı işlemler
FX: ROA = vergi sonrası net kâr / toplam varlık :: varlıkların ne kadar verimli kullanıldığı
FX: ROE = vergi sonrası net kâr / banka sermayesi :: sahiplerin getirisi
FX: ROE = ROA × (varlık / sermaye) :: kaldıraç bağlantısı
FX: Net faiz geliri = faiz geliri − faiz gideri :: net faiz marjı = NII / toplam varlık
FX: Bilanço dışı :: kredi limiti · akreditif · teminat mektubu (standby LC)

## CARD ROA, ROE ve kaldıraç
| Ölçü | Formül | Ne gösterir? |
| ==ROA (return on assets)== | vergi sonrası net kâr ÷ toplam varlık | bankanın varlıklarını ne kadar verimli kullandığı |
| ==ROE (return on equity)== | vergi sonrası net kâr ÷ banka sermayesi | **sahiplerin** getirisi |
ROA sahipler için kendi yatırımlarının getirisinden (ROE) daha az önemlidir. İkisi **kaldıraçla** bağlıdır; kaldıraç ölçüsü varlık ÷ sermaye:
$$ROE = ROA\times\frac{\text{banka varlıkları}}{\text{banka sermayesi}}$$
:::ornek
ROA %1, varlık/sermaye 10: ROE $1\times10 = \%10$. Aynı ROA ile kaldıraç 20 olsaydı ROE %20 olurdu, ama risk de iki katına çıkardı.
:::
• Kriz öncesinde tipik ABD bankasının ROA'sı yaklaşık **%1.3**.
• Büyük bankaların ROE'si küçüklerden yüksek: daha fazla kaldıraç, daha riskli varlık karışımı ya da ölçek ekonomisi. Krizdeki kötü performans ve sonraki ılımlı getiriler, yüksek getirilerin en azından kısmen kaldıraçtan ya da riskli varlıklardan geldiğini düşündürüyor.

## CARD Net faiz geliri ve marjı
Bankalar yükümlülüklerine faiz öder (mevduat, borçlanma → **faiz gideri**), varlıklarından faiz alır (menkul kıymet, kredi → **faiz geliri**).
• ==Net faiz geliri (net interest income)== = faiz geliri − faiz gideri.
• ==Net faiz marjı (net interest margin)== = net faiz geliri ÷ toplam varlık. Bankanın faiz farkı: varlıklardan alınan ile yükümlülüklere ödenen faiz arasındaki ağırlıklı ortalama fark.
İyi yönetilen bankaların net faiz geliri ve marjı yüksektir. Marj şu an iyileşiyorsa kârlılık muhtemelen ileride de iyileşir.
:::dikkat Sermayeye faiz ödenmez
Faiz gideri sadece yükümlülükler üzerinden hesaplanır. Varlıklar 100, sermaye 10 ise faiz ödenen kısım 90'dır.
:::

## CARD Bilanço dışı işlemler
Ücret geliri için bankalar bilançoda görünmeyen işlemler yapar:
• ==Kredi limiti (line of credit)==: kredi kartı limitine benzer. Firma ücret öder, istediği zaman borçlanma hakkı (==kredi taahhüdü==) alır. Firma limiti kullanınca işlem bilançoya girer.
• ==Akreditif (letter of credit)==: müşterinin söz verdiği ödemeyi yapabileceğini garanti eder; örneğin ihracatçıya, mal teslim alınınca ödemenin yapılacağını garanti eden ticari akreditif. Banka riski üstlenir, ücret alır.
• ==Teminat mektubu (standby letter of credit)==: piyasadan borçlanmak isteyen firma ve devletlere verilir; bir tür sigortadır.
Bu işlemler bankayı **bilançoda kolayca görünmeyen** risklere maruz bırakır. Modern araçlar riskin transferini mümkün kıldıkça kurumlar riski dışarıdan fark edilmesi çok zor biçimlerde biriktirebilir.
:::ipucu Kitaptaki kutular
• **Maaş günü kredisi (payday loan):** küçük dükkânlar ana akım kurumlardan borç alamayanlara çok pahalı krediler verir; yasalar sınırlamaya başladı.
• **Eşten eşe (P2P) borçlanma:** bireyler aracı kurumu atlayıp yatırımcılardan doğrudan borç alır. Ama aracılar asimetrik bilgiyi çözer: borçluları tarar ve izler.
• **Çin'de gölge bankacılık:** 2008'de iç talebi artırmak için kredi gevşetildi; bankaların %10'u aşan faizli, mevduata benzer ürünler sunmasına izin verildi: arka kapıdan finansal serbestleşme.
:::

## Q
EN: A bank has total assets of 500 million dollars, bank capital of 50 million and net profit after taxes of 5 million. Its return on equity is:
TR: Bankanın toplam varlığı 500 milyon, sermayesi 50 milyon, vergi sonrası net kârı 5 milyon dolar. ROE kaçtır?
+ 10%
- 1%
- 0.1%
- 100%
HINT: ROE = net kâr ÷ sermaye.
EX: **Doğru cevap: %10.**
$5/50 = 0.10$.
**Diğer şıklar ne?**
• %1: ROA ($5/500$).
• %0.1: anlamsız.
• %100: kaldıraç oranıyla karıştırma.

## Q
EN: A bank's ROA is 1.2% and its ratio of assets to capital is 12. Its ROE is:
TR: Bankanın ROA'sı %1.2, varlık/sermaye oranı 12. ROE kaçtır?
+ 14.4%
- 0.1%
- 13.2%
- 1.2%
HINT: ROE = ROA × (varlık ÷ sermaye).
EX: **Doğru cevap: %14.4.**
$1.2\times12 = 14.4$.
**Diğer şıklar ne?**
• %0.1: bölmek ($1.2/12$).
• %13.2: toplamak.
• %1.2: ROA'nın kendisi.

## Q
EN: Return on assets (ROA) is a measure of:
TR: ROA neyin ölçüsüdür?
+ how efficiently a bank uses its assets
- the return to the bank's owners on their own investment
- the bank's leverage
- the bank's liquidity
HINT: Payda toplam varlık.
EX: **Doğru cevap:** bankanın varlıklarını ne kadar verimli kullandığının.
Sahiplerin getirisi ROE'dir; kitap ROA'nın sahipler için ROE'den daha az önemli olduğunu söyler.

## Q
EN: Net interest margin is defined as:
TR: Net faiz marjı nasıl tanımlanır?
+ net interest income divided by total assets
- interest income divided by bank capital
- net profit divided by total assets
- interest expense divided by deposits
HINT: Önce net faiz geliri (gelir − gider), sonra neye bölünür?
EX: **Doğru cevap:** net faiz geliri ÷ toplam varlık.
Bankanın faiz farkıdır: varlıklardan alınan ile yükümlülüklere ödenen faiz arasındaki ağırlıklı ortalama fark.
**Diğer şıklar ne?**
• Faiz geliri ÷ sermaye: tanım değil.
• Net kâr ÷ varlık: ROA.
• Faiz gideri ÷ mevduat: mevduat maliyeti.

## Q
EN: A firm pays a bank a fee for the right to borrow whenever necessary. Until the firm borrows, this arrangement is:
TR: Firma, istediği zaman borçlanma hakkı için bankaya ücret ödüyor. Firma borçlanana kadar bu düzenleme nedir?
+ an off-balance-sheet activity (a line of credit)
- a deposit on the liability side
- a loan on the asset side
- bank capital
HINT: Henüz para çıkmadı. Bilançoda görünür mü?
EX: **Doğru cevap:** bilanço dışı bir işlem (kredi limiti).
Firma limiti kullanınca işlem bilançoya kredi olarak girer. O zamana kadar banka ücret alır ama bilançoda görünmeyen bir risk taşır.

## Q
EN: Why do large banks tend to have a higher ROE than small banks, according to the textbook?
TR: Kitaba göre büyük bankaların ROE'si neden küçüklerden yüksek olma eğilimindedir?
+ greater leverage, a riskier mix of assets, or significant economies of scale
- they pay no taxes
- they hold more cash
- they have no deposits
HINT: ROE = ROA × kaldıraç. ROE'yi yükseltebilecek üç şey.
EX: **Doğru cevap:** daha fazla kaldıraç, daha riskli varlık karışımı ya da önemli ölçek ekonomileri.
Krizdeki kötü performansları, yüksek getirilerin en azından kısmen kaldıraçtan ya da riskli varlıklardan geldiğini düşündürüyor.

## GEN roaRoe
## GEN nim

--- LESSON u8d | ⛨ | Banka riskleri ve yönetimi
FX: Likidite riski :: ani likit fon talebi; iki tarafta (mevduat çekilişi, kredi limiti)
FX: Kredi riski :: kredilerin geri ödenmemesi; çeşitlendirme ve kredi riski analizi
FX: Faiz oranı riski :: yükümlülükler kısa, varlıklar uzun vadeli; gap analizi
FX: $\Delta\text{kâr} = (\text{duyarlı varlık} - \text{duyarlı yükümlülük})\times\Delta i$ :: gap analizi
FX: Alım-satım (piyasa) riski :: işlemcilerde ahlaki tehlike; sd ve VaR ile limit
FX: Diğer :: operasyonel/siber · kur · ülke (sovereign)

## CARD Likidite riski ve kredi riski
Banka her iş kolundan kâr etmek ister: mevduata kredilerden ve menkul kıymetlerden daha az öder. Bunu yaparken risklere maruz kalır: **likidite, kredi, faiz oranı, alım-satım** (ve diğerleri).
==Likidite riski==: likit fonlara ani talep olması riski. İki tarafta da:
• Yükümlülük tarafı: mevduat çekilişi.
• Varlık tarafı: kredi limitlerinin kullanılması.
Net değeri pozitif olsa bile **likit olmayan banka batabilir**.
**Yönetim:**
• Eski yöntem: ==fazla rezerv== tutmak. Pasif ve pahalı (kredilerden ve menkul kıymetlerden kazanılacak faizden vazgeçilir).
• **Varlık yönetimi:** menkul kıymet satmak (en kolayı: çoğu hazine kâğıdı); kredileri başka bankalara satmak; vadesi gelen krediyi yenilememek (müşteri kaybı, kârlılık düşer).
• **Yükümlülük yönetimi (bankacıların tercihi):** Fed'den ya da diğer bankalardan borçlanmak, ek mevduat çekmek. Büyük CD'ler değerli: varlık tarafını değiştirmeden likidite yönetmeyi sağlar.
2007–2009'da bankalar likit olmayan varlıklarını satamadı ve bunları tutmak için makul maliyetle fon bulamadı; bankalar arası ve toptan para piyasaları kuruyunca birçoğu batma tehlikesine düştü.
==Kredi riski==: kredilerin geri ödenmeme riski. Araçlar:
• **Çeşitlendirme:** farklı kredilerle riski yaymak. Zor olabilir: sadece bir bölgede ya da bir sektörde kredi veren banka yerel ya da sektörel daralmaya maruz kalır; bu riskleri hedge etmenin yolunu bulmalı.
• ==Kredi riski analizi==: borçlunun kredi geçmişine bakıp uygun faizi belirlemek; istatistiksel modeller ve başvurana özgü bilgiyle temerrüt olasılığını tahmin etmek. Krizde bankalar konut ve hane kredilerinin riskini küçümsedi.

## CARD Faiz oranı riski ve gap analizi
Bankanın **yükümlülükleri kısa, varlıkları uzun vadeli**. Bu uyumsuzluk ==faiz oranı riski== yaratır:
• Faizler yükselince varlıkların değeri yükümlülüklerden daha çok düşer, sermaye azalır.
• Faiz yükselişi gelirleri giderlere göre düşürür, kâr doğrudan azalır.
==Faize duyarlı (interest-rate sensitive)==: faiz değişince getirdiği gelirin de değiştiği kalem. Kâr için yükümlülüklerin faizi varlıklarınkinden düşük olmalı (net faiz marjı). **Yükümlülükler varlıklardan daha duyarlıysa faiz artışı kârı keser.**
==Gap analizi==: her 1 puanlık faiz değişiminin kârı ne kadar değiştireceğini tahmin etmek.
$$\Delta\text{kâr} = (\text{faize duyarlı varlıklar} - \text{faize duyarlı yükümlülükler})\times\Delta i$$
:::ornek Kitap
Faize duyarlı varlıklar 20 milyon, faize duyarlı yükümlülükler 50 milyon. Faiz 1 puan artarsa: gelir $+0.2$, gider $+0.5$; kâr $(20 - 50)\times0.01 = -0.3$ milyon dolar.
:::
**Yönetim:** varlık ve yükümlülüklerin faiz duyarlılığını eşleştirmek (faiz riskini azaltır ama **kredi riskini artırır**: örneğin değişken faizli kredi borçluya riski aktarır, borçlu ödeyemeyebilir) ya da türev, özellikle ==faiz swapları== kullanmak. Vade farkları hesaba katılarak analiz geliştirilebilir ama karmaşıklaşır.

## CARD Alım-satım riski ve diğer riskler
==Alım-satım (piyasa) riski==: bankanın sermayesiyle işlem yapan işlemcilerin aldığı araçların değerinin düşmesi riski. İşlemciler kârdan pay alır ama zararı banka öder: ==ahlaki tehlike (moral hazard)==, işlemciler bankanın istediğinden fazla risk alır. Çözüm: üretilen riski **standart sapma ve VaR** ile ölçmek, her işlemcinin riskine limit koyup yakından izlemek. Büyük bankalarda izlemek zor; iyi yönetilen bankalarda bile milyonlarca dolarlık işlem zararları sık. Portföyün riski ne kadar yüksekse o kadar fazla **sermaye** gerekir.
**Sermaye ve kaldıraç:** Sermaye, piyasa riski (varlıkların piyasa değerinin düşmesi) dahil birçok riske karşı tampondur. Krizde bankalar **aşırı kaldıraçlıydı**. ==Piyasa değerine göre muhasebe (mark-to-market)== kuralları varlık fiyatı düşünce değerini **aşağı yazmayı** (writedown) gerektirir; bu sermayeyi azaltır. Bankalar büyük sermaye tutmak istemez çünkü sermaye pahalıdır; kaldıraç arttıkça sermaye başına ödül de risk de artar.
**Diğer riskler:**
| Risk | Açıklama | Yönetim |
| ==Operasyonel risk== | yetersiz ya da başarısız iç süreç, insan ve sistemlerden kayıp | sistemleri ve binaları felakete dayanıklı yapmak, test etmek |
| ==Siber risk== | bilgi teknolojisi sistemlerinin çökmesi ya da ele geçirilmesi | (finans sektörü büyük veri tabanları yüzünden hedef) |
| ==Kur riski== | varlıklar bir para biriminde, yükümlülükler başkasında | aynı para biriminde mevduat toplamak; döviz vadeli ve swap ile hedge |
| ==Ülke (sovereign) riski== | yabancı borçlunun hükümeti ödemeyi yasaklar (krizde dolar ödemelerini kısıtlar) | çeşitlendirme, bazı ülkelere kredi vermemek, türevle hedge |

## Q
EN: Liquidity risk for a bank is:
TR: Banka için likidite riski nedir?
+ the risk of a sudden demand for liquid funds, arising on both sides of the balance sheet
- the risk that loans will not be repaid
- the risk that interest rates will rise
- the risk that a trader loses money
HINT: Mevduat sahipleri paralarını isterse ya da firmalar kredi limitlerini kullanırsa ne gerekir?
EX: **Doğru cevap:** likit fonlara ani talep olması riski; bilançonun iki tarafında da ortaya çıkar.
Mevduat çekilişi yükümlülük tarafı, kredi limitlerinin kullanılması varlık tarafı riskidir. Net değeri pozitif olan banka bile likit olmadığı için batabilir.
**Diğer şıklar ne?**
• Kredilerin ödenmemesi: kredi riski.
• Faizlerin yükselmesi: faiz oranı riski.
• İşlemcinin kaybı: alım-satım riski.

## Q
EN: Bankers prefer to manage liquidity risk mainly by:
TR: Bankacılar likidite riskini esas olarak nasıl yönetmeyi tercih eder?
+ liability management, such as borrowing from other banks or issuing large CDs
- holding very large excess reserves
- refusing to renew all customer loans
- selling all of their securities every day
HINT: Hangi yöntem varlık tarafını değiştirmeden fon sağlar?
EX: **Doğru cevap:** yükümlülük yönetimi: diğer bankalardan ya da Fed'den borçlanmak, büyük CD ihraç etmek.
Büyük CD'ler varlık tarafını değiştirmeden likidite riskini yönetmeyi sağlar.
**Diğer şıklar neden yanlış?**
• Büyük fazla rezerv: pasif ve pahalı (faiz kaybı).
• Kredileri yenilememek: müşteri kaybettirir, kârı düşürür.
• Bütün menkul kıymetleri satmak: gerçekçi değil.

## Q
EN: A bank has 20 million dollars of interest-rate-sensitive assets and 50 million of interest-rate-sensitive liabilities. If interest rates rise by one percentage point, its profit:
TR: Bankanın faize duyarlı varlıkları 20 milyon, faize duyarlı yükümlülükleri 50 milyon dolar. Faiz 1 puan artarsa kârı ne olur?
+ falls by 0.3 million dollars
- rises by 0.3 million dollars
- falls by 0.7 million dollars
- does not change
HINT: $(20 - 50)\times0.01$.
EX: **Doğru cevap:** 0.3 milyon dolar düşer.
Faiz geliri $20\times0.01 = 0.2$ artar, faiz gideri $50\times0.01 = 0.5$ artar. Net: $-0.3$.
**Diğer şıklar ne?**
• +0.3: işaret ters.
• −0.7: toplamı almak.
• Değişmez: duyarlılıklar eşit olsaydı.

## Q
EN: Matching the interest-rate sensitivity of assets and liabilities (for example, by making adjustable-rate loans) reduces interest-rate risk but:
TR: Varlık ve yükümlülüklerin faiz duyarlılığını eşleştirmek (örneğin değişken faizli kredi vermek) faiz riskini azaltır ama:
+ increases credit risk, because borrowers may be unable to pay when rates rise
- eliminates all other risks too
- increases the bank's leverage automatically
- makes the bank's deposits uninsured
HINT: Faiz yükselince değişken faizli kredinin taksiti kime yük olur?
EX: **Doğru cevap:** kredi riskini artırır; faiz yükselince borçlular ödeyemeyebilir.
Faiz riski bankadan borçluya aktarılır; borçlu zorlanırsa temerrüt (kredi riski) artar. Alternatif: faiz swapları.

## Q
EN: Why does trading create a moral hazard problem for banks?
TR: Alım-satım neden bankalar için ahlaki tehlike sorunu yaratır?
+ Traders share in the profits from good investments, but the bank pays for the losses.
- Traders must return all profits to depositors.
- Trading is forbidden by regulators.
- Traders cannot take any risk.
HINT: Kazanırsa işlemci prim alır; kaybederse kim öder?
EX: **Doğru cevap:** işlemciler iyi yatırımların kârından pay alır ama zararı banka öder.
Bu yüzden işlemciler bankanın istediğinden fazla risk alır. Çözüm: riski sd ve VaR ile ölçmek, limit koymak ve yakından izlemek.

## Q
EN: Sovereign risk arises when:
TR: Ülke (sovereign) riski ne zaman ortaya çıkar?
+ foreign borrowers cannot repay because their government prohibits them from doing so
- a bank's computer systems are hacked
- interest rates in the domestic economy rise
- a bank holds too much cash
HINT: Borçlu ödemek istiyor ama kendi hükümeti izin vermiyor.
EX: **Doğru cevap:** yabancı borçlular, hükümetleri yasakladığı için ödeyemediğinde.
Finansal krizdeki bir ülkenin hükümeti dolar ödemelerini kısıtlayabilir. Yönetim: çeşitlendirme, bazı ülkelere kredi vermemek, türevle hedge.
**Diğer şıklar ne?**
• Bilgisayar sistemlerine saldırı: siber risk.
• Yurt içi faiz artışı: faiz oranı riski.
• Çok nakit: kârlılık sorunu, risk türü değil.

## Q
EN: Under mark-to-market accounting, when the market price of a bank's assets falls:
TR: Piyasa değerine göre muhasebede bankanın varlıklarının piyasa fiyatı düşünce ne olur?
+ the assets are written down and the bank's capital falls
- the bank's capital rises
- nothing changes until the assets are sold
- deposits are written down
HINT: Varlıklar azalırsa, yükümlülükler aynıysa sermaye?
EX: **Doğru cevap:** varlıkların değeri aşağı yazılır ve banka sermayesi azalır.
Yükümlülükler değişmediği için değer kaybının tamamı sermayeden düşer. Kaldıraç yüksekse küçük fiyat düşüşleri bile sermayeyi eritir.

## Q
EN: Foreign exchange risk for a bank comes from:
TR: Banka için kur riski nereden gelir?
+ holding assets denominated in one currency and liabilities denominated in another
- holding only domestic-currency assets and liabilities
- making loans to domestic consumers
- borrowing in the federal funds market
HINT: Varlık ve yükümlülüğün para birimleri farklıysa kur değişince ne olur?
EX: **Doğru cevap:** varlıkların bir para biriminde, yükümlülüklerin başka bir para biriminde olması.
Yönetim: kredilerle aynı para biriminde mevduat toplamak ya da döviz vadeli işlemleri ve swaplarla hedge etmek. İki yol da yönetilmesi gereken başka riskler getirebilir.

## GEN gap
`);
