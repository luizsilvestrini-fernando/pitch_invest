/**
 * DRIVA Investor Pitch Deck & Mobile Simulator Engine (2026-2028)
 * Official Brand Identity • Inter Typography • Deep Navy & Mint Green
 * "Democratizing Car Rental in Brazil"
 */

// ==========================================
// 1. DATA & SCRIPTS FOR ALL 14 SLIDES (ENGLISH)
// ==========================================
const SLIDE_TITLES = {
  1: "Platform Revolution in Brazil",
  2: "Vision & Investment Thesis",
  3: "Problem & The Idle Asset",
  4: "Official Market (ABLA 2026)",
  5: "Supply & Demand Personas",
  6: "Trust by Design & 6 Pillars",
  7: "Disciplined Unit Economics",
  8: "Acquisition Payback",
  9: "Fundraising & Milestone Tranches",
  10: "Go-To-Market Strategy",
  11: "Risk Matrix & Mitigations",
  12: "North Star Metric & Roadmap",
  13: "30-Day Immediate Action Plan",
  14: "The Investor Case & Closing"
};

const SLIDE_SCRIPTS = {
  1: `<strong>Slide 1: The Platform Revolution in Brazil</strong><br>
<blockquote>"Good morning, investors. Before we introduce Driva specifically, let us ground ourselves in the most powerful economic pattern of the last two decades in Brazil: platforms that unlocked idle assets.
<br><br>
Nubank unlocked billions in idle capital sitting in low-yield, fee-laden traditional bank accounts and gave ninety million Brazilians a zero-fee, app-first banking experience. Airbnb turned millions of unused spare bedrooms and empty apartments into the world's largest hotel chain — without owning a single room. iFood built a national logistics layer connecting underutilized restaurant kitchen capacity with hungry consumers, processing over fifteen million orders a day. Uber unlocked the spare time and seating capacity of millions of private vehicle owners to transform urban mobility. And XP Investimentos democratized access to Brazilian capital markets, reducing entry barriers from tens of thousands of reais to a single one-hundred-real note.
<br><br>
The common thread is unambiguous: each platform harnessed a massively underutilized existing asset — money, homes, kitchens, driver time, capital — and connected it directly with the people who needed that asset, at massive scale.
<br><br>
Today, the single largest remaining underutilized asset class in Brazil is still waiting for its platform moment. That asset class is parked cars. That platform is Driva."</blockquote>`,

  2: `<strong>Slide 2: Title & Vision — Democratizing Car Rental in Brazil</strong><br>
  <blockquote>"Good morning, investors. Welcome to <strong>Driva</strong>. Our mission is simple yet transformative: <strong>Democratizing car rental across Brazil</strong>.
  <br><br>
  In Brazil, private vehicles represent one of the largest storehouses of underutilized capital in the economy. Millions of late-model cars sit parked in residential driveways and garages, losing value every minute through depreciation, insurance, taxes, and maintenance. Meanwhile, millions of consumers need flexible, affordable, and local access to vehicles without the friction of commercial rental counters.
  <br><br>
  Our core thesis is that the true value in peer-to-peer mobility is not just matching a car with a driver for a day. It is building an <strong>infrastructure of trust</strong>—controlling biometric identity verification, condition inspection, micro-insurance, instant payments, and algorithmic risk management—that enables people to safely share cars at scale.
  <br><br>
  Driva is 100% asset-light. We buy zero cars. We carry zero fleet debt. Instead, we mobilize the country's existing vehicle fleet with four pillars: distributed supply, trust by design, disciplined unit economics, and liquidity-conditioned expansion."</blockquote>`,

  3: `<strong>Slide 3: The Problem & The Idle Asset</strong><br>
  <blockquote>"Let us examine the problem on the ground. The starting point of our thesis is the idle asset. Automobiles are the second most expensive asset most Brazilian families purchase. Yet they sit parked day in and day out, accumulating fixed costs with zero revenue. In cities like São Paulo, the municipal Rodízio legally sidelines one-fifth of the entire passenger fleet every single weekday during peak hours, forcing hundreds of thousands of late-model cars into garages.
  <br><br>
  On the other side, consumer car rental remains filled with friction. If you need a car for a weekend trip, a family visit, or business commute, you must travel to an airport or commercial rental agency, wait in line, navigate complex waivers, and pay high deposits.
  <br><br>
  Both sides want to transact. What has been missing is the bridge: a secure platform that eliminates fear of theft, damages, and non-payment through rigorous trust by design."</blockquote>`,

  4: `<strong>Slide 4: The Brazilian Market Benchmark (ABLA 2026)</strong><br>
  <blockquote>"The macro backdrop in Brazil could not be more favorable. According to the newly released ABLA 2026 Annual Report—covering the 2025 operational year—Brazil's traditional car rental industry reached an all-time record of <strong>sixty-one point seven billion reais</strong>, or over eleven billion dollars in annual revenue.
  <br><br>
  Over one point seven million commercial rental cars are on Brazilian roads, managed across thirty-seven thousand companies, with seventy-nine billion reais invested in new fleet purchases in 2025 alone.
  <br><br>
  This data proves beyond doubt that Brazilians have embraced car rental as a core mobility habit. However, legacy car rental companies are capital-intensive and debt-heavy, dedicating the majority of their fleet to corporate outsourcing. Driva unlocks the enormous, untapped pool of private vehicles registered with SENATRAN—starting with São Paulo's three point six million eligible late-model cars—without spending a single cent on fleet acquisition."</blockquote>`,

  5: `<strong>Slide 5: Target Personas (Supply & Demand)</strong><br>
  <blockquote>"To achieve rapid liquidity, we have precisely mapped our four core personas.
  <br><br>
  On the supply side, we have <strong>Marcelo</strong>, our quintessential urban host in São Paulo. Marcelo works hybrid and uses his car only two to three days a week. He wants extra income to pay for his IPVA and insurance, but fears damage or robbery. Driva gives him complete calendar control, suggested pricing, our Driva Check inspection, and guaranteed payment. In addition, we partner with <strong>Carla</strong>, micro-fleet operators owning two to five cars, who quickly bootstrap our supply density.
  <br><br>
  On the demand side, <strong>Juliana</strong> is an urban professional who chooses not to own a vehicle. She wants a car near her apartment in Pinheiros or Moema for a weekend trip to the beach. She gets a car within walking distance, transparent pricing, and instant biometric unlock. For recurrent business commuters like <strong>Renato</strong>, Driva provides dependable multi-day mobility at thirty percent below airport counter rates."</blockquote>`,

  6: `<strong>Slide 6: Product & Trust by Design</strong><br>
  <blockquote>"How do we make peer-to-peer car sharing safe and seamless in Brazil? We engineered <strong>Trust by Design</strong>.
  <br><br>
  Safety is not an afterthought; it is our product architecture, built on six foundational modules:
  <br><br>
  First, automated KYC cross-referencing national driver records in real-time. Second, rigorous vehicle eligibility standards. Third, our proprietary <strong>Driva Check</strong>—a digital before-and-after photo and video inspection recording every scratch, odometer reading, and fuel level before the key is handed over.
  <br><br>
  Fourth, embedded insurance underwritten by institutional partners providing comprehensive damage and liability protection without touching the host's personal auto policy. Fifth, automated security deposit pre-authorization and instant Pix payouts. And sixth, our proprietary <strong>Vehicle Trust Score</strong>.
  <br><br>
  This creates our competitive moat: dense local supply, cumulative trust history, algorithmic risk management, and proprietary vehicle inspection data that no newcomer can easily replicate."</blockquote>`,

  7: `<strong>Slide 7: Disciplined Unit Economics (Base Case)</strong><br>
  <blockquote>"Now let us look at our unit economics. We have modeled our base case on highly conservative planning assumptions.
  <br><br>
  On an average three-day rental at two hundred and twenty reais per day, the Gross Booking Value is six hundred and sixty reais, or approximately one hundred and twenty-five dollars.
  <br><br>
  Driva captures a total blended take rate of twenty-two percent, generating one hundred and forty-five reais in net platform revenue per reservation.
  <br><br>
  Our variable direct costs—including automated KYC API queries, payment processing via Pix and credit cards, and customer service—are forty-five reais.
  <br><br>
  This delivers a net <strong>Contribution Margin of one hundred reais per booking</strong>—an exceptional sixty-nine percent contribution margin on net revenue. Driva generates positive gross cash flow on literally every single transaction."</blockquote>`,

  8: `<strong>Slide 8: Acquisition Payback & Capital Discipline</strong><br>
  <blockquote>"Slide eight highlights our exceptional acquisition payback and capital efficiency. In marketplace businesses, survival depends on how quickly acquisition capital cycles back into the company.
  <br><br>
  For our drivers, our blended Customer Acquisition Cost is ninety reais. Because our contribution margin is one hundred reais per booking, <strong>our Guest CAC payback is 0.9 bookings</strong>—meaning we achieve full capital recovery on the guest's very first rental.
  <br><br>
  For vehicle owners, our Host CAC is one hundred and eighty reais. With an average of 1.5 rentals per month per active car generating one hundred and fifty reais in contribution margin, <strong>our Host payback is achieved in just 1.2 months</strong>.
  <br><br>
  We operate with strict capital guardrails: any acquisition channel that does not recover guest spend within two trips or host spend within three months is immediately paused."</blockquote>`,

  9: `<strong>Slide 9: Capital Raising & Phased Milestones (Tranches)</strong><br>
  <blockquote>"Rather than asking for a speculative, multi-million dollar round upfront, Driva employs a disciplined, milestone-driven capital structure.
  <br><br>
  We are opening our Seed round with an initial <strong>Tranche of one hundred and fifty thousand dollars</strong> for our six-month MVP pilot in São Paulo. This capital will fund the onboarding of our first one hundred vehicles, five hundred to one thousand users, and the completion of over one hundred verified rentals to validate our CAC, retention, and loss ratios in real-world operations.
  <br><br>
  Once those unit economics are proven, <strong>Tranche Two of two hundred and fifty thousand dollars</strong> scales the platform to five hundred cars across three to five regional cities and one thousand rentals.
  <br><br>
  <strong>Tranche Three of five hundred thousand dollars</strong> expands our footprint to two thousand cars and up to five thousand bookings per month. Total capital across eighteen months is nine hundred thousand dollars, perfectly aligning investor risk with measurable execution milestones."</blockquote>`,

  10: `<strong>Slide 10: Go-To-Market (Five Core Principles)</strong><br>
  <blockquote>"Our Go-To-Market execution follows five golden rules of marketplace physics.
  <br><br>
  First: <strong>Density before scale</strong>. We do not scatter marketing budget across Brazil. We win block-by-block in São Paulo's highest-density mobility hubs—Moema, Pinheiros, and the Congonhas airport corridor.
  <br><br>
  Second: <strong>Supply-led launch</strong>. We manually recruit and verify our first one hundred vehicle hosts.
  <br><br>
  Third: <strong>Demand around inventory</strong>. We acquire renters specifically within walking distance of active vehicles, ensuring sub-ten-minute vehicle availability.
  <br><br>
  Fourth: <strong>Transaction-based referral loops</strong>. Every host and guest incentive is unlocked only after a booking is safely completed.
  <br><br>
  And fifth: <strong>Expand by liquidity</strong>. We only greenlight a new zone when our existing corridors consistently meet our target conversion rates."</blockquote>`,

  11: `<strong>Slide 11: Risk Matrix & Strategic Mitigations</strong><br>
  <blockquote>"Every investor rightfully asks: 'How do you manage operational risks in Brazil?' Slide eleven details our comprehensive risk matrix.
  <br><br>
  For mechanical reliability, we restrict vehicle age to ten years or newer, require active maintenance records, and provide twenty-four-seven roadside assistance.
  <br><br>
  For damages, <strong>Driva Check</strong> creates an indisputable photographic and video record at vehicle handover, supported by security deposit holds and dedicated insurance.
  <br><br>
  For fraud and car theft, we integrate direct biometric facial recognition against official government driver records and deploy telematics tracking with remote ignition control.
  <br><br>
  And for regulatory certainty, our contracts are explicitly structured under Brazilian Federal Civil Code Article 565 governing private vehicle leasing."</blockquote>`,

  12: `<strong>Slide 12: North Star Metric & 18-Month Execution Roadmap</strong><br>
  <blockquote>"Our company culture and incentives are governed by a single North Star Metric: <strong>Completed rentals without severe incident per month</strong>.
  <br><br>
  We do not optimize for vanity volume. We optimize for high-trust, safe, profitable mobility. Every department—engineering, risk, supply acquisition, and customer support—is evaluated against this standard.
  <br><br>
  Our execution roadmap over the next eighteen months is divided into clear milestones: Discovery and partner agreements in Month One; supply seeding of our first fifty cars in Month Two; executing our one-hundred-rental MVP pilot through Month Six; and scaling to five hundred cars across regional corridors in Year One.
  <br><br>
  By Month Eighteen, Driva will operate two thousand active vehicles, completing five thousand rentals a month on an unassailable foundation of trust."</blockquote>`,

  13: `<strong>Slide 13: 30-Day Immediate Action Plan</strong><br>
  <blockquote>"Execution starts on Day One. Our immediate thirty-day action plan consists of ten concrete deliverables.
  <br><br>
  We conduct one hundred customer interviews across both sides of the market. We finalize our legal opinions and partner agreements with insurance and assistance providers. We field-test our Driva Check inspection on twenty cars. We launch our landing page and pre-recruit our initial thirty to fifty vehicles in our launch corridors.
  <br><br>
  We run assisted concierge reservations to identify every point of friction, and we feed that real-world data back into our financial and operational models. This is how we build a high-conviction, enduring mobility company."</blockquote>`,

  14: `<strong>Slide 14: The Investor Case & Closing Call to Action</strong><br>
  <blockquote>"Investors, the opportunity before us is immense. Brazil's sixty-one billion real car rental market is ripe for decentralization. The idle vehicles already exist. The consumer demand is surging.
  <br><br>
  Driva is building the infrastructure of trust that unlocks this massive potential.
  <br><br>
  We invite you to join us in our initial Seed tranche of one hundred and fifty thousand dollars to validate this model in São Paulo. Together, we will democratize car rental across Brazil and build Latin America's leading shared mobility company.
  <br><br>
  Thank you, and I look forward to your questions."</blockquote>`
};

