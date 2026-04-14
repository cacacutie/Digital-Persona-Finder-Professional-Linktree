const db = {
  tech: [
    { t: "The Tech Innovator",    d: "Kamu adalah pemikir masa depan yang membangun solusi digital. Logika adalah bahasa jiwamu, dan setiap masalah adalah teka-teki yang menunggu dipecahkan.", b: "Inovator" },
    { t: "The Code Architect",    d: "Bukan sekadar coder — kamu merancang sistem yang bertahan lama. Kamu melihat dunia sebagai kumpulan pola yang bisa dioptimasi.", b: "Arsitek" },
    { t: "The Digital Visionary", d: "Kamu selalu satu langkah lebih maju dari zamanmu. Teknologi bukan alat bagimu — ia adalah cara pandang.", b: "Visioner" },
  ],
  seni: [
    { t: "The Creative Soul",       d: "Jiwamu berbicara lewat warna, bentuk, dan ekspresi. Duniamu adalah kanvas tak terbatas, dan setiap momen adalah inspirasi.", b: "Kreatif" },
    { t: "The Visual Storyteller",  d: "Kamu mengubah emosi menjadi gambar. Karya-karyamu berbicara lebih keras dari kata-kata mana pun.", b: "Seniman" },
    { t: "The Design Philosopher",  d: "Estetika bukan sekadar keindahan — bagi kamu, desain adalah cara berpikir tentang kehidupan.", b: "Filosof" },
  ],
  musik: [
    { t: "The Rhythm Maestro",  d: "Hidupmu berdetak mengikuti irama. Kamu merasakan frekuensi emosi yang tidak bisa didengar orang lain.", b: "Maestro" },
    { t: "The Sonic Explorer",  d: "Setiap nada adalah petualangan. Kamu tidak sekadar mendengarkan musik — kamu hidup di dalamnya.", b: "Explorer" },
    { t: "The Melody Weaver",   d: "Kamu merajut perasaan menjadi melodi. Musik adalah bahasa universalmu untuk menyentuh hati.", b: "Pencipta" },
  ],
  olahraga: [
    { t: "The Iron Champion",   d: "Disiplin adalah identitasmu. Setiap keringat adalah investasi, setiap batas adalah tantangan untuk dikalahkan.", b: "Juara" },
    { t: "The Kinetic Spirit",  d: "Energimu tak terbendung. Kamu percaya bahwa tubuh yang kuat melahirkan jiwa yang tangguh.", b: "Atletik" },
    { t: "The Peak Performer",  d: "Kamu tidak berhenti di rata-rata. Setiap rekor pribadi adalah batu loncatan menuju versi dirimu yang lebih baik.", b: "Performer" },
  ],
  menulis: [
    { t: "The Word Alchemist",   d: "Kamu mengubah ide mentah menjadi narasi yang menghidupkan pikiran. Penamu adalah senjata paling tajam yang kamu miliki.", b: "Penulis" },
    { t: "The Story Architect",  d: "Setiap cerita yang kamu tulis adalah dunia yang kamu ciptakan. Karakter-karaktermu lebih nyata dari kenyataan.", b: "Narator" },
    { t: "The Ink Oracle",       d: "Tulisanmu meramalkan perasaan yang belum dirasakan siapapun. Kamu berbicara kepada masa depan.", b: "Oracle" },
  ],
  bisnis: [
    { t: "The Strategy Titan",    d: "Kamu membaca peluang seperti membaca peta. Setiap langkah adalah kalkulasi, setiap risiko adalah investasi terencana.", b: "Strategis" },
    { t: "The Market Whisperer",  d: "Kamu merasakan arah angin pasar sebelum orang lain tersadar. Instingmu adalah kompas terbaik.", b: "Intuisi" },
    { t: "The Empire Builder",    d: "Visimu melampaui profit. Kamu membangun warisan, bukan sekadar bisnis.", b: "Pemimpin" },
  ],
  fotografi: [
    { t: "The Lens Philosopher", d: "Matamu menangkap momen yang hilang dalam sekejap. Setiap foto adalah pembekuan waktu yang penuh makna.", b: "Fotografer" },
    { t: "The Frame Artist",     d: "Kamu melihat keindahan di tempat yang orang lain abaikan. Framing adalah cara kamu membaca dunia.", b: "Seniman" },
    { t: "The Visual Poet",      d: "Gambar-gambarmu bercerita tanpa satu kata pun. Puisimu ditulis dengan cahaya.", b: "Penyair" },
  ],
  memasak: [
    { t: "The Flavor Maestro",   d: "Dapurmu adalah laboratorium rasa. Kamu memadukan bahan-bahan menjadi simfoni yang menyentuh lidah dan hati.", b: "Chef" },
    { t: "The Culinary Sage",    d: "Makanan bagimu adalah cinta yang berbentuk nyata. Setiap hidangan adalah pesan yang ingin kamu sampaikan.", b: "Bijaksana" },
    { t: "The Taste Architect",  d: "Kamu merancang pengalaman makan, bukan sekadar hidangan. Aromamu dikenang lama setelah pesta usai.", b: "Kreator" },
  ],
  gaming: [
    { t: "The Digital Strategist", d: "Kamu tidak hanya bermain — kamu menganalisa, merencanakan, dan mendominasi. Setiap game adalah sistem untuk dikuasai.", b: "Strategis" },
    { t: "The Virtual Explorer",   d: "Dunia virtual adalah petualangan nyata bagimu. Setiap quest adalah cermin dari tekadmu dalam hidup.", b: "Penjelajah" },
    { t: "The Lore Keeper",        d: "Kamu menghidupi setiap dunia fiksi dengan penuh dedikasi. Narasimu terpatri dalam sejarah komunitas.", b: "Penjaga" },
  ],
  travel: [
    { t: "The Horizon Chaser", d: "Batas peta tidak pernah cukup untukmu. Setiap perjalanan baru membuka lapisan dirimu yang belum pernah terlihat.", b: "Penjelajah" },
    { t: "The Soul Wanderer",  d: "Kamu tidak bepergian untuk melarikan diri — kamu bepergian untuk menemukan. Setiap budaya adalah rumahmu.", b: "Petualang" },
    { t: "The World Connector",d: "Perjalananmu bukan sekedar mengunjungi tempat, tapi menghubungkan jiwa-jiwa di penjuru bumi.", b: "Penyambung" },
  ],
};

