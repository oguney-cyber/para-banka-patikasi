/* Soru üreticileri (Para ve Banka). Her üretici {en, tr, opts:[doğru, ...yanlışlar], ex} döndürür. */
(function (root) {
  'use strict';
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const RF = (a, b, step) => { const n = Math.round((b - a) / step); return +(a + step * R(0, n)).toFixed(6); };
  const f = (x, d) => { let s = (+x).toFixed(d); if (/^-0\.?0*$/.test(s)) s = s.slice(1); return s; };

  // Sayısal şıklar: doğru + yanlışlar; eksik kalırsa doğru değerin yakınından doldur.
  function nopts(correct, wrongs, d, opt) {
    opt = opt || {};
    const lo = opt.min != null ? opt.min : -Infinity, hi = opt.max != null ? opt.max : Infinity;
    const fmt = opt.fmt || ((x) => f(x, d));
    const c = fmt(correct); const out = [c];
    for (const w of wrongs) {
      if (w == null || !isFinite(w) || w < lo || w > hi) continue;
      if (Math.abs(w) < 1e-9 && Math.abs(correct) > 1e-9) continue;   // sıfır yanlış şık anlamsız görünür
      const s = fmt(w); if (!out.includes(s)) out.push(s); if (out.length === 4) break;
    }
    const st = [0.2, -0.2, 0.4, -0.4, 0.6, 0.12, -0.12, 0.8, -0.6, 1];
    for (let k = 0; out.length < 4 && k < 40; k++) {
      const s0 = st[k % st.length] * (1 + Math.floor(k / st.length));
      const base = Math.abs(correct) < 1e-9 ? 1 : Math.abs(correct);
      const v = correct + s0 * base * (opt.spread || 0.5);
      if (v < lo || v > hi || (Math.abs(v) < 1e-9 && Math.abs(correct) > 1e-9)) continue;
      const s = fmt(v); if (!out.includes(s)) out.push(s);
    }
    return out;
  }
  // Adım adım çözüm metni: steps(['başlık', 'gövde'], ...) → "**Adım 1: başlık**\ngövde\n\n**Adım 2: ...**"
  const steps = (...a) => a.filter(Boolean).map((s, i) => `**Adım ${i + 1}: ${s[0]}**\n${s[1]}`).join('\n\n');
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  const pc = (x, d) => f(x * 100, d == null ? 2 : d);          // 0.0526 → "5.26"
  const P = (x, d) => pc(x, d) + '\\%';                         // TeX içinde yüzde
  const T = (x, d) => '%' + pc(x, d);                           // Türkçe metinde yüzde
  const m2 = (x) => f(x, 2);
  // yüzde şıkları: değerler oran (0.05) olarak verilir, "5.00%" biçiminde yazılır
  const popt = (c, ws, d, o) => { d = d == null ? 2 : d; return nopts(c * 100, ws.map(w => (w == null || !isFinite(w)) ? null : w * 100), d, Object.assign({ fmt: (v) => f(v, d) + '%' }, o || {})); };
  const ip = (x) => Math.round(x * 100);                        // 0.05 → 5

  const G = {};

  /* ---------- Bölüm 2: paranın ölçümü ---------- */
  G.cpiInfl = () => {
    const v = R(0, 2);
    if (v < 2) {
      const idx = v === 1;
      let b0; do { b0 = idx ? R(104, 160) : R(40, 90) * 10; } while (b0 === 100);
      const pi = RF(0.01, 0.15, 0.005);
      const b1 = idx ? +(b0 * (1 + pi)).toFixed(1) : Math.round(b0 * (1 + pi));
      const d = +(b1 - b0).toFixed(1), inf = d / b0;
      return {
        en: idx ? `A price index (CPI) was ${b0} last year and is ${b1} this year. What is the inflation rate?` : `A survey shows that the typical basket of goods and services cost ${b0} dollars last year. The same basket costs ${b1} dollars this year. What is the CPI inflation rate?`,
        tr: idx ? `Fiyat endeksi (TÜFE) geçen yıl ${b0}, bu yıl ${b1}. Enflasyon oranı kaçtır?` : `Aynı mal ve hizmet sepeti geçen yıl ${b0}, bu yıl ${b1} dolar. TÜFE enflasyonu kaçtır?`,
        opts: popt(inf, [d / b1, d / 100, 2 * d / (b0 + b1) + 0.0001], 2),
        ex: steps(
          ['Fiyattaki değişimi bul', `Aynı sepet ne kadar pahalandı? $${b1} - ${b0} = ${d}$`],
          ['Eski (başlangıç) fiyata böl', `Yüzde değişim her zaman **başlangıç** değerine göre hesaplanır:\n$${d}/${b0} = ${f(inf, 4)}$`],
          ['Yüzdeye çevir', `$${f(inf, 4)}\\times 100 = ${P(inf)}$`]) + `\n\nAynı sepeti almak için %${pc(inf)} daha fazla para gerekiyor. Enflasyon = paranın satın alma gücünün düşmesi.`
      };
    }
    const cur = R(1500, 1800), tc = R(1, 3), dd = R(1400, 1800), oc = R(500, 800), sav = R(9000, 11000), small = R(300, 600), mmf = R(900, 1200), large = R(1500, 2000);
    const M1 = cur + tc + dd + oc, M2 = M1 + sav + small + mmf, askM2 = Math.random() < 0.55;
    const rows = [['Currency in the hands of the public', cur], ["Traveler's checks", tc], ['Demand deposits', dd], ['Other checkable deposits', oc], ['Savings deposits and money-market deposit accounts', sav], ['Small-denomination time deposits', small], ['Retail money-market mutual fund shares', mmf], ['Large-denomination time deposits', large]];
    const tbl = '\n| Item | Billions of dollars |\n' + rows.map(r => `| ${r[0]} | ${r[1]} |`).join('\n');
    return {
      en: `Using the data below and the textbook definitions, what is ${askM2 ? 'M2' : 'M1'} (in billions of dollars)?` + tbl,
      tr: `Tablodaki verilerle ve kitaptaki tanımlarla ${askM2 ? 'M2' : 'M1'} kaç milyar dolardır?`,
      opts: askM2 ? nopts(M2, [M2 + large, M1, sav + small + mmf, M2 - tc], 0) : nopts(M1, [M1 + sav, cur + dd, M1 + small, cur], 0),
      ex: steps(
        ['M1 = en likit varlıklar', `M1 = dolaşımdaki nakit + seyahat çekleri + vadesiz mevduat + diğer çekle çekilebilir mevduat\n$${cur} + ${tc} + ${dd} + ${oc} = ${M1}$`],
        askM2 && ['M2 = M1 + ödeme aracı olarak kullanılmayan ama kolay paraya çevrilen varlıklar', `M2 = M1 + tasarruf mevduatı ve MMDA + küçük vadeli mevduat + bireysel para piyasası fonları\n$${M1} + ${sav} + ${small} + ${mmf} = ${M2}$`],
        ['Dışarıda kalanı not et', `Büyük vadeli mevduat (${large}) M1'e de M2'ye de girmez. Büyük, pazarlığa açık mevduat sertifikalarıdır; likiditesi düşüktür.`])
        + `\n\n**Cevap:** ${askM2 ? 'M2' : 'M1'} = ${askM2 ? M2 : M1} milyar dolar. (Kitaptaki tanım; Fed 2020'de tasarruf mevduatını M1'e aldı.)`
    };
  };

  /* ---------- Bölüm 4: gelecek değer, bugünkü değer ---------- */
  G.fv = () => {
    const pv = pick([100, 200, 500, 1000, 2000, 5000]), i = R(2, 12) / 100, n = R(2, 10);
    const k = Math.pow(1 + i, n), fv = pv * k, simple = pv * (1 + i * n);
    const st = [['Faizi ondalık sayıya çevir', `%${ip(i)} = ${f(i, 2)}. Bir yıllık büyüme çarpanı $1 + ${f(i, 2)} = ${f(1 + i, 2)}$`],
      ['Çarpanın yıl sayısı kadar kuvvetini al', `Para her yıl ${f(1 + i, 2)} ile çarpılır; ${n} yılda bu ${n} kez olur:\n$(${f(1 + i, 2)})^{${n}} = ${f(k, 4)}$`],
      ['Bugünkü değerle çarp', `$FV_{${n}} = ${pv}\\times${f(k, 4)} = ${m2(fv)}$`]];
    const note = `\n\nBasit faizle (faizin faizi olmadan) $${pv}\\times(1 + ${n}\\times${f(i, 2)}) = ${m2(simple)}$ olurdu. Aradaki ${m2(fv - simple)} dolar **faizin faizi** (bileşik faiz).`;
    if (Math.random() < 0.65) return {
      en: `You deposit ${pv} dollars today at ${ip(i)}% annual interest, compounded once a year. What is the future value after ${n} years?`,
      tr: `Bugün ${pv} dolar, yıllık %${ip(i)} bileşik faizle yatırılıyor. ${n} yıl sonraki gelecek değer kaçtır?`,
      opts: nopts(fv, [simple, pv * (1 + i) * n, pv * Math.pow(1 + i, n - 1), pv / k], 2, { min: 0 }), ex: steps(...st) + note
    };
    const tot = fv - pv;
    return {
      en: `You deposit ${pv} dollars at ${ip(i)}% annual compound interest. How much interest in total (in dollars) have you earned after ${n} years?`,
      tr: `${pv} dolar yıllık %${ip(i)} bileşik faizle yatırılıyor. ${n} yılda toplam kaç dolar faiz kazanılır?`,
      opts: nopts(tot, [pv * i * n, fv, pv * i, tot - pv * i * n], 2, { min: 0 }),
      ex: steps(...st, ['Kazanılan faizi bul', `Faiz = gelecek değer − yatırılan para:\n$${m2(fv)} - ${pv} = ${m2(tot)}$`]) + note
    };
  };

  G.rate = () => {
    const v = R(0, 3);
    if (v === 0) {
      const im = pick([0.004, 0.005, 0.006, 0.008, 0.01, 0.0125, 0.015]), k = Math.pow(1 + im, 12), a = k - 1;
      return {
        en: `An investment grows by ${f(im * 100, 2)}% per month. What is the compound annual growth rate?`,
        tr: `Ayda %${f(im * 100, 2)} büyüyen bir yatırımın yıllık bileşik büyüme oranı kaçtır?`,
        opts: popt(a, [12 * im, Math.pow(1 + im, 11) - 1, 12 * im - im / 2], 2),
        ex: steps(
          ['Aylık çarpanı yaz', `Her ay değer $1 + ${f(im, 4)} = ${f(1 + im, 4)}$ ile çarpılır.`],
          ['12 ay boyunca çarp', `$(${f(1 + im, 4)})^{12} = ${f(k, 4)}$`],
          ['1 çıkar, yüzdeye çevir', `$${f(k, 4)} - 1 = ${f(a, 4)}$, yani ${T(a)}`]) + `\n\n$12\\times${P(im)} = ${P(12 * im)}$ daha **küçük**: basit çarpım faizin faizini atlar.`
      };
    }
    if (v === 1) {
      const i = R(3, 12) / 100, im = Math.pow(1 + i, 1 / 12) - 1;
      return {
        en: `The annual interest rate is ${ip(i)}%. What is the equivalent monthly interest rate (compounded monthly)?`,
        tr: `Yıllık faiz %${ip(i)}. Buna denk aylık (aylık bileşik) faiz kaçtır?`,
        opts: popt(im, [i / 12, i / 12 * (1 + i), (Math.pow(1 + i, 1 / 12) - 1) * 12], 3),
        ex: steps(
          ['Denkliği kur', `12 ay aylık faizle büyümek, 1 yıl yıllık faizle büyümekle aynı sonucu vermeli:\n$(1+i_m)^{12} = ${f(1 + i, 2)}$`],
          ['12. kökü al', `$1 + i_m = (${f(1 + i, 2)})^{1/12} = ${f(1 + im, 5)}$`],
          ['1 çıkar', `$i_m = ${f(im, 5)}$, yani ${T(im, 3)}`]) + `\n\n$${ip(i)}/12 = ${f(i / 12 * 100, 3)}$ biraz **büyük**: aylık faiz de bileşiklendiği için gereken aylık oran daha düşük.`
      };
    }
    if (v === 2) {
      const n = R(3, 10), g = RF(0.02, 0.09, 0.005), fv = Math.round(100 * Math.pow(1 + g, n)), r = fv / 100, i = Math.pow(r, 1 / n) - 1;
      return {
        en: `An investment grew from 100 to ${fv} over ${n} years. What was its average annual (compound) growth rate?`,
        tr: `Bir yatırım ${n} yılda 100 iken ${fv} oldu. Yıllık ortalama (bileşik) büyüme oranı kaçtır?`,
        opts: popt(i, [(r - 1) / n, r - 1, Math.pow(r, 1 / (n + 1)) - 1], 2),
        ex: steps(
          ['Gelecek değer formülünü kur', `$FV_n = PV(1+i)^n \\Rightarrow ${fv} = 100(1+i)^{${n}}$`],
          ['Toplam büyüme çarpanını bul', `$(1+i)^{${n}} = ${fv}/100 = ${f(r, 2)}$`],
          [`${n}. kökü al`, `$1 + i = (${f(r, 2)})^{1/${n}} = ${f(1 + i, 4)}$, yani $i = ${P(i)}$`]) + `\n\nToplam artışı ($${P(r - 1, 0)}$) yıl sayısına bölmek (${T((r - 1) / n)}) yanlış: bileşik büyümeyi hesaba katmaz.`
      };
    }
    const x = R(100, 600) / 100, d = R(5, 150), y = +(x + d / 100).toFixed(2);
    return {
      en: `An interest rate rises from ${f(x, 2)}% to ${f(y, 2)}%. By how many basis points did it rise?`,
      tr: `Bir faiz önce %${f(x, 2)}, sonra %${f(y, 2)}. Kaç baz puan arttı?`,
      opts: [String(d), f(d / 100, 2), String(d * 10), f(d / 10, 1)],
      ex: steps(['Farkı yüzde puan olarak bul', `$${f(y, 2)} - ${f(x, 2)} = ${f(d / 100, 2)}$ yüzde puan`],
        ['Baz puana çevir', `1 baz puan = yüzde puanın yüzde biri = %0.01. Bu yüzden 100 ile çarp:\n$${f(d / 100, 2)}\\times 100 = ${d}$ baz puan`])
    };
  };

  G.rule72 = () => {
    if (Math.random() < 0.6) {
      const i = pick([2, 3, 4, 6, 8, 9, 12]), yrs = 72 / i, exact = Math.log(2) / Math.log(1 + i / 100);
      return {
        en: `Using the rule of 72, approximately how many years does it take an investment to double at ${i}% annual interest?`,
        tr: `72 kuralıyla, yıllık %${i} faizle bir yatırım yaklaşık kaç yılda ikiye katlanır?`,
        opts: nopts(yrs, [100 / i, 72 * i / 100, 72 / (2 * i), 2 * i], 1, { min: 0 }),
        ex: steps(['Kuralı yaz', 'İkiye katlanma süresi ≈ 72 ÷ yüzde olarak faiz.'], ['Böl', `$72/${i} = ${f(yrs, 1)}$ yıl`])
          + `\n\n**Kontrol:** $(${f(1 + i / 100, 2)})^{${f(yrs, 1)}} = ${f(Math.pow(1 + i / 100, yrs), 3)}$, yani yaklaşık 2. Kesin süre $\\ln 2/\\ln ${f(1 + i / 100, 2)} = ${f(exact, 2)}$ yıl.`
      };
    }
    const n = pick([4, 6, 8, 9, 12, 18, 24]), r = 72 / n;
    return {
      en: `You want your savings to double in ${n} years. Using the rule of 72, approximately what annual interest rate do you need?`,
      tr: `Birikimin ${n} yılda ikiye katlansın istiyorsun. 72 kuralına göre yaklaşık yıllık faiz kaç olmalı?`,
      opts: nopts(r, [100 / n, 36 / n, 144 / n], 1, { fmt: (v) => f(v, 1) + '%' }),
      ex: steps(['Kuralı ters çevir', 'Süre ≈ 72 / faiz ise faiz ≈ 72 / süre.'], ['Böl', `$72/${n} = ${f(r, 1)}$, yani yaklaşık %${f(r, 1)}`])
        + `\n\n%${f(100 / n, 1)} (100/${n}) basit faizle ikiye katlanma olurdu; bileşik faizde daha düşük oran yeter.`
    };
  };

  G.pv = () => {
    const fv = pick([100, 500, 1000, 2000, 5000, 10000]), i = R(2, 12) / 100;
    if (Math.random() < 0.7) {
      const n = R(2, 15), k = Math.pow(1 + i, n), pv = fv / k;
      return {
        en: `What is the present value of ${fv} dollars to be received ${n} years from now if the interest rate is ${ip(i)}%?`,
        tr: `${n} yıl sonra alınacak ${fv} doların bugünkü değeri, faiz %${ip(i)} iken kaçtır?`,
        opts: nopts(pv, [fv * k, fv / (1 + i * n), fv / (1 + i), fv * Math.pow(1 - i, n)], 2, { min: 0 }),
        ex: steps(['Formülü yaz', `Bugünkü değer, gelecek değer formülünün tersidir: $PV = FV_n/(1+i)^n$`],
          ['Paydayı hesapla', `$(${f(1 + i, 2)})^{${n}} = ${f(k, 4)}$`],
          ['Böl', `$PV = ${fv}/${f(k, 4)} = ${m2(pv)}$`])
          + `\n\n**Kontrol:** bugün ${m2(pv)} doları %${ip(i)} ile yatırırsan ${n} yıl sonra $${m2(pv)}\\times${f(k, 4)} = ${m2(pv * k)}$ olur.`
      };
    }
    const mo = pick([3, 6, 9, 18]), e = mo / 12, k = Math.pow(1 + i, e), pv = fv / k;
    return {
      en: `The annual interest rate is ${ip(i)}%. What is the present value of ${fv} dollars to be received in ${mo} months?`,
      tr: `Yıllık faiz %${ip(i)}. ${mo} ay sonra alınacak ${fv} doların bugünkü değeri kaçtır?`,
      opts: nopts(pv, [fv / (1 + i), fv / (1 + i * e) - 0.0001 * fv, fv * (1 - i * e), fv / Math.pow(1 + i, mo)], 2, { min: 0 }),
      ex: steps(['Süreyi yıl cinsinden yaz', `${mo} ay = ${mo}/12 = ${f(e, 2)} yıl. Faiz yıllık olduğu için $n = ${f(e, 2)}$.`],
        ['Paydayı hesapla', `$(${f(1 + i, 2)})^{${f(e, 2)}} = ${f(k, 5)}$`],
        ['Böl', `$PV = ${fv}/${f(k, 5)} = ${m2(pv)}$`]) + `\n\nKitaptaki 6 aylık bono örneği de böyle: $100/(1.05)^{1/2} = 97.59$.`
    };
  };

  G.pvStream = () => {
    const i = R(3, 12) / 100, k = R(2, 3), cs = Array.from({ length: k }, () => pick([100, 150, 200, 250, 300, 400, 500]));
    const df = cs.map((c, t) => Math.pow(1 + i, t + 1)), pvs = cs.map((c, t) => c / df[t]), tot = sum(pvs), raw = sum(cs);
    const tb = '\n| Yıl $t$ | Ödeme | $(1+i)^t$ | Bugünkü değer |\n' + cs.map((c, t) => `| ${t + 1} | ${c} | ${f(df[t], 4)} | ${m2(pvs[t])} |`).join('\n') + `\n| **Toplam** | ${raw} | | **${m2(tot)}** |`;
    const list = cs.map((c, t) => `${c} dollars in year ${t + 1}`).join(', ');
    const s1 = ['Her ödemeyi kendi yılı kadar iskontola', `Ödeme $t$ yıl sonra geliyorsa $(1+i)^t$'ye bölünür. Faiz %${ip(i)}:` + tb];
    if (Math.random() < 0.55) return {
      en: `An asset pays ${list}. If the interest rate is ${ip(i)}%, what is the present value of these payments?`,
      tr: `Bir varlık ${cs.map((c, t) => `${t + 1}. yıl ${c}`).join(', ')} dolar ödüyor. Faiz %${ip(i)} iken ödemelerin bugünkü değeri kaçtır?`,
      opts: nopts(tot, [raw, raw / (1 + i), raw / Math.pow(1 + i, k), sum(cs.map((c, t) => c / (1 + i * (t + 1))))], 2, { min: 0 }),
      ex: steps(s1, ['Bugünkü değerleri topla', `$${pvs.map(m2).join(' + ')} = ${m2(tot)}$`]) + `\n\nİskontosuz toplam (${raw}) daha büyük: ileride gelen para bugün daha az eder (zamanın değeri var).`
    };
    const K = Math.round(tot * (1 + RF(-0.12, 0.12, 0.01))), npv = tot - K;
    return {
      en: `A machine costs ${K} dollars today and will produce ${list}. The interest rate is ${ip(i)}%. What is the net present value (present value of the payments minus the cost)?`,
      tr: `Bir makine bugün ${K} dolar; ${cs.map((c, t) => `${t + 1}. yıl ${c}`).join(', ')} dolar kazandıracak. Faiz %${ip(i)}. Net bugünkü değer (ödemelerin PV'si − maliyet) kaçtır?`,
      opts: nopts(npv, [raw - K, -npv, tot, raw / (1 + i) - K], 2),
      ex: steps(s1, ['Bugünkü değerleri topla', `$${pvs.map(m2).join(' + ')} = ${m2(tot)}$`], ['Maliyeti çıkar', `Maliyet bugün ödeniyor, iskontolanmaz:\n$${m2(tot)} - ${K} = ${m2(npv)}$`])
        + `\n\n${npv > 0 ? 'Net bugünkü değer pozitif: getiriler maliyeti karşılıyor, makine alınmalı.' : 'Net bugünkü değer negatif: getiriler maliyeti karşılamıyor, makine alınmamalı.'} Aynı karar iç verim oranıyla da verilir: iç verim oranı faizden büyükse NBD pozitiftir.`
    };
  };

  G.couponBond = () => {
    const F = pick([100, 1000]), c = R(2, 10) / 100, n = R(2, 3); let i; do { i = R(2, 12) / 100; } while (i === c);
    const C = F * c, pays = Array.from({ length: n }, (_, t) => C + (t === n - 1 ? F : 0)), df = pays.map((_, t) => Math.pow(1 + i, t + 1)), pvs = pays.map((p, t) => p / df[t]), Pr = sum(pvs);
    const tb = '\n| Yıl $t$ | Ödeme | $(1+i)^t$ | Bugünkü değer |\n' + pays.map((p, t) => `| ${t + 1} | ${p}${t === n - 1 ? ` (${C} + ${F})` : ''} | ${f(df[t], 4)} | ${m2(pvs[t])} |`).join('\n') + `\n| **Toplam** | | | **${m2(Pr)}** |`;
    const st = [['Kuponu bul', `Kupon = kupon oranı × nominal değer: $C = ${f(c, 2)}\\times${F} = ${C}$. Son yıl kupona ek olarak anapara (${F}) da ödenir.`],
      ['Her ödemeyi piyasa faiziyle iskontola', `Fiyat kupon oranıyla değil, **piyasa faiziyle** (%${ip(i)}) iskontolanır:` + tb],
      ['Topla', `$P = ${pvs.map(m2).join(' + ')} = ${m2(Pr)}$`]];
    if (Math.random() < 0.7) return {
      en: `A ${n}-year bond has a face value of ${F} dollars and a ${ip(c)}% annual coupon. If the interest rate is ${ip(i)}%, what is the price of the bond?`,
      tr: `${n} yıllık, nominal değeri ${F} dolar, yıllık kuponu %${ip(c)} olan tahvilin fiyatı, faiz %${ip(i)} iken kaçtır?`,
      opts: nopts(Pr, [F, (n * C + F) / (1 + i), F / Math.pow(1 + i, n), n * C + F / Math.pow(1 + i, n)], 2, { min: 0 }),
      ex: steps(...st) + `\n\nFaiz (%${ip(i)}) kupon oranından (%${ip(c)}) ${i > c ? 'büyük, fiyat nominal değerin **altında** (iskontolu).' : 'küçük, fiyat nominal değerin **üstünde** (primli).'}`
    };
    const below = i > c;
    return {
      en: `A ${n}-year bond with face value ${F} dollars pays a ${ip(c)}% annual coupon. The market interest rate is ${ip(i)}%. Which statement is correct?`,
      tr: `${n} yıllık, %${ip(c)} kuponlu, ${F} dolar nominalli tahvil; piyasa faizi %${ip(i)}. Hangisi doğru?`,
      opts: below ? ['It sells below its face value, because the interest rate is above the coupon rate', 'It sells above its face value, because the interest rate is above the coupon rate', 'It sells at its face value, because coupon bonds always trade at par', 'It sells below its face value, because the coupon rate is above the interest rate']
        : ['It sells above its face value, because the interest rate is below the coupon rate', 'It sells below its face value, because the interest rate is below the coupon rate', 'It sells at its face value, because coupon bonds always trade at par', 'It sells above its face value, because the interest rate is above the coupon rate'],
      ex: steps(...st, ['Nominal değerle karşılaştır', `$${m2(Pr)} ${below ? '<' : '>'} ${F}$. Kural: faiz > kupon oranı ⇒ fiyat < nominal; faiz < kupon oranı ⇒ fiyat > nominal.`])
    };
  };

  G.irr1 = () => {
    const K = pick([100, 1000, 2000, 5000, 10000]), n = pick([1, 1, 2]), r = R(3, 15) / 100;
    const X = Math.round(K * Math.pow(1 + r, n)), irr = Math.pow(X / K, 1 / n) - 1;
    if (Math.random() < 0.6) return {
      en: `An investment costs ${K} dollars today and pays a single amount of ${X} dollars ${n === 1 ? 'one year' : 'two years'} from now. What is its internal rate of return?`,
      tr: `Bir yatırım bugün ${K} dolar, ${n} yıl sonra tek seferde ${X} dolar ödüyor. İç verim oranı kaçtır?`,
      opts: popt(irr, n === 1 ? [(X - K) / X, X / K - 1 + 0.01, (X - K) / K / 2] : [(X / K - 1) / 2, X / K - 1, (X - K) / X], 2),
      ex: steps(['Tanımı yaz', `İç verim oranı, gelecekteki ödemenin bugünkü değerini maliyete eşitleyen faizdir:\n$${K} = ${X}/(1+i)^{${n}}$`],
        ['Çarpanı yalnız bırak', `$(1+i)^{${n}} = ${X}/${K} = ${f(X / K, 4)}$`],
        n === 2 && ['Karekök al', `$1+i = \\sqrt{${f(X / K, 4)}} = ${f(1 + irr, 4)}$`],
        ['1 çıkar', `$i = ${f(irr, 4)}$, yani ${T(irr)}`]) + `\n\nKural: borçlanma faizi iç verim oranından küçükse yatırım kârlıdır.`
    };
    let b; do { b = R(2, 16) / 100; } while (Math.abs(b - irr) < 0.006);
    const yes = irr > b;
    return {
      en: `A machine costs ${K} dollars and pays ${X} dollars ${n === 1 ? 'one year' : 'two years'} from now (nothing else). You can borrow at ${ip(b)}%. Should you buy it?`,
      tr: `Makine ${K} dolar, ${n} yıl sonra ${X} dolar getiriyor. %${ip(b)} ile borçlanabiliyorsun. Almalı mısın?`,
      opts: yes ? ['Yes, because its internal rate of return is above the borrowing rate', 'No, because its internal rate of return is below the borrowing rate', `Yes, because ${X} is larger than ${K}`, 'No, because borrowing always makes an investment unprofitable']
        : ['No, because its internal rate of return is below the borrowing rate', 'Yes, because its internal rate of return is above the borrowing rate', `Yes, because ${X} is larger than ${K}`, 'Yes, because the machine pays back more than it costs'],
      ex: steps(['İç verim oranını bul', `$(1+i)^{${n}} = ${X}/${K} \\Rightarrow i = ${P(irr)}$`], ['Borç faiziyle karşılaştır', `İç verim ${T(irr)} ${yes ? '>' : '<'} borç faizi %${ip(b)}.`])
        + `\n\n${yes ? 'Makine borcun maliyetinden fazla kazandırıyor: al.' : 'Makine borcun faizini bile karşılamıyor: alma.'} "${X} > ${K}" tek başına yetmez; paranın zaman değeri hesaba katılmalı.`
    };
  };

  G.fisher = () => {
    const v = R(0, 2), i = R(2, 15) / 100 + pick([0, 0.005]), pe = R(1, 10) / 100 + pick([0, 0.005]);
    if (v === 0) {
      if (Math.abs(i - pe) < 0.002) return G.fisher();
      const r = i - pe;
      return {
        en: `The nominal interest rate on a one-year loan is ${pc(i, 1)}% and expected inflation is ${pc(pe, 1)}%. What is the (expected) real interest rate?`,
        tr: `Nominal faiz %${pc(i, 1)}, beklenen enflasyon %${pc(pe, 1)}. (Beklenen) reel faiz kaçtır?`,
        opts: popt(r, [i + pe, pe - i, i * (1 - pe)], 1),
        ex: steps(['Fisher denklemini yaz', `$i = r + \\pi^e \\Rightarrow r = i - \\pi^e$`], ['Yerine koy', `$r = ${P(i, 1)} - ${P(pe, 1)} = ${P(r, 1)}$`])
          + (r < 0 ? '\n\nReel faiz negatif: borç verenin satın alma gücü azalır, borçlu kazanır.' : '\n\nBorç veren, enflasyondan sonra satın alma gücünde bu kadar kazanmayı bekliyor.')
      };
    }
    if (v === 1) {
      let r; do { r = R(1, 5) / 100; } while (Math.abs(r - pe) < 0.004);
      return {
        en: `Lenders require a real interest rate of ${ip(r)}% and expect inflation of ${pc(pe, 1)}%. What nominal interest rate will they charge?`,
        tr: `Borç verenler %${ip(r)} reel faiz istiyor, %${pc(pe, 1)} enflasyon bekliyor. Hangi nominal faizi isterler?`,
        opts: popt(r + pe, [r - pe, pe - r, r], 1),
        ex: steps(['Fisher denklemi', `$i = r + \\pi^e$`], ['Topla', `$i = ${P(r, 0)} + ${P(pe, 1)} = ${P(r + pe, 1)}$`]) + `\n\nBeklenen enflasyon 1 puan artarsa nominal faiz de 1 puan artar.`
    };
    }
    const pa = Math.max(0.005, pe + RF(-0.04, 0.06, 0.005)), rr = i - pa;
    if (Math.abs(rr) < 0.002 || Math.abs(pa - pe) < 0.002) return G.fisher();
    return {
      en: `You lend at a nominal rate of ${pc(i, 1)}%, expecting ${pc(pe, 1)}% inflation. Inflation turns out to be ${pc(pa, 1)}%. What real return did you actually earn?`,
      tr: `%${pc(i, 1)} nominal faizle borç verdin, %${pc(pe, 1)} enflasyon bekliyordun. Gerçekleşen enflasyon %${pc(pa, 1)}. Gerçekleşen reel getirin kaçtır?`,
      opts: popt(rr, [i - pe, i + pa, pa - i], 1),
      ex: steps(['Gerçekleşen enflasyonu kullan', 'Sonradan bakınca reel getiri = nominal faiz − **gerçekleşen** enflasyon. Beklenen enflasyon sadece sözleşme anındaki tahmindi.'],
        ['Çıkar', `$${P(i, 1)} - ${P(pa, 1)} = ${P(rr, 1)}$`]) + `\n\n${pa > pe ? 'Enflasyon beklenenden yüksek çıktı: borç veren kaybetti, borçlu kazandı.' : pa < pe ? 'Enflasyon beklenenden düşük çıktı: borç veren kazandı, borçlu kaybetti.' : 'Enflasyon beklendiği gibi çıktı.'}`
    };
  };

  /* ---------- Bölüm 5: risk ---------- */
  const PSETS = [[0.5, 0.5], [0.25, 0.75], [0.2, 0.5, 0.3], [0.1, 0.4, 0.4, 0.1], [0.25, 0.5, 0.25], [0.3, 0.4, 0.3], [0.1, 0.6, 0.3], [0.4, 0.6]];
  function payoffs(inv, k) {
    let xs; do { xs = Array.from({ length: k }, () => Math.round(inv * (1 + RF(-0.6, 0.8, 0.05)))); } while (new Set(xs).size < k);
    return xs.sort((a, b) => b - a);
  }
  const ptable = (ps, xs) => '\n| Possibility | Probability | Payoff (dollars) |\n' + ps.map((p, j) => `| ${j + 1} | ${p} | ${xs[j]} |`).join('\n');

  G.expVal = () => {
    const inv = pick([100, 1000]), ps = pick(PSETS), xs = payoffs(inv, ps.length), ev = sum(ps.map((p, j) => p * xs[j])), avg = sum(xs) / xs.length, mode = xs[ps.indexOf(Math.max(...ps))];
    const tb = '\n| Olasılık | Getiri | Olasılık × getiri |\n' + ps.map((p, j) => `| ${p} | ${xs[j]} | ${m2(p * xs[j])} |`).join('\n') + `\n| **Toplam** | | **${m2(ev)}** |`;
    const s1 = ['Her getiriyi olasılığıyla çarp, topla', 'Beklenen değer = olasılıkla ağırlıklı ortalama:' + tb];
    if (Math.random() < 0.55) return {
      en: `An investment of ${inv} dollars has the following possible payoffs. What is its expected value?` + ptable(ps, xs),
      tr: `${inv} dolarlık yatırımın olası getirileri tabloda. Beklenen değer kaçtır?`,
      opts: nopts(ev, [avg, mode, sum(xs), ev - inv], 2),
      ex: steps(s1) + `\n\nDüz ortalama (${m2(avg)}) yanlış: olasılıklar eşit değilse her sonuç kendi olasılığı kadar ağırlık alır.`
    };
    const er = (ev - inv) / inv;
    if (Math.abs(er) < 0.001) return G.expVal();
    return {
      en: `You invest ${inv} dollars. The possible payoffs are given below. What is the expected return (in percent)?` + ptable(ps, xs),
      tr: `${inv} dolar yatırıyorsun; olası getiriler tabloda. Beklenen getiri yüzde kaçtır?`,
      opts: popt(er, [(avg - inv) / inv, (ev - inv) / ev, ev / inv / 10], 2),
      ex: steps(s1, ['Kazancı bul', `Beklenen kazanç = beklenen değer − yatırım: $${m2(ev)} - ${inv} = ${m2(ev - inv)}$`], ['Yatırıma böl', `$${m2(ev - inv)}/${inv} = ${f(er, 4)}$, yani ${T(er)}`])
        + `\n\nYüzde getiri, farklı büyüklükteki yatırımları karşılaştırmayı sağlar.`
    };
  };

  G.varSd = () => {
    const inv = 1000, ps = pick([[0.5, 0.5], [0.25, 0.5, 0.25], [0.2, 0.6, 0.2], [0.4, 0.6], [0.3, 0.4, 0.3], [0.1, 0.8, 0.1]]);
    let xs; do { xs = Array.from({ length: ps.length }, () => inv + 50 * R(-12, 16)); } while (new Set(xs).size < ps.length);
    xs.sort((a, b) => b - a);
    const ev = sum(ps.map((p, j) => p * xs[j])), dv = xs.map(x => x - ev), vr = sum(ps.map((p, j) => p * dv[j] * dv[j])), sd = Math.sqrt(vr);
    const unw = sum(dv.map(d => d * d)) / xs.length, mad = sum(ps.map((p, j) => p * Math.abs(dv[j])));
    const tb = '\n| Olasılık | Getiri | Getiri − E | (Getiri − E)² | Olasılık × kare |\n' + ps.map((p, j) => `| ${p} | ${xs[j]} | ${m2(dv[j])} | ${m2(dv[j] * dv[j])} | ${m2(p * dv[j] * dv[j])} |`).join('\n') + `\n| **Toplam** | | | | **${m2(vr)}** |`;
    const st = [['Beklenen değeri bul', `$E = ${ps.map((p, j) => `${p}\\times${xs[j]}`).join(' + ')} = ${m2(ev)}$`],
      ['Sapmaların karesini al, olasılıkla çarp, topla', tb],
      ['Varyans', `$\\sigma^2 = ${m2(vr)}$ (dolar²)`]];
    const ask = Math.random() < 0.5 ? 'v' : 's';
    return {
      en: `An investment of ${inv} dollars has the payoffs below. What is the ${ask === 'v' ? 'variance (in dollars squared)' : 'standard deviation (in dollars)'} of the payoff?` + ptable(ps, xs),
      tr: `${inv} dolarlık yatırımın getirileri tabloda. Getirinin ${ask === 'v' ? 'varyansı (dolar²)' : 'standart sapması (dolar)'} kaçtır?`,
      opts: ask === 'v' ? nopts(vr, [unw, sd, mad, vr * 2], 2, { min: 0 }) : nopts(sd, [vr, Math.sqrt(unw), mad, sd / 2], 2, { min: 0 }),
      ex: steps(...st, ask === 's' && ['Karekök al', `$\\sigma = \\sqrt{${m2(vr)}} = ${m2(sd)}$ dolar`]) + `\n\nStandart sapma yatırımın yüzdesi olarak: $${m2(sd)}/${inv} = ${P(sd / inv, 1)}$. Ne kadar büyükse risk o kadar yüksek.`
    };
  };

  G.leverage = () => {
    const v = R(0, 2);
    if (v === 0) {
      const X = pick([100000, 200000, 250000, 400000, 500000, 1000]), dp = pick([0.05, 0.1, 0.2, 0.25, 0.5]), Y = X * dp, L = X / Y;
      return {
        en: `You buy an asset that costs ${X} dollars, paying ${Y} dollars of your own money and borrowing the rest. What is your leverage ratio?`,
        tr: `${X} dolarlık bir varlığı ${Y} dolar kendi paranla, kalanını borçla alıyorsun. Kaldıraç oranın kaçtır?`,
        opts: nopts(L, [Y / X, (X - Y) / Y, X / (X - Y)], 2, { min: 0 }),
        ex: steps(['Tanım', 'Kaldıraç oranı = yatırımın toplam maliyeti ÷ sahibin kendi koyduğu para'], ['Böl', `$${X}/${Y} = ${f(L, 2)}$`])
          + `\n\nHer 1 dolarlık kendi paranla ${f(L, 2)} dolarlık varlık kontrol ediyorsun. Varlık %1 değişirse senin paran %${f(L, 2)} değişir.`
      };
    }
    const L = pick([2, 3, 4, 5, 10]);
    if (v === 1) {
      const er = R(2, 9) / 100, sd = R(10, 40) / 100, askS = Math.random() < 0.5;
      return {
        en: `An unleveraged investment has an expected return of ${ip(er)}% and a standard deviation of ${ip(sd)}%. You finance it with a leverage ratio of ${L} (ignore interest on the loan). What are the ${askS ? 'standard deviation' : 'expected return'} of the return on your own money?`,
        tr: `Kaldıraçsız yatırımın beklenen getirisi %${ip(er)}, standart sapması %${ip(sd)}. ${L} kaldıraçla alıyorsun (borç faizini yok say). Kendi paranın getirisinin ${askS ? 'standart sapması' : 'beklenen getirisi'} kaçtır?`,
        opts: askS ? popt(sd * L, [sd, sd * L * L, sd / L], 0) : popt(er * L, [er, er * L * L, er + L / 100], 0),
        ex: steps(['Kaldıracın etkisi', 'Borçla alınca bütün kazanç ve kayıp senin daha küçük paran üzerinde toplanır. Beklenen getiri de standart sapma da kaldıraç oranıyla çarpılır.'],
          ['Çarp', askS ? `$${P(sd, 0)}\\times${L} = ${P(sd * L, 0)}$` : `$${P(er, 0)}\\times${L} = ${P(er * L, 0)}$`]) + `\n\nKaldıraç getiriyi artırır ama riski de aynı oranda büyütür; en kötü sonucu ağırlaştırır.`
      };
    }
    const y = R(2, 30) / 100, loss = Math.min(1, L * y);
    return {
      en: `You buy an asset with a leverage ratio of ${L} (ignore interest). The asset's price falls by ${ip(y)}%. By what percentage does the value of your own investment fall?`,
      tr: `${L} kaldıraçla bir varlık aldın (faizi yok say). Varlığın fiyatı %${ip(y)} düştü. Kendi paran yüzde kaç azaldı?`,
      opts: popt(loss, [y, y / L, Math.min(1, L * L * y) === loss ? y * 2 : Math.min(1, L * L * y)], 1),
      ex: steps(['Kayıp kimin parasından çıkıyor?', 'Borcun tutarı değişmez; varlıktaki bütün kayıp senin koyduğun paradan düşer.'],
        ['Kaldıraçla çarp', `$${L}\\times${P(y, 0)} = ${P(L * y, 0)}$` + (L * y >= 1 ? `\nKayıp %100'ü aşıyor: kendi paranın tamamı gitti (en fazla %100 kaybedebilirsin, borç yine ödenmeli).` : '')])
        + `\n\nÖrnek: 100'lük varlığa ${f(100 / L, 0)} koyup ${f(100 - 100 / L, 0)} borçlandın. Varlık ${f(100 * y, 0)} düşerse senin payın ${f(100 / L, 0)} değil ${f(Math.max(0, 100 / L - 100 * y), 0)} olur.`
    };
  };

  G.riskPrem = () => {
    const inv = 1000, ps = pick([[0.5, 0.5], [0.25, 0.5, 0.25], [0.3, 0.4, 0.3]]), xs = payoffs(inv, ps.length), ev = sum(ps.map((p, j) => p * xs[j])), er = (ev - inv) / inv;
    const rf = R(1, 5) / 100;
    if (er <= rf) return G.riskPrem();
    const prem = er - rf;
    return {
      en: `A risky investment of ${inv} dollars has the payoffs below. The risk-free rate is ${ip(rf)}%. What is the risk premium (expected return minus the risk-free rate)?` + ptable(ps, xs),
      tr: `${inv} dolarlık riskli yatırımın getirileri tabloda. Risksiz faiz %${ip(rf)}. Risk primi (beklenen getiri − risksiz faiz) kaçtır?`,
      opts: popt(prem, [er, er + rf, rf], 2),
      ex: steps(['Beklenen değer', `$E = ${ps.map((p, j) => `${p}\\times${xs[j]}`).join(' + ')} = ${m2(ev)}$`],
        ['Beklenen getiri', `$(${m2(ev)} - ${inv})/${inv} = ${P(er)}$`],
        ['Risksiz getiriyi çıkar', `$${P(er)} - ${P(rf, 0)} = ${P(prem)}$`]) + `\n\nRiskten kaçınan yatırımcı riski ancak bu ek getiri (risk primi) karşılığında üstlenir. Risk arttıkça istenen prim de artar.`
    };
  };

  G.diversify = () => {
    const v = R(0, 2);
    if (v === 0) {
      const up = 5 * R(2, 8), dn = 5 * R(1, 6), hi = 100 + up, lo = 100 - dn, sdA = (hi - lo) / 2, half = (hi + lo) / 2, ask = R(0, 1);
      const tb = '\n| | State 1 (prob. 0.5) | State 2 (prob. 0.5) |\n| 100 in A | ' + hi + ' | ' + lo + ' |\n| 100 in B | ' + lo + ' | ' + hi + ' |';
      return {
        en: `Stocks A and B react to the same event in opposite ways. Payoffs of investing 100 dollars are below. ${ask ? 'What is the standard deviation of the payoff if you put 50 in A and 50 in B?' : 'What is the standard deviation of the payoff if you put all 100 in A?'}` + tb,
        tr: `A ve B aynı olaya ters tepki veriyor. ${ask ? 'Yarı yarıya (50 A, 50 B) yatırırsan getirinin standart sapması kaçtır?' : '100 doların hepsini A\'ya yatırırsan getirinin standart sapması kaçtır?'}`,
        opts: ask ? nopts(0, [sdA, sdA / 2, sdA / Math.SQRT2], 2) : nopts(sdA, [0, sdA * sdA, hi - lo], 2, { min: 0 }),
        ex: ask ? steps(['Her durumda getiriyi bul', `Durum 1: $0.5\\times${hi} + 0.5\\times${lo} = ${m2(half)}$. Durum 2: $0.5\\times${lo} + 0.5\\times${hi} = ${m2(half)}$`],
          ['Yayılıma bak', `İki durumda da getiri ${m2(half)}: hiç değişmiyor, standart sapma **0**.`]) + `\n\nBu **hedging**: zıt yönde hareket eden iki yatırım birbirinin riskini tamamen siler.`
          : steps(['Beklenen değer', `$0.5\\times${hi} + 0.5\\times${lo} = ${m2(half)}$`],
            ['Varyans', `$0.5\\times(${hi}-${m2(half)})^2 + 0.5\\times(${lo}-${m2(half)})^2 = ${m2(sdA * sdA)}$`],
            ['Standart sapma', `$\\sqrt{${m2(sdA * sdA)}} = ${m2(sdA)}$`]) + `\n\nYarısını B'ye koysaydın iki durumda da ${m2(half)} alırdın; standart sapma 0 olurdu (hedging).`
      };
    }
    if (v === 1) {
      const hi = 1000 + 50 * R(4, 10), lo = 1000 - 50 * R(2, 8), sd1 = (hi - lo) / 2, mid = (hi + lo) / 2, sd2 = sd1 / Math.SQRT2;
      return {
        en: `Two independent investments each pay ${hi} or ${lo} dollars with probability 0.5 per 1000 dollars invested. You put 500 in each. What is the standard deviation of your total payoff?`,
        tr: `Birbirinden bağımsız iki yatırım, 1000 dolar başına 0.5 olasılıkla ${hi} ya da ${lo} ödüyor. Her birine 500 koyuyorsun. Toplam getirinin standart sapması kaçtır?`,
        opts: nopts(sd2, [sd1, sd1 / 2, 0], 2, { min: 0 }),
        ex: steps(['Olası sonuçları yaz', `Bağımsız oldukları için 4 eşit olasılıklı durum var:\n| Durum | Olasılık | Toplam getiri |\n| ikisi de iyi | 0.25 | ${hi} |\n| biri iyi biri kötü | 0.50 | ${m2(mid)} |\n| ikisi de kötü | 0.25 | ${lo} |`],
          ['Beklenen değer', `$0.25\\times${hi} + 0.5\\times${m2(mid)} + 0.25\\times${lo} = ${m2(mid)}$`],
          ['Varyans', `$0.25\\times(${m2(hi - mid)})^2 + 0.5\\times 0 + 0.25\\times(${m2(lo - mid)})^2 = ${m2(sd2 * sd2)}$`],
          ['Standart sapma', `$\\sqrt{${m2(sd2 * sd2)}} = ${m2(sd2)}$`]) + `\n\nTek yatırımda sd ${m2(sd1)} idi. Riski yaymak beklenen getiriyi değiştirmeden sd'yi $1/\\sqrt 2$ katına indirdi (kitaptaki GE–Microsoft örneği: 350 → 247.49).`
      };
    }
    const s = R(10, 40) / 100, n = pick([2, 4, 9, 16, 25, 100]), sp = s / Math.sqrt(n);
    return {
      en: `Each of ${n} independent investments has the same expected return and a standard deviation of ${ip(s)}%. You split your money equally among all ${n}. What is the standard deviation of your portfolio's return?`,
      tr: `${n} bağımsız yatırımın her birinin standart sapması %${ip(s)}. Paranı eşit bölüyorsun. Portföyün standart sapması kaçtır?`,
      opts: popt(sp, [s / n, s, s * Math.sqrt(n)], 2),
      ex: steps(['Kural', `$n$ bağımsız ve eşit riskli yatırıma eşit bölünce portföyün sd'si $\\sigma/\\sqrt n$ olur.`], ['Hesapla', `$${P(s, 0)}/\\sqrt{${n}} = ${P(s, 0)}/${f(Math.sqrt(n), 2)} = ${P(sp)}$`])
        + `\n\nBağımsız risk kaynağı arttıkça sd sıfıra yaklaşır: sigortacılığın temeli bu. Sistematik (herkesi etkileyen) risk ise çeşitlendirmeyle yok olmaz.`
    };
  };

  /* ---------- Bölüm 6: tahvil fiyatları ve getiriler ---------- */
  G.zeroBond = () => {
    const v = R(0, 3);
    if (v === 0) {
      const n = R(1, 10), i = R(2, 10) / 100, k = Math.pow(1 + i, n), Pr = 100 / k;
      return {
        en: `What is the price of a zero-coupon bond with a face value of 100 dollars that matures in ${n} year${n > 1 ? 's' : ''}, if the interest rate is ${ip(i)}%?`,
        tr: `${n} yıl vadeli, 100 dolar nominalli sıfır kuponlu tahvilin fiyatı, faiz %${ip(i)} iken kaçtır?`,
        opts: nopts(Pr, [100 * Math.pow(1 - i, n), 100 / (1 + i * n) - (n === 1 ? 0.5 : 0), 100 - 100 * i * n, 100 / (1 + i) + (n === 1 ? 1 : 0)], 2, { min: 0 }),
        ex: steps(['Sıfır kuponlu tahvil = tek ödeme', `Tek bir ödeme var: ${n} yıl sonra 100. Fiyat bu ödemenin bugünkü değeri.`],
          ['İskontola', `$P = 100/(${f(1 + i, 2)})^{${n}} = 100/${f(k, 4)} = ${m2(Pr)}$`]) + `\n\nFiyat 100'ün altında: tahvil **iskontolu** satılır, kazanç fiyat ile 100 arasındaki farktan gelir.`
      };
    }
    if (v === 1) {
      const i = R(2, 12) / 100, Pr = 100 / Math.sqrt(1 + i);
      return {
        en: `The annual interest rate is ${ip(i)}%. What is the price of a six-month Treasury bill with a face value of 100 dollars?`,
        tr: `Yıllık faiz %${ip(i)}. 100 dolar nominalli 6 aylık hazine bonosunun fiyatı kaçtır?`,
        opts: nopts(Pr, [100 / (1 + i), 100 * (1 - i / 2), 100 / Math.pow(1 + i, 2)], 2, { min: 0 }),
        ex: steps(['Süreyi yıl olarak yaz', '6 ay = 0.5 yıl. Faiz yıllık olduğundan üs 1/2.'], ['İskontola', `$P = 100/(${f(1 + i, 2)})^{1/2} = 100/${f(Math.sqrt(1 + i), 5)} = ${m2(Pr)}$`])
          + `\n\nKitaptaki örnek: %5 faizle 1 yıllık bono $100/1.05 = 95.24$, 6 aylık bono $100/(1.05)^{1/2} = 97.59$.`
      };
    }
    if (v === 2) {
      const Pr = R(88, 99) + pick([0, 0.5]), i = 100 / Pr - 1;
      return {
        en: `A one-year Treasury bill with a face value of 100 dollars sells for ${Pr} dollars. What is its yield (interest rate)?`,
        tr: `100 dolar nominalli 1 yıllık hazine bonosu ${Pr} dolara satılıyor. Faizi (getirisi) kaçtır?`,
        opts: popt(i, [(100 - Pr) / 100, Pr / 100 - 1 + 0.2, (100 - Pr) / 200], 2),
        ex: steps(['Fiyat formülünü ters çevir', `$P = 100/(1+i) \\Rightarrow 1 + i = 100/P$`], ['Hesapla', `$1 + i = 100/${Pr} = ${f(1 + i, 4)}$, yani $i = ${P(i)}$`])
          + `\n\nKazanç ${f(100 - Pr, 1)} dolar ama sen ${Pr} dolar ödedin; getiri ödediğin fiyata göre hesaplanır. Kitapta: 95 dolarlık bonoda $100/95 - 1 = 5.26\\%$.`
      };
    }
    const Pr = R(78, 96), r = 100 / Pr, i = Math.sqrt(r) - 1;
    return {
      en: `A two-year zero-coupon bond with a face value of 100 dollars sells for ${Pr} dollars. What is its yield to maturity?`,
      tr: `2 yıl vadeli, 100 dolar nominalli sıfır kuponlu tahvil ${Pr} dolara satılıyor. Vadeye kadar getirisi kaçtır?`,
      opts: popt(i, [(r - 1) / 2, r - 1, (100 - Pr) / 100 / 2], 2),
      ex: steps(['Denklemi kur', `$${Pr} = 100/(1+i)^2 \\Rightarrow (1+i)^2 = 100/${Pr} = ${f(r, 4)}$`], ['Karekök al', `$1+i = \\sqrt{${f(r, 4)}} = ${f(1 + i, 4)}$, yani $i = ${P(i)}$`])
        + `\n\nToplam getiriyi ikiye bölmek (${T((r - 1) / 2)}) bileşik faizi atlar.`
    };
  };

  G.consol = () => {
    const C = pick([2, 3, 4, 5, 6, 8, 10]), v = R(0, 2);
    if (v === 0) {
      const i = R(2, 10) / 100, Pr = C / i;
      return {
        en: `A consol (perpetuity) pays ${C} dollars every year forever. If the interest rate is ${ip(i)}%, what is its price?`,
        tr: `Her yıl sonsuza kadar ${C} dolar ödeyen konsolun fiyatı, faiz %${ip(i)} iken kaçtır?`,
        opts: nopts(Pr, [C * i * 100, C / (1 + i), C / i / (1 + i), C * (1 + i)], 2, { min: 0 }),
        ex: steps(['Formül', 'Sonsuza kadar süren kupon ödemelerinin bugünkü değeri $P = C/i$. Anapara hiç geri ödenmez.'], ['Böl', `$P = ${C}/${f(i, 2)} = ${m2(Pr)}$`])
      };
    }
    if (v === 1) {
      const Pr = 10 * R(4, 20), i = C / Pr;
      return {
        en: `A consol pays ${C} dollars a year forever and sells for ${Pr} dollars. What interest rate does this price imply?`,
        tr: `Yılda ${C} dolar ödeyen konsol ${Pr} dolara satılıyor. Fiyatın ima ettiği faiz kaçtır?`,
        opts: popt(i, [Pr / C / 100, C / (Pr + C), C / 100], 2),
        ex: steps(['Formülü ters çevir', `$P = C/i \\Rightarrow i = C/P$`], ['Hesapla', `$i = ${C}/${Pr} = ${f(i, 4)}$, yani ${T(i)}`])
      };
    }
    const i1 = R(3, 8) / 100, i2 = i1 + R(1, 3) / 100, ch = i1 / i2 - 1;
    return {
      en: `The interest rate rises from ${ip(i1)}% to ${ip(i2)}%. By what percentage does the price of a consol change?`,
      tr: `Faiz %${ip(i1)} iken %${ip(i2)} oluyor. Konsolun fiyatı yüzde kaç değişir?`,
      opts: popt(ch, [-(i2 - i1), (i2 - i1) / i1, -(i2 - i1) / i1 * 0.5], 2),
      ex: steps(['Eski ve yeni fiyat', `$P_0 = C/${f(i1, 2)}$, $\\ P_1 = C/${f(i2, 2)}$ ($C$ ne olursa olsun)`],
        ['Oranla', `$P_1/P_0 = ${f(i1, 2)}/${f(i2, 2)} = ${f(i1 / i2, 4)}$`], ['Yüzde değişim', `$${f(i1 / i2, 4)} - 1 = ${P(ch)}$`])
        + `\n\nFaiz yükselince fiyat düşer. Sonsuz vadeli tahvil, faiz değişimine en duyarlı tahvildir.`
    };
  };

  G.fixedLoan = () => {
    const L = pick([1000, 2000, 5000, 10000, 20000]), n = R(2, 3), i = R(3, 12) / 100;
    const dfs = Array.from({ length: n }, (_, t) => 1 / Math.pow(1 + i, t + 1)), af = sum(dfs), A = L / af;
    return {
      en: `A ${n}-year fixed-payment loan of ${L} dollars carries an interest rate of ${ip(i)}%. Payments are made once a year. What is the annual payment?`,
      tr: `${L} dolarlık, ${n} yıllık sabit ödemeli kredi; faiz %${ip(i)}, ödeme yılda bir. Yıllık taksit kaçtır?`,
      opts: nopts(A, [L / n, L * (1 + i) / n, L * Math.pow(1 + i, n) / n, L * i], 2, { min: 0 }),
      ex: steps(['Krediyi taksitlerin bugünkü değerine eşitle', `Banka bugün ${L} veriyor; karşılığında aldığı ${n} eşit taksitin bugünkü değeri ${L} etmeli:\n$${L} = ${Array.from({ length: n }, (_, t) => `A/(${f(1 + i, 2)})^{${t + 1}}`).join(' + ')}$`],
        ['İskonto çarpanlarını topla', `$${dfs.map(d => f(d, 4)).join(' + ')} = ${f(af, 4)}$`],
        ['Taksiti bul', `$A = ${L}/${f(af, 4)} = ${m2(A)}$`]) + `\n\nTaksit, ${L}/${n} = ${m2(L / n)} değerinden büyük: her taksit hem faizi hem anaparanın bir kısmını öder (amortisman).`
    };
  };

  G.currentYield = () => {
    const F = pick([100, 1000]), c = R(2, 10) / 100, C = F * c; let Pr; do { Pr = +(F * (1 + RF(-0.12, 0.12, 0.005))).toFixed(F === 100 ? 1 : 0); } while (Pr === F);
    const cy = C / Pr;
    return {
      en: `A bond with face value ${F} dollars pays an annual coupon of ${C} dollars and sells for ${Pr} dollars. What is its current yield?`,
      tr: `${F} dolar nominalli, yıllık ${C} dolar kuponlu tahvil ${Pr} dolara satılıyor. Cari getirisi kaçtır?`,
      opts: popt(cy, [c, C / F + (Pr < F ? -0.005 : 0.005), (C + F - Pr) / Pr], 2),
      ex: steps(['Tanım', 'Cari getiri = yıllık kupon ÷ fiyat. Sadece kupondan gelen getiriyi ölçer; sermaye kazancını almaz.'], ['Böl', `$${C}/${Pr} = ${f(cy, 4)}$, yani ${T(cy)}`])
        + `\n\nKupon oranı %${ip(c)} (kupon ÷ nominal). Fiyat nominalin ${Pr < F ? 'altında, cari getiri kupon oranından büyük.' : 'üstünde, cari getiri kupon oranından küçük.'}`
    };
  };

  G.ytm1 = () => {
    const F = 100, c = R(2, 10) / 100, C = F * c, Pr = +(F * (1 + RF(-0.08, 0.06, 0.005))).toFixed(1), y = (C + F) / Pr - 1;
    if (Pr === F || Math.abs(y) < 0.002) return G.ytm1();
    return {
      en: `A one-year bond with face value 100 dollars and a ${ip(c)}% coupon sells for ${Pr} dollars. What is its yield to maturity?`,
      tr: `1 yıllık, %${ip(c)} kuponlu, 100 dolar nominalli tahvil ${Pr} dolara satılıyor. Vadeye kadar getirisi kaçtır?`,
      opts: popt(y, [C / Pr, c, (F - Pr) / Pr], 2),
      ex: steps(['Vadede ne alacaksın?', `1 yıl sonra kupon + anapara: $${C} + 100 = ${C + 100}$`],
        ['Fiyatı bu ödemenin bugünkü değerine eşitle', `$${Pr} = ${C + 100}/(1+i) \\Rightarrow 1 + i = ${C + 100}/${Pr} = ${f(1 + y, 4)}$`],
        ['1 çıkar', `$i = ${P(y)}$`]) + `\n\nYTM = cari getiri (${T(C / Pr)}) + sermaye ${Pr < F ? 'kazancı' : 'kaybı'} (${T((F - Pr) / Pr)}). Kitaptaki örnek: %5 kuponlu tahvil 99 dolarsa YTM %6.06.`
    };
  };

  G.hpr = () => {
    const c = R(3, 9) / 100, C = 100 * c, P0 = +(100 + RF(-6, 6, 0.5)).toFixed(1); let P1; do { P1 = +(P0 + RF(-8, 8, 0.5)).toFixed(1); } while (P1 === P0);
    const cy = C / P0, cg = (P1 - P0) / P0, h = cy + cg, askCG = Math.random() < 0.3;
    if (Math.abs(h) < 0.002) return G.hpr();
    return {
      en: `You buy a ${ip(c)}% coupon bond (face value 100 dollars) for ${P0} dollars, receive one annual coupon, and sell it a year later for ${P1} dollars. What is your one-year holding period return${askCG ? ' from the capital gain or loss alone' : ''}?`,
      tr: `%${ip(c)} kuponlu tahvili ${P0} dolara aldın, bir kupon aldın, 1 yıl sonra ${P1} dolara sattın. Elde tutma getirin${askCG ? 'in sadece sermaye kazancı/kaybı kısmı' : ''} kaçtır?`,
      opts: askCG ? popt(cg, [h, (P1 - P0) / P1, cy], 2) : popt(h, [cy, cg, C / P1 + (P1 - P0) / P1], 2),
      ex: steps(['Kupon kısmı (cari getiri)', `$${C}/${P0} = ${P(cy)}$`], ['Fiyat değişimi kısmı (sermaye kazancı)', `$(${P1} - ${P0})/${P0} = ${P(cg)}$`],
        !askCG && ['Topla', `$${P(cy)} ${cg < 0 ? '-' : '+'} ${P(Math.abs(cg))} = ${P(h)}$`]) + `\n\nHer iki parça da **alış fiyatına** (${P0}) bölünür. Faiz yükselirse satış fiyatı düşer, elde tutma getirisi YTM'den düşük çıkar.`
    };
  };

  G.yieldOrder = () => {
    const k = R(0, 2), c = R(3, 9) / 100, C = 100 * c, Pr = k === 0 ? 100 - R(2, 8) : k === 1 ? 100 + R(2, 8) : 100;
    const cy = C / Pr, ytm = (C + 100) / Pr - 1;
    const O = ['coupon rate < current yield < yield to maturity', 'yield to maturity < current yield < coupon rate', 'coupon rate = current yield = yield to maturity', 'current yield < coupon rate < yield to maturity'];
    const ord = k === 0 ? [0, 1, 2, 3] : k === 1 ? [1, 0, 2, 3] : [2, 0, 1, 3];
    return {
      en: `A one-year bond with face value 100 dollars and a ${ip(c)}% coupon sells for ${Pr} dollars. Which ordering is correct?`,
      tr: `1 yıllık, %${ip(c)} kuponlu tahvil ${Pr} dolara satılıyor. Hangi sıralama doğru?`,
      opts: ord.map(j => O[j]),
      ex: steps(['Üç ölçüyü hesapla', `Kupon oranı = ${C}/100 = ${T(c)}\nCari getiri = ${C}/${Pr} = ${T(cy)}\nYTM = ${C + 100}/${Pr} − 1 = ${T(ytm)}`],
        ['Kuralı oku', k === 0 ? 'Fiyat < nominal: kupon oranı < cari getiri < YTM. YTM en büyük çünkü fiyatın 100\'e yükselmesi (sermaye kazancı) da getiriye eklenir.' : k === 1 ? 'Fiyat > nominal: YTM < cari getiri < kupon oranı. Vadede fiyat 100\'e düşer, bu sermaye kaybı YTM\'yi aşağı çeker.' : 'Fiyat = nominal: üçü eşit.'])
    };
  };

  const SHIFTS = [
    ['The government increases its borrowing to finance a larger budget deficit.', 'Devlet bütçe açığını finanse etmek için daha çok borçlanıyor.', 'S', 1, 'Daha çok tahvil satılmak isteniyor: **arz sağa** kayar.'],
    ['Household wealth rises sharply.', 'Hane halkı serveti hızla artıyor.', 'D', 1, 'Servet artınca tahvil dahil her varlığa talep artar: **talep sağa** kayar.'],
    ['Bonds become riskier relative to stocks.', 'Tahviller hisse senetlerine göre daha riskli hale geliyor.', 'D', 0, 'Göreli risk arttı: **talep sola** kayar.'],
    ['The stock market becomes much more volatile while bond risk is unchanged.', 'Borsa çok oynaklaşıyor, tahvil riski aynı.', 'D', 1, 'Tahviller göreli olarak daha güvenli: **talep sağa** kayar (güvenli limana kaçış).'],
    ['Bonds become more liquid relative to other assets.', 'Tahviller diğer varlıklara göre daha likit hale geliyor.', 'D', 1, 'Yatırımcı likiditeyi sever: **talep sağa** kayar.'],
    ['Investors come to expect interest rates to rise in the future.', 'Yatırımcılar ileride faizlerin yükseleceğini bekliyor.', 'D', 0, 'Faiz yükselirse tahvil fiyatı düşecek, yani beklenen getiri düştü: **talep sola** kayar.'],
    ['Investors come to expect interest rates to fall in the future.', 'Yatırımcılar ileride faizlerin düşeceğini bekliyor.', 'D', 1, 'Faiz düşerse tahvil fiyatı yükselecek, beklenen getiri arttı: **talep sağa** kayar.'],
    ['The expected return on stocks rises.', 'Hisse senetlerinin beklenen getirisi artıyor.', 'D', 0, 'Alternatif daha cazip: tahvile **talep sola** kayar.'],
    ['The government runs a surplus and buys back some of its debt.', 'Devlet bütçe fazlası veriyor ve borcunun bir kısmını geri alıyor.', 'S', 0, 'Piyasadaki tahvil miktarı azalıyor: **arz sola** kayar.'],
    ['Expected inflation rises.', 'Beklenen enflasyon artıyor.', 'B', 0, 'Borçlanmanın reel maliyeti düşer: **arz sağa**. Borç vermenin reel getirisi düşer: **talep sola**. İkisi de fiyatı düşürür.'],
    ['The economy enters a recession.', 'Ekonomi resesyona giriyor.', 'R', 1, 'Yatırım fırsatları azalır: **arz sola**. Servet azalır: **talep sola**. Arz daha çok kaydığı için fiyat yükselir (resesyonda faizler düşer).']
  ];
  G.bondShift = () => {
    const s = pick(SHIFTS), up = s[3] === 1 ? (s[2] === 'S' ? false : true) : (s[2] === 'S' ? true : false);
    // fiyat: talep sağa / arz sola → fiyat ↑; talep sola / arz sağa → fiyat ↓
    const priceUp = s[2] === 'D' ? s[3] === 1 : s[2] === 'S' ? s[3] === 0 : s[2] === 'R';
    const O = ['Bond prices rise and interest rates fall', 'Bond prices fall and interest rates rise', 'Bond prices and interest rates both rise', 'Bond prices and interest rates both fall'];
    void up;
    return {
      en: `${s[0]} All else equal, what happens in the bond market?`,
      tr: `${s[1]} Diğer her şey sabitken tahvil piyasasında ne olur?`,
      opts: priceUp ? [O[0], O[1], O[2], O[3]] : [O[1], O[0], O[2], O[3]],
      ex: steps(['Hangi eğri kayar?', s[4]], ['Yeni denge fiyatı', priceUp ? 'Yeni dengede tahvil fiyatı **yükselir**.' : 'Yeni dengede tahvil fiyatı **düşer**.'],
        ['Faize çevir', `Fiyat ile faiz (getiri) ters yönde hareket eder: faiz ${priceUp ? '**düşer**' : '**yükselir**'}.`]) + `\n\n"İkisi birlikte yükselir / düşer" şıkları hiçbir zaman doğru olamaz: sabit ödemeli bir tahvilde fiyat artarsa getiri düşer.`
    };
  };

  G.defaultBond = () => {
    const rf = R(2, 8) / 100, c = R(Math.round(rf * 100), 10) / 100, F = 100, pay = F * (1 + c), p = pick([0.05, 0.1, 0.15, 0.2, 0.25]);
    const exp = (1 - p) * pay, Pr = exp / (1 + rf), prom = pay / Pr - 1, rp = prom - rf, v = R(0, 2);
    const st = [['Beklenen ödeme', `Şirket ya $${m2(pay)}$ öder (olasılık ${f(1 - p, 2)}) ya da hiç ödemez (olasılık ${p}):\n$${f(1 - p, 2)}\\times${m2(pay)} + ${p}\\times 0 = ${m2(exp)}$`],
      ['Risksiz faizle iskontola', `$P = ${m2(exp)}/${f(1 + rf, 2)} = ${m2(Pr)}$`]];
    if (v === 0) return {
      en: `A one-year corporate bond (face value 100 dollars, ${ip(c)}% coupon) will pay either its full promised amount or nothing. The probability of default is ${p}. The risk-free rate is ${ip(rf)}%. What price will a risk-neutral investor pay?`,
      tr: `1 yıllık şirket tahvili (100 nominal, %${ip(c)} kupon) ya tam ödüyor ya hiç. Temerrüt olasılığı ${p}, risksiz faiz %${ip(rf)}. Riske nötr yatırımcı kaç öder?`,
      opts: nopts(Pr, [pay / (1 + rf), exp, (1 - p) * F / (1 + rf), pay / (1 + rf + p)], 2, { min: 0 }),
      ex: steps(...st) + `\n\nKitaptaki örnek: 105 dolar ödeyen tahvil, %10 temerrüt olasılığı, %5 risksiz faiz: $94.50/1.05 = 90$ dolar.`
    };
    return {
      en: `A one-year corporate bond (face value 100 dollars, ${ip(c)}% coupon) has a ${p} probability of paying nothing; otherwise it pays in full. The risk-free rate is ${ip(rf)}%. ${v === 1 ? 'What is its promised yield to maturity at the risk-neutral price?' : 'What is its default risk premium?'}`,
      tr: `1 yıllık şirket tahvili (%${ip(c)} kupon) ${p} olasılıkla hiç ödemiyor. Risksiz faiz %${ip(rf)}. ${v === 1 ? 'Riske nötr fiyatta vaat edilen getiri (YTM) kaçtır?' : 'Temerrüt risk primi kaçtır?'}`,
      opts: v === 1 ? popt(prom, [rf, c, prom - rf], 2) : popt(rp, [prom, p, c - rf], 2),
      ex: steps(...st, ['Vaat edilen getiri', `Her şey yolunda giderse alınacak ${m2(pay)}, ödenen fiyat ${m2(Pr)}:\n$${m2(pay)}/${m2(Pr)} - 1 = ${P(prom)}$`],
        v === 2 && ['Risk primi', `Vaat edilen getiri − risksiz faiz: $${P(prom)} - ${P(rf, 0)} = ${P(rp)}$`]) + `\n\nTemerrüt riski arttıkça fiyat düşer, getiri ve risk primi yükselir. (Kitapta: 16.67% − 5% = 11.67%.)`
    };
  };

  G.inflRisk = () => {
    const r = R(1, 4) / 100, lo = R(0, 3), hi = lo + 2 * R(1, 3), pe = (lo + hi) / 2 / 100, sd = (hi - lo) / 2 / 100, prem = pick([0.25, 0.5, 0.75, 1]) / 100, i = r + pe + prem;
    return {
      en: `The real interest rate is ${ip(r)}%. Inflation will be either ${lo}% or ${hi}% with equal probability. Investors demand ${f(prem * 100, 2)} percentage points of compensation for inflation risk. What nominal interest rate should the bond pay?`,
      tr: `Reel faiz %${ip(r)}. Enflasyon eşit olasılıkla %${lo} ya da %${hi}. Enflasyon riski için ${f(prem * 100, 2)} puan telafi isteniyor. Nominal faiz kaç olmalı?`,
      opts: popt(i, [r + pe, r + hi / 100 + prem, r + pe + sd], 2),
      ex: steps(['Beklenen enflasyon', `$\\pi^e = 0.5\\times${lo}\\% + 0.5\\times${hi}\\% = ${P(pe, 1)}$ (standart sapma ${f(sd * 100, 1)} puan)`],
        ['Üç bileşeni topla', `Nominal faiz = reel faiz + beklenen enflasyon + enflasyon riski telafisi\n$${P(r, 0)} + ${P(pe, 1)} + ${P(prem)} = ${P(i)}$`]) + `\n\nEnflasyon belirsizliği arttıkça istenen telafi de artar. Kitapta: %3 reel + %2 beklenen enflasyon + telafi.`
    };
  };

  /* ---------- Bölüm 7: risk ve vade yapısı ---------- */
  G.yieldShock = () => {
    const n = pick([5, 10, 15, 20, 30]), y1 = R(2, 6) / 100, y2 = y1 + R(1, 3) / 100, P1 = 100 / Math.pow(1 + y1, n), P2 = 100 / Math.pow(1 + y2, n), d = P1 - P2, pct = d / P1, askP = Math.random() < 0.5;
    return {
      en: `A downgrade raises the yield on a firm's ${n}-year zero-coupon bond from ${ip(y1)}% to ${ip(y2)}%. By how much does the value of the promise of 100 dollars in ${n} years fall${askP ? ', in percent' : ', in dollars'}?`,
      tr: `Not indirimi ${n} yıllık sıfır kuponlu tahvilin getirisini %${ip(y1)} seviyesinden %${ip(y2)} seviyesine çıkarıyor. ${n} yıl sonraki 100 doların değeri ${askP ? 'yüzde kaç' : 'kaç dolar'} düşer?`,
      opts: askP ? popt(pct, [y2 - y1, (y2 - y1) * n, d / 100 + 0.0003], 1) : nopts(d, [(y2 - y1) * 100, (y2 - y1) * 100 * n, P2], 2, { min: 0 }),
      ex: steps(['Eski değer', `$100/(${f(1 + y1, 2)})^{${n}} = ${m2(P1)}$`], ['Yeni değer', `$100/(${f(1 + y2, 2)})^{${n}} = ${m2(P2)}$`],
        ['Farkı bul', `$${m2(P1)} - ${m2(P2)} = ${m2(d)}$ dolar; eski değere göre $${m2(d)}/${m2(P1)} = ${P(pct, 1)}$`]) + `\n\nVade uzadıkça aynı getiri artışı daha büyük değer kaybı yaratır. Not indirimi şirketin borçlanma maliyetini bu yüzden ciddi artırır.`
    };
  };

  G.spread = () => {
    const tr = R(150, 500) / 100, sp = R(50, 400), v = R(0, 1), cy = +(tr + sp / 100).toFixed(2);
    if (v === 0) return {
      en: `A 10-year U.S. Treasury yields ${f(tr, 2)}% and a Baa-rated 10-year corporate bond yields ${f(cy, 2)}%. What is the default risk premium (spread) in basis points?`,
      tr: `10 yıllık ABD Hazine tahvili %${f(tr, 2)}, Baa notlu 10 yıllık şirket tahvili %${f(cy, 2)} getiriyor. Temerrüt risk primi kaç baz puandır?`,
      opts: [String(sp), f(sp / 100, 2), String(sp * 10), f(cy / tr, 2)],
      ex: steps(['Getiriyi parçala', 'Şirket tahvili getirisi = Hazine getirisi + temerrüt risk primi'], ['Farkı al', `$${f(cy, 2)} - ${f(tr, 2)} = ${f(sp / 100, 2)}$ yüzde puan`], ['Baz puana çevir', `$${f(sp / 100, 2)}\\times100 = ${sp}$ baz puan`])
    };
    return {
      en: `The 10-year Treasury yield is ${f(tr, 2)}%. Investors demand a default risk premium of ${sp} basis points on a firm's 10-year bonds. What yield must the firm's bond offer?`,
      tr: `10 yıllık Hazine getirisi %${f(tr, 2)}. Yatırımcılar şirket tahviline ${sp} baz puan risk primi istiyor. Tahvil kaç getiri sunmalı?`,
      opts: [f(cy, 2) + '%', f(tr + sp / 1000, 2) + '%', f(tr + sp, 2) + '%', f(tr * (1 + sp / 10000), 2) + '%'],
      ex: steps(['Baz puanı yüzdeye çevir', `${sp} baz puan = ${sp}/100 = ${f(sp / 100, 2)} yüzde puan`], ['Hazine getirisine ekle', `$${f(tr, 2)} + ${f(sp / 100, 2)} = ${f(cy, 2)}\\%$`])
    };
  };

  G.taxExempt = () => {
    const t = pick([0.15, 0.2, 0.22, 0.24, 0.28, 0.3, 0.32, 0.35, 0.37]), y = R(30, 90) / 1000, v = R(0, 2);
    if (v === 0) {
      const m = y * (1 - t);
      return {
        en: `A taxable corporate bond yields ${f(y * 100, 1)}%. For an investor in the ${ip(t)}% tax bracket, what yield on a comparable tax-exempt municipal bond gives the same after-tax return?`,
        tr: `Vergiye tabi şirket tahvili %${f(y * 100, 1)} getiriyor. %${ip(t)} vergi dilimindeki yatırımcı için aynı vergi sonrası getiriyi veren vergiden muaf belediye tahvili getirisi kaçtır?`,
        opts: popt(m, [y * t, y / (1 - t), y - t / 100], 2),
        ex: steps(['Vergi sonrası getiri', 'Vergiye tabi tahvilden faiz gelirinin $t$ kadarı vergiye gider; elde kalan $(1-t)$.'], ['Hesapla', `$${P(y, 1)}\\times(1 - ${f(t, 2)}) = ${P(y, 1)}\\times${f(1 - t, 2)} = ${P(m)}$`])
          + `\n\nVergi oranı yükseldikçe vergili ve muaf getiriler arasındaki fark büyür.`
      };
    }
    if (v === 1) {
      const m = y * (1 - t) + pick([-1, 1]) * R(2, 6) / 1000, better = m > y * (1 - t);
      return {
        en: `An investor in the ${ip(t)}% tax bracket can buy a taxable bond yielding ${f(y * 100, 1)}% or a tax-exempt municipal bond yielding ${f(m * 100, 2)}% (same risk and maturity). Which should she choose?`,
        tr: `%${ip(t)} vergi dilimindeki yatırımcı %${f(y * 100, 1)} vergili tahvil ya da %${f(m * 100, 2)} vergiden muaf belediye tahvili alabilir. Hangisini seçmeli?`,
        opts: better ? [`The municipal bond: the taxable bond yields only ${f(y * (1 - t) * 100, 2)}% after tax`, `The taxable bond: ${f(y * 100, 1)}% is higher than ${f(m * 100, 2)}%`, 'They are equivalent', `The taxable bond: municipal bonds carry more default risk`]
          : [`The taxable bond: it yields ${f(y * (1 - t) * 100, 2)}% after tax`, `The municipal bond: it is tax-exempt, so it is always better`, 'They are equivalent', `The municipal bond: ${f(m * 100, 2)}% is higher after tax`],
        ex: steps(['Vergili tahvilin vergi sonrası getirisi', `$${P(y, 1)}\\times(1 - ${f(t, 2)}) = ${P(y * (1 - t))}$`], ['Karşılaştır', `Belediye tahvili ${T(m)} (vergi yok). $${P(m)} ${better ? '>' : '<'} ${P(y * (1 - t))}$`])
          + `\n\nKarar vergi **sonrası** getiriye göre verilir.`
      };
    }
    const m = +(y * (1 - t)).toFixed(4), tt = 1 - m / y;
    return {
      en: `A taxable bond yields ${f(y * 100, 1)}% and a comparable tax-exempt municipal bond yields ${f(m * 100, 2)}%. At what tax rate is an investor indifferent between them?`,
      tr: `Vergili tahvil %${f(y * 100, 1)}, benzer vergiden muaf tahvil %${f(m * 100, 2)} getiriyor. Hangi vergi oranında yatırımcı kayıtsız kalır?`,
      opts: popt(tt, [m / y, (y - m), 1 - y / m + 1], 1),
      ex: steps(['Eşitliği kur', `$i_{muaf} = i_{vergili}(1-t) \\Rightarrow 1 - t = ${f(m * 100, 2)}/${f(y * 100, 1)} = ${f(m / y, 4)}$`], ['Vergi oranı', `$t = 1 - ${f(m / y, 4)} = ${P(tt, 1)}$`])
    };
  };

  G.expHyp = () => {
    const v = R(0, 2), i1 = R(10, 60) / 10 / 100;
    if (v === 0) {
      const e = Math.max(0.0025, i1 + RF(-0.02, 0.025, 0.005)), i2 = (i1 + e) / 2;
      return {
        en: `The current one-year interest rate is ${pc(i1, 1)}% and the one-year rate expected one year from now is ${pc(e, 1)}%. According to the expectations hypothesis, what is the current two-year interest rate (use the averaging approximation)?`,
        tr: `Bugünkü 1 yıllık faiz %${pc(i1, 1)}, 1 yıl sonra beklenen 1 yıllık faiz %${pc(e, 1)}. Beklentiler hipotezine göre bugünkü 2 yıllık faiz kaçtır (ortalama yaklaşımı)?`,
        opts: popt(i2, [i1 + e, e, (i1 + e) / 2 + (e > i1 ? 0.005 : -0.005)], 2),
        ex: steps(['Hipotez', 'Gelecek kesinse 2 yıllık tahvil ile art arda iki 1 yıllık tahvil aynı getiriyi vermeli. Yaklaşık olarak 2 yıllık faiz = 1 yıllık faizlerin ortalaması.'],
          ['Ortalama', `$i_{2t} = (${P(i1, 1)} + ${P(e, 1)})/2 = ${P(i2)}$`]) + `\n\nBeklenen faiz bugünkünden ${e > i1 ? 'yüksek: getiri eğrisi yukarı eğimli.' : e < i1 ? 'düşük: getiri eğrisi aşağı eğimli (ters).' : 'aynı: getiri eğrisi düz.'}`
      };
    }
    if (v === 1) {
      const e1 = i1 + RF(-0.01, 0.02, 0.005), e2 = e1 + RF(-0.01, 0.02, 0.005), i3 = (i1 + e1 + e2) / 3;
      return {
        en: `Current and expected future one-year rates are ${pc(i1, 1)}% (this year), ${pc(e1, 1)}% (next year) and ${pc(e2, 1)}% (the year after). Under the expectations hypothesis, what is the three-year interest rate?`,
        tr: `1 yıllık faizler: bu yıl %${pc(i1, 1)}, gelecek yıl %${pc(e1, 1)}, sonraki yıl %${pc(e2, 1)} bekleniyor. Beklentiler hipotezine göre 3 yıllık faiz kaçtır?`,
        opts: popt(i3, [i1 + e1 + e2, (i1 + e2) / 2, e2], 2),
        ex: steps(['Genel kural', '$n$ yıllık faiz = $n$ tane (bugünkü ve beklenen) 1 yıllık faizin ortalaması.'], ['Ortalama al', `$(${P(i1, 1)} + ${P(e1, 1)} + ${P(e2, 1)})/3 = ${P(i3)}$`])
      };
    }
    const i2 = i1 + RF(-0.01, 0.015, 0.0025), e = 2 * i2 - i1;
    if (e < 0.0025) return G.expHyp();
    return {
      en: `The one-year rate is ${pc(i1, 1)}% and the two-year rate is ${pc(i2, 2)}%. Assuming the expectations hypothesis holds, what one-year rate do investors expect one year from now?`,
      tr: `1 yıllık faiz %${pc(i1, 1)}, 2 yıllık faiz %${pc(i2, 2)}. Beklentiler hipotezi geçerliyse yatırımcılar 1 yıl sonraki 1 yıllık faizi kaç bekliyor?`,
      opts: popt(e, [i2 - i1, (i1 + i2) / 2, i2], 2),
      ex: steps(['Ortalama denklemini kur', `$i_{2t} = (i_{1t} + i^e_{1t+1})/2 \\Rightarrow i^e_{1t+1} = 2i_{2t} - i_{1t}$`], ['Yerine koy', `$2\\times${P(i2, 2)} - ${P(i1, 1)} = ${P(e)}$`])
        + `\n\n2 yıllık faiz 1 yıllıktan ${i2 > i1 ? 'yüksek: piyasa faizlerin artmasını bekliyor.' : i2 < i1 ? 'düşük: piyasa faizlerin düşmesini bekliyor.' : 'eşit: faizlerin aynı kalması bekleniyor.'}`
    };
  };

  G.liqPrem = () => {
    const i1 = R(10, 50) / 10 / 100, rp = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5]) / 100, v = R(0, 1);
    if (v === 0) {
      const e = i1 + RF(-0.01, 0.015, 0.005), i2 = (i1 + e) / 2 + rp;
      return {
        en: `The one-year rate is ${pc(i1, 1)}% and the one-year rate expected next year is ${pc(e, 1)}%. The risk (term) premium on a two-year bond is ${f(rp * 100, 2)} percentage points. According to the liquidity premium theory, what is the two-year rate?`,
        tr: `1 yıllık faiz %${pc(i1, 1)}, gelecek yıl beklenen %${pc(e, 1)}. 2 yıllık tahvilin risk (vade) primi ${f(rp * 100, 2)} puan. Likidite primi teorisine göre 2 yıllık faiz kaçtır?`,
        opts: popt(i2, [(i1 + e) / 2, i1 + e + rp, (i1 + e + rp) / 2], 2),
        ex: steps(['Risksiz kısım (beklentiler)', `$(${P(i1, 1)} + ${P(e, 1)})/2 = ${P((i1 + e) / 2)}$`], ['Risk primini ekle', `$${P((i1 + e) / 2)} + ${P(rp)} = ${P(i2)}$`])
          + `\n\nPrim vadeyle artar (enflasyon ve faiz riski uzun vadede daha büyük). Bu yüzden faizlerin aynı kalması beklense bile getiri eğrisi hafif yukarı eğimlidir.`
      };
    }
    const i2 = i1 + RF(0, 0.015, 0.0025) + rp, e = 2 * (i2 - rp) - i1;
    return {
      en: `The one-year rate is ${pc(i1, 1)}%, the two-year rate is ${pc(i2, 2)}% and the two-year bond carries a risk premium of ${f(rp * 100, 2)} percentage points. What one-year rate do investors expect next year?`,
      tr: `1 yıllık faiz %${pc(i1, 1)}, 2 yıllık %${pc(i2, 2)}, 2 yıllık tahvilin risk primi ${f(rp * 100, 2)} puan. Gelecek yıl beklenen 1 yıllık faiz kaçtır?`,
      opts: popt(e, [2 * i2 - i1, i2 - rp, e + rp], 2),
      ex: steps(['Önce primi çıkar', `Risksiz kısım: $${P(i2, 2)} - ${P(rp)} = ${P(i2 - rp)}$`], ['Beklentiler kısmını çöz', `$${P(i2 - rp)} = (${P(i1, 1)} + i^e)/2 \\Rightarrow i^e = 2\\times${P(i2 - rp)} - ${P(i1, 1)} = ${P(e)}$`])
        + `\n\nPrimi çıkarmadan çözersen beklentiyi olduğundan yüksek bulursun: yukarı eğimli eğrinin bir kısmı prime aittir.`
    };
  };

  /* ---------- Bölüm 12: bankalar ---------- */
  G.bankBS = () => {
    const cash = R(5, 15), sec = R(15, 25), loans = R(50, 65), oth = R(3, 8), A = cash + sec + loans + oth, dep = Math.round(A * RF(0.7, 0.8, 0.01)), bor = R(8, 14), K = A - dep - bor, v = R(0, 2);
    if (K <= 2) return G.bankBS();
    const tb = `\n| Assets | | Liabilities and capital | |\n| Cash and reserves | ${cash} | Deposits | ${dep} |\n| Securities | ${sec} | Borrowings | ${bor} |\n| Loans | ${loans} | Bank capital | ? |\n| Other assets | ${oth} | | |`;
    if (v === 0) return {
      en: `A bank's balance sheet (millions of dollars) is shown below. What is its bank capital?` + tb,
      tr: `Bankanın bilançosu (milyon dolar) tabloda. Banka sermayesi kaçtır?`,
      opts: nopts(K, [A - dep, A, dep + bor - A + 2 * K, loans - dep], 0),
      ex: steps(['Toplam varlık', `$${cash} + ${sec} + ${loans} + ${oth} = ${A}$`], ['Toplam yükümlülük', `$${dep} + ${bor} = ${dep + bor}$`], ['Sermaye = varlık − yükümlülük', `$${A} - ${dep + bor} = ${K}$`])
        + `\n\nSermaye, sahiplerin bankadaki payı ve varlık kayıplarına karşı tampondur.`
    };
    if (v === 1) {
      const lev = A / K;
      return {
        en: `Using the bank's balance sheet below (millions of dollars), what is its leverage ratio (assets divided by capital)?` + tb,
        tr: `Bilançoya göre kaldıraç oranı (varlık ÷ sermaye) kaçtır?`,
        opts: nopts(lev, [K / A, (dep + bor) / K, A / (dep + bor)], 2, { min: 0 }),
        ex: steps(['Sermayeyi bul', `$${A} - (${dep} + ${bor}) = ${K}$`], ['Böl', `$${A}/${K} = ${f(lev, 2)}$`]) + `\n\nSermaye/varlık oranı $${K}/${A} = ${P(K / A, 1)}$. Kriz öncesinde bazı kurumların kaldıracı 30'u aşmıştı.`
      };
    }
    const w = R(1, Math.max(1, K - 1)), K2 = K - w;
    return {
      en: `The bank below (millions of dollars) writes off ${w} million of loans that will not be repaid. What is its bank capital after the write-off?` + tb,
      tr: `Banka geri dönmeyecek ${w} milyonluk krediyi siliyor. Silme sonrası sermaye kaçtır?`,
      opts: nopts(K2, [K, K + w, A - w - dep, K - 2 * w], 0),
      ex: steps(['Önce sermaye', `$${A} - ${dep + bor} = ${K}$`], ['Silme neyi değiştirir?', `Krediler (varlık) ${w} azalır; mevduat ve borçlar (yükümlülük) değişmez.`], ['Yeni sermaye', `$(${A} - ${w}) - ${dep + bor} = ${K2}$`])
        + `\n\nKaybın tamamı sermayeden düşer: sermaye ${P(w / K, 0)} azaldı. Sermaye bu yüzden kayıplara karşı tampon.`
    };
  };

  G.roaRoe = () => {
    const A = 10 * R(50, 300), lev = pick([8, 10, 12, 12.5, 15, 20]), K = A / lev, roa = R(5, 15) / 1000, NP = A * roa, v = R(0, 2);
    if (v === 0) return {
      en: `A bank has total assets of ${A} million dollars, bank capital of ${f(K, 1)} million and net profit after taxes of ${f(NP, 2)} million. What is its return on equity (ROE)?`,
      tr: `Bankanın toplam varlığı ${A} milyon, sermayesi ${f(K, 1)} milyon, vergi sonrası net kârı ${f(NP, 2)} milyon dolar. Özsermaye kârlılığı (ROE) kaçtır?`,
      opts: popt(roa * lev, [roa, roa / lev, K / A], 2),
      ex: steps(['ROE tanımı', 'ROE = vergi sonrası net kâr ÷ banka sermayesi (sahiplerin parası).'], ['Böl', `$${f(NP, 2)}/${f(K, 1)} = ${P(NP / K)}$`])
        + `\n\nROA = $${f(NP, 2)}/${A} = ${P(roa)}$. Kontrol: ROE = ROA × varlık/sermaye = $${P(roa)}\\times${lev} = ${P(roa * lev)}$.`
    };
    if (v === 1) return {
      en: `A bank's return on assets is ${f(roa * 100, 1)}% and its ratio of assets to capital is ${lev}. What is its return on equity?`,
      tr: `Bankanın ROA'sı %${f(roa * 100, 1)}, varlık/sermaye oranı ${lev}. ROE kaçtır?`,
      opts: popt(roa * lev, [roa / lev, roa + lev / 100, roa], 2),
      ex: steps(['İlişki', 'ROE = ROA × (varlık ÷ sermaye). Kaldıraç, varlık getirisini sahiplerin getirisine büyütür.'], ['Çarp', `$${P(roa, 1)}\\times${lev} = ${P(roa * lev)}$`])
    };
    return {
      en: `A bank earns a net profit after taxes of ${f(NP, 2)} million dollars on total assets of ${A} million. What is its return on assets (ROA)?`,
      tr: `Banka ${A} milyon dolarlık varlıkla ${f(NP, 2)} milyon vergi sonrası net kâr ediyor. ROA kaçtır?`,
      opts: popt(roa, [roa * lev, NP / A / 10, A / NP / 10000], 2),
      ex: steps(['ROA tanımı', 'ROA = vergi sonrası net kâr ÷ toplam varlık; bankanın varlıklarını ne kadar verimli kullandığını ölçer.'], ['Böl', `$${f(NP, 2)}/${A} = ${P(roa)}$`])
        + `\n\nKriz öncesi tipik ABD bankasında ROA yaklaşık %1.3 idi.`
    };
  };

  G.nim = () => {
    const A = 10 * R(20, 100), K = Math.round(A * RF(0.08, 0.12, 0.01)), L = A - K, ra = R(40, 80) / 1000, rl = R(5, 35) / 1000, II = A * ra, IE = L * rl, NII = II - IE, nim = NII / A, v = R(0, 1);
    return {
      en: `A bank has ${A} million dollars of interest-earning assets yielding an average of ${f(ra * 100, 1)}%, financed by ${L} million of liabilities costing ${f(rl * 100, 1)}% and ${K} million of capital. What is its ${v ? 'net interest margin' : 'net interest income (in millions)'}?`,
      tr: `Banka ${A} milyonluk faiz getiren varlıktan ortalama %${f(ra * 100, 1)} kazanıyor; ${L} milyon yükümlülüğe %${f(rl * 100, 1)} ödüyor, ${K} milyon sermayesi var. ${v ? 'Net faiz marjı' : 'Net faiz geliri (milyon)'} kaçtır?`,
      opts: v ? popt(nim, [ra - rl, NII / L, ra], 2) : nopts(NII, [II, A * (ra - rl), IE], 2),
      ex: steps(['Faiz geliri', `$${A}\\times${f(ra, 3)} = ${m2(II)}$`], ['Faiz gideri', `Faiz sadece yükümlülüklere ödenir (sermayeye değil): $${L}\\times${f(rl, 3)} = ${m2(IE)}$`],
        ['Net faiz geliri', `$${m2(II)} - ${m2(IE)} = ${m2(NII)}$`], v && ['Varlığa böl', `Net faiz marjı = $${m2(NII)}/${A} = ${P(nim)}$`])
        + `\n\nMarj iyileşiyorsa bankanın kârlılığı da büyük ihtimalle artar.`
    };
  };

  G.gap = () => {
    const ra = 5 * R(2, 16), rl = 5 * R(2, 16), di = pick([0.5, 1, 1.5, 2, -0.5, -1]) / 100;
    if (ra === rl) return G.gap();
    const d = (ra - rl) * di;
    return {
      en: `A bank has ${ra} million dollars of interest-rate-sensitive assets and ${rl} million of interest-rate-sensitive liabilities. If interest rates ${di > 0 ? 'rise' : 'fall'} by ${f(Math.abs(di) * 100, 1)} percentage point${Math.abs(di) === 0.01 ? '' : 's'}, by how much does the bank's profit change (in millions of dollars)?`,
      tr: `Bankanın faize duyarlı varlıkları ${ra} milyon, faize duyarlı yükümlülükleri ${rl} milyon. Faiz ${f(Math.abs(di) * 100, 1)} puan ${di > 0 ? 'artarsa' : 'düşerse'} kâr kaç milyon değişir?`,
      opts: nopts(d, [-d, ra * di, (ra + rl) * di], 2),
      ex: steps(['Açığı (gap) bul', `Faize duyarlı varlık − faize duyarlı yükümlülük: $${ra} - ${rl} = ${ra - rl}$`], ['Faiz değişimiyle çarp', `$${ra - rl}\\times${f(di, 3)} = ${m2(d)}$`])
        + `\n\n${ra < rl ? 'Yükümlülükler varlıklardan daha duyarlı: faiz artışı kârı düşürür.' : 'Varlıklar yükümlülüklerden daha duyarlı: faiz artışı kârı artırır.'} Kitaptaki örnek: 20 duyarlı varlık, 50 duyarlı yükümlülük, faiz 1 puan artınca kâr 0.3 düşer.`
    };
  };

  /* ---------- Economist: tahvil piyasası ---------- */
  G.tipsFisher = () => {
    const nom = R(30, 60) / 1000, real = R(5, 25) / 1000, v = R(0, 1);
    if (v === 0) {
      const be = nom - real;
      return {
        en: `A 10-year Treasury bond yields ${f(nom * 100, 1)}% and a 10-year inflation-protected Treasury (TIPS) yields ${f(real * 100, 1)}%. Using the Fisher equation, what average inflation rate do investors expect over the next 10 years?`,
        tr: `10 yıllık Hazine tahvili %${f(nom * 100, 1)}, enflasyona endeksli 10 yıllık tahvil (TIPS) %${f(real * 100, 1)} getiriyor. Fisher denklemine göre beklenen ortalama enflasyon kaçtır?`,
        opts: popt(be, [nom + real, real, nom], 1),
        ex: steps(['TIPS ne ölçer?', 'TIPS, enflasyon kadar artan ödeme yapar; getirisi **reel** faizdir. Normal Hazine tahvilinin getirisi **nominal** faizdir.'], ['Fisher', `$\\pi^e = i - r = ${P(nom, 1)} - ${P(real, 1)} = ${P(be, 1)}$`])
          + `\n\nBu farka "başabaş enflasyon" denir (içinde küçük bir enflasyon riski primi de vardır).`
      };
    }
    const d = R(5, 15) / 1000;
    return {
      en: `Over six months the yield on 10-year inflation-protected Treasuries rises by ${f(d * 100, 1)} percentage points, while long-term inflation expectations barely change. Roughly what happens to the nominal 10-year Treasury yield of ${f(nom * 100, 1)}%?`,
      tr: `6 ayda enflasyona endeksli 10 yıllık tahvil getirisi ${f(d * 100, 1)} puan artıyor, enflasyon beklentisi neredeyse değişmiyor. %${f(nom * 100, 1)} olan nominal 10 yıllık getiri yaklaşık kaç olur?`,
      opts: popt(nom + d, [nom, nom - d, nom + 2 * d], 1),
      ex: steps(['Fisher', '$i = r + \\pi^e$. TIPS getirisi reel faizi ($r$) gösterir.'], ['Değişimleri topla', `$\\Delta i = \\Delta r + \\Delta\\pi^e = ${P(d, 1)} + 0$, yani $${P(nom, 1)} + ${P(d, 1)} = ${P(nom + d, 1)}$`])
        + `\n\nMakaledeki tablo bu: getiriler enflasyon beklentisi yüzünden değil, **reel** faiz (yapay zekâ yatırımlarının sermaye talebi) yüzünden yükseliyor.`
    };
  };

  G.debtDyn = () => {
    const d = pick([0.6, 0.8, 1, 1.1, 1.2, 1.3]), r = R(30, 60) / 1000, g = R(10, 50) / 1000, v = R(0, 1);
    if (Math.abs(r - g) < 0.004) return G.debtDyn();
    const need = (r - g) * d;
    if (v === 0) return {
      en: `A government's debt is ${ip(d)}% of GDP. It pays an average interest rate of ${f(r * 100, 1)}% and nominal GDP grows ${f(g * 100, 1)}% a year. Approximately what primary balance (as % of GDP) keeps the debt-to-GDP ratio constant?`,
      tr: `Borç/GSYH oranı %${ip(d)}. Ortalama faiz %${f(r * 100, 1)}, nominal GSYH büyümesi %${f(g * 100, 1)}. Borç/GSYH oranını sabit tutan faiz dışı denge (GSYH'nin %'si) yaklaşık kaçtır?`,
      opts: nopts(need * 100, [(r - g) * 100, r * d * 100, -need * 100], 2, { fmt: (x) => (x > 0 ? 'a surplus of ' : x < 0 ? 'a deficit of ' : '') + f(Math.abs(x), 2) + '% of GDP' }),
      ex: steps(['Faiz − büyüme farkı', `$r - g = ${P(r, 1)} - ${P(g, 1)} = ${P(r - g, 1)}$`], ['Borç oranıyla çarp', `$(${f(r - g, 3)})\\times${f(d, 2)} = ${f(need, 4)}$, yani GSYH'ye oranla ${T(Math.abs(need))}`])
        + `\n\n${need > 0 ? 'Faiz büyümeden yüksek ($r > g$): borcun büyümesini durdurmak için faiz dışı **fazla** gerekir. Makaledeki Fransa durumu.' : 'Büyüme faizden yüksek ($g > r$): ülke faiz dışı **açık** verse bile borç oranı sabit kalabilir.'}`
    };
    const pb = R(-30, 20) / 1000, dd = need - pb;
    return {
      en: `Debt is ${ip(d)}% of GDP, the average interest rate on it is ${f(r * 100, 1)}% and nominal GDP grows ${f(g * 100, 1)}%. The government runs a primary ${pb >= 0 ? 'surplus' : 'deficit'} of ${f(Math.abs(pb) * 100, 1)}% of GDP. Approximately how much does the debt-to-GDP ratio change this year (in percentage points)?`,
      tr: `Borç/GSYH %${ip(d)}, faiz %${f(r * 100, 1)}, büyüme %${f(g * 100, 1)}. Faiz dışı ${pb >= 0 ? 'fazla' : 'açık'} GSYH'ye oranla %${f(Math.abs(pb) * 100, 1)}. Borç/GSYH bu yıl yaklaşık kaç puan değişir?`,
      opts: nopts(dd * 100, [(need + pb) * 100, need * 100, -dd * 100], 2, { fmt: (x) => (x >= 0 ? '+' : '−') + f(Math.abs(x), 2) }),
      ex: steps(['Faiz-büyüme etkisi', `$(r - g)\\times d = (${f(r - g, 3)})\\times${f(d, 2)} = ${f(need * 100, 2)}$ puan`], ['Faiz dışı dengeyi çıkar', `Fazla borcu azaltır, açık artırır: $${f(need * 100, 2)} - (${f(pb * 100, 1)}) = ${f(dd * 100, 2)}$ puan`])
        + `\n\nYaklaşık formül: $\\Delta d \\approx (r - g)d - \\text{faiz dışı denge}$.`
    };
  };

  root.GENS = G;
})(typeof window !== 'undefined' ? window : globalThis);

