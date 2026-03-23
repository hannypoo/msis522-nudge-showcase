import {
  BarChart3,
  Brain,
  CheckCircle2,
  Code2,
  ImageIcon,
  Layers3,
  Lightbulb,
  Link as LinkIcon,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from 'lucide-react';
import { projectData } from './data/projectData';

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function PlaceholderGalleryCard({ title, caption, placeholder }: { title: string; caption: string; placeholder: string }) {
  return (
    <div className="surface gallery-card">
      <div className="gallery-placeholder">
        <div className="gallery-placeholder-inner">
          <ImageIcon size={28} />
          <p>{placeholder}</p>
        </div>
      </div>
      <div className="gallery-body">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-container">
        <section className="hero surface hero-surface">
          <div className="hero-copy">
            <div className="template-pill">
              <Sparkles size={14} />
              MSIS 522 — Team Project Showcase
            </div>
            <h1>{projectData.title}</h1>
            <p className="owner-line">{projectData.ownerLine}</p>
            <p className="hero-subtitle">{projectData.subtitle}</p>
            <p className="hero-summary">{projectData.executiveSummary}</p>

            <div className="badge-section">
              <p className="badge-label">Tools Used</p>
              <div className="badge-row">
                {projectData.badges.map((badge) => (
                  <span key={badge.label} className="chip badge-chip" data-tooltip={badge.tooltip}>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            <p className="badge-label" style={{ marginTop: '1.75rem' }}>Resources</p>
            <div className="link-row" style={{ marginTop: '0' }}>
              {projectData.links.map((link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  className={link.primary ? 'primary-link' : 'secondary-link'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="surface instructions-surface">
          <p className="badge-label" style={{ marginBottom: '1rem' }}>Key Metrics</p>
          <div className="metrics-grid">
            {projectData.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-note">{metric.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box emerald-box">
                <Target size={18} />
              </div>
              <div>
                <p className="eyebrow">Problem</p>
                <h3>What problem are you trying to solve?</h3>
              </div>
            </div>
            <p className="body-copy">{projectData.problemStatement}</p>
            <div className="meta-grid">
              <div className="mini-panel">
                <p className="mini-label">Audience</p>
                <p>{projectData.audience}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Impact Goal</p>
                <p>{projectData.impactGoal}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Status</p>
                <p>{projectData.status}</p>
              </div>
            </div>
          </div>

          <div className="dark-card padded-card">
            <div className="card-heading">
              <div className="icon-box dark-icon-box">
                <Lightbulb size={18} />
              </div>
              <div>
                <p className="dark-eyebrow">Solution</p>
                <h3>What are you building?</h3>
              </div>
            </div>
            <p className="dark-copy">{projectData.solutionSummary}</p>
            <div className="method-row">
              {projectData.methods.map((method) => (
                <span key={method} className="dark-chip">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Team"
            title="Meet the team"
            description="Who contributed what to bring Nudge to life."
          />
          <div className="card-grid two-up">
            {projectData.members.map((member) => (
              <div key={`${member.name}-${member.role}`} className="surface padded-card team-card">
                <div className="team-avatar">{member.name.replace(/[[\]]/g, '').split(' ').filter(Boolean).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'TM'}</div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="body-copy compact">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Demo & Screenshots"
            title="See Nudge in action"
            description="Three core scenarios showing how Nudge adapts your schedule in real time through conversation."
          />
          <div className="surface" style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '2rem' }}>
            <div
              className="demo-video-container"
              style={{ position: 'relative', background: '#0a0f1a', cursor: 'pointer' }}
              onClick={(e) => {
                const video = e.currentTarget.querySelector('video');
                const overlay = e.currentTarget.querySelector('.play-overlay') as HTMLElement;
                if (video && overlay) {
                  video.style.filter = 'none';
                  video.play();
                  overlay.style.display = 'none';
                  video.controls = true;
                }
              }}
            >
              <video
                poster="/project-assets/grocery-chat.png"
                style={{ width: '100%', display: 'block', background: '#0a0f1a', filter: 'brightness(0.4)' }}
              >
                <source src="/project-assets/nudge-demo.mp4" type="video/mp4" />
              </video>
              <div className="play-overlay" style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '0.75rem',
              }}>
                <div style={{
                  width: '80px', height: '80px',
                  borderRadius: '50%', background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(255,255,255,0.3)',
                }}>
                  <div style={{
                    width: 0, height: 0,
                    borderTop: '18px solid transparent',
                    borderBottom: '18px solid transparent',
                    borderLeft: '30px solid white',
                    marginLeft: '4px',
                  }} />
                </div>
                <span style={{ color: 'white', fontSize: '1rem', fontWeight: 500, opacity: 0.8 }}>Watch Demo</span>
              </div>
            </div>
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.1rem' }}>Demo Walkthrough</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.65 }}>Watch Nudge handle real-time schedule changes — the scenarios shown in the screenshots below are walked through step by step.</p>
            </div>
          </div>

          <div className="card-grid two-up">
            {projectData.gallery.map((item) =>
              item.assetPath ? (
                <div key={item.title} className="surface gallery-card">
                  <div className="gallery-image-wrap">
                    <img src={item.assetPath} alt={item.title} className="gallery-image" />
                  </div>
                  <div className="gallery-body">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </div>
              ) : (
                <PlaceholderGalleryCard
                  key={item.title}
                  title={item.title}
                  caption={item.caption}
                  placeholder={item.placeholder ?? 'Add a visual asset here'}
                />
              ),
            )}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Wrench size={18} />
              </div>
              <div>
                <p className="eyebrow">Stack</p>
                <h3>What Nudge is built with</h3>
              </div>
            </div>
            <div className="stack-list">
              {projectData.stack.map((group) => (
                <div key={group.category} className="stack-card">
                  <div className="stack-title-row">
                    <Layers3 size={16} />
                    <h4>{group.category}</h4>
                  </div>
                  <div className="badge-row compact-row">
                    {group.tools.map((tool) => (
                      <span key={tool} className="chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="body-copy compact">{group.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box violet-box">
                <Brain size={18} />
              </div>
              <div>
                <p className="eyebrow">Methods</p>
                <h3>How we built it</h3>
              </div>
            </div>
            <div className="method-grid">
              {projectData.methods.map((method) => (
                <div key={method} className="method-card">
                  <div className="method-icon">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <p className="method-title">{method}</p>
                    <p className="method-note">Explain how this method improved speed, quality, or reliability.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Product"
            title="Core features"
            description="The three ways Nudge adapts your schedule through conversation."
          />
          <div className="card-grid two-up">
            {projectData.features.map((feature) => (
              <div key={feature.title} className="surface padded-card">
                <div className="icon-box cyan-box">
                  <Rocket size={18} />
                </div>
                <h3>{feature.title}</h3>
                <p className="body-copy compact">{feature.description}</p>
                <div className="check-list">
                  {feature.highlights.map((highlight) => (
                    <div key={highlight} className="check-item">
                      <CheckCircle2 size={16} />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Network size={18} />
              </div>
              <div>
                <p className="eyebrow">Architecture</p>
                <h3>How Nudge processes a request</h3>
              </div>
            </div>
            <div className="architecture-list">
              {projectData.architecture.map((step, index) => (
                <div key={step.title} className="architecture-card">
                  <div className="step-badge">{index + 1}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box cyan-box">
                <Code2 size={18} />
              </div>
              <div>
                <p className="eyebrow">Code Highlights</p>
                <h3>Under the hood</h3>
              </div>
            </div>
            <div className="code-list">
              {projectData.codeHighlights.map((snippet) => (
                <div key={snippet.title} className="code-card">
                  <div className="code-card-top">
                    <div>
                      <h4>{snippet.title}</h4>
                      <p>{snippet.note}</p>
                    </div>
                    <span className="language-pill">{snippet.language}</span>
                  </div>
                  <pre>
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box cyan-box">
                <BarChart3 size={18} />
              </div>
              <div>
                <p className="eyebrow">Roadmap</p>
                <h3>Where Nudge is headed</h3>
              </div>
            </div>
            <div className="roadmap-list">
              {projectData.roadmap.map((phase) => (
                <div key={phase.phase} className="roadmap-card">
                  <p className="roadmap-phase">{phase.phase}</p>
                  <div className="roadmap-items">
                    {phase.items.map((item) => (
                      <div key={item} className="bullet-item">
                        <span />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box danger-box">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="eyebrow">Risks</p>
                <h3>What we&apos;re watching</h3>
              </div>
            </div>
            <div className="risk-list">
              {projectData.risks.map((risk) => (
                <div key={risk.title} className="risk-card">
                  <h4>{risk.title}</h4>
                  <p>{risk.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-card">
          <div>
            <p className="dark-eyebrow">The Big Picture</p>
            <h2>Why Nudge matters</h2>
            <p>
              Scheduling tools were not built for brains that work differently. Nudge is a step toward
              adaptive, conversational productivity, built around how neurodivergent people actually experience their day.
            </p>
          </div>

          <div className="card-grid two-up">
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Users size={18} />
              </div>
              <h3>Who benefits?</h3>
              <p>Neurodivergent individuals, especially those with ADHD, autism, and executive function differences, who struggle with rigid scheduling tools.</p>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Target size={18} />
              </div>
              <h3>What changes?</h3>
              <p>Instead of abandoning your plan when things go sideways, you tell Nudge what happened and your schedule adapts in seconds.</p>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Layers3 size={18} />
              </div>
              <h3>Why this approach?</h3>
              <p>Large language models can understand natural language intent and map it to structured schedule actions, something rule-based systems cannot do.</p>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Rocket size={18} />
              </div>
              <h3>What&apos;s next?</h3>
              <p>User testing with neurodivergent communities, calendar integration, and learning from individual patterns to proactively suggest changes.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
