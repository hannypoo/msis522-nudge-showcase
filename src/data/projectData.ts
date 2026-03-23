export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface Badge {
  label: string;
  tooltip: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: Badge[];
  methods: string[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

export const projectData: ProjectPageData = {
  slug: 'nudge',

  title: 'Nudge',
  subtitle: 'An AI-powered scheduling assistant that adapts to how your day actually unfolds.',
  ownerLine: 'Hannah, Joanne, Osman, Casey — MSIS 522, Winter 2026',
  executiveSummary:
    'Nudge is a conversational AI assistant that helps users manage their daily schedule through natural language. Instead of rigid calendar tools that assume your day goes as planned, Nudge lets you say things like "I need to stop by the store" or "my energy just tanked" and intelligently restructures your day — inserting, moving, or simplifying tasks in real time. Built with React, Supabase, and Claude AI, Nudge demonstrates how large language models can power adaptive, human-centered productivity tools. Nudge is the AI chatbot feature of Offload, a larger adaptive scheduling platform currently in development for neurodivergent users. The full app is not yet publicly deployed — the GitHub repository provided contains the demo code showcasing the AI integration and conversational rescheduling capabilities.',

  instructions: [],

  links: [
    { label: 'Demo Recording', url: '/project-assets/nudge-demo.mp4', primary: true },
    { label: 'Slides PDF', url: '/project-assets/nudge-slides.pdf' },
    { label: 'App Code (GitHub)', url: 'https://github.com/hannypoo/nudge-demo' },
  ],

  badges: [
    { label: 'React', tooltip: 'Component-based UI with 29 custom components and React Query for state management' },
    { label: 'TypeScript', tooltip: 'End-to-end type safety across frontend, hooks, and Supabase edge functions' },
    { label: 'Tailwind CSS', tooltip: 'Utility-first styling with a dark-mode, mobile-first design system' },
    { label: 'Supabase', tooltip: 'PostgreSQL database, auth, row-level security, and serverless edge functions' },
    { label: 'Claude API', tooltip: 'Powers conversational rescheduling — understands intent and returns structured schedule actions' },
    { label: 'Web Speech API', tooltip: 'Voice input via browser speech recognition and text-to-speech for hands-free interaction' },
    { label: 'Vite', tooltip: 'Fast dev server with hot module replacement and optimized production builds' },
    { label: 'PWA', tooltip: 'Progressive Web App with offline support and installable on mobile devices' },
  ],

  keywords: ['scheduling', 'neurodivergent', 'ADHD', 'conversational AI', 'productivity', 'adaptive'],

  methods: ['Prompt engineering', 'Conversational UI', 'Energy-aware adaptation', 'Context-driven rescheduling'],

  metrics: [
    { label: 'Demo Scenarios', value: '3', note: 'Grocery, energy crash, time crunch' },
    { label: 'AI Response Time', value: '<2 seconds', note: 'Claude API via Supabase Edge Functions' },
    { label: 'Schedule Actions', value: '5 types', note: 'Insert, move, delete, swap, compress' },
  ],

  problemStatement:
    'Traditional scheduling tools assume your day will go exactly as planned. For neurodivergent individuals — including those with ADHD, autism, and other executive function differences — it rarely does. An unexpected errand, an energy crash, or a sudden time crunch can derail a rigid calendar, leaving users frustrated and disengaged. Existing tools offer no way to say "everything just changed" and get an intelligent response.',

  solutionSummary:
    'Nudge is a chat-based scheduling assistant powered by Claude AI. Users describe what changed in plain language — "I need to stop by the grocery store," "my energy just tanked," or "I have class tonight and I\'m running late" — and Nudge restructures their schedule intelligently. It inserts new blocks, swaps hard tasks for easier ones, compresses timelines, and builds prep sequences, all through a conversational interface with voice support.',

  audience: 'Neurodivergent individuals, including those with ADHD, autism, and other executive function differences',
  impactGoal: 'Reduce schedule abandonment by making daily plans adaptive instead of rigid',
  status: 'Prototype',

  members: [
    { name: 'Hannah', role: 'Lead Developer', focus: 'Architecture, AI integration, and demo implementation' },
    { name: 'Joanne', role: 'Editor & Reviewer', focus: 'Documentation review, final QA, submission' },
    { name: 'Osman', role: 'Product Strategy', focus: 'Ideation, presentation, and future AI capabilities (pattern recognition)' },
    { name: 'Casey', role: 'Team Member', focus: 'Project ideation and planning' },
  ],

  gallery: [
{
      title: 'Conversational Rescheduling',
      caption: 'Nudge responds to "I need to go grocery shopping" by asking clarifying questions, then inserting drive time, shopping, and return blocks while shifting the rest of the day.',
      assetPath: '/project-assets/grocery-chat.png',
    },
    {
      title: 'Energy Crash Adaptation',
      caption: 'When a user says their energy tanked, Nudge swaps hard tasks for easier alternatives, shortens blocks, and inserts recovery breaks — compacting the entire schedule.',
      assetPath: '/project-assets/energy-crash.png',
    },
    {
      title: 'Time Crunch Mode',
      caption: 'When you are running late for a commitment, Nudge clears non-essential plans, builds a streamlined prep sequence, and locks in your departure time.',
      assetPath: '/project-assets/time-crunch.png',
    },
  ],

  stack: [
    {
      category: 'Frontend and Experience',
      tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      note: 'Mobile-first PWA with voice input via the Web Speech API. Animations and transitions give the schedule a responsive, living feel.',
    },
    {
      category: 'AI, Logic, and Orchestration',
      tools: ['Claude API (Anthropic)', 'Supabase Edge Functions (Deno)', 'Custom prompt engineering'],
      note: 'All AI calls route through Supabase Edge Functions so the API key never reaches the client. Claude receives the full schedule context and returns structured JSON with actions and a conversational response.',
    },
    {
      category: 'Data, Backend, and Integrations',
      tools: ['Supabase (PostgreSQL)', 'Supabase Auth', 'Supabase Realtime', 'React Query'],
      note: 'Schedule blocks, chat history, user profiles, and task data all live in Supabase. React Query handles client-side caching and optimistic updates.',
    },
  ],

  features: [
    {
      title: 'Conversational Rescheduling',
      description: 'Tell Nudge what changed in plain English and it restructures your schedule. Supports text and voice input through the Web Speech API.',
      highlights: [
        'Natural language understanding via Claude AI',
        'Inserts, moves, and removes blocks automatically',
        'Asks clarifying questions when needed (e.g., "quick trip or big haul?")',
      ],
    },
    {
      title: 'Energy-Aware Adaptation',
      description: 'When your energy crashes, Nudge doesn\'t just tell you to push through. It swaps hard tasks for easier ones, shortens block durations, and adds recovery breaks.',
      highlights: [
        'Detects energy-related language ("exhausted," "wiped," "burned out")',
        'Swaps hard tasks for lighter alternatives',
        'Compresses remaining schedule to stay realistic',
      ],
    },
    {
      title: 'Smart Time-Crunch Mode',
      description: 'Running late with somewhere to be? Nudge clears non-essential plans, builds a streamlined prep sequence, and locks in your departure time.',
      highlights: [
        'Calculates backward from your commitment time',
        'Builds prep blocks (shower, get ready, snack, review)',
        'Preserves fixed commitments while clearing flexible ones',
      ],
    },
  ],

  architecture: [
    {
      title: 'Input Layer',
      description: 'User sends a message via text or voice through the chat interface. The Web Speech API converts speech to text. The message is sent along with the full current schedule as context.',
    },
    {
      title: 'Reasoning Layer',
      description: 'A Supabase Edge Function passes the message and schedule context to Claude API. Claude identifies the user\'s intent (new errand, energy change, time pressure) and determines which blocks need to change.',
    },
    {
      title: 'Decision Layer',
      description: 'Claude returns structured JSON containing a conversational response, a list of schedule actions (insert, move, delete, swap, compress), and suggestion chips for follow-up. Demo scenarios use pre-validated responses for reliability; unexpected inputs fall through to live Claude.',
    },
    {
      title: 'Output Layer',
      description: 'The client executes the actions against Supabase (real database mutations), the schedule re-renders with animated transitions, and Nudge\'s reply appears in the chat with optional text-to-speech readback.',
    },
  ],

  codeHighlights: [
    {
      title: 'Chat → Action Pipeline',
      language: 'ts',
      note: 'When a user sends a message, the system checks for demo scenario matches first, then falls through to live Claude AI for unexpected inputs.',
      code: `// Simplified chat flow
const response = matchDemoScenario(userMessage);
if (response) {
  // Pre-validated scenario — execute known actions
  await executeDemoActions(response.actionType, scheduleBlocks);
  return response.message;
} else {
  // Live AI — send full context to Claude
  const aiResponse = await supabase.functions.invoke('chat', {
    body: { message: userMessage, schedule: todayBlocks }
  });
  await executeActions(aiResponse.actions);
  return aiResponse.message;
}`,
    },
    {
      title: 'Energy Crash — Schedule Compaction',
      language: 'ts',
      note: 'When energy drops, hard tasks are swapped for easier alternatives and block durations are compressed.',
      code: `// Energy crash adaptation (simplified)
for (const block of mutableBlocks) {
  if (block.difficulty === 'hard') {
    block.title = easierAlternative(block);
    block.difficulty = 'easy';
  }
  if (!block.is_fixed && !block.is_protected) {
    block.duration = Math.round(block.duration * 0.6);
  }
}
// Insert recovery break
insertBlock({ title: 'Energy Break', duration: 15 });`,
    },
  ],

  roadmap: [
    {
      phase: 'Now',
      items: [
        'Three core scenarios working: grocery insertion, energy crash adaptation, time-crunch prep',
        'Voice and text input with conversational responses',
        'Full-day schedule with real database mutations',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Broader natural language understanding for more scenario types',
        'Calendar integration (Google Calendar, university systems)',
        'User testing with neurodivergent communities to validate usefulness',
      ],
    },
    {
      phase: 'Later',
      items: [
        'Learning from user patterns to proactively suggest schedule changes',
        'Push notifications and mobile-native experience',
        'Broader accessibility — supporting the full spectrum of neurodivergent needs',
      ],
    },
  ],

  risks: [
    {
      title: 'AI Reliability',
      mitigation: 'Demo scenarios use pre-validated responses for predictable behavior. Live AI inputs include full schedule context and structured output formatting to minimize hallucination. Edge cases fall back gracefully to a helpful "I\'m not sure how to help with that" response.',
    },
    {
      title: 'User Privacy',
      mitigation: 'Schedule data is personal and sensitive. All data is stored per-user in Supabase with row-level security. AI API keys are server-side only (edge functions), never exposed to the client.',
    },
    {
      title: 'Trust and Adoption',
      mitigation: 'Users may hesitate to let AI rearrange their day. Nudge always explains what it\'s changing and why. The conversational interface makes actions feel collaborative, not automated — users see what\'s happening and can course-correct.',
    },
  ],
};