/* Üretilen soruların açıklamalarını zenginleştir: doğru cevap + yöntem + sık hatalar. */
(function (root) {
  const T = String.raw;
  const has = (q, re) => re.test(q.en);
  const G = {
    cpiInfl: (q) => has(q, /M1|M2/) ? ({
      how: T`M1 = nakit + seyahat çekleri + vadesiz mevduat + diğer çekle çekilebilir mevduat. M2 = M1 + tasarruf mevduatı ve MMDA + küçük vadeli mevduat + bireysel para piyasası fonları. Büyük vadeli mevduat ikisine de girmez.`,
      traps: [T`M2'yi hesaplarken M1'i eklemeyi unutmak.`, T`Büyük vadeli mevduatı M2'ye katmak.`, T`Tasarruf mevduatını M1'e katmak (kitaptaki tanımda M2'de).`]
    }) : ({
      how: T`Enflasyon = (yeni fiyat − eski fiyat) ÷ eski fiyat. Paydada her zaman başlangıç değeri.`,
      traps: [T`Yeni fiyata bölmek.`, T`Endeks 100 değilken farkı doğrudan yüzde sanmak.`]
    }),
    fv: () => ({
      how: T`$FV_n = PV(1+i)^n$: faizi ondalığa çevir, $(1+i)$'nin $n$. kuvvetini al, bugünkü değerle çarp.`,
      traps: [T`Basit faiz kullanmak: $PV(1 + ni)$ faizin faizini atlar.`, T`$(1+i)$'yi $n$ ile çarpmak; kuvvet alınmalı.`, T`Toplam faiz istenirken gelecek değeri vermek.`]
    }),
    rate: (q) => has(q, /basis/) ? ({
      how: T`1 baz puan = %0.01. Yüzde puan farkını 100 ile çarp.`,
      traps: [T`Yüzde puan farkını baz puan sanmak.`, T`10 ile çarpmak.`]
    }) : has(q, /monthly interest/) ? ({
      how: T`$(1+i_m)^{12} = 1+i \Rightarrow i_m = (1+i)^{1/12} - 1$.`,
      traps: [T`Yıllık faizi 12'ye bölmek: bileşiklenmeyi atlar, oranı biraz büyük bulursun.`]
    }) : has(q, /per month/) ? ({
      how: T`Yıllık bileşik oran $= (1+i_m)^{12} - 1$.`,
      traps: [T`Aylık oranı 12 ile çarpmak: faizin faizini atlar.`]
    }) : ({
      how: T`$FV = PV(1+i)^n$'den $i = (FV/PV)^{1/n} - 1$.`,
      traps: [T`Toplam artışı yıl sayısına bölmek (basit ortalama).`, T`Kök almayı unutmak.`]
    }),
    rule72: () => ({
      how: T`İkiye katlanma süresi ≈ $72/(\text{yüzde faiz})$; gereken faiz ≈ $72/\text{süre}$.`,
      traps: [T`72 yerine 100 kullanmak (bu basit faizle ikiye katlanma).`, T`Faizi ondalık olarak (0.06) bölmek: yüzde sayısı (6) kullanılır.`]
    }),
    pv: () => ({
      how: T`$PV = FV_n/(1+i)^n$. Süre ay olarak verildiyse yıla çevir: $n$ = ay/12.`,
      traps: [T`Bölmek yerine çarpmak (gelecek değeri bulursun).`, T`Basit iskonto $FV/(1+ni)$ kullanmak.`, T`Ayları yıla çevirmemek.`]
    }),
    pvStream: (q) => ({
      how: T`Her ödemeyi kendi yılı kadar iskontola: $C_t/(1+i)^t$; sonra topla.${has(q, /net present/) ? T` Bugün ödenen maliyeti iskontolamadan çıkar.` : ''}`,
      traps: [T`Bütün ödemeleri aynı çarpanla iskontolamak.`, T`İskontosuz toplamı vermek.`, T`Net değerde işareti ters almak (maliyet − PV).`]
    }),
    couponBond: () => ({
      how: T`$P = \sum_{t=1}^{n} C/(1+i)^t + F/(1+i)^n$. İskontoda kupon oranı değil **piyasa faizi** kullanılır. Faiz > kupon ⇒ fiyat < nominal.`,
      traps: [T`Kupon oranıyla iskontolamak (her zaman nominal değeri bulursun).`, T`Son yıl anaparayı eklemeyi unutmak.`, T`Kuponları iskontolamadan toplamak.`],
      tip: T`Tablolar sekmesindeki tahvil hesaplayıcıyla cevabını kontrol edebilirsin.`
    }),
    irr1: () => ({
      how: T`İç verim oranı: maliyet = gelecekteki ödemelerin bugünkü değeri. Tek ödemede $(1+i)^n = X/K$. Borç faizi < iç verim ⇒ yatırım kârlı.`,
      traps: [T`Toplam getiriyi yıllara bölmek.`, T`Sadece ödeme > maliyet diye karar vermek (zaman değerini atlamak).`]
    }),
    fisher: (q) => ({
      how: T`Fisher: $i = r + \pi^e$. Sonradan bakınca gerçekleşen reel getiri = nominal faiz − **gerçekleşen** enflasyon.`,
      traps: [T`Enflasyonu çıkarmak yerine eklemek.`, T`Gerçekleşen getiride beklenen enflasyonu kullanmak.`, T`Negatif reel faizi imkânsız sanmak.`]
    }),
    expVal: () => ({
      how: T`Beklenen değer = $\sum$ olasılık × getiri. Beklenen getiri (%) = (beklenen değer − yatırım) / yatırım.`,
      traps: [T`Getirilerin düz ortalamasını almak.`, T`En olası sonucu beklenen değer sanmak.`, T`Yüzde getiride beklenen değere bölmek.`]
    }),
    varSd: () => ({
      how: T`1. Beklenen değer $E$. 2. Her getiriden $E$'yi çıkar, karesini al. 3. Olasılıkla çarp, topla = varyans. 4. Karekök = standart sapma.`,
      traps: [T`Olasılıkla ağırlıklandırmamak (düz ortalama almak).`, T`Varyans ile standart sapmayı karıştırmak.`, T`Kare almadan sapmaları toplamak (toplam 0 çıkar).`]
    }),
    leverage: (q) => ({
      how: T`Kaldıraç oranı = varlığın toplam maliyeti ÷ kendi paran. Kendi paranın getirisi, beklenen getirisi ve sd'si bu oranla çarpılır.`,
      traps: [T`Kaldıraç oranını ters almak (kendi para ÷ toplam).`, T`Borç ÷ özsermaye ile karıştırmak.`, T`Kaybın %100'ü aşabileceğini sanmak.`]
    }),
    riskPrem: () => ({
      how: T`Risk primi = riskli varlığın beklenen getirisi − risksiz getiri.`,
      traps: [T`Beklenen getiriyi prim sanmak (risksiz getiriyi çıkarmamak).`, T`Getirilerin düz ortalamasını kullanmak.`]
    }),
    diversify: (q) => ({
      how: T`Hedging: zıt yönlü iki yatırım riski tamamen siler (sd = 0). Riski yayma: $n$ bağımsız eşit risk, sd = $\sigma/\sqrt n$.`,
      traps: [T`Riski yaymada $n$'ye bölmek ($\sqrt n$ olmalı).`, T`Çeşitlendirme beklenen getiriyi düşürür sanmak.`, T`Sistematik riskin de çeşitlendirmeyle yok olacağını sanmak.`]
    }),
    zeroBond: (q) => ({
      how: T`Fiyat $= 100/(1+i)^n$; getiri $= (100/P)^{1/n} - 1$. 6 aylık bonoda $n = 1/2$.`,
      traps: [T`İndirim tutarını 100'e bölmek: getiri ödenen fiyata göre hesaplanır.`, T`Çok yıllıkta toplam getiriyi yıl sayısına bölmek.`, T`6 ayda $(1+i)$'nin tamamıyla iskontolamak.`]
    }),
    consol: () => ({
      how: T`Konsol: $P = C/i$, $i = C/P$. Faiz $i_1$'den $i_2$'ye çıkınca fiyat $i_1/i_2$ katına iner.`,
      traps: [T`$C\times i$ yazmak.`, T`Fiyat değişimini faizdeki puan değişimi sanmak.`]
    }),
    fixedLoan: () => ({
      how: T`Kredi tutarı = taksitlerin bugünkü değeri. Taksit = kredi ÷ (iskonto çarpanlarının toplamı).`,
      traps: [T`Krediyi taksit sayısına bölmek (faizi atlamak).`, T`Faizi sadece bir kez eklemek.`]
    }),
    currentYield: () => ({
      how: T`Cari getiri = yıllık kupon ÷ **fiyat**. Kupon oranı = kupon ÷ nominal değer.`,
      traps: [T`Nominal değere bölmek (kupon oranını bulursun).`, T`Sermaye kazancını eklemek (bu YTM ya da elde tutma getirisi).`]
    }),
    ytm1: () => ({
      how: T`1 yıllık tahvilde $P = (C+F)/(1+i)$, yani $i = (C+F)/P - 1$.`,
      traps: [T`Cari getiri ($C/P$) vermek: sermaye kazancını atlar.`, T`Kupon oranını vermek.`]
    }),
    hpr: () => ({
      how: T`Elde tutma getirisi = $C/P_0 + (P_1 - P_0)/P_0$. İki parça da alış fiyatına bölünür.`,
      traps: [T`Satış fiyatına bölmek.`, T`Sadece kuponu ya da sadece fiyat değişimini almak.`]
    }),
    yieldOrder: () => ({
      how: T`Fiyat < nominal: kupon oranı < cari getiri < YTM. Fiyat > nominal: YTM < cari getiri < kupon oranı. Fiyat = nominal: hepsi eşit.`,
      traps: [T`İskontolu tahvilde YTM'nin kupon oranından küçük olduğunu sanmak.`]
    }),
    bondShift: () => ({
      how: T`Önce hangi eğrinin hangi yöne kaydığını bul. Talep sağa / arz sola ⇒ fiyat ↑. Fiyat ↑ ⇔ faiz ↓.`,
      traps: [T`Fiyat ve faizi aynı yönde düşünmek.`, T`Beklenen enflasyonu sadece talep ya da sadece arz etkisiyle düşünmek; ikisi de fiyatı düşürür.`],
      tip: T`Kısa yol: "tahvil daha cazip" ⇒ talep sağa; "daha çok borçlanma" ⇒ arz sağa.`
    }),
    defaultBond: () => ({
      how: T`Fiyat = beklenen ödeme ÷ (1 + risksiz faiz). Vaat edilen getiri = vaat edilen ödeme ÷ fiyat − 1. Risk primi = vaat edilen getiri − risksiz faiz.`,
      traps: [T`Beklenen değeri hesaplamadan vaat edilen ödemeyi iskontolamak.`, T`Risk primi yerine temerrüt olasılığını vermek.`]
    }),
    inflRisk: () => ({
      how: T`Nominal faiz = reel faiz + beklenen enflasyon + enflasyon riski telafisi.`,
      traps: [T`Risk telafisini unutmak.`, T`En yüksek enflasyonu beklenen enflasyon sanmak.`]
    }),
    yieldShock: () => ({
      how: T`Eski ve yeni değeri ayrı ayrı hesapla: $100/(1+y)^n$. Fark ya da yüzde fark.`,
      traps: [T`Getiri farkını doğrudan fiyat değişimi sanmak.`, T`Vadenin etkisini atlamak: uzun vadede kayıp daha büyük.`]
    }),
    spread: () => ({
      how: T`Şirket tahvili getirisi = Hazine getirisi + temerrüt risk primi. 100 baz puan = 1 yüzde puan.`,
      traps: [T`Baz puanı doğrudan yüzde sanmak.`, T`Oranları bölmek; prim bir farktır.`]
    }),
    taxExempt: () => ({
      how: T`$i_{muaf} = i_{vergili}(1-t)$. Karar vergi sonrası getiriye göre verilir.`,
      traps: [T`$(1-t)$ ile çarpmak yerine $t$ ile çarpmak.`, T`Vergi öncesi oranları karşılaştırmak.`]
    }),
    expHyp: () => ({
      how: T`$n$ yıllık faiz = bugünkü ve beklenen 1 yıllık faizlerin ortalaması. Ters: $i^e_{1t+1} = 2i_{2t} - i_{1t}$.`,
      traps: [T`Ortalama yerine toplamak.`, T`Beklenen faizi bulurken 2 ile çarpmayı unutmak.`]
    }),
    liqPrem: () => ({
      how: T`Likidite primi teorisi: $i_{nt}$ = beklenen 1 yıllık faizlerin ortalaması + risk primi $rp_n$.`,
      traps: [T`Primi eklemeyi (ya da ters problemde çıkarmayı) unutmak.`, T`Primi ortalamanın içine katıp ikiye bölmek.`]
    }),
    bankBS: () => ({
      how: T`Varlıklar = yükümlülükler + sermaye. Kredi silinince varlık ve sermaye aynı tutarda azalır.`,
      traps: [T`Borçlanmayı yükümlülüklere katmamak.`, T`Kaldıraç oranını ters almak (sermaye ÷ varlık).`, T`Silmede yükümlülükleri de azaltmak.`]
    }),
    roaRoe: () => ({
      how: T`ROA = net kâr ÷ varlık; ROE = net kâr ÷ sermaye = ROA × (varlık ÷ sermaye).`,
      traps: [T`ROA ile ROE'yi karıştırmak.`, T`Kaldıraçla çarpmak yerine bölmek.`]
    }),
    nim: () => ({
      how: T`Net faiz geliri = faiz geliri − faiz gideri (faiz sadece yükümlülüklere). Net faiz marjı = net faiz geliri ÷ toplam varlık.`,
      traps: [T`Faiz giderini toplam varlık üzerinden hesaplamak (sermayeye faiz ödenmez).`, T`Marjı faiz oranları farkı sanmak.`]
    }),
    gap: () => ({
      how: T`Gap analizi: $\Delta\text{kâr} = (\text{duyarlı varlık} - \text{duyarlı yükümlülük})\times\Delta i$.`,
      traps: [T`Farkın işaretini ters almak.`, T`Faiz değişimini yüzde olarak (1 yerine 0.01) çevirmemek.`]
    }),
    tipsFisher: () => ({
      how: T`TIPS getirisi ≈ reel faiz; normal Hazine getirisi = nominal. Beklenen enflasyon ≈ nominal − reel.`,
      traps: [T`İki getiriyi toplamak.`, T`TIPS getirisini nominal sanmak.`]
    }),
    debtDyn: () => ({
      how: T`Borç oranını sabit tutan faiz dışı denge ≈ $(r - g)\times d$. Değişim: $\Delta d \approx (r-g)d$ − faiz dışı denge.`,
      traps: [T`Borç oranıyla çarpmayı unutmak.`, T`Faiz dışı fazlanın borcu artırdığını sanmak.`]
    })
  };
  function enrich(name, q) {
    const g = G[name], r = g ? g(q) : null;
    let ex = /^\*\*Doğru cevap/.test(q.ex) ? q.ex : '**Doğru cevap: ' + q.opts[0] + '.**\n\n' + q.ex;
    if (r) {
      if (r.how) ex += '\n\n**Özet:** ' + r.how;
      if (r.traps && r.traps.length) ex += '\n\n**Sık hatalar:**\n' + r.traps.map(t => '• ' + t).join('\n');
      if (r.tip) ex += '\n\n:::ipucu Sınavda\n' + r.tip + '\n:::';
    }
    q.ex = ex;
    q.hint = r && r.how ? r.how : '';
    return q;
  }
  root.GEN_GUIDE = G;

  /* Tekrar eden şıkları ayıkla; 3'ten az kalırsa yeniden üret. */
  root.genQ = function (name) {
    let q = null;
    for (let k = 0; k < 10; k++) {
      q = root.GENS[name]();
      const o = q.opts.filter((x, i, a) => a.indexOf(x) === i);
      if (o.length >= 3) { q.opts = o.slice(0, 4); return enrich(name, q); }
    }
    return enrich(name, q);
  };
})(typeof window !== 'undefined' ? window : globalThis);
