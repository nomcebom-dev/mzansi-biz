

/* BUSINESS DATA */
const BUSINESSES = [
  // FOOD & CATERING
  { id:1, name:"Mama Thandi's Kitchen", category:"food", emoji:"🍖", desc:"Traditional South African home-cooked meals. Pap, chakalaka, braai platters and catering for events.", area:"Soweto", address:"Vilakazi St, Orlando West", phone:"076 234 5678", hours:"Mon–Sat 7am–7pm", open:true },
  { id:2, name:"Zulu Spice Catering", category:"food", emoji:"🌶", desc:"Event catering specialising in Zulu cuisine. Weddings, umembeso, graduation ceremonies and corporate lunches.", area:"Umlazi", address:"P Section, Umlazi", phone:"083 456 7890", hours:"Mon–Sun 8am–9pm", open:true },
  { id:3, name:"Kasi Braai House", category:"food", emoji:"🔥", desc:"Weekend braai spot with boerewors, chicken, chops and cold drinks. Popular spot for families.", area:"Tembisa", address:"Endulwini Section", phone:"071 890 1234", hours:"Fri–Sun 11am–8pm", open:false },
  { id:4, name:"Ntombi's Vetkoek Palace", category:"food", emoji:"🥟", desc:"Vetkoek with mince, cheese or jam fillings. Hot and fresh daily from 6am. Takeaways welcome.", area:"Mamelodi", address:"Block R, Mamelodi East", phone:"064 321 9876", hours:"Mon–Sat 6am–2pm", open:true },
  { id:5, name:"Alexandra Kitchen Co.", category:"food", emoji:"🍳", desc:"Breakfast and lunch spot. Eggs, samp, beans and fresh juice. Affordable daily specials.", area:"Alexandra", address:"7th Avenue, Alex", phone:"078 555 1234", hours:"Mon–Fri 6am–3pm", open:true },
  { id:6, name:"Cape Town Bunny Chow", category:"food", emoji:"🍞", desc:"Bunny chow in quarter, half and full loaf. Mutton, bean, chicken and vegetarian options available.", area:"Khayelitsha", address:"Site B, Khayelitsha", phone:"081 234 5670", hours:"Mon–Sun 10am–9pm", open:true },

  // HAIR & BEAUTY
  { id:7, name:"Queen Nails & Lashes", category:"beauty", emoji:"💅", desc:"Nail extensions, gel polish, lash sets and eyebrow shaping. Walk-ins welcome on weekdays.", area:"Soweto", address:"Molapo Section, Meadowlands", phone:"073 678 9012", hours:"Tue–Sun 9am–6pm", open:true },
  { id:8, name:"Braids by Zodwa", category:"beauty", emoji:"💇🏾", desc:"Box braids, knotless, cornrows and Senegalese twists. 10+ years experience. Appointments preferred.", area:"Alexandra", address:"East Bank, Alexandra", phone:"082 111 2233", hours:"Mon–Sat 8am–7pm", open:true },
  { id:9, name:"Glow Up Beauty Studio", category:"beauty", emoji:"✨", desc:"Facials, waxing, threading and makeup for special occasions. Matric farewell packages available.", area:"Khayelitsha", address:"Harare Section", phone:"076 900 8877", hours:"Mon–Fri 9am–5pm", open:false },
  { id:10, name:"Natural Roots Salon", category:"beauty", emoji:"🌿", desc:"Natural hair specialist. Loc installation, retightening, steam treatments and protective styling.", area:"Tembisa", address:"Umthambeka Section", phone:"065 432 1099", hours:"Mon–Sat 8am–6pm", open:true },
  { id:11, name:"King Kutz Barbershop", category:"beauty", emoji:"✂️", desc:"Fades, line-ups, beard trims and hair designs. PlayStation while you wait. Walk-ins always welcome.", area:"Mamelodi", address:"Block X Mamelodi", phone:"071 777 8899", hours:"Mon–Sun 8am–8pm", open:true },
  { id:12, name:"Umlazi Beauty Bar", category:"beauty", emoji:"💄", desc:"Makeup, skincare consultations, and beauty product sales. Bridal packages and event glam available.", area:"Umlazi", address:"Q Section, Umlazi", phone:"083 222 3344", hours:"Tue–Sat 9am–5pm", open:true },

  // TUTORING
  { id:13, name:"Maths & Science Hub", category:"education", emoji:"📐", desc:"Grade 10–12 tutoring in Maths, Physical Science and Accounting. Small groups of max 6 learners.", area:"Soweto", address:"Dube, Soweto", phone:"082 345 6789", hours:"Mon–Fri 3pm–7pm, Sat 9am–1pm", open:true },
  { id:14, name:"Thandi's Homework Help", category:"education", emoji:"📚", desc:"After-school tutoring for Grade 4–9 across all subjects. Affordable rates, patient teachers.", area:"Alexandra", address:"3rd Avenue, Alexandra", phone:"076 111 2200", hours:"Mon–Fri 2pm–6pm", open:true },
  { id:15, name:"Tech Skills Bootcamp", category:"education", emoji:"💻", desc:"Beginner computer literacy, Microsoft Office, typing and basic coding. Certificates issued on completion.", area:"Khayelitsha", address:"Site C Community Hall", phone:"071 444 5566", hours:"Mon–Sat 9am–4pm", open:true },
  { id:16, name:"English & Life Skills Academy", category:"education", emoji:"🗣", desc:"Adult literacy, English communication and CV writing workshops. Free intro sessions every Friday.", area:"Tembisa", address:"Tswelopele Section", phone:"064 987 6543", hours:"Mon–Sat 8am–5pm", open:false },
  { id:17, name:"A-Grade Tutors", category:"education", emoji:"🎓", desc:"University entrance prep, matric rewrite support, and scholarship application assistance.", area:"Umlazi", address:"R Section, Umlazi", phone:"083 676 5544", hours:"Mon–Fri 3pm–8pm", open:true },

  // RETAIL & SPAZA
  { id:18, name:"Baba's Spaza Shop", category:"retail", emoji:"🛒", desc:"Groceries, airtime, electricity tokens, bread and cold drinks. Open early every day.", area:"Soweto", address:"Phiri, Soweto", phone:"078 234 5556", hours:"Mon–Sun 6am–10pm", open:true },
  { id:19, name:"Lebo's General Store", category:"retail", emoji:"🏪", desc:"Household items, cleaning products, school stationery and basic food supplies. Bulk orders welcome.", area:"Mamelodi", address:"Block W, Mamelodi West", phone:"072 333 4455", hours:"Mon–Sat 7am–8pm", open:true },
  { id:20, name:"Khayelitsha Fresh Produce", category:"retail", emoji:"🥦", desc:"Fresh fruit and vegetables daily. Seasonal specials and bulk bags for families and caterers.", area:"Khayelitsha", address:"Mew Way, Khayelitsha", phone:"065 876 5432", hours:"Mon–Sun 6am–6pm", open:true },
  { id:21, name:"Alex Hardware & Paint", category:"retail", emoji:"🔧", desc:"Building supplies, paint, tools and plumbing fittings. Delivery available in Alexandra area.", area:"Alexandra", address:"London Road, Alexandra", phone:"011 440 1234", hours:"Mon–Sat 7am–5pm", open:true },
  { id:22, name:"Sibongile's Clothing Stall", category:"retail", emoji:"👗", desc:"Affordable fashion, school uniforms and second-hand clothing. New stock every Friday.", area:"Tembisa", address:"Tembisa Taxi Rank", phone:"073 555 6677", hours:"Mon–Sun 8am–5pm", open:true },
  { id:23, name:"TuckShop24", category:"retail", emoji:"🧃", desc:"24-hour spaza. Snacks, cold drinks, cigarettes, toiletries and emergency grocery items.", area:"Umlazi", address:"T Section, Umlazi", phone:"082 999 0011", hours:"24 hours", open:true },

  // TECH & REPAIRS
  { id:24, name:"Phone Fix Kasi", category:"tech", emoji:"📱", desc:"Screen replacements, battery repairs, software unlocking and phone accessories. All brands serviced.", area:"Soweto", address:"Mofolo North, Soweto", phone:"076 012 3456", hours:"Mon–Sat 8am–6pm", open:true },
  { id:25, name:"Laptop & PC Repairs", category:"tech", emoji:"💻", desc:"Virus removal, screen repairs, data recovery and software installation. Free diagnostics.", area:"Alexandra", address:"Pan Africa Shopping Centre", phone:"071 234 5670", hours:"Mon–Fri 9am–5pm", open:true },
  { id:26, name:"iConnect Solutions", category:"tech", emoji:"📡", desc:"WiFi setup, network installation, DSTV installations and CCTV camera fitting for homes.", area:"Tembisa", address:"Endulwini Section", phone:"083 321 0987", hours:"Mon–Sat 8am–7pm", open:false },
  { id:27, name:"GadgetHub Khayelitsha", category:"tech", emoji:"🔌", desc:"Second-hand phones, laptops, gaming consoles. Trade-ins accepted. Warranty on all devices.", area:"Khayelitsha", address:"Spine Road, Khayelitsha", phone:"065 678 9001", hours:"Mon–Sun 9am–7pm", open:true },
  { id:28, name:"Print & Copy Centre", category:"tech", emoji:"🖨", desc:"Printing, scanning, laminating and binding. CV printing, school projects and ID photos available.", area:"Mamelodi", address:"Denneboom Road, Mamelodi", phone:"012 805 4321", hours:"Mon–Fri 7am–6pm", open:true },

  // TRANSPORT
  { id:29, name:"Sipho's Taxi Service", category:"transport", emoji:"🚖", desc:"Reliable airport transfers, long-distance and local trips. Available 24/7. Safe and professional.", area:"Soweto", address:"Orlando East", phone:"082 700 8899", hours:"24 hours", open:true },
  { id:30, name:"Khayelitsha Movers", category:"transport", emoji:"🚛", desc:"Affordable furniture and home moving. Small bakkie and 1-ton truck available. Weekends available.", area:"Khayelitsha", address:"Site B, Khayelitsha", phone:"071 333 4400", hours:"Mon–Sun 7am–7pm", open:true },
  { id:31, name:"Alex Delivery Service", category:"transport", emoji:"🏍", desc:"Motorbike delivery for parcels, food and documents. Same-day within Johannesburg. Track your order.", area:"Alexandra", address:"8th Avenue, Alexandra", phone:"078 900 1122", hours:"Mon–Sat 8am–8pm", open:true },
  { id:32, name:"Tembisa Car Wash", category:"transport", emoji:"🚗", desc:"Full valet, hand wash, interior clean and polish. Fleet discounts available for businesses.", area:"Tembisa", address:"Isithame Section", phone:"064 556 7788", hours:"Mon–Sun 7am–6pm", open:true },

  // HEALTH & WELLNESS
  { id:33, name:"Ntombi's Home Nursing", category:"health", emoji:"🩺", desc:"Home-based care for elderly and post-surgery patients. Wound dressing, medication management.", area:"Umlazi", address:"S Section, Umlazi", phone:"083 112 2334", hours:"Mon–Fri 7am–5pm", open:true },
  { id:34, name:"Kasi Fitness Studio", category:"health", emoji:"💪", desc:"Affordable gym membership and group classes. Aerobics, yoga and weight training. Monthly R200.", area:"Soweto", address:"Naledi, Soweto", phone:"076 445 5667", hours:"Mon–Sat 5am–9pm", open:true },
  { id:35, name:"Herbal Wellness Shop", category:"health", emoji:"🌿", desc:"Traditional and natural remedies, herbal teas, immune boosters and skin care products.", area:"Alexandra", address:"3rd Avenue, Alexandra", phone:"071 234 8889", hours:"Mon–Sat 8am–5pm", open:false },
  { id:36, name:"Mamelodi Pharmacy Plus", category:"health", emoji:"💊", desc:"Prescription dispensing, over-the-counter medication, health checks and chronic medication.", area:"Mamelodi", address:"Denneboom Mall", phone:"012 805 6677", hours:"Mon–Fri 8am–6pm, Sat 8am–1pm", open:true },

  // CREATIVE SERVICES
  { id:37, name:"Kasi Clicks Photography", category:"creative", emoji:"📸", desc:"Matric farewell, events, graduations, portrait sessions and product photography. Packages from R500.", area:"Soweto", address:"Diepkloof Extension", phone:"073 890 1234", hours:"By appointment", open:true },
  { id:38, name:"Township Designs", category:"creative", emoji:"🎨", desc:"Logo design, flyers, business cards and social media graphics. Turnaround within 48 hours.", area:"Khayelitsha", address:"Harare Section", phone:"064 234 5671", hours:"Mon–Fri 9am–5pm", open:true },
  { id:39, name:"Mzansi Sounds DJ", category:"creative", emoji:"🎵", desc:"DJ services for events, parties and corporate functions. Sound system hire also available.", area:"Tembisa", address:"Endulwini Section", phone:"082 678 9900", hours:"Fri–Sun, by booking", open:false },
  { id:40, name:"Sewing & Alterations Studio", category:"creative", emoji:"🧵", desc:"Clothing alterations, dress-making and school uniform repairs. Traditional attire designs.", area:"Umlazi", address:"Q Section, Umlazi", phone:"083 445 5566", hours:"Mon–Sat 8am–5pm", open:true },
  { id:41, name:"Alex Media Productions", category:"creative", emoji:"🎬", desc:"Video shooting and editing for events, promos and YouTube content. Affordable packages.", area:"Alexandra", address:"East Bank", phone:"071 789 0123", hours:"Mon–Fri 9am–6pm", open:true },
  { id:42, name:"Print Vibe Designs", category:"creative", emoji:"🖼", desc:"T-shirt printing, custom hoodies, banners and branded merchandise for businesses and events.", area:"Mamelodi", address:"Block R, Mamelodi", phone:"064 567 8901", hours:"Mon–Fri 8am–5pm, Sat 9am–1pm", open:true },

  // EXTRA
  { id:43, name:"Boitumelo's Creche", category:"education", emoji:"👶", desc:"Registered ECD centre. Ages 2–6. Daily meals, learning activities and safety-focused environment.", area:"Soweto", address:"Protea Glen", phone:"076 998 7654", hours:"Mon–Fri 6am–5pm", open:true },
  { id:44, name:"Khayelitsha Car Spares", category:"retail", emoji:"⚙️", desc:"Second-hand and new car parts. All makes and models. Mechanical repairs also available on-site.", area:"Khayelitsha", address:"Spine Road", phone:"021 361 2345", hours:"Mon–Sat 7am–5pm", open:true },
  { id:45, name:"Tembisa Funeral Parlour", category:"health", emoji:"🕊", desc:"Dignified, affordable funeral services. Tombstone unveilings, repatriation and insurance claims.", area:"Tembisa", address:"Tswelopele Section", phone:"082 234 5678", hours:"24 hours", open:true },
  { id:46, name:"Alex Youth Football Club", category:"creative", emoji:"⚽", desc:"Free football training for youth ages 8–18. Coaching, kit and match schedules. Registration open.", area:"Alexandra", address:"Alexandra Stadium", phone:"078 012 3455", hours:"Sat–Sun 8am–12pm", open:true },
  { id:47, name:"Nomsa's Popiyoyo Stall", category:"food", emoji:"🍭", desc:"Homemade sweets, koeksisters and baked goods. Popular at schools and weekend markets.", area:"Mamelodi", address:"Block S, Mamelodi", phone:"073 111 2233", hours:"Mon–Sat 7am–4pm", open:true },
  { id:48, name:"UmlazI Skills Academy", category:"education", emoji:"🔨", desc:"Plumbing, tiling, welding and electrical short courses. SETA-accredited certificates issued.", area:"Umlazi", address:"P Section Community Centre", phone:"031 907 6543", hours:"Mon–Fri 8am–4pm", open:true },
];

