/* Konu kartlarındaki şekiller. Kitaptaki şekiller bu uygulama için yeniden çizildi (SVG, tema renkleriyle).
   Zaman serisi grafikleri yaklaşık yıllık değerlerle çizilmiş şematik grafiklerdir; başlıklarında "yaklaşık" yazar.
   Kartta kullanım: tek başına bir satırda "@fig kimlik". */
(function (root) {
  'use strict';
  const e = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const n1 = (v) => Math.round(v * 10) / 10;
  const T = (x, y, s, o) => { o = o || {}; return `<text x="${n1(x)}" y="${n1(y)}"${o.a ? ` text-anchor="${o.a}"` : ''}${o.c ? ` class="${o.c}"` : ''}${o.r ? ` transform="rotate(${o.r} ${n1(x)} ${n1(y)})"` : ''}>${e(s)}</text>`; };
  const L = (x1, y1, x2, y2, c) => `<line x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}" class="${c || 'ax'}"/>`;
  const PL = (pts, c) => `<polyline points="${pts.map(p => n1(p[0]) + ',' + n1(p[1])).join(' ')}" class="${c}"/>`;
  const RC = (x, y, w, h, c, rx) => `<rect x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${n1(h)}" rx="${rx == null ? 8 : rx}" class="${c}"/>`;
  const CI = (x, y, r, c) => `<circle cx="${n1(x)}" cy="${n1(y)}" r="${r}" class="${c}"/>`;
  function AR(x1, y1, x2, y2, c, hs) {
    c = c || 'ar'; hs = hs || 10;
    const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - hs * Math.cos(a), by = y2 - hs * Math.sin(a), px = Math.sin(a) * hs * 0.55, py = -Math.cos(a) * hs * 0.55;
    return L(x1, y1, bx, by, c) + `<polygon points="${n1(x2)},${n1(y2)} ${n1(bx + px)},${n1(by + py)} ${n1(bx - px)},${n1(by - py)}" class="${c}h"/>`;
  }
  const AR2 = (x1, y1, x2, y2, c) => AR((x1 + x2) / 2, (y1 + y2) / 2, x1, y1, c) + AR((x1 + x2) / 2, (y1 + y2) / 2, x2, y2, c);
  const TM = (x, y, lines, o) => lines.map((s, k) => T(x, y + k * ((o && o.lh) || 17), s, Object.assign({ a: 'middle' }, o || {}))).join('');
  const BOX = (x, y, w, h, lines, c, tc) => RC(x, y, w, h, c || 'bx') + TM(x + w / 2, y + h / 2 - (lines.length - 1) * 8.5 + 5, lines, { c: tc || '' });
  const SVG = (w, h, body) => `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" focusable="false">${body}</svg>`;
  const LEG = (x, y, items, dx) => items.map((it, k) => { const xx = x + (dx ? k * dx : 0), yy = y + (dx ? 0 : k * 19); return L(xx, yy - 5, xx + 22, yy - 5, it[0]) + T(xx + 28, yy, it[1], { c: 'lg' }); }).join('');
  // koordinat sistemi: eksenler, ızgara, etiketler
  function frame(o) {
    const W = o.w || 520, H = o.h || 300, m = Object.assign({ l: 46, r: 14, t: 14, b: 44 }, o.m || {});
    const X = (v) => m.l + (v - o.x[0]) / (o.x[1] - o.x[0]) * (W - m.l - m.r);
    const Y = (v) => H - m.b - (v - o.y[0]) / (o.y[1] - o.y[0]) * (H - m.t - m.b);
    let s = '';
    (o.shade || []).forEach(b => { s += RC(X(b[0]), m.t, X(b[1]) - X(b[0]), H - m.b - m.t, 'sh', 0); });
    (o.yt || []).forEach(v => { s += L(m.l, Y(v), W - m.r, Y(v), 'gr') + T(m.l - 6, Y(v) + 4.5, (o.yf || String)(v), { a: 'end', c: 'tk' }); });
    (o.xt || []).forEach(v => { s += L(X(v), H - m.b, X(v), H - m.b + 5, 'ax') + T(X(v), H - m.b + 19, (o.xf || String)(v), { a: 'middle', c: 'tk' }); });
    if (o.zero) s += L(m.l, Y(0), W - m.r, Y(0), 'ax0');
    s += L(m.l, m.t - 4, m.l, H - m.b, 'ax') + L(m.l, H - m.b, W - m.r + 4, H - m.b, 'ax');
    if (o.xl) s += T((m.l + W - m.r) / 2, H - 5, o.xl, { a: 'middle', c: 'lb' });
    if (o.yl) s += T(13, (m.t + H - m.b) / 2, o.yl, { a: 'middle', c: 'lb', r: -90 });
    return { X, Y, W, H, m, s, line: (pts, c) => PL(pts.map(p => [X(p[0]), Y(p[1])]), c) };
  }
  const yrs = (a, b) => Array.from({ length: b - a + 1 }, (_, k) => a + k);
  const ser = (start, arr) => arr.map((v, k) => [start + k, v]);
  // basit doğrusal regresyon (MKT): y = a + bx
  function ols(pts) { const n = pts.length, mx = pts.reduce((s, p) => s + p[0], 0) / n, my = pts.reduce((s, p) => s + p[1], 0) / n; let sxy = 0, sxx = 0; pts.forEach(p => { sxy += (p[0] - mx) * (p[1] - my); sxx += (p[0] - mx) ** 2; }); const b = sxy / sxx; return [my - b * mx, b]; }
  // iki doğrunun kesişimi
  function cross(p1, p2, q1, q2) { const d = (p1[0] - p2[0]) * (q1[1] - q2[1]) - (p1[1] - p2[1]) * (q1[0] - q2[0]); const a = p1[0] * p2[1] - p1[1] * p2[0], b = q1[0] * q2[1] - q1[1] * q2[0]; return [(a * (q1[0] - q2[0]) - (p1[0] - p2[0]) * b) / d, (a * (q1[1] - q2[1]) - (p1[1] - p2[1]) * b) / d]; }

  /* ---------- yaklaşık veri (yıllık ortalamalar, FRED/BEA'dan yuvarlanmış) ---------- */
  const D = {
    m1: ser(1960, [0, 3, 2, 4, 4.5, 4.5, 2.5, 6.5, 7.7, 3.3, 5.1, 6.5, 9.2, 5.5, 4.4, 4.7, 6.7, 8, 8.2, 6.9, 7, 6.9, 8.7, 9.8, 5.8, 12.3, 16.9, 3.5, 4.9, 0.8, 4, 8.7, 14.3, 10.2, 1.8, -2.1, -4.1, -0.7, 2.2, 2.3, -1.6, 8.7, 3.1, 7, 5.4, -0.1, -0.5, 0.5, 16.8, 5.7, 8.5, 18.1, 14.8, 10.6, 8.2, 6.5, 8.9, 6.2, 3.4, 4.5]),
    m2: ser(1960, [4.9, 7.4, 8.1, 8.4, 8, 8.1, 4.6, 9.3, 8, 4.1, 6.6, 13.4, 13, 6.6, 5.4, 12.6, 13.7, 10.6, 8, 7.9, 8.6, 9.7, 8.8, 11.4, 8.6, 8, 9.4, 3.5, 5.5, 5.1, 3.9, 3, 1.6, 1.6, 0.4, 4, 4.8, 5.7, 8.6, 6, 6.1, 10.2, 6.8, 5, 5.7, 4.1, 5.8, 5.7, 9.7, 3.7, 3.6, 9.8, 8.5, 5.1, 5.9, 5.8, 7.1, 4.9, 3.7, 6.7]),
    cpi: ser(1960, [1.7, 1, 1, 1.3, 1.3, 1.6, 2.9, 3.1, 4.2, 5.5, 5.7, 4.4, 3.2, 6.2, 11, 9.1, 5.8, 6.5, 7.6, 11.3, 13.5, 10.3, 6.2, 3.2, 4.3, 3.6, 1.9, 3.6, 4.1, 4.8, 5.4, 4.2, 3, 3, 2.6, 2.8, 3, 2.3, 1.6, 2.2, 3.4, 2.8, 1.6, 2.3, 2.7, 3.4, 3.2, 2.8, 3.8, -0.4, 1.6, 3.2, 2.1, 1.5, 1.6, 0.1, 1.3, 2.1, 2.4, 1.8]),
    tb3: ser(1971, [4.33, 4.06, 7.04, 7.89, 5.84, 4.99, 5.27, 7.22, 10.04, 11.51, 14.03, 10.69, 8.63, 9.53, 7.47, 5.98, 5.82, 6.69, 8.12, 7.51, 5.42, 3.45, 3.02, 4.29, 5.51, 5.02, 5.07, 4.81, 4.66, 5.85, 3.45, 1.62, 1.02, 1.38, 3.16, 4.73, 4.41, 1.48, 0.16, 0.14, 0.05, 0.09, 0.06, 0.03, 0.05, 0.32, 0.93, 1.94, 2.06]),
    gs10: ser(1971, [6.16, 6.21, 6.85, 7.56, 7.99, 7.61, 7.42, 8.41, 9.43, 11.43, 13.92, 13.01, 11.1, 12.46, 10.62, 7.67, 8.39, 8.85, 8.49, 8.55, 7.86, 7.01, 5.87, 7.09, 6.57, 6.44, 6.35, 5.26, 5.65, 6.03, 5.02, 4.61, 4.01, 4.27, 4.29, 4.8, 4.63, 3.66, 3.26, 3.22, 2.78, 1.8, 2.35, 2.54, 2.14, 1.84, 2.33, 2.91, 2.14]),
    aaa: ser(1971, [7.39, 7.21, 7.44, 8.57, 8.83, 8.43, 8.02, 8.73, 9.63, 11.94, 14.17, 13.79, 12.04, 12.71, 11.37, 9.02, 9.38, 9.71, 9.26, 9.32, 8.77, 8.14, 7.22, 7.96, 7.59, 7.37, 7.26, 6.53, 7.04, 7.62, 7.08, 6.49, 5.67, 5.63, 5.24, 5.59, 5.56, 5.63, 5.31, 4.94, 4.64, 3.67, 4.24, 4.16, 3.89, 3.67, 3.74, 3.93, 3.39]),
    baa: ser(1971, [8.56, 8.16, 8.24, 9.5, 10.61, 9.75, 8.97, 9.49, 10.69, 13.67, 16.04, 16.11, 13.55, 14.19, 12.72, 10.39, 10.58, 10.83, 10.18, 10.36, 9.8, 8.98, 7.93, 8.63, 8.2, 8.05, 7.86, 7.22, 7.87, 8.36, 7.95, 7.8, 6.77, 6.39, 6.06, 6.48, 6.48, 7.45, 7.3, 6.04, 5.66, 4.94, 5.1, 4.86, 5, 4.72, 4.44, 4.8, 4.38]),
    gdp: ser(1970, [0.2, 3.3, 5.3, 5.6, -0.5, -0.2, 5.4, 4.6, 5.5, 3.2, -0.3, 2.5, -1.8, 4.6, 7.2, 4.2, 3.5, 3.5, 4.2, 3.7, 1.9, -0.1, 3.5, 2.8, 4, 2.7, 3.8, 4.4, 4.5, 4.8, 4.1, 1, 1.7, 2.9, 3.8, 3.5, 2.8, 2, 0.1, -2.6, 2.7, 1.5, 2.3, 1.8, 2.3, 2.7, 1.7, 2.3, 2.9, 2.3])
  };
  const at = (s, y) => { const p = s.find(q => q[0] === y); return p ? p[1] : null; };
  const REC = [[1973.9, 1975.2], [1980, 1980.6], [1981.5, 1982.9], [1990.5, 1991.2], [2001.2, 2001.9], [2007.9, 2009.5]];

  /* ---------- kutulu çizim yardımcıları ---------- */
  function stack(rows, o) { // alt alta kutular ve oklar
    const W = o.w || 520, x = o.x || 60, w = o.bw || 400, h = o.bh || 46, g = o.g || 18;
    let s = '', y = o.y || 8;
    rows.forEach((r, k) => { s += BOX(x, y, w, h, r, k === (o.hi == null ? -1 : o.hi) ? 'bxp' : 'bx'); if (k < rows.length - 1) s += AR(x + w / 2, y + h + 1, x + w / 2, y + h + g - 1, 'ar'); y += h + g; });
    return { s, H: y - g + 8, W };
  }

  // arz-talep çizimi (tahvil piyasası)
  function sd(o) {
    const W = 470, H = 300, ox = 54, oy = 262;
    let s = AR(ox, oy, ox, 14, 'ax') + AR(ox, oy, W - 14, oy, 'ax') + T(W - 16, oy + 24, 'Tahvil miktarı', { a: 'end', c: 'lb' }) + T(16, 150, 'Tahvil fiyatı', { a: 'middle', c: 'lb', r: -90 });
    const sh = (p, dx) => { let a = [p[0][0] + dx, p[0][1]], b = [p[1][0] + dx, p[1][1]]; if (a[0] < ox + 8) { const t = (ox + 8 - a[0]) / (b[0] - a[0]); a = [ox + 8, a[1] + t * (b[1] - a[1])]; } return [a, b]; };
    const S0 = [[100, 236], [330, 60]], D0 = [[100, 60], [330, 236]];
    const lines = [['S₀', S0, 'l2'], ['D₀', D0, 'l1']];
    if (o.s) lines.push(['S₁', sh(S0, o.s), 'l2 dsh']);
    if (o.d) lines.push(['D₁', sh(D0, o.d), 'l1 dsh']);
    lines.forEach(([lab, p, c]) => { s += PL(p, c) + T(p[1][0] + 6, p[1][1] + (lab[0] === 'S' ? -4 : 14), lab, { c: lab[0] === 'S' ? 'tb' : 'tp' }); });
    const E0 = cross(S0[0], S0[1], D0[0], D0[1]);
    const pts = [['E₀', E0, 'P₀']];
    if (o.s || o.d) { const S1 = o.s ? sh(S0, o.s) : S0, D1 = o.d ? sh(D0, o.d) : D0; pts.push(['E₁', cross(S1[0], S1[1], D1[0], D1[1]), 'P₁']); }
    pts.forEach(([lab, p, pl]) => { s += L(ox, p[1], p[0], p[1], 'gd') + CI(p[0], p[1], 5, 'pt') + T(p[0] + 9, p[1] - 8, lab, { c: 'hd' }) + T(ox - 6, p[1] + 5, pl, { a: 'end', c: 'hd' }); });
    if (pts.length > 1 && Math.abs(pts[1][1][1] - pts[0][1][1]) > 4) s += AR(ox + 16, pts[0][1][1], ox + 16, pts[1][1][1], 'ar3', 8);
    if (o.s) s += AR(250, 112, 250 + o.s * 0.85, 112, 'ar2', 9);
    if (o.d) s += AR(270, 192, 270 + o.d * 0.85, 192, 'ar1', 9);
    if (o.note) s += TM(ox + 14, 26, [o.note.join('  ·  ')], { a: 'start', c: 'hd' });
    return SVG(W, H, s);
  }

  /* ---------- şekiller ---------- */
  const F = {};

  // Bölüm 2
  F.check = (() => {
    const st = stack([
      ['Market alışverişini kendi bankanın', 'çekiyle ödersin.'],
      ['Market çeki (ya da görüntüsünü) kendi bankasına', 'yatırır; marketin hesabına alacak yazılır.'],
      ['Marketin bankası çekin elektronik görüntüsünü', 'bölgedeki Fed bankasına gönderir.'],
      ['Fed, marketin bankasının rezerv hesabına alacak,', 'senin bankanın rezerv hesabına borç yazar.'],
      ['Fed çekin görüntüsünü senin bankana gönderir.'],
      ['Senin bankan tutarı hesabından düşer', '(bakiye yetmezse çeki birkaç günde geri çevirir).']
    ], { x: 118, bw: 396, hi: 3 });
    return { t: 'Şekil 2.1 · Kâğıt çekin yolu', n: 'Çek kesin ödeme değildir; bir işlemler zinciri başlatır. Para (rezerv) yalnızca Fed adımında el değiştirir.',
      svg: SVG(520, st.H, st.s + BOX(2, 3 * 64 + 8, 102, 46, ['Para burada', 'el değiştirir'], 'bxw', 'lg') + AR(104, 3 * 64 + 31, 117, 3 * 64 + 31, 'ar3', 8)) };
  })();

  F.liq = (() => {
    const rows = [['Su', 'Nakit'], ['Yağ', 'Çek hesabı (vadesiz mevduat)'], ['Jöle', 'Tasarruf hesabı, mevduat sertifikası'], ['Toprak', 'ABD hazine tahvili'], ['Çakıl', 'Hisse senedi, şirket tahvili'], ['Tuğla', 'Ev, sanat eseri']];
    let s = '';
    rows.forEach((r, k) => { const y = 14 + k * 46; s += RC(8, y, 400, 36, k ? 'b0' : 'bxp', 8) + T(20, y + 23, r[0], { c: 'tk' }) + T(84, y + 23, r[1], { c: 'hd' }); });
    s += AR2(470, 16, 470, 284, 'ar') + T(458, 24, 'daha likit', { a: 'end', c: 'tp' }) + T(458, 282, 'daha az likit', { a: 'end', c: 'tb' });
    return { t: 'Şekil 2.2 · Likidite yelpazesi', n: 'Kitabın benzetmesi: su gibi akan nakitten tuğla gibi katı olan eve. Para tanımı (M1, M2) bu yelpazede çizginin nereye çekildiğine bağlıdır.', svg: SVG(520, 296, s) };
  })();

  F.spiral = { t: 'Likidite sarmalı (2007–2009)', n: 'Fiyat düşüşü fonlama likiditesini azaltır, bu piyasa likiditesini azaltır, o da fiyatı daha çok düşürür.',
    svg: SVG(520, 250, BOX(160, 8, 200, 56, ['Menkul kıymetin', 'fiyatı düşer'], 'bxr') + BOX(8, 170, 200, 56, ['Fonlama likiditesi', 'azalır'], 'bxp') + BOX(312, 170, 200, 56, ['Piyasa likiditesi', 'azalır'], 'bxw')
      + AR(190, 66, 110, 168, 'ar1') + AR(210, 198, 310, 198, 'ar3') + AR2(330, 66, 410, 168, 'ar2')) };

  F.m23 = (() => {
    const f = frame({ w: 520, h: 280, m: { t: 34 }, x: [1960, 2019], y: [-6, 20], yt: [-5, 0, 5, 10, 15, 20], xt: [1960, 1970, 1980, 1990, 2000, 2010, 2019], zero: true, yl: 'Yıllık büyüme (%)' });
    return { t: 'Şekil 2.3 · Para toplamlarının büyüme hızı (yaklaşık, yıllık)', n: 'M1 ile M2 farklı hızlarda büyür ve M1 çok daha oynaktır (1990\'larda eksiye düştü, 2008 ve 2011\'de sıçradı). Hangi M\'ye baktığın sonucu değiştirir.',
      svg: SVG(520, 280, f.s + f.line(D.m1, 'l3') + f.line(D.m2, 'l4') + LEG(70, 18, [['l3', 'M1'], ['l4', 'M2']], 80)) };
  })();

  F.m24 = (() => {
    const g1 = [], g2 = [];
    yrs(1962, 1980).forEach(y => g1.push([at(D.m2, y - 2), at(D.cpi, y)]));
    yrs(1990, 2019).forEach(y => g2.push([at(D.m2, y - 2), at(D.cpi, y)]));
    const f = frame({ w: 520, h: 290, x: [0, 14], y: [-2, 14], yt: [0, 2, 4, 6, 8, 10, 12, 14], xt: [0, 2, 4, 6, 8, 10, 12, 14], xl: 'M2 büyümesi, 2 yıl önce (%)', yl: 'Enflasyon (%)' });
    let s = f.s;
    [[g1, 'p2', 'l2'], [g2, 'p1', 'l1']].forEach(([g, pc, lc]) => { const [a, b] = ols(g); s += g.map(p => CI(f.X(p[0]), f.Y(p[1]), 4, pc)).join('') + PL([[f.X(0.5), f.Y(a + b * 0.5)], [f.X(13.8), f.Y(a + b * 13.8)]], lc + ' thin'); });
    s += LEG(70, 26, [['l2', '1962–1980'], ['l1', '1990–2019']], 120);
    return { t: 'Şekil 2.4 · Para büyümesi ve enflasyon (yaklaşık, yıllık)', n: '1980\'e kadar para hızlı büyüdüğünde enflasyon da yüksekti (eğimli kırmızı doğru). 1990 sonrasında ilişki neredeyse kayboldu (yatay mor doğru).', svg: SVG(520, 290, s) };
  })();

  // Bölüm 3
  F.flow = { t: 'Şekil 3.1 · Fonların finansal sistemden akışı', n: 'Fonlar soldan sağa (tasarruf edenden borçluya), finansal araçlar sağdan sola akar.',
    svg: SVG(520, 230, L(400, 76, 400, 30, 'ar1') + L(400, 30, 300, 30, 'ar1') + AR(300, 30, 300, 74, 'ar1') + L(220, 74, 220, 30, 'ar1') + L(220, 30, 90, 30, 'ar1') + AR(90, 30, 90, 74, 'ar1') + T(150, 22, 'Finansal araçlar', { a: 'middle', c: 'tp' }) + T(360, 22, 'Finansal araçlar', { a: 'middle', c: 'tp' })
      + BOX(6, 76, 160, 84, ['Borç veren', 'tasarrufçular', '(çoğu hane)'], 'bx') + BOX(180, 76, 160, 84, ['Finansal', 'kurumlar'], 'bxp') + BOX(354, 76, 160, 84, ['Borç alan', 'harcamacılar', '(devlet, firmalar)'], 'bx')
      + L(86, 160, 86, 196, 'ar3') + L(86, 196, 230, 196, 'ar3') + AR(230, 196, 230, 162, 'ar3') + L(290, 160, 290, 196, 'ar3') + L(290, 196, 430, 196, 'ar3') + AR(430, 196, 430, 162, 'ar3') + T(160, 218, 'Fonlar', { a: 'middle', c: 'tg' }) + T(360, 218, 'Fonlar', { a: 'middle', c: 'tg' })) };

  F.flow2 = { t: 'Şekil 3.2 · Finansal kurumlardan fon akışı', n: 'Üstte doğrudan finansman: aracı kurum sadece alıcıyla satıcıyı buluşturur. Altta dolaylı finansman: banka ya da sigorta şirketi mevduat/poliçe alır, kredi verir; varlığı dönüştürür.',
    svg: SVG(520, 330, BOX(4, 128, 140, 70, ['Tasarrufçular', '(çoğu hane)'], 'bx') + BOX(376, 128, 140, 70, ['Borçlular', '(devlet, firmalar)'], 'bx')
      + BOX(185, 12, 150, 64, ['Aracı kurumlar', '(broker)'], 'bxp') + BOX(185, 252, 150, 64, ['Bankalar, sigorta:', 'varlık dönüştürür'], 'bxw')
      + AR(110, 126, 185, 52, 'ar3') + AR(335, 52, 410, 126, 'ar3') + AR(410, 126, 335, 34, 'ar1') + AR(185, 34, 74, 126, 'ar1')
      + AR(110, 200, 185, 272, 'ar3') + AR(335, 272, 410, 200, 'ar3') + AR(410, 200, 335, 296, 'ar1') + AR(185, 296, 74, 200, 'ar1')
      + T(168, 104, 'fon', { a: 'middle', c: 'tg' }) + T(352, 104, 'fon', { a: 'middle', c: 'tg' }) + T(84, 64, 'hisse, tahvil', { a: 'middle', c: 'tp' }) + T(436, 64, 'hisse, tahvil', { a: 'middle', c: 'tp' })
      + T(170, 230, 'fon', { a: 'middle', c: 'tg' }) + T(350, 230, 'fon', { a: 'middle', c: 'tg' }) + T(70, 276, 'mevduat, poliçe', { a: 'middle', c: 'tp' }) + T(452, 276, 'kredi, tahvil', { a: 'middle', c: 'tp' })
      + T(260, 106, 'doğrudan finansman', { a: 'middle', c: 'lb' }) + T(260, 234, 'dolaylı finansman', { a: 'middle', c: 'lb' })) };

  // Bölüm 4
  F.pv = (() => {
    const f = frame({ w: 520, h: 280, x: [0, 30], y: [0, 120], yt: [0, 20, 40, 60, 80, 100, 120], xt: [0, 5, 10, 15, 20, 25, 30], xl: 'Ödemeye kalan yıl', yl: 'Bugünkü değer ($)' });
    const pts = yrs(0, 60).map(k => [k / 2, 100 / Math.pow(1.05, k / 2)]);
    const t50 = Math.log(2) / Math.log(1.05), t25 = 2 * t50;
    return { t: 'Şekil 4.1 · 100 doların %5 faizle bugünkü değeri', n: 'Ödeme uzaklaştıkça bugünkü değer düşer: yaklaşık 14.2 yılda yarıya (72 kuralı: 14.4), 28.4 yılda dörtte bire iner.',
      svg: SVG(520, 280, f.s + L(f.X(0), f.Y(50), f.X(t50), f.Y(50), 'gd') + L(f.X(t50), f.Y(50), f.X(t50), f.Y(0), 'gd') + L(f.X(0), f.Y(25), f.X(t25), f.Y(25), 'gd') + L(f.X(t25), f.Y(25), f.X(t25), f.Y(0), 'gd')
        + f.line(pts, 'l1') + CI(f.X(t50), f.Y(50), 5, 'pt') + CI(f.X(t25), f.Y(25), 5, 'pt') + T(f.X(t50) + 10, f.Y(50) - 10, '50 dolar: ≈14.2 yıl', { c: 'hd' }) + T(f.X(t25) - 8, f.Y(25) + 18, '25 dolar: ≈28.4 yıl', { a: 'end', c: 'hd' })) };
  })();

  F.cbond = (() => {
    const W = 520, H = 250, x0 = 60, dx = 92, base = 190;
    let s = AR(30, base, W - 10, base, 'ax') + T(W - 12, base + 24, 'yıl', { a: 'end', c: 'lb' });
    ['0', '1', '2', '…', 'n'].forEach((l, k) => { s += L(x0 + k * dx, base - 4, x0 + k * dx, base + 4, 'ax') + T(x0 + k * dx, base + 22, l, { a: 'middle', c: 'tk' }); });
    [1, 2].forEach(k => { s += AR(x0 + k * dx, base - 2, x0 + k * dx, base - 52, 'ar3') + T(x0 + k * dx, base - 60, 'C', { a: 'middle', c: 'tg' }); });
    s += T(x0 + 3 * dx, base - 30, '…', { a: 'middle', c: 'tk' }) + AR(x0 + 4 * dx, base - 2, x0 + 4 * dx, base - 128, 'ar3') + T(x0 + 4 * dx, base - 136, 'C + F', { a: 'middle', c: 'tg' });
    s += AR(x0, base + 30, x0, base + 2, 'ar2') + T(x0, base + 48, 'P (bugün ödenen fiyat)', { a: 'start', c: 'tb' });
    s += T(W / 2, 30, 'P = C/(1+i) + C/(1+i)² + … + (C+F)/(1+i)ⁿ', { a: 'middle', c: 'tp' });
    return { t: 'Kuponlu tahvilin ödemeleri', n: 'Her yıl kupon C, vadede kupon ile anapara (C + F). Fiyat, her ödemenin kendi yılı kadar iskontolanıp toplanmasıdır.', svg: SVG(W, H, s) };
  })();

  F.nomreal = (() => {
    const f = frame({ w: 520, h: 280, x: [1979, 2019], y: [-6, 16], yt: [-5, 0, 5, 10, 15], xt: [1980, 1990, 2000, 2010, 2019], zero: true, yl: 'Yüzde' });
    const nom = D.tb3.filter(p => p[0] >= 1979), inf = D.cpi.filter(p => p[0] >= 1979), real = nom.map(p => [p[0], p[1] - at(D.cpi, p[0])]);
    return { t: 'Şekil 4.2 · Nominal faiz, enflasyon ve reel faiz (yaklaşık, yıllık)', n: 'Nominal faiz (3 aylık bono) enflasyonla birlikte hareket eder. Reel faiz = nominal − enflasyon; zaman zaman negatife iner (2009 sonrası gibi).',
      svg: SVG(520, 280, f.s + f.line(nom, 'l3') + f.line(inf, 'l1') + f.line(real, 'l2') + LEG(300, 26, [['l3', 'Nominal faiz'], ['l1', 'Enflasyon'], ['l2', 'Reel faiz']])) };
  })();

  F.countries = (() => {
    const f = frame({ w: 520, h: 300, x: [-2, 16], y: [-2, 16], yt: [0, 4, 8, 12, 16], xt: [0, 4, 8, 12, 16], xl: 'Enflasyon (%)', yl: 'Nominal faiz (%)' });
    const lab = [['Brezilya', 10.7, 14.2], ['Mısır', 10.1, 11.5], ['Endonezya', 4, 8.2], ['Kolombiya', 7.5, 6.6], ['Vietnam', 0.8, 5.3], ['ABD', 1, 0.4], ['İsviçre', -1, -0.8]];
    const small = [[0.2, 0.1], [0.5, 0.3], [0.1, -0.3], [0.8, 0.5], [1.2, 1.4], [1.5, 2.2], [1.7, 0.7], [2.1, 1.6], [2.5, 6.3], [3.2, 6.1], [3.4, 3.7], [3.6, 3.9], [4.8, 1.2], [5, 0.8], [5.3, 7], [5.6, 7.4], [9.8, 12.6], [1.1, 1.8], [0.3, 2.6], [-0.2, 1.5], [1.9, 1.1], [2.8, 0.9]];
    let s = f.s + PL([[f.X(-2), f.Y(-2)], [f.X(16), f.Y(16)]], 'l5 dsh thin');
    s += small.map(p => CI(f.X(p[0]), f.Y(p[1]), 3.5, 'p2')).join('') + lab.map(p => CI(f.X(p[1]), f.Y(p[2]), 4.5, 'p2') + T(f.X(p[1]) + 8, f.Y(p[2]) + 5, p[0], { c: 'lg' })).join('');
    return { t: 'Ülkelerde enflasyon ve nominal faiz (2016 başı, yaklaşık)', n: 'Enflasyonu yüksek ülkelerin nominal faizi de yüksek: Fisher denklemi $i = r + \\pi^e$. Kesikli çizgi: nominal faiz = enflasyon (reel faiz sıfır).', svg: SVG(520, 300, s) };
  })();

  // Bölüm 5
  function bars(o) { // o.panels: [{title, ev, data:[[x,p]], xs:[[x,label]]}]
    const W = 520, H = 250, pw = 240;
    let s = '';
    o.panels.forEach((p, k) => {
      const f = frame({ w: pw, h: H, m: { l: 40, r: 10, t: 42, b: 44 }, x: p.x, y: [0, 1], yt: [0, 0.2, 0.4, 0.6, 0.8, 1], yf: (v) => v.toFixed(1), xt: [] });
      let g = f.s + TM(pw / 2 + 15, 16, [p.title, 'Beklenen değer = ' + p.ev], { c: 'hd', lh: 18 });
      p.xs.forEach(([v, l]) => { g += T(f.X(v), H - 44 + 19, l, { a: 'middle', c: 'tk' }); });
      p.data.forEach(([v, pr]) => { g += RC(f.X(v) - 13, f.Y(pr), 26, f.Y(0) - f.Y(pr), o.cls[k], 2); });
      g += L(f.X(p.evx), f.Y(1), f.X(p.evx), f.Y(0), 'l5 thin');
      s += `<g transform="translate(${k * (pw + 40)},0)">${g}</g>`;
    });
    return SVG(W, H, s);
  }
  F.prob = { t: 'Şekil 5.1 · 1000 dolar yatırmak: iki durum', n: 'İkisinin de beklenen değeri 1050 dolar (dikey çizgi). Durum 2\'nin sonuçları daha geniş yayılıyor: daha riskli.',
    svg: bars({ cls: ['b2', 'b4'], panels: [
      { title: 'Durum 1', ev: '1050', evx: 1050, x: [0, 2150], data: [[700, 0.5], [1400, 0.5]], xs: [[100, '100'], [700, '700'], [1400, '1400'], [2000, '2000']] },
      { title: 'Durum 2', ev: '1050', evx: 1050, x: [0, 2150], data: [[100, 0.1], [700, 0.4], [1400, 0.4], [2000, 0.1]], xs: [[100, '100'], [700, '700'], [1400, '1400'], [2000, '2000']] }] }) };

  F.spreadbars = { t: 'Riski yaymak: 3M ve Microsoft (100 dolar)', n: 'Tek hisse: ½ olasılıkla 100 ya da 120 (sd 10). Yarı yarıya: 100 (¼), 110 (½), 120 (¼); sd 7.07. Beklenen değer iki durumda da 110.',
    svg: bars({ cls: ['b2', 'b4'], panels: [
      { title: 'Hepsi tek hissede', ev: '110', evx: 110, x: [92, 128], data: [[100, 0.5], [120, 0.5]], xs: [[100, '100'], [110, '110'], [120, '120']] },
      { title: '50 + 50 iki hissede', ev: '110', evx: 110, x: [92, 128], data: [[100, 0.25], [110, 0.5], [120, 0.25]], xs: [[100, '100'], [110, '110'], [120, '120']] }] }) };

  F.riskret = { t: 'Risk–getiri ödünleşimi', n: 'Beklenen getiri = risksiz getiri + risk primi. Risk arttıkça istenen prim de artar.',
    svg: SVG(520, 250, AR(60, 220, 60, 14, 'ax') + AR(60, 220, 500, 220, 'ax') + T(496, 244, 'Risk', { a: 'end', c: 'lb' }) + TM(76, 24, ['Beklenen', 'getiri'], { a: 'start', c: 'lb' })
      + L(60, 160, 480, 160, 'l5 thin') + PL([[60, 160], [430, 40]], 'l2') + AR(300, 112, 300, 82, 'ar1', 8) + AR(300, 130, 300, 158, 'ar1', 8) + T(312, 120, 'risk primi', { c: 'tp' })
      + AR(420, 170, 420, 160, 'ar3', 7) + AR(420, 210, 420, 220, 'ar3', 7) + L(420, 172, 420, 208, 'ar3') + T(410, 195, 'risksiz getiri', { a: 'end', c: 'tg' }) + T(440, 36, 'yüksek risk = yüksek getiri', { a: 'end', c: 'tb' })) };

  F.idio = (() => {
    const wedge = (cx, cy, r, deg) => { const a0 = -Math.PI / 2 - deg * Math.PI / 360, a1 = -Math.PI / 2 + deg * Math.PI / 360; return `<path d="M${cx},${cy} L${n1(cx + r * Math.cos(a0))},${n1(cy + r * Math.sin(a0))} A${r},${r} 0 0 1 ${n1(cx + r * Math.cos(a1))},${n1(cy + r * Math.sin(a1))} Z" class="wd2"/>`; };
    const pie = (cx, cy, r, deg) => CI(cx, cy, r, 'wd1') + wedge(cx, cy, r, deg);
    return { t: 'Firmaya özgü ve sistematik risk (Ford örneği)', n: 'Firmaya özgü risk: ekonomi aynı kalır, Ford\'un payı küçülür. Sistematik risk: resesyon bütün ekonomiyi küçültür, Ford\'un payı da onunla küçülür.',
      svg: SVG(520, 300, pie(90, 80, 62, 80) + pie(420, 80, 62, 40) + pie(255, 238, 42, 80) + AR(165, 80, 345, 80, 'ar1') + TM(255, 52, ['firmaya özgü', 'risk'], { c: 'tp' }) + AR(140, 130, 210, 205, 'ar2') + TM(135, 196, ['sistematik', 'risk'], { c: 'tb' })
        + T(90, 172, 'ekonomi ve Ford\'un payı', { a: 'middle', c: 'lg' }) + T(420, 172, 'Ford\'un payı küçülür', { a: 'middle', c: 'lg' }) + T(310, 292, 'bütün ekonomi küçülür', { a: 'middle', c: 'lg' })) };
  })();

  // Bölüm 6
  F.bondeq = { t: 'Tahvil piyasasında denge', n: 'Arz yukarı, talep aşağı eğimli. Denge E\'de: arz edilen = talep edilen miktar. Fiyat yüksekse arz fazlası fiyatı düşürür, düşükse talep fazlası yükseltir.', svg: sd({}) };
  F.supshift = { t: 'Arz sağa kayar (borçlanma isteği artar)', n: 'Devlet borçlanması, iş koşullarının iyileşmesi ya da beklenen enflasyonun artması arzı sağa kaydırır: fiyat P₀\'dan P₁\'e düşer, faiz yükselir.', svg: sd({ s: 70, note: ['fiyat ↓', 'faiz ↑'] }) };
  F.demshift = { t: 'Talep sağa kayar (tahvil daha cazip)', n: 'Servet artışı, beklenen enflasyonun ya da faizin düşmesi, tahvilin göreli olarak daha az riskli ya da daha likit olması talebi sağa kaydırır: fiyat yükselir, faiz düşer.', svg: sd({ d: 70, note: ['fiyat ↑', 'faiz ↓'] }) };
  F.inflshift = { t: 'Beklenen enflasyon artar', n: 'Arz sağa (borçlanmak ucuzladı), talep sola (borç vermek cazipliğini yitirdi). İki etki de fiyatı düşürür, faizi yükseltir; miktarın ne olacağı belirsizdir.', svg: sd({ s: 55, d: -55, note: ['fiyat ↓', 'faiz ↑'] }) };
  F.recshift = { t: 'Resesyon', n: 'Arz sola (yatırım fırsatı azaldı), talep sola (servet azaldı). Arz daha çok kaydığı için fiyat yükselir, faiz düşer: resesyonda faizler düşer.', svg: sd({ s: -80, d: -35, note: ['fiyat ↑', 'faiz ↓'] }) };

  F.priceytm = (() => {
    const pr = (i) => { let p = 0; for (let t = 1; t <= 10; t++) p += 5 / Math.pow(1 + i, t); return p + 100 / Math.pow(1 + i, 10); };
    const f = frame({ w: 520, h: 280, x: [1, 10], y: [60, 140], yt: [60, 80, 100, 120, 140], xt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xf: (v) => v + '%', xl: 'Vadeye kadar getiri (YTM)', yl: 'Fiyat ($)' });
    const pts = yrs(10, 100).map(k => [k / 10, pr(k / 1000)]);
    return { t: '10 yıllık, %5 kuponlu tahvilde fiyat ve YTM', n: 'Fiyat ile getiri ters yönde hareket eder. YTM kupon oranına (%5) eşitken fiyat tam 100; YTM %5\'in altındaysa fiyat 100\'ün üstünde (primli), üstündeyse altında (iskontolu).',
      svg: SVG(520, 280, f.s + L(f.X(5), f.Y(60), f.X(5), f.Y(100), 'gd') + L(f.X(1), f.Y(100), f.X(5), f.Y(100), 'gd') + f.line(pts, 'l1') + CI(f.X(5), f.Y(100), 5, 'pt') + T(f.X(5) + 10, f.Y(100) - 10, 'YTM = kupon ⇒ P = 100', { c: 'hd' })
        + T(f.X(2.2), f.Y(132), 'primli', { a: 'middle', c: 'tg' }) + T(f.X(8.6), f.Y(88), 'iskontolu', { a: 'middle', c: 'tb' })) };
  })();

  // Bölüm 7
  F.riskstr = (() => {
    const f = frame({ w: 520, h: 280, x: [1971, 2019], y: [0, 18], yt: [0, 3, 6, 9, 12, 15, 18], xt: [1971, 1980, 1990, 2000, 2010, 2019], yl: 'Getiri (%)' });
    return { t: 'Şekil 7.2 · Faizin risk yapısı (yaklaşık, yıllık)', n: 'Her zaman Baa > Aaa > Hazine: not düştükçe getiri artar. Üçü birlikte hareket eder; farkın (spread) büyük kısmı temerrüt risk primidir.',
      svg: SVG(520, 280, f.s + f.line(D.gs10, 'l3') + f.line(D.aaa, 'l4') + f.line(D.baa, 'l2') + LEG(330, 28, [['l2', "Moody's Baa"], ['l4', "Moody's Aaa"], ['l3', '10 yıllık Hazine']])) };
  })();

  F.termstr = (() => {
    const f = frame({ w: 520, h: 270, x: [1971, 2019], y: [0, 16], yt: [0, 4, 8, 12, 16], xt: [1971, 1980, 1990, 2000, 2010, 2019], yl: 'Getiri (%)' });
    return { t: 'Şekil 7.3 · Hazine faizlerinin vade yapısı (yaklaşık, yıllık)', n: 'Üç gözlem: faizler birlikte hareket eder; kısa vadeli faiz daha oynaktır; uzun vadeli faiz çoğunlukla daha yüksektir.',
      svg: SVG(520, 270, f.s + f.line(D.tb3, 'l1') + f.line(D.gs10, 'l3') + LEG(300, 28, [['l1', '3 aylık bono'], ['l3', '10 yıllık tahvil']])) };
  })();

  F.yc = (() => {
    const mats = ['1a', '3a', '6a', '1', '2', '3', '5', '7', '10', '20', '30'];
    const now = [2.4, 2.41, 2.46, 2.55, 2.45, 2.43, 2.43, 2.51, 2.63, 2.83, 3.0], ago = [1.43, 1.46, 1.64, 1.8, 2.14, 2.27, 2.52, 2.66, 2.72, 2.85, 2.95];
    const f = frame({ w: 520, h: 270, x: [0, 10], y: [0, 3.5], yt: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], yf: (v) => v.toFixed(1), xt: yrs(0, 10), xf: (v) => mats[v], xl: 'Vade (a = ay, diğerleri yıl)', yl: 'Vadeye kadar getiri (%)' });
    return { t: 'Şekil 7.4 · ABD Hazine getiri eğrisi (yaklaşık)', n: '31 Ocak 2019 eğrisi neredeyse düz (kısa ve uzun faizler yakın). Bir yıl önceki eğri belirgin yukarı eğimliydi.',
      svg: SVG(520, 270, f.s + f.line(ago.map((v, k) => [k, v]), 'l2') + f.line(now.map((v, k) => [k, v]), 'l1') + LEG(70, 30, [['l1', 'Ocak 2019'], ['l2', 'bir yıl önce']], 130)) };
  })();

  F.ycshapes = (() => {
    let s = '';
    [['Faizlerin artması bekleniyor', [130, 70]], ['Aynı kalması bekleniyor', [100, 100]], ['Düşmesi bekleniyor', [70, 130]]].forEach(([lab, yy], k) => {
      const x = 8 + k * 172;
      s += AR(x + 20, 170, x + 20, 30, 'ax', 8) + AR(x + 20, 170, x + 160, 170, 'ax', 8) + PL([[x + 32, yy[0]], [x + 150, yy[1]]], 'l2') + T(x + 90, 190, 'vade', { a: 'middle', c: 'tk' }) + T(x + 12, 100, 'getiri', { a: 'middle', c: 'tk', r: -90 }) + TM(x + 90, 214, lab.split(' bekleniyor').length > 1 ? [lab.replace(' bekleniyor', ''), 'bekleniyor'] : [lab], { c: 'lg' });
    });
    return { t: 'Şekil 7.5 · Beklentiler hipotezi ve getiri eğrisinin şekli', n: 'Uzun vadeli faiz beklenen kısa vadeli faizlerin ortalaması olduğu için eğrinin eğimi beklentiyi gösterir.', svg: SVG(520, 240, s) };
  })();

  F.ehtime = (() => {
    const xs = [40, 190, 340, 490];
    let s = xs.map((x, k) => L(x, 30, x, 170, 'ax') + T(x, 22, ['Bugün', '1. yıl', '2. yıl', '3. yıl'][k], { a: 'middle', c: 'hd' })).join('');
    [['bugünkü 1 yıllık faiz', 'i₁ₜ'], ['1 yıl sonra beklenen', 'iᵉ₁ₜ₊₁'], ['2 yıl sonra beklenen', 'iᵉ₁ₜ₊₂']].forEach(([a, b], k) => { s += AR2(xs[k] + 8, 80, xs[k + 1] - 8, 80, 'ar1') + T((xs[k] + xs[k + 1]) / 2, 62, a, { a: 'middle', c: 'lg' }) + T((xs[k] + xs[k + 1]) / 2, 104, b, { a: 'middle', c: 'tp' }); });
    s += AR2(48, 146, 482, 146, 'ar2') + T(265, 136, '3 yıllık faiz i₃ₜ = üç faizin ortalaması', { a: 'middle', c: 'tb' });
    return { t: 'Beklentiler hipotezi: 3 yıllık faiz', n: '$i_{3t} = (i_{1t} + i^e_{1t+1} + i^e_{1t+2})/3$. 3 yıllık tahvil ile art arda üç tane 1 yıllık tahvil aynı getiriyi vermeli.', svg: SVG(530, 182, s) };
  })();

  F.lpt = (() => {
    const f = frame({ w: 520, h: 260, x: [0, 10], y: [0, 5], yt: [0, 1, 2, 3, 4, 5], xt: [1, 2, 4, 6, 8, 10], xl: 'Vade (yıl)', yl: 'Getiri (%)' });
    const eh = yrs(1, 10).map(n => [n, 2]), lp = yrs(1, 10).map(n => [n, 2 + 0.6 * Math.log(n) + 0.05 * n]);
    let s = f.s + f.line(eh, 'l1 dsh') + f.line(lp, 'l2');
    s += AR(f.X(8), f.Y(2.05), f.X(8), f.Y(2 + 0.6 * Math.log(8) + 0.4 - 0.05), 'ar3', 8) + T(f.X(8) + 8, f.Y(2.7), 'risk primi', { c: 'tg' });
    s += LEG(70, 30, [['l2', 'Likidite primi teorisi'], ['l1 dsh', 'Beklentiler hipotezi']]);
    return { t: 'Likidite primi teorisi (faizlerin aynı kalması beklenirken)', n: 'Beklentiler hipotezi düz bir eğri öngörür. Vadeyle artan risk primi eklenince eğri yukarı eğimli olur: uzun vadeli faizler neden genelde daha yüksek?', svg: SVG(520, 260, s) };
  })();

  F.spreadgdp = (() => {
    const f = frame({ w: 520, h: 280, x: [1971, 2019], y: [-3, 8], yt: [-2, 0, 2, 4, 6, 8], xt: [1971, 1980, 1990, 2000, 2010, 2019], zero: true, yl: 'Yüzde', shade: REC });
    const spread = D.baa.map(p => [p[0], p[1] - at(D.gs10, p[0])]);
    return { t: 'Şekil 7.6 · Risk farkı ve GSYH büyümesi (yaklaşık, yıllık)', n: 'Gölgeli alanlar resesyonlar. Risk farkı (Baa − 10 yıllık Hazine) yükselirken büyüme düşer; 2008–2009\'da fark sıçradı.',
      svg: SVG(520, 280, f.s + f.line(D.gdp.filter(p => p[0] >= 1971), 'l2') + f.line(spread, 'l3') + LEG(300, 28, [['l2', 'GSYH büyümesi'], ['l3', 'Risk farkı (Baa − Hazine)']])) };
  })();

  F.termgdp = (() => {
    const f = frame({ w: 520, h: 280, x: [1972, 2019], y: [-3, 8], yt: [-2, 0, 2, 4, 6, 8], xt: [1972, 1980, 1990, 2000, 2010, 2019], zero: true, yl: 'Yüzde', shade: REC });
    const ts = D.gs10.map(p => [p[0] + 1, p[1] - at(D.tb3, p[0])]).filter(p => p[0] <= 2019);
    return { t: 'Şekil 7.7 · Vade farkı (1 yıl önceki) ve GSYH büyümesi (yaklaşık)', n: 'Vade farkı (10 yıllık − 3 aylık) bir yıl kaydırılarak çizildi: fark düştüğünde bir yıl sonra büyüme de düşer. Ters getiri eğrisi (negatif fark) resesyonların öncü sinyali.',
      svg: SVG(520, 280, f.s + f.line(D.gdp.filter(p => p[0] >= 1972), 'l2') + f.line(ts, 'l3') + LEG(300, 28, [['l2', 'GSYH büyümesi'], ['l3', 'Vade farkı, 1 yıl önce']])) };
  })();

  // Bölüm 12
  F.bankassets = (() => {
    const f = frame({ w: 520, h: 310, m: { t: 58, l: 52 }, x: [1979, 2019], y: [0, 36], yt: [0, 5, 10, 15, 20, 25, 30, 35], yf: (v) => v + '%', xt: [1980, 1990, 2000, 2010, 2019], yl: 'Toplam varlıkların payı' });
    const S = {
      sec: [[1979, 19], [1985, 20], [1990, 21], [1993, 25], [1997, 21], [2000, 19], [2003, 22], [2007, 19], [2009, 19], [2012, 21], [2015, 20], [2019, 21]],
      re: [[1979, 17], [1985, 19], [1988, 24], [1992, 26], [1996, 25], [2000, 25], [2004, 30], [2008, 34], [2010, 31], [2013, 26], [2016, 25], [2019, 26]],
      con: [[1979, 13], [1985, 12], [1990, 11], [1995, 11], [2000, 9], [2005, 9], [2009, 7], [2012, 9], [2015, 9], [2019, 9]],
      ci: [[1979, 20], [1985, 22], [1988, 21], [1993, 17], [1998, 18], [2001, 17], [2004, 12], [2008, 14], [2010, 10], [2013, 12], [2016, 13], [2019, 13]],
      cash: [[1979, 12], [1982, 10], [1985, 9], [1990, 7], [1995, 6], [2000, 5], [2005, 4], [2008, 3], [2009, 8], [2011, 11], [2014, 19], [2016, 17], [2018, 14], [2019, 12]]
    };
    return { t: 'Şekil 12.1 · ABD ticari bankalarının varlıkları (yaklaşık)', n: 'Gayrimenkul kredileri 2008\'e kadar arttı, sonra azaldı. Ticari kredilerin payı düştü. Nakit kriz öncesi %3\'e kadar indi, sonra rezervlerle sıçradı.',
      svg: SVG(520, 310, f.s + f.line(S.re, 'l2') + f.line(S.sec, 'l5') + f.line(S.ci, 'l3') + f.line(S.con, 'l4') + f.line(S.cash, 'l1') + LEG(60, 16, [['l2', 'Gayrimenkul'], ['l5', 'Menkul kıymet'], ['l3', 'Ticari ve sanayi']], 150) + LEG(60, 38, [['l4', 'Tüketici'], ['l1', 'Nakit']], 150)) };
  })();

  F.bankliab = (() => {
    const f = frame({ w: 520, h: 260, x: [1979, 2019], y: [0, 90], yt: [0, 20, 40, 60, 80], yf: (v) => v + '%', xt: [1980, 1990, 2000, 2010, 2019], yl: 'Toplam yükümlülüklerin payı' });
    const dep = [[1979, 82], [1985, 79], [1990, 77], [1993, 75], [1997, 68], [2000, 66], [2003, 66], [2006, 66], [2008, 64], [2009, 70], [2012, 76], [2015, 78], [2019, 82]];
    const bor = [[1979, 14], [1985, 15], [1990, 16], [1995, 16], [2000, 19], [2005, 20], [2008, 22], [2010, 17], [2013, 13], [2016, 13], [2019, 13]];
    return { t: 'Şekil 12.2 · ABD ticari bankalarının yükümlülükleri (yaklaşık)', n: 'Mevduat ana fon kaynağı (2018 sonunda %82). Borçlanma payı krize kadar arttı, sonra yaklaşık %13\'e indi.',
      svg: SVG(520, 260, f.s + f.line(dep, 'l4') + f.line(bor, 'l3') + LEG(300, 120, [['l4', 'Mevduat'], ['l3', 'Borçlanma']])) };
  })();

  F.repo = { t: 'Şekil 12.3 · Gecelik repo nasıl işler?', n: 'Banka bugün hazine bonosunu nakit karşılığında verir, yarın faiziyle birlikte geri alır: bono teminatlı kısa vadeli borç.',
    svg: SVG(520, 300, RC(4, 4, 512, 140, 'b0', 10) + RC(4, 154, 512, 140, 'shg', 10) + T(260, 28, '1. gün: banka bonoyu emeklilik fonuna satar', { a: 'middle', c: 'hd' }) + T(260, 178, '2. gün: banka bonoyu geri alır', { a: 'middle', c: 'hd' })
      + T(40, 94, 'Banka', { c: 'hd' }) + T(470, 94, 'Fon', { a: 'end', c: 'hd' }) + T(40, 244, 'Banka', { c: 'hd' }) + T(470, 244, 'Fon', { a: 'end', c: 'hd' })
      + AR(110, 70, 420, 70, 'ar1') + T(265, 60, 'Hazine bonosu', { a: 'middle', c: 'tp' }) + AR(420, 110, 110, 110, 'ar3') + T(265, 130, 'Nakit', { a: 'middle', c: 'tg' })
      + AR(420, 220, 110, 220, 'ar1') + T(265, 210, 'Hazine bonosu geri döner', { a: 'middle', c: 'tp' }) + AR(110, 260, 420, 260, 'ar3') + T(265, 282, 'Nakit + faiz', { a: 'middle', c: 'tg' })) };

  // Economist
  F.yieldprice = (() => {
    const f = frame({ w: 520, h: 270, x: [0, 8], y: [40, 100], yt: [40, 50, 60, 70, 80, 90, 100], xt: [0, 1, 2, 3, 4, 5, 6, 7, 8], xf: (v) => v + '%', xl: 'Getiri', yl: 'Fiyat ($)' });
    const pts = yrs(0, 80).map(k => [k / 10, 100 / Math.pow(1 + k / 1000, 10)]);
    const p4 = 100 / Math.pow(1.04, 10), p53 = 100 / Math.pow(1.053, 10);
    return { t: '10 yıl sonra 100 dolar ödeyen tahvilin fiyatı', n: `Getiri %4'ten %5.3'e çıkınca fiyat ${p4.toFixed(2)}'den ${p53.toFixed(2)}'ye düşer (yaklaşık %${((1 - p53 / p4) * 100).toFixed(0)}). Makaledeki "sell-off" budur: getiri yükseldi = fiyat düştü.`,
      svg: SVG(520, 270, f.s + f.line(pts, 'l1') + L(f.X(4), f.Y(40), f.X(4), f.Y(p4), 'gd') + L(f.X(5.3), f.Y(40), f.X(5.3), f.Y(p53), 'gd') + CI(f.X(4), f.Y(p4), 5, 'pt') + CI(f.X(5.3), f.Y(p53), 5, 'pt')
        + T(f.X(4) - 8, f.Y(p4) - 10, '%4 → ' + p4.toFixed(1), { a: 'end', c: 'hd' }) + T(f.X(5.3) + 8, f.Y(p53) - 10, '%5.3 → ' + p53.toFixed(1), { c: 'hd' })) };
  })();

  F.debtpath = (() => {
    const r = 0.04, g = 0.02, d0 = 1.2, stab = (r - g) / (1 + g) * d0;
    const path = (pb) => { const out = [[0, d0 * 100]]; let d = d0; for (let t = 1; t <= 10; t++) { d = d * (1 + r) / (1 + g) - pb; out.push([t, d * 100]); } return out; };
    const f = frame({ w: 520, h: 280, m: { l: 60 }, x: [0, 10], y: [110, 180], yt: [110, 120, 130, 140, 150, 160, 170, 180], yf: (v) => v + '%', xt: yrs(0, 10), xl: 'Yıl', yl: 'Borç / GSYH' });
    return { t: 'Borç dinamiği: faiz %4, büyüme %2, borç GSYH\'nin %120\'si', n: `Faiz büyümeden yüksekken ($r > g$) faiz dışı denge sıfır olsa bile borç oranı artar. Oranı sabit tutmak için GSYH'nin yaklaşık %${(stab * 100).toFixed(1)}'i kadar faiz dışı fazla gerekir.`,
      svg: SVG(520, 280, f.s + f.line(path(-0.029), 'l2') + f.line(path(0), 'l4') + f.line(path(stab), 'l3') + LEG(64, 30, [['l2', 'Faiz dışı açık %2.9 (Fransa gibi)'], ['l4', 'Faiz dışı denge 0'], ['l3', `Faiz dışı fazla %${(stab * 100).toFixed(1)}`]])) };
  })();

  root.FIGS = F;
})(typeof window !== 'undefined' ? window : globalThis);