// Available Cars in Simulator (São Paulo Fleet) - Base daily rate R$ 220
const SIM_CARS = [
  {
    id: 'jeep',
    name: 'Jeep Compass Longitude 1.3T',
    year: '2023',
    category: 'SUV / Compact',
    dailyRateBRL: 220,
    dailyRateUSD: 42,
    rating: 4.97,
    trips: 54,
    host: 'Marcelo S.',
    hostBadge: 'Super Host ★ 4.97',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80',
    location: 'São Paulo — Moema / Congonhas (CGH)',
    plateMercosul: 'DRV-4E26 (Thursday restriction)',
    features: ['Driva Check Approved', 'Automatic Transmission', 'Dual-Zone AC', 'Apple CarPlay']
  },
  {
    id: 'tcross',
    name: 'VW T-Cross Highline 250 TSI',
    year: '2024',
    category: 'SUV / Urban',
    dailyRateBRL: 210,
    dailyRateUSD: 40,
    rating: 4.95,
    trips: 38,
    host: 'Carla M.',
    hostBadge: 'Micro-Fleet ★ 4.95',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80',
    location: 'São Paulo — Pinheiros / Faria Lima',
    plateMercosul: 'DRV-7K19 (Tuesday restriction)',
    features: ['Driva Check Approved', 'Park Assist', 'Sunroof', 'Digital Dashboard']
  },
  {
    id: 'corolla',
    name: 'Toyota Corolla Cross Hybrid',
    year: '2023',
    category: 'Sedan / Hybrid',
    dailyRateBRL: 250,
    dailyRateUSD: 47,
    rating: 4.99,
    trips: 62,
    host: 'Renato B.',
    hostBadge: 'Super Host ★ 4.99',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&auto=format&fit=crop&q=80',
    location: 'São Paulo — Itaim Bibi / Vila Olímpia',
    plateMercosul: 'DRV-9M82 (Friday restriction)',
    features: ['Driva Check Approved', 'Toyota Safety Sense', 'Flex Hybrid', '18 km/L Efficiency']
  },
  {
    id: 'byd',
    name: 'BYD Song Plus DM-i Hybrid',
    year: '2024',
    category: 'Premium / Hybrid SUV',
    dailyRateBRL: 280,
    dailyRateUSD: 53,
    rating: 5.0,
    trips: 19,
    host: 'Luciana T.',
    hostBadge: 'New Host ★ 5.0',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80',
    location: 'São Paulo — Jardins / Av. Paulista',
    plateMercosul: 'DRV-1A34 (Monday restriction)',
    features: ['Driva Check Approved', 'Hybrid EV + Gas', '1,000km Range', '15" Rotating Screen']
  }
];

