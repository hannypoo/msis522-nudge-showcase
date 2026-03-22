import { projectData } from './projectData';

// This file exists only to make import back into foster-ai-hub easy.
// I can copy the objects below into the main app with minimal cleanup.

export interface TemplateMetric {
  label: string;
  value: string;
  note: string;
}

export interface TemplateMember {
  name: string;
  role: string;
  focus: string;
}

export interface TemplateGalleryItem {
  title: string;
  caption: string;
  placeholder: string;
  imagePath?: string;
}

export interface TemplateStackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface TemplateFeature {
  title: string;
  description: string;
  highlights: string[];
}

export interface TemplateArchitectureStep {
  title: string;
  description: string;
}

export interface TemplateRoadmapPhase {
  phase: string;
  items: string[];
}

export interface TemplateRisk {
  title: string;
  mitigation: string;
}

export interface TeamProjectTemplateData {
  title: string;
  subtitle: string;
  executiveSummary: string;
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  metrics: TemplateMetric[];
  members: TemplateMember[];
  methods: string[];
  toolBadges: string[];
  gallery: TemplateGalleryItem[];
  stack: TemplateStackGroup[];
  features: TemplateFeature[];
  architecture: TemplateArchitectureStep[];
  roadmap: TemplateRoadmapPhase[];
  risks: TemplateRisk[];
  fillInstructions: string[];
}

export interface TeamProjectMember {
  name: string;
  section?: 'A' | 'B';
  photoPath?: string;
}

export interface TeamProject {
  slug: string;
  title: string;
  tagline: string;
  keywords: string[];
  members: TeamProjectMember[];
  thumbnailPath?: string;
  detailPath?: string;
  projectUrl?: string | null;
  demoUrl?: string | null;
  reportUrl?: string | null;
  isTemplate?: boolean;
  label?: string;
}

const firstLinkMatching = (candidates: string[]) =>
  projectData.links.find((link) => candidates.some((candidate) => link.label.toLowerCase().includes(candidate)))?.url ?? null;

const firstGalleryAsset = projectData.gallery.find((item) => item.assetPath)?.assetPath;

export const fosterAiHubPageData: TeamProjectTemplateData = {
  title: projectData.title,
  subtitle: projectData.subtitle,
  executiveSummary: projectData.executiveSummary,
  problemStatement: projectData.problemStatement,
  solutionSummary: projectData.solutionSummary,
  audience: projectData.audience,
  impactGoal: projectData.impactGoal,
  status: projectData.status,
  metrics: projectData.metrics,
  members: projectData.members,
  methods: projectData.methods,
  toolBadges: projectData.badges.map((b) => b.label),
  gallery: projectData.gallery.map((item) => ({
    title: item.title,
    caption: item.caption,
    placeholder: item.placeholder ?? 'Add a screenshot, diagram, or proof asset here',
    imagePath: item.assetPath,
  })),
  stack: projectData.stack,
  features: projectData.features,
  architecture: projectData.architecture,
  roadmap: projectData.roadmap,
  risks: projectData.risks,
  fillInstructions: projectData.instructions,
};

export const fosterAiHubCardData: TeamProject = {
  slug: projectData.slug,
  title: projectData.title,
  tagline: projectData.subtitle,
  keywords: projectData.keywords,
  members: projectData.members.map((member) => ({ name: member.name })),
  thumbnailPath: firstGalleryAsset,
  detailPath: `/team-project-example/${projectData.slug}`,
  projectUrl: firstLinkMatching(['live', 'demo']),
  demoUrl: firstLinkMatching(['demo']),
  reportUrl: firstLinkMatching(['report', 'slides']),
  label: 'Team Project',
};