/* CATEGORY COLOURS */
const CATEGORY_COLORS = {
  food:       '#e8440a',
  beauty:     '#d4145a',
  education:  '#1a4fa0',
  retail:     '#1a7a4a',
  tech:       '#6b2fa0',
  transport:  '#0a7a6e',
  health:     '#c47a00',
  creative:   '#b5360a',
};

/*STATE*/
let activeCategory = 'all';
let activeArea = 'all';

/*FILTER STATE*/
function setFilter(btn, type, value) {
  if (type === 'category') {
    activeCategory = value;
    document.querySelectorAll('#categoryFilters .filter-btn').forEach(b => b.classList.remove('active'));
  } else {
    activeArea = value;
    document.querySelectorAll('#areaFilters .filter-btn').forEach(b => b.classList.remove('active'));
  }
  btn.classList.add('active');
  filterBusinesses();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').style.display = 'none';
  filterBusinesses();
}

/*MAIN FILTER + RENDER*/
function filterBusinesses() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const sort = document.getElementById('sortSelect').value;

  // Show/hide clear button
  document.getElementById('searchClear').style.display = query ? 'block' : 'none';

  let results = BUSINESSES.filter(biz => {
    const matchCat = activeCategory === 'all' || biz.category === activeCategory;
    const matchArea = activeArea === 'all' || biz.area === activeArea;
    const matchSearch = !query ||
      biz.name.toLowerCase().includes(query) ||
      biz.desc.toLowerCase().includes(query) ||
      biz.area.toLowerCase().includes(query) ||
      biz.category.toLowerCase().includes(query);
    return matchCat && matchArea && matchSearch;
  });

  // Sort
  results.sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name);
    if (sort === 'category') return a.category.localeCompare(b.category);
    if (sort === 'area') return a.area.localeCompare(b.area);
    return 0;
  });

  renderGrid(results);
  updateResultsCount(results.length);
}

