---
# Broker landing page — content lives in front matter, rendered by layouts/landing/single.html
type: landing
title: "AI Consultant for Insurance Brokers"
description: "Cut the document grind in your brokerage. See where AI can save your team hours on renewals, submissions and policy checking, and get a clear plan for what's worth doing. Book a free call."

# --- NAV: override the site-wide header so visitors stay on this page (logo still links home) ---
nav:
  - { name: "Services", url: "#services" }
  - { name: "FAQ", url: "#faq" }
  - { name: "About", url: "#founder-profile" }
nav_buttons:
  - { name: "Book a free call", url: ":calendly" }

# --- HERO: their pain + the demo as ONE idea + call to discuss the rest ---
hero:
  eyebrow: "For commercial insurance brokers"
  headline: "How many hours a week do your brokers lose to paperwork?"
  subhead: |
    Here's a quick demo of something your firm probably does daily: comparing open-market quotes. We can build you a workflow to compare them in seconds.

    This is just one idea. Get in touch and we'll find where AI would help your firm.
  button_primary: { label: "Book a free call", href: ":calendly" }
  video_url: "https://www.youtube-nocookie.com/embed/ffnXQSgaMME"
  caption: "Three sample insurer quotes for the same risk, in different formats, pulled into one comparison with the gaps flagged: the cheapest drops flood cover, halves the business-interruption period and hides a survey condition."

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
  intro: "The demo above handles a single job. But brokerages run on documents, and most have the same time-sinks: staff sifting through PDFs, chasing what's missing, and rekeying it somewhere else. Sound familiar?"
  points:
    - heading: "Policy checking"
      body: "Insurer documents come back, and someone checks them line by line against what was agreed, catching the errors before the client does."
    - heading: "Claims paperwork"
      body: "Claims packs land as a jumble of forms, invoices and reports. Someone extracts the detail, spots what's missing, and chases it."
    - heading: "Renewal prep & submissions"
      body: "Current cover, claims history and client details pulled together into a submission the market will quote on, re-keyed from documents you already hold."
  callout: "Wherever your team is shuffling documents by hand is an opportunity for a workflow to do the heavy lifting"

tldr_quote:
  quote: I help brokerages decide where AI pays and where it doesn't, then lead the work to make it happen, strategy first, then build or buy and on-going leadership.
  source: Alan Bates | Founder, 10 Kinds
  image: "images/headshot.jpg"

# --- CAPABILITIES: what AI is good for ---
capabilities:
  heading: "How can AI help insurance brokers?"
  intro: "Apart from pulling data out of documents, here's where else it can work well for your firm:"
  points:
    - heading: "Answers from everything your firm knows"
      body: "Put a question to your whole knowledge base at once, like 'which insurers will write a client with a late-notified claim?' or 'what's our process when a client underdeclares?', and get a cited answer drawn from your procedures, market knowledge and past cases. The stuff that currently lives in a few people's heads, available to everyone."
    - heading: "Spotting what's hidden in your book"
      body: "Surface the patterns you'd never catch by eye: clients who look underinsured, accounts likely to leave at renewal, cross-sell gaps across the book."
    - heading: "Making decisions, not just admin"
      body: "Sort inbound claims and enquiries by urgency, flag the renewals that need a human, route each case to the right desk, before anyone's opened them."
    - heading: "First drafts in seconds"
      body: "Renewal reports, client letters, market submissions: drafted from the data you already hold, ready to check and send rather than write from scratch."
  callout: "We can help you work out how best to apply AI in your firm."

# --- FAQ: quietly handles the objections brokers won't say out loud ---
faq:
  heading: "Questions"
  items:
    - q: "What does 10 Kinds do?"
      a: |
        We help brokerages work out where AI is worth using, then make it happen: setting the strategy, steering what gets built, and sense-checking any vendors you're considering.

        That covers both strategy and implementation, either hands-on or finding and managing the right suppliers.
    - q: "How can you help our firm specifically?"
      a: "We find the high-ROI places AI fits your workflows, then build a strategy to take the grind off your staff, so they spend time on clients and judgement, not rekeying."
    - q: "Do we need to know anything about AI?"
      a: "No. That's the point. We provide the AI expertise so you don't have to develop it in-house or take vendor claims at face value."
    - q: "Can you build things, or is it just advice?"
      a: "Both. We can run a full prototype sprint or custom build, work alongside your existing developers, or brief and oversee an external supplier. The right approach depends on what you're building and what capability you already have."
    - q: "Is our data safe?"
      a: "Yes. Anything we build runs on infrastructure scoped to your firm, sees only the documents you point it at, and never feeds public AI models."      
    - q: "How do we get started?"
      a: "Book a free 30-minute call. We'll get to know your firm, give you a straight read on where AI could help, and agree what the right next step looks like, whether that's a prototype, a workshop, or something else entirely."

# --- CONTACT: soft close + form ---
contact:
  heading: "Tell us how you work today"
  body: "No pitch. We'd like to understand how the document work reaches your desk right now. Fifteen minutes, and if we can't add value, we'll say so."
---
