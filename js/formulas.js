window.FORMULAS = String.raw`
## Bölüm 1–3 · Sistem, para, araçlar
| Kavram | Özet |
| Finansal sistemin 6 parçası | para, finansal araçlar, piyasalar, kurumlar, düzenleyiciler, merkez bankası |
| 5 temel ilke | zamanın değeri var · risk karşılık ister · karar bilgiye dayanır · fiyatı piyasa belirler · istikrar refahı artırır |
| Paranın 3 işlevi | ödeme aracı (en önemlisi) · hesap birimi · değer saklama |
| Gelir / servet | gelir = zaman içinde akış · servet = varlıklar − yükümlülükler (stok) |
| Likidite | bir varlığın ödeme aracına ne kadar kolay ve ucuz çevrildiği |
| M1 | dolaşımdaki nakit + vadesiz mevduat + diğer çekle çekilebilir mevduat |
| M2 | M1 + tasarruf mevduatı (MMDA dahil) + küçük vadeli mevduat (100 bin dolar altı) + bireysel para piyasası fonları |
| Enflasyon (TÜFE) | $\pi = \dfrac{\text{sepet}_{\text{yeni}} - \text{sepet}_{\text{eski}}}{\text{sepet}_{\text{eski}}}$ |
| Kaldıraç oranı | $\dfrac{\text{yatırımın toplam tutarı}}{\text{sahibin koyduğu para}} = \dfrac{\text{varlık}}{\text{özsermaye}}$ |
| Değeri belirleyen 4 özellik | ödeme büyüklüğü · zamanlaması · ödenme ihtimali · hangi koşulda ödendiği |

## Bölüm 4 · Zamanın değeri
| Kavram | Formül |
| Gelecek değer | $FV_n = PV(1+i)^n$ |
| Bugünkü değer | $PV = \dfrac{FV_n}{(1+i)^n}$ |
| Aylık faiz | $(1+i_m)^{12} = 1+i \Rightarrow i_m = (1+i)^{1/12} - 1$ |
| Yıllık bileşik oran | $(1+i_m)^{12} - 1$ (örnek: aylık %0.5 → yıllık %6.17) |
| Yıllık ortalama büyüme | $i = (FV/PV)^{1/n} - 1$ |
| 72 kuralı | ikiye katlanma süresi ≈ $72 / (\text{yüzde faiz})$ |
| Baz puan | 1 baz puan = %0.01 = 0.0001 |
| Ödeme akışının PV'si | $\dfrac{C_1}{1+i} + \dfrac{C_2}{(1+i)^2} + \dots + \dfrac{C_n}{(1+i)^n}$ |
| İç verim oranı | maliyet = gelecekteki gelirlerin PV'si eşitliğini sağlayan $i$ |
| Kuponlu tahvil | $P_{CB} = \dfrac{C}{1+i} + \dots + \dfrac{C}{(1+i)^n} + \dfrac{F}{(1+i)^n}$ |
| Fisher | $i = r + \pi^e$, $\ r = i - \pi^e$ |

## Bölüm 5 · Risk
| Kavram | Formül |
| Beklenen değer | $E = \sum p_k \times \text{getiri}_k$ (olasılıklar toplamı 1) |
| Beklenen getiri | $(E - \text{yatırım})/\text{yatırım}$ |
| Varyans | $\sigma^2 = \sum p_k(\text{getiri}_k - E)^2$ |
| Standart sapma | $\sigma = \sqrt{\sigma^2}$ (normal birimde, varyans karesel birimde) |
| Riske maruz değer (VaR) | belli olasılıkta, belli sürede en kötü kayıp |
| Kaldıraç etkisi | beklenen getiri ve standart sapma kaldıraç oranıyla çarpılır |
| Risk primi | riskli varlığın beklenen getirisi − risksiz getiri |
| Çeşitlendirme | $n$ bağımsız eşit riskte sd $\approx \sigma/\sqrt n$; hedge = zıt yönlü iki risk |

## Bölüm 6 · Tahviller
| Kavram | Formül |
| Sıfır kuponlu tahvil | $P = \dfrac{100}{(1+i)^n}$, $\ i = (100/P)^{1/n} - 1$ |
| 6 aylık bono | $P = \dfrac{100}{(1+i)^{1/2}}$ |
| Sabit ödemeli kredi | kredi tutarı = taksitlerin PV'si |
| Konsol (sürekli tahvil) | $P = C/i$ |
| Vadeye kadar getiri | fiyat = bütün ödemelerin PV'si eşitliğini sağlayan $i$; 1 yıllık: $i = (C+F)/P - 1$ |
| Fiyat ↔ YTM | $P = F$ ⇒ YTM = kupon oranı · $P > F$ ⇒ YTM < kupon · $P < F$ ⇒ YTM > kupon |
| Cari getiri | $C/P$ · fiyat nominalin altındaysa: kupon oranı < cari getiri < YTM |
| Elde tutma getirisi | $\dfrac{C}{P_0} + \dfrac{P_1 - P_0}{P_0}$ = cari getiri + sermaye kazancı |
| Temerrüt riskli fiyat | $P = \dfrac{\text{beklenen ödeme}}{1 + i^{rf}}$, vaat edilen getiri $= \dfrac{C+F}{P} - 1$ |
| Faiz bileşenleri | reel faiz + beklenen enflasyon + enflasyon riski telafisi |

## Bölüm 6 · Tahvil arzı ve talebi
| Değişim | Kayan eğri → fiyat, faiz |
| Devlet borçlanması ↑ | arz sağa → fiyat ↓, faiz ↑ |
| İş koşulları iyileşir | arz sağa (ve talep sağa) |
| Beklenen enflasyon ↑ | arz sağa + talep sola → fiyat ↓, faiz ↑ (miktar belirsiz) |
| Servet ↑ | talep sağa → fiyat ↑, faiz ↓ |
| Beklenen faiz ↓ (fiyat ↑ beklentisi) | talep sağa → fiyat ↑ |
| Tahvil göreli olarak daha az riskli / daha likit | talep sağa → fiyat ↑, faiz ↓ |
| Resesyon | arz sola (daha çok) + talep sola → fiyat ↑, faiz ↓ |

## Bölüm 7 · Risk ve vade yapısı
| Kavram | Formül |
| Tahvil getirisi | Hazine getirisi + temerrüt risk primi |
| Yatırım yapılabilir sınıf | Moody's Baa ve üstü, S&P BBB ve üstü; altı junk / high-yield |
| Vergiden muaf getiri | $i_{\text{muaf}} = i_{\text{vergili}}\times(1 - t)$ |
| Beklentiler hipotezi | $i_{2t} \approx \dfrac{i_{1t} + i^e_{1t+1}}{2}$, $\ i_{nt} = \dfrac{i_{1t} + i^e_{1t+1} + \dots + i^e_{1t+n-1}}{n}$ |
| Kesin hali | $(1+i_{2t})^2 = (1+i_{1t})(1+i^e_{1t+1})$ |
| Likidite primi teorisi | $i_{nt} = \dfrac{i_{1t} + \dots + i^e_{1t+n-1}}{n} + rp_n$, $\ rp_n$ vadeyle artar |
| Getiri eğrisi | yukarı eğimli: normal · ters (kısa > uzun): yavaşlama sinyali |
| Risk farkı (spread) | Baa − Hazine; resesyon yaklaşırken açılır |
| Vade farkı (term spread) | 10 yıllık − kısa vadeli; düşerse ertesi yıl büyüme düşer |

## Bölüm 12 · Bankalar
| Kavram | Formül |
| Bilanço | varlıklar = yükümlülükler + banka sermayesi |
| Varlıklar | nakit (rezervler dahil) · menkul kıymetler · krediler · diğer |
| Yükümlülükler | çekle çekilebilir mevduat · vadesiz olmayan mevduat · borçlanma (Fed, fed funds, repo) |
| ROA | $\dfrac{\text{vergi sonrası net kâr}}{\text{toplam varlık}}$ |
| ROE | $\dfrac{\text{vergi sonrası net kâr}}{\text{banka sermayesi}} = ROA\times\dfrac{\text{varlık}}{\text{sermaye}}$ |
| Net faiz geliri | faiz geliri − faiz gideri |
| Net faiz marjı | net faiz geliri ÷ toplam varlık |
| Gap analizi | $\Delta \text{kâr} = (\text{faize duyarlı varlık} - \text{faize duyarlı yükümlülük})\times\Delta i$ |
| Riskler | likidite · kredi · faiz oranı · alım-satım (piyasa) · operasyonel · kur · ülke (sovereign) |

## Economist · Tahvil piyasaları (Ekim 2026)
| Kavram | Formül |
| Fiyat ↔ getiri | getiri yükselir ⇔ tahvil fiyatı düşer ("sell-off") |
| Vade primi (term premium) | uzun vadeli tahvili tutmak için istenen ek getiri |
| Ülke farkı | Fransa 10 yıllık − Almanya 10 yıllık (Ekim 2026: 1.5 puandan fazla) |
| Borç dinamiği | $r > g$ ise borç/GSYH, vergi artışı ya da harcama kesintisi olmadan büyür |
| Faiz dışı (birincil) denge | vergiler − faiz dışı harcamalar |
| Borcu sabitleyen faiz dışı fazla | $\approx (r - g)\times\dfrac{\text{borç}}{\text{GSYH}}$ |
`;