// Insurance Protection Plans
const INSURANCE_TIERS = {
  minimum: {
    id: 'minimum',
    name: 'Basic Protection',
    tag: 'Economy',
    dailyRateBRL: 25,
    dailyRateUSD: 5,
    deductible: 'R$ 4,000 Deductible',
    liability: 'R$ 100,000 Third-Party Liability',
    desc: 'Minimum legal coverage and severe damage above deductible.'
  },
  standard: {
    id: 'standard',
    name: 'Standard Protection',
    tag: 'Most Popular',
    dailyRateBRL: 50,
    dailyRateUSD: 10,
    deductible: 'R$ 1,500 Limited Deductible',
    liability: 'R$ 500,000 Third-Party Liability',
    desc: 'Ideal balance. Full collision, theft, robbery and 24h towing coverage.'
  },
  premier: {
    id: 'premier',
    name: 'Premier Shield Protection',
    tag: 'Recommended • Zero Risk',
    dailyRateBRL: 90,
    dailyRateUSD: 18,
    deductible: 'R$ 0 Zero Deductible',
    liability: 'R$ 1,000,000 Third-Party Liability',
    desc: 'Zero out-of-pocket deductible. Glass, tires and full property protection.'
  }
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let currentSlide = 1;
const totalSlides = 14;

let simState = {
  activeTab: 'guest',
  selectedCar: SIM_CARS[0],
  selectedTier: INSURANCE_TIERS.standard,
  rentalDays: 3,
  hostDaysPerMonth: 15,
  bookingSuccess: false
};

// Timer State
let timerSeconds = 0;
let timerInterval = null;

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initSlideDots();
  goToSlide(1);
  renderSimulator();
  startTimer();
  setupEventListeners();
});

