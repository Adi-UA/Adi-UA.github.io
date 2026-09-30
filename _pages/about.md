---
layout: about
title: About
permalink: /
subtitle: Software Engineer @ Amazon | AI agents and ML systems

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p><a href="mailto:abanerjee.email@gmail.com">abanerjee.email@gmail.com</a></p>
    <p>Seattle, WA</p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I'm a software engineer at Amazon in Seattle, building agentic systems for vendor operations. Recent work includes an MCP server that lets a vendor-facing AI assistant diagnose delivery performance drops and warehouse suspensions from DuckDB over S3 Parquet (evaluated with Langfuse traces and LLM judges), a documentation-drift detector that models a wiki as a Neptune graph and finds stale pages with a Rust Lambda on Bedrock, and a sourcing-explainability agent over a 30M-document OpenSearch index with a 7.5s p95 time to first token.

Before Amazon I was a research engineer at the University of Arizona, working on transformer-based math OCR and reinforcement learning, and co-authored an AAAI symposium paper on procedural generation. I've also won prizes at four Amazon internal hackathons.

Selected projects are under [projects](/projects), the full record is in my [CV](/cv), and the source is on [GitHub](https://github.com/Adi-UA).

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://adi-ua.github.io/#person",
  "name": "Adi Banerjee",
  "alternateName": "Aditya Banerjee",
  "url": "https://adi-ua.github.io/",
  "image": "https://adi-ua.github.io/assets/img/prof_pic.jpg",
  "jobTitle": "Software Engineer",
  "worksFor": { "@type": "Organization", "name": "Amazon", "url": "https://www.amazon.com/" },
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "University of Arizona", "url": "https://www.arizona.edu/" },
  "address": { "@type": "PostalAddress", "addressLocality": "Seattle", "addressRegion": "WA", "addressCountry": "US" },
  "knowsAbout": ["AI agents", "Model Context Protocol", "LLM evaluation", "AWS", "Amazon Bedrock", "Rust", "Java", "Python", "PyTorch"],
  "sameAs": [
    "https://github.com/Adi-UA",
    "https://www.linkedin.com/in/adi-ua/",
    "https://scholar.google.com/citations?user=LLz5Ds4AAAAJ",
    "https://arxiv.org/abs/2211.06733",
    "https://doi.org/10.1007/978-3-031-21671-8_6"
  ]
}
</script>