/*RENDER*/
function renderGrid(businesses) {
  const grid = document.getElementById('bizGrid');
  const noResults = document.getElementById('noResults');

  if (businesses.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = businesses.map((biz, i) => {
    const color = CATEGORY_COLORS[biz.category] || '#e8440a';
    const delay = Math.min(i * 0.04, 0.6);
    return `
      <article class="biz-card" style="--card-color: ${color}; animation-delay: ${delay}s" onclick="openCard(${biz.id})">
        <div class="card-top">
          <div class="card-emoji" style="background:${color}">${biz.emoji}</div>
          <span class="card-badge" style="border-color:${color}; color:${color}">${formatCategory(biz.category)}</span>
        </div>
        <h3 class="card-name">${biz.name}</h3>
        <p class="card-desc">${biz.desc}</p>
        <div class="card-meta">
          <div class="card-meta-row"><span class="card-meta-icon">📍</span>${biz.address}</div>
          <div class="card-meta-row"><span class="card-meta-icon">📞</span>${biz.phone}</div>
          <div class="card-meta-row"><span class="card-meta-icon">🕐</span>${biz.hours}</div>
        </div>
        <div class="card-footer">
          <span class="card-area-tag">${biz.area}</span>
          <span class="card-open ${biz.open ? '' : 'closed'}">${biz.open ? '● Open Now' : '● Closed'}</span>
        </div>
      </article>
    `;
  }).join('');
}

function formatCategory(cat) {
  const names = { food:'Food', beauty:'Hair & Beauty', education:'Education', retail:'Retail', tech:'Tech', transport:'Transport', health:'Health', creative:'Creative' };
  return names[cat] || cat;
}

function updateResultsCount(count) {
  const total = BUSINESSES.length;
  const el = document.getElementById('resultsCount');
  el.textContent = count === total
    ? `Showing all ${total} businesses`
    : `Showing ${count} of ${total} businesses`;
}

/*CARD CLICK (simple highlight)*/
function openCard(id) {
  const biz = BUSINESSES.find(b => b.id === id);
  if (!biz) return;
  // For portfolio demo — in production this would open a modal
  // Simple feedback: briefly highlight
  const cards = document.querySelectorAll('.biz-card');
  cards.forEach(c => c.style.outline = '');
}

/*SUBMIT FORM*/
function handleSubmit(btn) {
  const inputs = btn.closest('.submit-form').querySelectorAll('.form-input');
  const name = inputs[0].value.trim();
  if (!name) {
    inputs[0].focus();
    inputs[0].style.borderColor = '#ff5a1f';
    setTimeout(() => { inputs[0].style.borderColor = ''; }, 2000);
    return;
  }
  btn.textContent = '✓ Submitted! We\'ll be in touch.';
  btn.style.background = '#1a7a4a';
  btn.style.borderColor = '#1a7a4a';
  btn.disabled = true;
  inputs.forEach(i => { i.value = ''; i.disabled = true; });
}

/*INIT*/
document.addEventListener('DOMContentLoaded', () => {
  filterBusinesses();
  document.getElementById('totalCount').textContent = BUSINESSES.length;
});