function ketikManusiawi(el, teks, cepatMin, cepatMax, selesai) {
  el.textContent = '';
  const kursor = document.createElement('span');
  kursor.className = 'kursor';
  el.appendChild(kursor);

  let i = 0;
  (function ketikHuruf() {
    if (i >= teks.length) {
      setTimeout(() => { kursor.remove(); if (selesai) selesai(); }, 450);
      return;
    }
    const karakter = teks[i];
    el.insertBefore(document.createTextNode(karakter), kursor);
    i++;

    let jeda = cepatMin + Math.random() * (cepatMax - cepatMin);
    if (['.', '!', '?'].includes(karakter))           jeda *= 5;
    else if ([',', '—', ';', ':'].includes(karakter)) jeda *= 3;
    else if (karakter === ' ')                         jeda *= 1.5;
    if (Math.random() < 0.03) jeda += 200 + Math.random() * 300;

    setTimeout(ketikHuruf, jeda);
  })();
}

function cariPersona() {
  const nama  = document.getElementById('nama').value.trim();
  const hobi  = document.getElementById('hobi').value;
  const angka = parseInt(document.getElementById('angka').value);

  if (!nama) { alert('Masukkan nama kamu dulu ya!'); return; }
  if (!hobi) { alert('Pilih hobi utama kamu!');      return; }

  const list = db[hobi];
  const idx  = angka <= 3 ? 0 : angka <= 7 ? 1 : 2;
  const p    = list[idx];

  const elBadge = document.getElementById('pbadge');
  const elTitle = document.getElementById('ptitle');
  const elDesc  = document.getElementById('pdesc');
  const box     = document.getElementById('rbox');
  const btn     = document.getElementById('btnFind');

  elBadge.textContent = '';
  elBadge.classList.remove('muncul');
  elTitle.textContent = '';
  elDesc.textContent  = '';

  box.classList.remove('show');
  void box.offsetWidth;
  box.classList.add('show');

  btn.disabled = true;
  btn.textContent = 'Sedang mengetik…';

  setTimeout(() => {
    elBadge.textContent = p.b;
    elBadge.classList.add('muncul');
  }, 200);

  setTimeout(() => {
    ketikManusiawi(elTitle, p.t, 45, 95, () => {
      const teksLengkap = 'Hei ' + nama + ', ' + p.d;
      ketikManusiawi(elDesc, teksLengkap, 22, 60, () => {
        btn.disabled = false;
        btn.textContent = 'Temukan Persona saya ✦';
      });
    });
  }, 500);
}