function initSlideDots() {
  const dotsContainer = document.getElementById('slide-dots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  for (let i = 1; i <= totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = `dot ${i === 1 ? 'active' : ''}`;
    dot.title = `Slide ${i}: ${SLIDE_TITLES[i] || ''}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function setupEventListeners() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      toggleNotes();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'Escape') {
      closeSimulatorModal();
      const panel = document.getElementById('speaker-notes-panel');
      if (panel && panel.classList.contains('open')) {
        panel.classList.remove('open');
        const btn = document.getElementById('btn-notes');
        if (btn) btn.classList.remove('active');
      }
    }
  });

  const btnDemo = document.getElementById('btn-demo');
  if (btnDemo) {
    btnDemo.addEventListener('click', () => openSimulator('guest'));
  }

  const btnNotes = document.getElementById('btn-notes');
  if (btnNotes) {
    btnNotes.addEventListener('click', toggleNotes);
  }

  const btnFs = document.getElementById('btn-fullscreen');
  if (btnFs) {
    btnFs.addEventListener('click', toggleFullscreen);
  }

  const btnTimerReset = document.getElementById('timer-reset-btn');
  if (btnTimerReset) {
    btnTimerReset.addEventListener('click', resetTimer);
  }
}

// ==========================================
// 4. SLIDE NAVIGATION FUNCTIONS
// ==========================================
function goToSlide(slideIndex) {
  if (slideIndex < 1 || slideIndex > totalSlides) return;

  const slides = document.querySelectorAll('.slide');
  slides.forEach(s => s.classList.remove('active'));

  const targetSlide = document.getElementById(`slide-${slideIndex}`);
  if (targetSlide) {
    targetSlide.classList.add('active');
  }

  currentSlide = slideIndex;

  const indEl = document.getElementById('slide-indicator');
  if (indEl) indEl.textContent = `Slide ${currentSlide} / ${totalSlides}`;

  const previewEl = document.getElementById('slide-title-preview');
  if (previewEl && SLIDE_TITLES[currentSlide]) {
    previewEl.textContent = SLIDE_TITLES[currentSlide];
  }

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx + 1 === currentSlide);
  });

  const notesContent = document.getElementById('notes-content');
  if (notesContent && SLIDE_SCRIPTS[currentSlide]) {
    notesContent.innerHTML = SLIDE_SCRIPTS[currentSlide];
  }
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    goToSlide(currentSlide - 1);
  }
}

function toggleNotes() {
  const panel = document.getElementById('speaker-notes-panel');
  const btn = document.getElementById('btn-notes');
  if (!panel) return;
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.classList.toggle('active', isOpen);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerSeconds++;
    const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const secs = String(timerSeconds % 60).padStart(2, '0');
    const timerDisplay = document.getElementById('speech-timer');
    if (timerDisplay) {
      timerDisplay.textContent = `${mins}:${secs}`;
    }
  }, 1000);
}

function resetTimer(e) {
  if (e) e.stopPropagation();
  timerSeconds = 0;
  const timerDisplay = document.getElementById('speech-timer');
  if (timerDisplay) {
    timerDisplay.textContent = '00:00';
  }
}

// ==========================================
// 5. MOBILE SIMULATOR ENGINE (OFFICIAL DRIVA BRAND)
// ==========================================
function switchSimulatorTab(tab) {
  simState.activeTab = tab;
  simState.bookingSuccess = false;

  const simTabs = document.querySelectorAll('.sim-tab');
  simTabs.forEach(t => t.classList.remove('active'));

  const activeBtn = document.getElementById(`sim-tab-${tab}`);
  if (activeBtn) activeBtn.classList.add('active');

  renderSimulator();
}

function renderSimulator() {
  const viewport = document.getElementById('sim-viewport');
  if (!viewport) return;

  if (simState.activeTab === 'host') {
    renderSimHost(viewport);
  } else if (simState.activeTab === 'insurance') {
    renderSimInsurance(viewport);
  } else if (simState.activeTab === 'checkout') {
    renderSimCheckout(viewport);
  } else {
    renderSimGuest(viewport);
  }
}

// Host Simulator (Monetization Calculator)
function renderSimHost(container) {
  const dailyRate = simState.selectedCar.dailyRateBRL;
  const monthlyEstBRL = Math.round(simState.hostDaysPerMonth * dailyRate * 0.78);
  const monthlyEstUSD = Math.round(monthlyEstBRL / 5.3);

  container.innerHTML = `
    <div class="sim-view-host animate-fade">
      <div class="sim-section-header">
        <h3 style="font-size: 1.05rem; font-weight: 800; color: #FFF;">Host Earnings Calculator</h3>
        <p style="font-size: 0.75rem; color: #94A3B8;">Monetize your vehicle with Driva Check and full protection.</p>
      </div>

      <div class="sim-card-elevated" style="background: rgba(17,24,39,0.9); border: 1px solid rgba(0,229,153,0.3); border-radius: 12px; padding: 1rem; margin-top: 0.75rem;">
        <div style="font-size: 0.7rem; color: #94A3B8; text-transform: uppercase;">Selected Vehicle</div>
        <div style="font-size: 0.95rem; font-weight: 800; color: #FFF; margin: 0.2rem 0;">${simState.selectedCar.name}</div>
        <div style="font-size: 0.78rem; color: #00E599; font-weight: 600;">Base Daily Rate: R$ ${dailyRate} (~$${Math.round(dailyRate/5.3)})</div>
      </div>

      <div class="sim-slider-block" style="margin: 1rem 0; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.5rem;">
          <span style="color: #94A3B8;">Available Days per Month:</span>
          <strong id="days-slider-val" style="color: #00E599; font-weight: 800;">${simState.hostDaysPerMonth} days</strong>
        </div>
        <input type="range" min="3" max="26" value="${simState.hostDaysPerMonth}" id="host-days-slider" 
          style="width: 100%; accent-color: #00E599; cursor: pointer;"
          oninput="updateHostEarnings(this.value)">
        <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: #64748B; margin-top: 0.35rem;">
          <span>Weekends only (6 days)</span>
          <span>Hybrid (15 days)</span>
          <span>Full-time (24 days)</span>
        </div>
      </div>

      <div class="sim-earnings-display" style="background: linear-gradient(135deg, rgba(0,229,153,0.15), rgba(17,24,39,0.95)); border: 1px solid #00E599; border-radius: 12px; padding: 1.25rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #00E599; text-transform: uppercase;">Estimated Net Earnings (Monthly)</div>
        <div class="sim-earnings-val" id="host-earnings-display" style="font-size: 2rem; font-weight: 900; color: #FFF; margin: 0.35rem 0;">
          R$ ${monthlyEstBRL.toLocaleString()} <span style="font-size: 0.85rem; color: #94A3B8;">(~$${monthlyEstUSD})</span>
        </div>
        <div style="font-size: 0.72rem; color: #94A3B8;">Weekly payout via Pix • Full comprehensive and third-party coverage</div>
      </div>

      <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <button class="sim-btn-primary" onclick="switchSimulatorTab('guest')" style="flex: 1; background: #00E599; color: #0B0F19; font-weight: 800; border: none; padding: 0.75rem; border-radius: 8px; cursor: pointer;">
          Simulate as Renter (Guest) →
        </button>
      </div>
    </div>
  `;
}

function updateHostEarnings(days) {
  simState.hostDaysPerMonth = parseInt(days, 10);
  const dailyRate = simState.selectedCar.dailyRateBRL;
  const monthlyEstBRL = Math.round(simState.hostDaysPerMonth * dailyRate * 0.78);
  const monthlyEstUSD = Math.round(monthlyEstBRL / 5.3);

  const valEl = document.getElementById('host-earnings-display');
  const daysEl = document.getElementById('days-slider-val');
  if (daysEl) daysEl.textContent = `${days} days`;
  if (valEl) valEl.innerHTML = `R$ ${monthlyEstBRL.toLocaleString()} <span style="font-size: 0.85rem; color: #94A3B8;">(~$${monthlyEstUSD})</span>`;
}

// Guest Simulator (Vehicle Catalog)
function renderSimGuest(container) {
  let listHtml = `
    <div class="sim-view-guest animate-fade">
      <div class="sim-search-bar" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 0.6rem 0.85rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#00E599" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span style="font-size: 0.78rem; color: #FFF; font-weight: 600;">São Paulo — Moema, Congonhas, Pinheiros</span>
      </div>

      <div style="font-size: 0.75rem; font-weight: 700; color: #94A3B8; margin-bottom: 0.5rem; text-transform: uppercase;">
        Qualified Vehicles (≤ 10 Years Old)
      </div>

      <div class="sim-cars-list" style="display: flex; flex-direction: column; gap: 0.65rem;">
  `;

  SIM_CARS.forEach(car => {
    const isSelected = car.id === simState.selectedCar.id;
    listHtml += `
      <div class="sim-car-item ${isSelected ? 'selected' : ''}" onclick="selectSimCar('${car.id}')"
        style="background: rgba(17,24,39,0.85); border: 1px solid ${isSelected ? '#00E599' : 'rgba(255,255,255,0.08)'}; border-radius: 12px; padding: 0.75rem; cursor: pointer; transition: all 0.2s ease;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-size: 0.88rem; font-weight: 800; color: #FFF;">${car.name}</div>
            <div style="font-size: 0.7rem; color: #94A3B8; margin: 0.15rem 0;">${car.location}</div>
            <div style="font-size: 0.68rem; color: #00E599; font-weight: 600;">${car.plateMercosul}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 1.05rem; font-weight: 900; color: #00E599;">R$ ${car.dailyRateBRL}</div>
            <div style="font-size: 0.65rem; color: #64748B;">per day</div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.7rem; color: #F59E0B; font-weight: 700;">★ ${car.rating} (${car.trips} trips)</span>
          <span style="font-size: 0.68rem; background: rgba(0,229,153,0.1); color: #00E599; padding: 0.2rem 0.45rem; border-radius: 4px; font-weight: 700;">Driva Check ✓</span>
        </div>
      </div>
    `;
  });

  listHtml += `
      </div>
      <div style="margin-top: 0.75rem;">
        <button class="sim-btn-primary" onclick="switchSimulatorTab('insurance')" style="width: 100%; background: #00E599; color: #0B0F19; font-weight: 800; border: none; padding: 0.75rem; border-radius: 8px; cursor: pointer;">
          Continue with ${simState.selectedCar.name.split(' ')[0]} →
        </button>
      </div>
    </div>
  `;

  container.innerHTML = listHtml;
}

function selectSimCar(carId) {
  const car = SIM_CARS.find(c => c.id === carId);
  if (car) {
    simState.selectedCar = car;
    renderSimulator();
  }
}

// Insurance Selector Simulator
function renderSimInsurance(container) {
  let insHtml = `
    <div class="sim-view-insurance animate-fade">
      <div class="sim-section-header">
        <h3 style="font-size: 1.05rem; font-weight: 800; color: #FFF;">In-App Protection Plan</h3>
        <p style="font-size: 0.75rem; color: #94A3B8;">Full institutional coverage without triggering the owner's policy.</p>
      </div>

      <div class="sim-insurance-list" style="display: flex; flex-direction: column; gap: 0.65rem; margin-top: 0.75rem;">
  `;

  Object.keys(INSURANCE_TIERS).forEach(key => {
    const tier = INSURANCE_TIERS[key];
    const isSelected = tier.id === simState.selectedTier.id;
    insHtml += `
      <div class="sim-tier-item ${isSelected ? 'selected' : ''}" onclick="selectProtectionPlan('${key}')"
        style="background: rgba(17,24,39,0.85); border: 1px solid ${isSelected ? '#00E599' : 'rgba(255,255,255,0.08)'}; border-radius: 12px; padding: 0.85rem; cursor: pointer; transition: all 0.2s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 0.88rem; font-weight: 800; color: #FFF;">${tier.name}</div>
            <span style="font-size: 0.65rem; color: #00E599; font-weight: 700;">${tier.tag}</span>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 1.05rem; font-weight: 900; color: #FFF;">R$ ${tier.dailyRateBRL} <span style="font-size: 0.7rem; color: #94A3B8;">/ day</span></div>
          </div>
        </div>
        <div style="font-size: 0.75rem; color: #CBD5E1; margin: 0.4rem 0;">• ${tier.deductible} • ${tier.liability}</div>
        <div style="font-size: 0.7rem; color: #94A3B8;">${tier.desc}</div>
      </div>
    `;
  });

  insHtml += `
      </div>
      <div style="margin-top: 0.75rem;">
        <button class="sim-btn-primary" onclick="switchSimulatorTab('checkout')" style="width: 100%; background: #00E599; color: #0B0F19; font-weight: 800; border: none; padding: 0.75rem; border-radius: 8px; cursor: pointer;">
          Go to 1-Click Checkout →
        </button>
      </div>
    </div>
  `;

  container.innerHTML = insHtml;
}

function selectProtectionPlan(tierKey) {
  if (INSURANCE_TIERS[tierKey]) {
    simState.selectedTier = INSURANCE_TIERS[tierKey];
    renderSimulator();
  }
}

// Checkout Simulator (Itemized Invoice & Booking)
function renderSimCheckout(container) {
  if (simState.bookingSuccess) {
    container.innerHTML = `
      <div class="sim-success-view animate-fade" style="text-align: center; padding: 2rem 1rem;">
        <div style="width: 56px; height: 56px; background: rgba(0,229,153,0.15); border: 2px solid #00E599; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: #00E599; font-size: 1.5rem;">
          ✓
        </div>
        <h3 style="color: #FFF; font-size: 1.25rem; font-weight: 800;">Booking Confirmed!</h3>
        <p style="color: #94A3B8; font-size: 0.8rem; margin: 0.5rem 0 1rem;">Contract digitally signed and security deposit authorized.</p>
        
        <div style="background: rgba(17,24,39,0.9); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1rem; text-align: left; font-size: 0.78rem; color: #E2E8F0;">
          <div style="margin-bottom: 0.35rem;"><strong>Car:</strong> ${simState.selectedCar.name}</div>
          <div style="margin-bottom: 0.35rem;"><strong>Pickup:</strong> ${simState.selectedCar.location}</div>
          <div style="margin-bottom: 0.35rem;"><strong>Inspection:</strong> Driva Check scheduled for check-in</div>
          <div style="color: #00E599;"><strong>Status:</strong> Pix payment approved instantly</div>
        </div>

        <button onclick="resetSimBooking()" style="margin-top: 1.25rem; width: 100%; background: #00E599; color: #0B0F19; font-weight: 800; border: none; padding: 0.75rem; border-radius: 8px; cursor: pointer;">
          Simulate New Booking
        </button>
      </div>
    `;
    return;
  }

  const car = simState.selectedCar;
  const tier = simState.selectedTier;
  const days = simState.rentalDays;

  const rentalTotalBRL = car.dailyRateBRL * days;
  const insuranceTotalBRL = tier.dailyRateBRL * days;
  const platformFeeBRL = Math.round(rentalTotalBRL * 0.12);
  const grandTotalBRL = rentalTotalBRL + insuranceTotalBRL + platformFeeBRL;

  container.innerHTML = `
    <div class="sim-view-checkout animate-fade">
      <div class="sim-section-header">
        <h3 style="font-size: 1.05rem; font-weight: 800; color: #FFF;">Booking Summary</h3>
        <p style="font-size: 0.75rem; color: #94A3B8;">${car.name} • ${days} days in São Paulo</p>
      </div>

      <div style="background: rgba(17,24,39,0.9); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 0.85rem; margin-top: 0.65rem; font-size: 0.8rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span style="color: #94A3B8;">Daily Rate (${days}x R$ ${car.dailyRateBRL}):</span>
          <span style="color: #FFF; font-weight: 700;">R$ ${rentalTotalBRL.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span style="color: #94A3B8;">${tier.name} (${days}x R$ ${tier.dailyRateBRL}):</span>
          <span style="color: #FFF; font-weight: 700;">R$ ${insuranceTotalBRL.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span style="color: #94A3B8;">Service & Platform Fee (12%):</span>
          <span style="color: #FFF; font-weight: 700;">R$ ${platformFeeBRL.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.08); font-size: 0.95rem;">
          <strong style="color: #FFF;">Booking Total:</strong>
          <strong style="color: #00E599; font-size: 1.1rem;">R$ ${grandTotalBRL.toFixed(2)}</strong>
        </div>
        <div style="font-size: 0.68rem; color: #64748B; margin-top: 0.2rem;">Security deposit pre-authorized held: R$ 800 (refunded after check-out)</div>
      </div>

      <div style="margin: 0.75rem 0;">
        <div style="font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; margin-bottom: 0.35rem;">Payment Method</div>
        <div style="display: flex; gap: 0.5rem;">
          <button style="flex: 1; padding: 0.5rem; background: rgba(0,229,153,0.12); border: 1px solid #00E599; border-radius: 6px; color: #00E599; font-weight: 700; font-size: 0.75rem;">
            Instant Pix
          </button>
          <button style="flex: 1; padding: 0.5rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #FFF; font-size: 0.75rem;">
            Credit Card
          </button>
        </div>
      </div>

      <div style="background: rgba(0,229,153,0.08); border: 1px solid rgba(0,229,153,0.25); border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.7rem; color: #E2E8F0; margin-bottom: 0.75rem;">
        ✓ Driver's License validated digitally via Serpro<br>
        ✓ Photographic Driva Check required at check-in
      </div>

      <button class="sim-btn-primary" onclick="executeSimPayment()" style="width: 100%; background: #00E599; color: #0B0F19; font-weight: 800; border: none; padding: 0.85rem; border-radius: 8px; cursor: pointer; font-size: 0.9rem;">
        Confirm Booking & Pay R$ ${grandTotalBRL.toFixed(2)}
      </button>
    </div>
  `;
}

function executeSimPayment() {
  simState.bookingSuccess = true;
  renderSimulator();
}

function resetSimBooking() {
  simState.bookingSuccess = false;
  switchSimulatorTab('guest');
}

// Modal Open/Close
function openSimulator(tab = 'guest') {
  const backdrop = document.getElementById('sim-modal-backdrop');
  if (backdrop) {
    backdrop.classList.add('open');
    switchSimulatorTab(tab);
  }
}

function closeSimulatorModal() {
  const backdrop = document.getElementById('sim-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
  }
}
