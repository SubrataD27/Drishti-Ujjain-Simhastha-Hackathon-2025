# Project DRISHTI

Digital Response & Intelligence System for Holistic Threat Interception

**Registration Number:** TH12915  
**Team:** Team Aashu  
**Theme:** Theme 2 – Safety, Security & Surveillance

![Stack](https://img.shields.io/badge/Stack-React%20%2B%20TypeScript%20%2B%20Vite-blue)
![UI](https://img.shields.io/badge/UI-TailwindCSS-38BDF8)
![Maps](https://img.shields.io/badge/Maps-Leaflet%20%2F%20Mapbox-1E9F75)
![Status](https://img.shields.io/badge/Status-Hackathon%20Prototype-orange)

---

## 1. Executive Summary

Mass religious gatherings (e.g. Simhastha Kumbh 2028, Ujjain) require real‑time situational awareness, predictive crowd risk modelling, coordinated logistics, and rapid multi‑channel response. Project DRISHTI is a unified Command & Intelligence Dashboard that fuses simulated (extensible to live) telemetry (crowd density, drones, SOS, choke points, logistics, service health, communications) into an adaptive, themeable, performance‑tuned interface. It is engineered for clarity under stress, with predictive assist ("Samanjasya / Vishwas / Suraksha" AI advisory model concept) and modular expansion readiness.

## 2. Core Value Propositions

1. Situational Fusion: One pane for crowd, risk, resource, and operational layers.
2. Predictive Prevention: Choke point risk scores + 15/30 min density projections.
3. AI Assist Hooks: Extensible modal workflow for AI‑generated interventions & approvals.
4. Operational Efficiency: Drone fleet overview, logistics depletion ETAs, service uptime.
5. Communication Integrity: Central announcements & rumor-control readiness.
6. Rapid Theming & Presentation: Accent palette + glass morphism for stakeholder demos.
7. Offline‑Ready Design (planned): Architecture prepared for progressive enhancement & caching.

## 3. Feature Matrix (Implemented)

| Domain | Key Features |
|--------|--------------|
| Live Map | Dual engine (Leaflet fallback + optional Mapbox), animated pilgrims, heat layer, choke point markers, sector polygons |
| KPI Ribbon | Continuous marquee: Threat Level, Crush Risk Index, Supply Sufficiency %, Drone Coverage %, Rising Sectors, Median Response SLA |
| Predictive Crowd | Sector density now / +15 / +30 with trend classification |
| Choke Points | Risk score + time‑to‑issue ETA |
| Drone Fleet | Status, task, battery, sector assignment, ETAs |
| Logistics | Stock levels, depletion time forecasts, low‑stock flagging |
| SOS / Alerts | Simulated incoming alerts + AI advisory modal (approve / reject workflow) |
| System Health | Latency, error rates, service status heat semantics |
| Communications | Multi-channel announcement logs & approvals |
| Theming | 6 accent palettes, glass mode toggle, persistent localStorage |
| Responsiveness | Mobile bottom sheet panel, condensed metric strip, adaptive layout |
| Performance | Code-splitting (lazy views), dynamic map engine loader, selective re-rendering |

## 4. Technology Stack

| Layer | Implementation |
|-------|---------------|
| Frontend Framework | React 18 + TypeScript + Vite |
| Styling | TailwindCSS, custom accent system, glass mode utility classes |
| Motion | Framer Motion (entrances, panel transitions, KPI marquee) |
| Mapping | Leaflet + leaflet.heat (default), optional Mapbox-GL (dynamic import) |
| Charts | Recharts (lightweight compositional charts) |
| Data Simulation | Faker.js seeded dynamic generators (extensible to APIs) |
| State | Context API (App & Theme contexts) |
| Build / Deploy | Vite build, Netlify deploy config (SPA redirect + asset caching) |

## 5. Architecture Overview

```text
src/
    components/      Core UI modules (map wrappers, panels, ribbon, modals)
    components/views Domain views (Analytics, Logistics, Drones, etc.)
    contexts/        AppContext (UI state), ThemeContext (accent/glass)
    utils/           mockData generator (telemetry + predictive synthesis)
    hooks/           Responsive/media preference utilities
```

Separation ensures: (1) modifiability per domain, (2) lazy loading for heavy views, (3) theming decoupled from business logic, (4) future substitution of mock generators with real API clients.

## 6. Data Simulation Model

The generator (`mockData.ts`) synthesizes:
- Crowd density per sector with peak-hour shaped baselines
- Short-horizon predictive density (now / +15 / +30) with trend classification
- SOS alerts & spatial scatter via radial randomization
- Drone operational states + battery + ETA logic
- Logistics resource depletion timing (ETA minutes)
- Service health (latency/error envelope)
- Choke point emergent risk scores (0–1)
- Announcement stream with AI + human approval flags

Easily replaceable: swap faker-driven factories with REST/WebSocket ingestion.

## 7. Mapping Layer Strategy

| Mode | Purpose |
|------|---------|
| Leaflet (default) | Tokenless open-source runtime, low friction demos |
| Mapbox (optional) | Higher-fidelity vector tiles if `VITE_MAPBOX_TOKEN` provided |

Dynamic import wrapper prevents bundling heavy Mapbox chunk unless token environment variable exists at build time.

## 8. KPI Logic (Sample Formulas)

```text
Crush Risk Index        = avg(chokePoint.riskScore) * 100
Supply Sufficiency %    = sum(current) / sum(max) * 100
Drone Coverage %        = active(non-idle) / total * 100
Rising Sectors (15m)    = count(prediction.trend == rising & plus15 > 0.7)
Median Response SLA (s) = avgResponseTime placeholder (future: percentile over incident resolution deltas)
```

## 9. Theming & UX Polish

Available Accents: Blue, Cyan, Emerald, Amber, Violet, Rose.  
Glass Mode: Applies translucent layered backgrounds with subtle ring and bloom illusions for “executive war-room” aesthetic.  
Persistence: localStorage (`drishti:accent`, `drishti:glass`).

## 10. Getting Started

### Prerequisites

- Node.js 18+ recommended

### Install & Run

```bash
npm install
npm run dev
```

Visit: <http://localhost:5173>

### Production Build

```bash
npm run build
npm run preview
```

### Optional: Mapbox Integration

Create a `.env` (or `.env.local`) file:

```dotenv
VITE_MAPBOX_TOKEN=pk.your_token_here
```

The map wrapper auto‑switches to Mapbox if token is present.

## 11. Deployment (Netlify)

`netlify.toml` includes:

- SPA redirect (`/* -> /index.html`)
- Aggressive static asset caching (1 year immutable) except HTML (no cache)

Push to a connected Git repo → enable auto deploy.

## 12. Security & Operational Considerations (Future)

| Concern | Planned Mitigation |
|---------|--------------------|
| Auth / RBAC | JWT / OIDC integration, scoped module claims |
| Data Integrity | Hash-signed ingestion from edge devices |
| Privacy | Anonymized crowd telemetry, no PII storage |
| Resilience | Service health auto-escalation & circuit fallbacks |
| Offline | Service Worker (asset + last-known snapshot caching) |

## 13. Roadmap (Next Milestones)

- Advanced map overlays: Directional crowd flow vectors, animated lane arrows
- Spatial clustering & drill-down for pilgrim scatter
- Time scrubber (“what-if” replay) for density evolution
- WebSocket ingestion layer (Live drone + SOS feed)
- PWA packaging + offline fallback + install prompt
- AI streaming inference integration (real LLM guided interventions)
- Mobile Pilgrim Companion (lite guidance + SOS trigger) prototype
- Role-based dashboards (Security, Medical, Logistics personas)
- Export / reporting bundle (PDF / CSV snapshots)

## 14. Extensibility Hooks

| Module | Swap Strategy |
|--------|---------------|
| Mock Generators | Replace with fetch/WebSocket adapters returning same shape |
| AI Alert Modal | Connect to inference endpoint (stream tokens, incremental suggestion) |
| Drone Fleet | Integrate with telemetry broker (MQTT/Kafka → WebSocket) |
| Mapping | Support additional tile providers or vector overlays via plugin interface |

## 15. Team (Team Aashu)

| Name | Role |
|------|------|
| Ayush Kumar Biswal | Project Lead & Researcher |
| Smruti Ranjan Senapati | UI/UX & Mobile App Developer |
| Omkar Mahapatro | Backend Developer |
| Subrat Kumar Majhi | AI/ML Specialist |

## 16. Naming Conventions

- Components: PascalCase (`DynamicLiveMap`)
- Hooks: `useX` (`useResponsive`)
- Context Keys: `drishti:*` for persistence
- IDs: Domain-prefixed (`DR-01`, `CPK-2`, `CP-010`)

## 17. Performance Notes

- Lazy boundary per view to avoid blocking initial visual paint.
- Dynamic Mapbox import defers ~1.6MB bundle unless explicitly needed.
- Animated KPI ribbon uses linear infinite transform (GPU-friendly, low layout churn).

## 18. Limitations (Current Prototype)

- All telemetry synthetic; no real incident correlation yet.
- AI advisory logic stubbed; no model integration.
- No persistent backend / database binding.
- Security (auth, audit) unimplemented.

## 19. Contributing (Hackathon Context)

External contributions paused during evaluation window. Post-hackathon: propose via PR with concise scope & performance impact statement.

## 20. License / Usage

Hackathon prototype – evaluation & demonstration only. For production adaptation obtain written consent from Team Aashu. (A formal open-source license can be applied post‑event.)

## 21. Quick Commands (Reference)

```bash
# Install deps
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview production
npm run preview
```

## 22. Screens / Visual Highlights (Suggested)

Embed screenshots / GIFs after capturing: Live Map, KPI Ribbon, Drone View, Logistics depletion, Theme palette switch.

---

### Summary

Project DRISHTI delivers a cohesive, extensible command operations view with predictive risk framing and polished executive presentation aesthetics—positioned as a foundation for integrating real-time feeds, AI-driven decision assistance, and multi-agency coordination at scale.

---

© Team Aashu – Simhastha Hackathon Submission (Reg. TH12915)
