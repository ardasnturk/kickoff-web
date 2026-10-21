import type { Dictionary } from "./types";

export const enGB: Dictionary = {
  meta: {
    title: "Kickoff – Football Live Scores & AI Forecasts for iPhone",
    description:
      "Kickoff brings live football scores, lineups, stats and alerts from thousands of competitions to iPhone and iPad, free. Kickoff Pro adds AI forecasts for every match and lets you manage the team yourself.",
  },
  nav: { features: "Features", pro: "Pro", fair: "Fair play", faq: "FAQ", language: "Language", skip: "Skip to content" },
  hero: {
    eyebrow: "Football live scores for iPhone",
    title: "Every match, every goal,",
    highlight: "the moment it happens.",
    subtitle:
      "Live scores, minute-by-minute events, lineups, stats and alerts from thousands of competitions, free. Kickoff Pro adds AI forecasts and lets you manage the team yourself.",
    badges: ["Free live scores", "No account", "Live Activities"],
    screenshotAlt: "Kickoff's Matches screen with live scores",
  },
  appStore: { small: "Download on the", large: "App Store", soon: "Coming soon to the App Store" },
  trust: [
    { title: "Thousands of competitions", text: "Top leagues and cups from around the world." },
    { title: "No account", text: "Follow your teams without signing up." },
    { title: "No ads, no tracking", text: "Nothing in your way during the match." },
    { title: "iPhone, iPad and iPhone Duo", text: "Built for every screen, on iOS 26.1 or later." },
  ],
  features: {
    title: "The whole match in your pocket",
    subtitle: "Everything you need to follow football, free.",
    items: [
      {
        title: "Minute by minute",
        text: "Goals, cards and substitutions the moment they happen, on a clear match timeline.",
        points: ["Live scores from thousands of competitions", "Events as they happen", "Today's fixtures and results at a glance"],
        alt: "Match page with the score and the timeline of events",
      },
      {
        title: "Lineups on the pitch",
        text: "See both teams line up in their formation, with substitutes and coaches.",
        points: ["Formations drawn on the pitch", "Substitutes and coaches", "Starting elevens as soon as they are announced"],
        alt: "Both lineups drawn on a football pitch",
      },
      {
        title: "Stats, tables and head-to-head",
        text: "Possession, shots and every other number, the live league table and how the two teams have met before.",
        points: ["Match statistics side by side", "League tables that update live", "Previous meetings of the two teams"],
        alt: "Match statistics comparing both teams",
      },
    ],
  },
  everywhere: {
    title: "On your iPhone, not just in the app",
    subtitle: "Kickoff keeps you up to date wherever you look.",
    items: [
      { title: "Alerts that matter", text: "Goals, red cards, kick-off and full-time for the teams and matches you follow." },
      { title: "Live Activities", text: "The score on your Lock Screen and in the Dynamic Island while the match is on." },
      { title: "Home Screen widgets", text: "Your team's live score, next match or last result at a glance." },
      { title: "Control Center and Siri", text: "Jump to live matches from Control Center, or ask Siri for your team's score." },
      { title: "No account needed", text: "Follow teams and leagues right away; they sync to your other devices through iCloud." },
      { title: "Every screen", text: "iPhone, iPad and both displays of iPhone Duo, in portrait and landscape." },
    ],
  },
  pro: {
    eyebrow: "Kickoff Pro",
    title: "AI for every match",
    subtitle: "Live scores stay free. Kickoff Pro is an optional subscription for those who want to see further.",
    cards: [
      {
        title: "AI forecast",
        text: "Win, draw and loss chances, expected goals and the likeliest scores, from a statistical model tested on more than 12,000 matches.",
        alt: "AI forecast with win chances, expected goals and likeliest scores",
      },
      {
        title: "Manage the team",
        text: "Not happy with the line-up? Pick the formation and your own eleven and watch the chances change.",
        alt: "Manage the team screen with your own eleven on the pitch",
      },
      {
        title: "Play the match",
        text: "Play it minute by minute against the real opponent, then compare your result with reality.",
        alt: "Minute-by-minute simulation of the match with commentary",
      },
    ],
    freeTitle: "Always free",
    free: [
      "Live scores and minute-by-minute events",
      "Lineups, statistics, tables and head-to-head",
      "Goal, red card, kick-off and full-time alerts",
      "Live Activities and the Dynamic Island",
      "Widgets, Control Center and Siri Shortcuts",
      "Following teams and leagues, synced with iCloud",
    ],
    proTitle: "Kickoff Pro",
    proItems: [
      "AI forecast for every match",
      "Analysis written on your device by Apple Intelligence",
      "Manage the team: your eleven against the real opponent",
      "Your simulations saved and compared with the real result",
    ],
    note: "Weekly, monthly or yearly subscription; prices are shown in the app. Without Pro, one match a week is free to open. Analyses are written on your device by Apple Intelligence on supported devices; nothing you do is sent to an AI service.",
  },
  fair: {
    eyebrow: "Fair play",
    title: "Football first. Nothing else.",
    text: "Kickoff has no accounts, no ads and no tracking. It only keeps what it needs to send the alerts you ask for.",
    points: [
      { title: "No account", text: "Each device signs in anonymously. No name, email or Apple Account needed." },
      { title: "No ads or tracking", text: "No advertising and no tracking. Your data is never sold." },
      { title: "For fun, not for betting", text: "Forecasts and simulations are statistical estimates for entertainment, not betting advice." },
      { title: "Free coins only", text: "The optional prediction game uses free coins: no real money and nothing to win." },
    ],
    link: "Read the privacy policy",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Is Kickoff free?", a: "Yes. Live scores, events, lineups, stats, tables, alerts, Live Activities and widgets are free. Kickoff Pro is an optional subscription for the AI features." },
      { q: "Do I need an account?", a: "No. Each device signs in anonymously, and the teams you follow sync to your other devices through your iCloud." },
      { q: "How accurate are the forecasts?", a: "They come from a statistical model tested on more than 12,000 matches. They are estimates, not certainties, and they are meant for entertainment, not for betting." },
      { q: "Why is there no forecast for a match?", a: "The model needs a few league matches of both teams; cup ties and the first weeks of a season often don't have enough yet." },
      { q: "Does the prediction game involve money?", a: "No. Coins are free, can't be bought and have no value outside the game." },
      { q: "Which devices are supported?", a: "iPhone and iPad with iOS 26.1 or later, including both displays of iPhone Duo. Analyses by Apple Intelligence need a supported device." },
    ],
  },
  cta: { title: "Never miss a goal again", text: "Download Kickoff and follow your team in seconds, no account needed." },
  footer: {
    tagline: "Football live scores and AI forecasts for iPhone.",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    disclaimer: "Forecasts and simulations are statistical estimates for entertainment and are not betting advice. Kickoff is not affiliated with any league, club or federation.",
    data: "Match data by API-Football.",
  },
  legal: { updated: "Last updated", back: "Back to home", contact: "Contact" },
  terms: {
    title: "Terms of Use",
    intro: [
      { p: "Kickoff is made by {developer}. Your use of the app is governed by Apple's standard Licensed Application End User License Agreement (EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
      { p: "This page summarises the main points and adds what applies to Kickoff Pro. If anything here differs from the EULA, the EULA applies." },
    ],
    sections: [
      {
        title: "Licence",
        blocks: [
          { p: "You receive a personal, non-transferable licence to use Kickoff on Apple devices you own or control, as permitted by the App Store's usage rules. You may not copy, modify, resell or reverse-engineer the app." },
        ],
      },
      {
        title: "Kickoff Pro subscription",
        blocks: [
          {
            ul: [
              "Kickoff Pro is available as a weekly, monthly or yearly auto-renewable subscription. Prices are shown in the app before you buy.",
              "Payment is charged to your Apple Account at confirmation of purchase.",
              "The subscription renews automatically unless it is cancelled at least 24 hours before the end of the current period. Renewal is charged within 24 hours before the period ends.",
              "You can manage or cancel the subscription in your App Store account settings.",
              "If a free trial is offered, any unused part of it is forfeited when you subscribe.",
              "Without Pro, one match a week is free to open.",
            ],
          },
        ],
      },
      {
        title: "Forecasts and the prediction game",
        blocks: [
          { p: "Forecasts, analyses and simulations are statistical estimates for entertainment. They are not betting advice and there is no guarantee that they are correct." },
          { p: "The optional prediction game uses free virtual coins only. Coins can't be bought, have no value outside the game and there is nothing to win." },
        ],
      },
      {
        title: "Match data",
        blocks: [
          { p: "Scores, lineups and statistics come from API-Football. They may occasionally be delayed, incomplete or wrong. Kickoff is not affiliated with any league, club or federation." },
        ],
      },
      {
        title: "Purchases and refunds",
        blocks: [
          { p: "Purchases are processed by Apple. Refund requests are handled by Apple: https://reportaproblem.apple.com" },
        ],
      },
      {
        title: "Changes and liability",
        blocks: [
          { p: "Features may change over time. The app is provided as described in the EULA, which also sets out the limits of our liability to the extent permitted by law." },
        ],
      },
      {
        title: "Contact",
        blocks: [{ p: "Questions about these terms: {email}" }],
      },
    ],
  },
};
