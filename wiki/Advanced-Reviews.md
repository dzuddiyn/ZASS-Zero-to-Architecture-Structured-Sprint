# Advanced Review Methods

Full ZASS can challenge an idea through different lenses.

These are **optional tools**, not mandatory ceremony.

Use only the lens that can change the decision or expose a meaningful risk.

## Engineering and architecture

### Industrial / C4 / arc42 / ATAM

Clarify components, responsibilities, flows, quality attributes and trade-offs.

### Maintainability

Ask whether a future maintainer can understand, repair, upgrade and recover the system.

### Operations / reliability

Check monitoring, alerts, handover, backup, recovery, capacity and human availability.

### Scalability

Ask what changes if users, data, commands or integrations grow by 10×–100×.

### Resilience / offline

Assume internet, an AI provider or an integration disappears. Define minimum function, queue, retry and recovery behavior.

## Evidence and reasoning

### Academic / DSRM / GQM

Turn vague claims into problems, questions, methods, measures and evidence.

### Data / evidence

Check data provenance, quality, mutability and how claims can be audited.

### Minimal viable experiment

Replace a long debate with the smallest useful test of a critical assumption.

### First-principles thinking

Break assumptions down to basics and rebuild from what is truly required.

### Systems thinking

Look for feedback loops, delays, side effects and interactions between stakeholders.

## Failure and adversarial review

### Hacker / assumption breaking

Search for edge cases, malformed input, network interruption and wrong action sequences.

### Security / threat modelling

Identify assets, attackers, attack paths, impact and defensive controls.

### Abuse / Scammer mindset

Look for manipulation, duplicate claims, fraud or exploitation.

Output must remain defensive: risks, detection, evidence and controls — not bypass instructions.

### Red team / adversarial review

Challenge assumptions from an opposing perspective while returning defensive findings.

### Reverse planning / pre-mortem

Assume the project failed later. Work backward to plausible causes and early mitigations.

## Human and product review

### User experience / workflow

Follow the user journey and find confusion, unnecessary steps, unsafe decisions and waiting points.

### Single-maintainer perspective

Evaluate time, cognitive load, skills, documentation and recovery burden for one maintainer.

### Artist / emotional experience

Consider confidence, calm, enjoyment, frustration and meaning.

### Product / market

Ask who has the problem, what alternatives exist and why they would choose this solution.

### Ethics / harm

Identify who might be harmed, excluded or unfairly burdened.

### Accessibility / inclusion

Check ability, language, device, connectivity and literacy differences.

### Privacy / trust

Minimize collected data and clarify purpose, access, retention and user control.

### Legal / compliance

Check relevant obligations before expensive design decisions become entrenched.

### Stakeholder / conflict

Map who benefits, who carries work/risk and where incentives conflict.

## Creative expansion

### Crazy / unconstrained brainstorming

Temporarily remove familiar constraints to surface unexpected possibilities, then bring real constraints back.

### Analogy / cross-domain

Borrow patterns from other domains such as factories, hospitals, banking, games or agriculture.

### Future-back / scenario planning

Explore several plausible futures and test whether current decisions remain useful.

## Review output

A review should normally return only useful deltas:

- findings;
- contradictions;
- risks;
- questions;
- candidate experiments;
- candidate decisions.

A review methodology has **no authority** to change LOCKED decisions by itself.
