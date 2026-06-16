---
# Broker landing page — content lives in front matter, rendered by layouts/landing/single.html
type: landing
title: "AI document tools for commercial insurance brokers"
description: "Automated first-pass on the quotes, claims packs and schedules that still land as PDFs. AI extracts and flags; you decide."

# --- HERO: their pain + your promise + main button + video demo ---
hero:
  eyebrow: "For UK commercial insurance brokers"
  headline: "Your renewal quotes come back in five formats. Compare them in seconds."
  subhead: "I build AI that does the first pass on your documents — and where it shouldn't, I tell you."
  button_primary: { label: "Tell me how you handle renewals today", href: "#contact" }
  video_url: "https://youtube.com/embed/REPLACE_WITH_VIDEO_ID"
  caption: "Three insurer quotes for the same risk, in three different formats, pulled into one comparison automatically — with the gaps flagged. The cheapest quote here quietly drops flood cover, halves the business-interruption period and hides a survey condition. The tool surfaces it. You still decide."

# --- PROBLEM: name their problem in their words ---
problem:
  heading: "Renewal season, by hand"
  intro: "When a commercial risk goes to the open market, the quotes don't come back tidy. They come back as a stack of PDFs — each insurer with its own layout, its own wording, and its own way of burying the bit that matters."
  points:
    - heading: "Five insurers, five formats"
      body: "Limits, excesses, exclusions and subjectivities sit in a different place on every schedule. There's no apples-to-apples until someone builds one by hand."
    - heading: "Compared against the clock"
      body: "Renewal deadlines don't move. The comparison gets done late, fast and tired — exactly when something gets missed."
    - heading: "The cheapest quote can be the worst"
      body: "A lower premium often hides a flood exclusion, a shorter indemnity period or an unmet subjectivity. Miss it, and it's your E&O exposure — not the insurer's."

# --- HOW IT WORKS: three steps ---
how_it_works:
  heading: "What it does"
  steps:
    - heading: "Reads"
      body: "Ingests every quote document, whatever the format — clean PDF, scan or email."
    - heading: "Normalises"
      body: "Maps each insurer's wording onto the same fields, so you get one clean side-by-side instead of five different schedules."
    - heading: "Flags"
      body: "Highlights where cover, limits or conditions differ from the rest, so nothing hides in the fine print. The judgement stays yours."

# --- HONESTY: the "where you don't need me" trust block. Keep this. ---
honesty:
  heading: "Where you don't need me"
  body: "For quote comparison on its own, there are already good off-the-shelf tools. If that's all you need, I can help you choose a vendor. I earn my keep on the document work that's specific to how your firm runs — the reconciliations, the claims packs, the back-office grind that no product covers because it's specific to you."

# --- WHY ME: two scannable cards (cols 1–2 on lg) + headshot (col 3). ---
why_me:
  heading: "Why work with me"
  intro: "Most people who advise on AI can talk business or build — rarely both. I do both."
  image: "images/headshot.jpg"
  consultant_name: "Alan Bates, Certified AI Consultant"
  sides:
    - heading: "Business judgement"
      image: "images/uol-logo.svg"
      text: "I sit with your principals and talk cost, risk and priorities — not jargon. **Postgraduate in Business Administration.**"
    - heading: "Technical build"
      image: "images/aws-cert.png"
      text: "I build the pipeline and tell you straight whether a vendor's claims hold up. **AWS Certified Generative AI Professional.**"
  summary: "Everything I build keeps a person in the loop — the AI does the first pass, your team makes the decision. One person, accountable to you, working with firms across the UK."

# --- SERVICES: the three-tier offer ladder. Set the Discovery price yourself. ---
services:
  heading: "How we can work together"
  text: "I meet you where you are and help you build towards your goals. From a no-obligation first conversation to embedded strategic leadership – whatever suits you."
  
  tiers:
    - name: "AI Clarity Call"
      price: "Free · 30 minutes"
      image: "images/telephone.png"
      body: "Not sure where AI fits? In 30 focused minutes I learn how your firm works and give you a straight read on where AI could actually help — and where it couldn't."
      button: { label: "Book a call", href: "#contact" }
    - name: "AI Discovery"
      price: "From £1,250 · about a day"
      image: "images/services-web-development.png"
      body: "A focused audit of your document and back-office workflows to find the highest-ROI opportunities. You leave with a prioritised roadmap — what to do, what to buy, what to skip, and why."
      button: { label: "Find out more", href: "#contact" }
    - name: "Ongoing AI Partnership"
      image: "images/handshake.png"
      body: "Senior AI judgement on tap — guiding decisions, sense-checking vendors, or acting as your fractional AI lead. Pitched at whatever level your firm is ready for."
      button: { label: "Get in touch", href: "#contact" }

# --- FAQ: quietly handles the four objections brokers won't say out loud ---
faq:
  heading: "Questions"
  items:
    - q: "Where does our data go?"
      a: "It stays under your control. I build on AWS infrastructure scoped to your firm, and the system only ever sees the documents you point it at. Nothing is used to train public models."
    - q: "We already use Acturis / eTrade."
      a: "Those are great for packaged, eTraded risks — and for those you don't need me. This is for the open-market and non-standard work those platforms don't structure: the quotes, claims packs and schedules that still arrive as PDFs."
    - q: "We're a small brokerage — is this overkill?"
      a: "It's built to be accessible, not enterprise-priced. Start with one workflow and a fixed-price piece of work, at a scale and cost that suits a firm your size."

# --- CONTACT: soft close + form ---
contact:
  heading: "Tell me how you work today"
  body: "No pitch. I'd genuinely like to understand how renewals and document work land on your desk right now. Fifteen minutes — and if AI isn't the answer, I'll say so."
---
