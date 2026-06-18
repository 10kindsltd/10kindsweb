---
# Broker landing page — content lives in front matter, rendered by layouts/landing/single.html
type: landing
title: "AI Consultant for Insurance Brokers"
description: "Cut the document grind in your brokerage. See where AI can save your team hours on renewals, submissions and policy checking — and get a straight plan for what's worth doing. Book a free call."

# --- NAV: override the site-wide header so visitors stay on this page (logo still links home) ---
nav:
  - { name: "Why me", url: "#why-me" }
  - { name: "Services", url: "#services" }
  - { name: "FAQ", url: "#faq" }
nav_buttons:
  - { name: "Book a free call", url: ":calendly" }

# --- HERO: their pain + the demo as ONE idea + call to discuss the rest ---
hero:
  eyebrow: "For commercial insurance brokers"
  headline: "How many hours a week do your brokers lose to paperwork?"
  subhead: |
    Here's a quick demo of something your firm probably does daily — comparing open-market quotes. I'm an independent AI consultant and can build you a workflow to help you compare them in seconds. 
    
    This is just one idea. Get in touch and we'll find where AI would actually help your firm.
  button_primary: { label: "Book a free call", href: ":calendly" }
  video_url: "https://youtube.com/embed/ffnXQSgaMME"
  caption: "Three sample insurer quotes for the same risk, in different formats, pulled into one comparison with the gaps flagged — the cheapest quietly drops flood cover, halves the business-interruption period and hides a survey condition."

# --- PROOF: indicative industry results. ---
stats_proof:
  heading: "Potential efficiencies"
  stats:
    - figure: "10×"
      label: "Documents handled per person"
    - figure: "99%"
      label: "Document routing accuracy"
    - figure: "80%+"
      label: "Straight-through processing of unstructured mail & email"
  source:
    text: "Source: [Deloitte AI-powered Input Management for Financial Services and Insurance Whitepaper](https://www.deloitte.com/ce/en/issues/generative-ai/ai-for-financial-services-and-insurance-whitepaper.html)"
    url: "https://www.deloitte.com/ce/en/issues/generative-ai/ai-for-financial-services-and-insurance-whitepaper.html"

# --- PROBLEM: name their problem in their words ---
problem:
  heading: "That's just one workflow. Your firm is full of them."
  intro: "The demo above handles a single job — but brokerages run on documents, and most have the same time-sinks: staff sifting through PDFs, chasing what's missing, and rekeying it somewhere else. Sound familiar?"
  points:
    - heading: "Policy checking"
      body: "Insurer documents come back, and someone checks them line by line against what was agreed — catching the errors before the client does."
    - heading: "Claims paperwork"
      body: "Claims packs land as a jumble of forms, invoices and reports. Someone extracts the detail, spots what's missing, and chases it."
    - heading: "Renewal prep & submissions"
      body: "Current cover, claims history and client details pulled together into a submission the market will actually quote on — re-keyed from documents you already hold."
  callout: "Wherever your team is shuffling documents by hand is an opportunity for a workflow to do the heavy lifting"
  
tldr_quote: 
  quote: I help brokerages decide where AI pays and where it doesn't, then lead the work to make it happen — strategy first, then build or buy and on-going leadership.
  source: Alan Bates | Founder, 10 Kinds
  image: "images/headshot.jpg"

# --- CAPABILITIES: what AI is good for ---
capabilities:
  heading: "How can AI help insurance brokers?"
  intro: "Apart from pulling data out of documents, here's where else it can work well:"
  points:
    - heading: "Answers from everything your firm knows"
      body: "Put a question to your whole knowledge base at once — 'which insurers will write a client with a late-notified claim?', 'what's our process when a client underdeclares?' — and get a cited answer drawn from your procedures, market knowledge and past cases. The stuff that currently lives in a few people's heads, available to everyone."
    - heading: "Spotting what's hidden in your book"
      body: "Surface the patterns you'd never catch by eye: clients who look underinsured, accounts likely to leave at renewal, cross-sell gaps across the book."
    - heading: "Making decisions, not just admin"
      body: "Sort inbound claims and enquiries by urgency, flag the renewals that need a human, route each case to the right desk — before anyone's opened them."
    - heading: "First drafts in seconds"
      body: "Renewal reports, client letters, market submissions — drafted from the data you already hold, ready to check and send rather than write from scratch."
  callout: "I can help you work out how best to apply AI in your company."


# --- HONESTY: the "where you don't need me" trust block. Keep this. ---
honesty:
  heading: "Where you don't need me"
  body: "Where there are already good off-the-shelf tools I can help you choose a vendor. I earn my keep helping you identify the highest-ROI AI opportunities for your firm and providing whatever leadership you need."

# --- FAQ: quietly handles the objections brokers won't say out loud ---
faq:
  heading: "Questions"
  items:
    - q: "What do you actually do?"
      a: |
        I help brokerages work out where AI is worth using, then make it happen — setting the strategy, steering what gets built, and sense-checking any vendors you're considering.
        
        So I can help you **both strategically** and **with implementation**, either hands-on or finding vendors, keeping tabs on developers, etc.
    - q: "How can you help us?"
      a: "I find the high-ROI places AI fits, then create a strategy to take the grind off your staff so they spend time on clients and judgement, not rekeying — helping each team punch above its weight."        
    - q: "Do I need to know anything about AI?"
      a: "No. That's the point of bringing me in — I'm the AI expertise, so you don't have to hire it in-house."     
    - q: "What does the ongoing partnership involve?"
      a: "Whatever you're ready for — occasional advice, sense-checking vendors, or acting as your fractional AI lead. It's pitched at the level that suits your firm, can evolve as you grow and priced accordingly."      
    - q: "Who do you work with?"
      a: "Established SME brokerages — roughly 5 to 50 staff, without an in-house dev team."
    - q: "Is our data safe?"
      a: "Yes. Anything I build runs on infrastructure scoped to your firm, sees only the documents you point it at, and never feeds public AI models."

# --- CONTACT: soft close + form ---
contact:
  heading: "Tell me how you work today"
  body: "No pitch. I'd genuinely like to understand how the document work lands on your desk right now. Fifteen minutes — and if I can't add value, I'll say so."
---
