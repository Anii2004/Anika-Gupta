// Each case study becomes a page at /work/<slug>.
// Set `ready: false` to show a "coming soon" page until you fill it in.

export const caseStudies = [
  {
    slug: "ridenow",
    ready: true,
    title: "RideNow",
    metric: { value: "4 → 1", label: "ride searches" },
    oneLiner: "One search instead of four for Bangalore's ride apps.",
    tags: ["0 to 1", "User research", "Mobility"],
    year: "2026",
    role: "Product Manager: research, product, prototype, pitch",
    hero: "Bangalore commuters lose up to 40 minutes checking ride apps one by one. I found out why, and designed a layer that searches every app at once and shows which ride will actually confirm.",
    stats: [
      { value: "4 → 1", label: "searches per ride" },
      { value: "7 of 7", label: "commuters had the problem" },
      { value: "~11 min", label: "target time to confirm, down from 35" },
    ],
    problem: {
      title: "The problem wasn't slow rides. It was blind searching.",
      text: "Riders open Namma Yatri, wait, get nothing, then try Ola, Uber and Rapido in turn. Each app takes 5 to 10 minutes to answer, so one ride can take 30 to 40 minutes, and sometimes nothing confirms.",
      points: [
        { h: "Searching in sequence", p: "Every failed app costs another full wait." },
        { h: "No view of supply", p: "Nobody knows if drivers are nearby before requesting." },
        { h: "No reliability signal", p: "Apps show price and ETA, not whether a ride will confirm." },
      ],
    },
    research: {
      title: "Everyone I asked had the same morning.",
      text: "I surveyed commuters to check whether this was my problem or a shared one. Of 8 responses, 7 commute by ride apps.",
      stats: [
        { value: "100%", label: "use several apps for one ride" },
        { value: "100%", label: "had a ride fail in a time crunch" },
        { value: "4.29/5", label: "average peak-hour frustration" },
        { value: "7 of 7", label: "said “Yes, definitely” to one search" },
      ],
      note: "A small sample, so I treat it as strong direction rather than proof. 4 of 7 signed up for follow-up interviews.",
    },
    insight: {
      title: "The answers hid three more problems.",
      points: [
        { h: "Short-trip cancellations", p: "Drivers accept, then cancel when the drop is close." },
        { h: "Cash demands", p: "Drivers call, say the fare is low, and ask for extra cash." },
        { h: "Blind tipping", p: "2 of 7 riders already tip upfront just to get picked." },
      ],
      quote: "Riders weren't short of apps. They were short of information, so they did the searching themselves.",
    },
    solution: {
      title: "A layer on top, not a fifth ride app.",
      text: "Every feature answers a pain from the research.",
      map: [
        ["Checking apps one by one", "Searches all four apps at once"],
        ["No idea if drivers are nearby", "Shows free drivers and when the next one frees up"],
        ["Not knowing what will confirm", "Ranks rides by confirmation odds"],
        ["Wait, cancel, retry", "Books the first ride that confirms, cancels the rest"],
        ["Blind upfront tipping", "A visible priority fee that raises the odds"],
        ["Short-trip cancellations", "Driver reliability score and automatic re-search"],
        ["Cash demands", "Fare locked and paid in-app"],
        ["Paying full fare alone", "Split with someone on the same route"],
      ],
    },
    decisions: [
      { h: "A layer, not an app", p: "A new ride app would fight for drivers. A layer uses all existing drivers at once." },
      { h: "Rank by odds, not price", p: "At 9:10 AM, a ride that shows up beats one that's ₹10 cheaper. The score has to be accurate, or trust drops." },
      { h: "One box, one button", p: "“Where to?” and “Search all 4 apps”. I cut filters from the first screen to keep the choice under a minute." },
      { h: "Pooling only after booking", p: "Shared rides appear once a ride is locked, never before, and never for bikes." },
      { h: "Make tipping honest", p: "Riders already pay for priority. I turned it into a clear option with a clear effect." },
    ],
    constraints: {
      title: "The hardest part wasn't design. It was access.",
      text: "Big platforms have little reason to share booking APIs with a layer between them and their riders. So I designed RideNow to work with or without one.",
      rows: [
        { platform: "Namma Yatri", access: "Open network", tone: "open", how: "Direct booking through the Beckn mobility sandbox", link: "https://github.com/beckn/mobility" },
        { platform: "Uber", access: "Needs approval", tone: "gate", how: "A deep link opens Uber with the trip already filled", link: "https://developer.uber.com/docs/riders" },
        { platform: "Ola", access: "Invite only", tone: "gate", how: "Applied to the developer program, deep link meanwhile", link: "https://developers.olacabs.com" },
        { platform: "Rapido", access: "No public API", tone: "none", how: "Partnership outreach, opens the app meanwhile" },
      ],
    },
    outcome: {
      title: "From four searches to one.",
      before: [
        ["Searches per ride", "4, one after another"],
        ["Time to confirm", "30 to 40 min"],
        ["Will it confirm?", "Guesswork"],
        ["Fare", "Haggled with the driver"],
      ],
      after: [
        ["Searches per ride", "1, all apps at once"],
        ["Time to confirm (target)", "About 11 min"],
        ["Will it confirm?", "A score on every ride"],
        ["Fare", "Locked in the app"],
      ],
      note: "RideNow times are design targets from the prototype, to be confirmed in a live pilot.",
    },
    learnings: [
      { h: "The real problem hides behind the obvious one", p: "Everyone said rides are slow. The deeper issue was missing information." },
      { h: "Users had already started the solution", p: "Upfront tipping showed people will pay for priority. It only needed to be fair." },
      { h: "Access shapes the product", p: "Designing for “API or no API” let the product start without waiting on partners." },
      { h: "Competitors set the bar, not the direction", p: "Price-comparison apps pushed me toward trust, the gap none of them cover." },
    ],
  },
  {
    slug: "true-hospitals",
    ready: false,
    title: "T.R.U.E. Hospitals",
    metric: { value: "−40%", label: "navigation time" },
    oneLiner: "12 research sessions, redesigned clinical workflows, 40% less navigation time.",
    tags: ["Healthtech", "User research", "Workflows"],
    year: "2025",
  },
  {
    slug: "zenfit",
    ready: false,
    title: "ZenFit",
    metric: { value: "+29%", label: "weekly retention" },
    oneLiner: "An AI fitness app losing 63% of users after week 2. Weekly retention up 29%.",
    tags: ["Consumer", "Retention", "AI"],
    year: "2024",
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
