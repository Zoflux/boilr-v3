import { NavigationHeader } from "@/components/NavigationHeader";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ArrowRight, Copy, Check, Sparkles, MessageSquare, Lightbulb, Target, Users, Search, Mail, FileText, TrendingUp, Zap, BookOpen, AlertTriangle, Clock, Plus, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Interactive Prompt Builder Steps
const promptBuilderSteps = [
    {
        id: 1,
        title: "Role Assignment",
        description: "Tell ChatGPT who to be – this sets the expertise level and perspective",
        shortLabel: "Role",
        promptPart: `Act as a senior tech recruiter with 10 years of experience sourcing passive candidates for high-growth startups.`,
        color: "#10b981",
        tip: "The more specific the role, the better the output. Include years of experience and specialization."
    },
    {
        id: 2,
        title: "Context Block",
        description: "Provide all the information ChatGPT needs to give a relevant answer",
        shortLabel: "Context",
        promptPart: `
<CONTEXT>
I'm sourcing candidates for a Senior Frontend Engineer role:
- Company: FinTech startup (Series B, 80 employees)
- Location: Berlin or Remote (EU timezone)
- Tech stack: React, TypeScript, Node.js
- Team: 5 engineers, growing to 10
- Salary range: €75,000 - €95,000
</CONTEXT>`,
        color: "#3b82f6",
        tip: "Use <CONTEXT> tags to clearly separate information from instructions. Include everything relevant: company, role, constraints."
    },
    {
        id: 3,
        title: "Task Definition",
        description: "Be explicit about what you want – vague requests get vague answers",
        shortLabel: "Task",
        promptPart: `
<TASK>
Write a personalized LinkedIn outreach message for a candidate who:
- Currently works at Zalando as a Frontend Engineer
- Has 4 years of experience with React
- Recently posted about building a design system
</TASK>`,
        color: "#8b5cf6",
        tip: "Break complex tasks into numbered steps. One clear task per prompt works better than multiple vague ones."
    },
    {
        id: 4,
        title: "Format Requirements",
        description: "Specify exactly how you want the output structured",
        shortLabel: "Format",
        promptPart: `
<FORMAT>
- Maximum 100 words
- Conversational tone, not salesy
- Reference their specific work (design system post)
- End with a low-commitment CTA
- No generic phrases like "exciting opportunity"
</FORMAT>`,
        color: "#f59e0b",
        tip: "Word limits, tone, structure (bullets vs paragraphs), what to include AND exclude."
    },
    {
        id: 5,
        title: "Example (Optional)",
        description: "Show what good output looks like – AI learns from examples",
        shortLabel: "Example",
        promptPart: `
<EXAMPLE_STYLE>
Here's the tone I want:
"Hi [Name], your post about accessible components caught my eye – especially the bit about keyboard navigation patterns. We're building something similar at [Company]..."
</EXAMPLE_STYLE>`,
        color: "#ec4899",
        tip: "One good example is worth 100 words of explanation. Show, don't just tell."
    }
];

// Final prompt assembled
const getAssembledPrompt = (activeSteps: number[]) => {
    return promptBuilderSteps
        .filter(step => activeSteps.includes(step.id))
        .map(step => step.promptPart)
        .join('\n');
};

// Prompt data for the examples section
const prompts = [
    {
        id: 1,
        category: "Sourcing",
        icon: Search,
        title: "Boolean Search String Generator",
        description: "Generate advanced Boolean search strings for LinkedIn or job boards",
        prompt: `Act as an experienced technical recruiter who specializes in sourcing passive candidates.

<CONTEXT>
I need to find candidates for this role:
- Job title: [JOB TITLE]
- Location: [CITY/REGION]
- Years of experience: [X-Y years]
- Required skills: [SKILL 1, SKILL 2, SKILL 3]
- Industry background: [INDUSTRY]
- Companies to exclude: [COMPANIES]
</CONTEXT>

<TASK>
Create Boolean search strings in two formats:
1. LinkedIn Recruiter compatible
2. Google X-ray search for LinkedIn profiles
</TASK>

<FORMAT>
- Provide the exact string I can copy-paste
- Include variations with synonyms for job titles
- Add tips for refining results
</FORMAT>`,
        exampleResponse: `Here's your Boolean search string for LinkedIn Recruiter:

**LinkedIn Recruiter:**
\`\`\`
("Senior Software Engineer" OR "Staff Engineer" OR "Lead Developer") AND (Python OR Java OR Go) AND ("Machine Learning" OR "ML" OR "AI") AND (Berlin OR Munich OR Hamburg) NOT (Amazon OR Google)
\`\`\`

**Google X-ray Search:**
\`\`\`
site:linkedin.com/in ("Senior Software Engineer" OR "Staff Engineer") AND (Python OR Java) AND (Berlin OR Munich) -Amazon -Google
\`\`\`

**Pro Tips:**
• Use quotation marks for exact phrases
• Use parentheses to group related terms
• Add industry-specific certifications for better targeting`,
        limitation: "ChatGPT can't verify which companies are actually hiring or have layoffs – you'll need to cross-reference this manually."
    },
    {
        id: 2,
        category: "Outreach",
        icon: Mail,
        title: "Personalized InMail Generator",
        description: "Craft compelling personalized messages that get responses",
        prompt: `Act as a senior recruitment consultant who achieves 40%+ response rates on cold outreach.

<CANDIDATE_PROFILE>
- Name: [NAME]
- Current role: [CURRENT JOB TITLE]
- Current company: [COMPANY]
- Notable achievement: [ACHIEVEMENT FROM THEIR PROFILE]
</CANDIDATE_PROFILE>

<OPPORTUNITY>
- Role: [JOB TITLE]
- Company: [HIRING COMPANY]
- Key benefits: [BENEFITS]
</OPPORTUNITY>

<REQUIREMENTS>
- Tone: Conversational, not salesy
- Length: Maximum 150 words
- Include: Specific reference to their work
- CTA: Low-commitment (15-min call)
- Avoid: Generic phrases like "exciting opportunity"
</REQUIREMENTS>`,
        exampleResponse: `Hi Sarah,

I noticed your work leading the data infrastructure migration at Spotify – moving 2PB of data to a new architecture while maintaining 99.9% uptime is seriously impressive work.

I'm reaching out because Stripe is building a new Data Platform team, and your background in large-scale data systems would be a perfect fit. The role offers:

• Ownership of critical data infrastructure serving 500K+ businesses
• A team that values technical excellence (no firefighting culture)
• Competitive equity + Berlin office flexibility

Would you be open to a 15-minute call this week to explore if this aligns with your career goals? No pressure either way.

Best,
[Your name]`,
        limitation: "You'll still need to manually research each candidate's profile to find meaningful achievements."
    },
    {
        id: 3,
        category: "Job Descriptions",
        icon: FileText,
        title: "Inclusive Job Description Writer",
        description: "Create bias-free job descriptions that attract diverse talent",
        prompt: `Act as a DEI specialist and experienced recruiter focused on inclusive hiring.

<ORIGINAL_JOB_DESCRIPTION>
[PASTE YOUR CURRENT JOB DESCRIPTION HERE]
</ORIGINAL_JOB_DESCRIPTION>

<TASK>
Rewrite this to be more inclusive and attract diverse candidates.
</TASK>

<CHANGES_TO_MAKE>
1. Replace gendered language with neutral alternatives
2. Convert "X years experience required" to outcome-based requirements
3. Separate "must-haves" from "nice-to-haves" (max 5 must-haves)
4. Remove unnecessary jargon
5. Add explicit inclusion statement
</CHANGES_TO_MAKE>

<FORMAT>
- Keep under 500 words
- Use bullet points for requirements
- End with encouraging application message
</FORMAT>`,
        exampleResponse: `**Senior Product Manager - Fintech**

**About the Role**
Join our product team to shape the future of digital payments. You'll lead strategy for our merchant platform, working with a collaborative team of engineers, designers, and data scientists.

**What You'll Do**
• Define product roadmap based on customer research and market insights
• Partner with engineering to deliver features that serve 50K+ merchants
• Use data to measure impact and inform decisions

**What Success Looks Like**
• You've shipped products that solved real customer problems
• You can translate complex requirements into clear user stories
• You thrive in ambiguous situations

**Nice to Have**
• Background in fintech or payments
• Experience with B2B products

*We encourage candidates from all backgrounds to apply, even if you don't meet every qualification.*`,
        limitation: "AI can't know your actual team culture or specific benefits – always review and customize with real details."
    },
    {
        id: 4,
        category: "Interview",
        icon: MessageSquare,
        title: "Behavioral Interview Questions",
        description: "Generate role-specific behavioral interview questions",
        prompt: `Act as a senior interviewer trained in structured behavioral interviewing.

<ROLE_CONTEXT>
- Position: [JOB TITLE]
- Level: [JUNIOR / MID / SENIOR / LEAD]
- Key challenges: [MAIN CHALLENGES]
</ROLE_CONTEXT>

<COMPETENCIES_TO_ASSESS>
1. [COMPETENCY 1 - e.g., Leadership]
2. [COMPETENCY 2 - e.g., Problem-solving]
3. [COMPETENCY 3 - e.g., Collaboration]
</COMPETENCIES_TO_ASSESS>

<OUTPUT_FORMAT>
For each competency, provide:
- The behavioral question (STAR format)
- What a STRONG answer includes (3 indicators)
- RED FLAGS to watch for (2 warnings)
- Follow-up probe question
</OUTPUT_FORMAT>`,
        exampleResponse: `**1. Leadership Assessment**
*"Tell me about a time you had to lead a team through a significant change or challenge."*

✅ **Strong Answer Indicators:**
• Describes clear actions they personally took
• Shows empathy for team members affected
• Quantifies the outcome

🚩 **Red Flags:**
• Takes all credit without acknowledging team
• Blames others for obstacles

**Follow-up:** "What would you do differently if you faced this situation again?"`,
        limitation: "These are templates – the real skill is in follow-up probing based on the candidate's specific answers."
    },
    {
        id: 5,
        category: "Market Research",
        icon: TrendingUp,
        title: "Salary Benchmark Research",
        description: "Get market insights for compensation discussions",
        prompt: `Act as a compensation analyst with market data knowledge.

<ROLE_DETAILS>
- Job title: [JOB TITLE]
- Location: [CITY/COUNTRY]
- Company size: [STARTUP / MID-SIZE / ENTERPRISE]
- Industry: [INDUSTRY]
- Seniority: [LEVEL]
</ROLE_DETAILS>

<OUTPUT_REQUIRED>
1. Base salary range (P25, P50, P75)
2. Typical bonus structure
3. Equity/stock practices
4. Key factors that influence pay
5. Negotiation leverage points
</OUTPUT_REQUIRED>

Note: Flag if data might be outdated.`,
        exampleResponse: `**Salary Benchmark: Senior Product Manager - Berlin**
**Tech Industry | Mid-size Company (100-500 employees)**

**💰 Base Salary Range**
• P25: €75,000 | P50: €90,000 | P75: €105,000

**🎯 Bonus Structure**
• Typical: 10-15% of base, performance-based

**📈 Equity**
• Stock options: 0.05-0.2% | 4-year vesting

**⚠️ Note:** Based on training data – verify with Glassdoor/Levels.fyi for current rates.`,
        limitation: "ChatGPT's salary data has a training cutoff – always verify with live sources like Glassdoor or Levels.fyi."
    },
    {
        id: 6,
        category: "Candidate Assessment",
        icon: Users,
        title: "Resume Analysis & Questions",
        description: "Analyze resumes and generate targeted interview questions",
        prompt: `Act as an experienced technical recruiter reviewing a candidate.

<CANDIDATE_RESUME>
[PASTE RESUME OR KEY DETAILS]
</CANDIDATE_RESUME>

<TARGET_ROLE>
- Position: [JOB TITLE]
- Key requirements: [LIST 3-5]
</TARGET_ROLE>

<ANALYSIS_NEEDED>
1. Key strengths (bullet points)
2. Concerns or gaps to explore
3. 5 tailored interview questions
4. Match score to requirements
</ANALYSIS_NEEDED>

Be objective, not overly positive. Flag inconsistencies.`,
        exampleResponse: `**Candidate Analysis: Maria Schmidt**
*Applying for: Senior Frontend Engineer*

**💪 Key Strengths**
• Strong React/TypeScript (3+ years at scale)
• Led jQuery → React migration
• Built component library

**⚠️ Areas to Explore**
• No testing experience mentioned
• Gap in 2021 (6 months)

**❓ Targeted Questions**
1. "Walk me through the React migration architecture decisions..."
2. "How did you ensure component library adoption?"`,
        limitation: "AI can only analyze what's written – can't verify claims or assess cultural fit."
    },
    {
        id: 7,
        category: "Sourcing",
        icon: Target,
        title: "Talent Mapping & Competitor Research",
        description: "Map talent landscape and identify target companies",
        prompt: `Act as a talent intelligence specialist.

<CONTEXT>
- Client company: [YOUR CLIENT]
- Industry: [INDUSTRY]
- Location: [REGION]
- Role: [JOB TITLE]
</CONTEXT>

<DELIVERABLES>
1. Top 10 companies to source from (with reasoning)
2. Alternative job titles to search
3. Adjacent industries with transferable skills
4. Communities/groups to engage
5. Key events or conferences
</DELIVERABLES>

Use tables where appropriate.`,
        exampleResponse: `**Talent Map: Senior Data Engineers - Berlin**

**🏢 Top Target Companies**
| Company | Why Target | Est. Pool |
|---------|-----------|-----------|
| N26 | Scaling pains | ~40 |
| Zalando | Large data team | ~100 |
| Spotify | Some layoff impact | ~25 |

**Alternative Titles:** Data Platform Engineer, Analytics Engineer, ML Engineer`,
        limitation: "Based on general knowledge – actual talent movement requires real-time research."
    },
    {
        id: 8,
        category: "Outreach",
        icon: Zap,
        title: "Follow-up Sequence Generator",
        description: "Create a multi-touch outreach sequence",
        prompt: `Act as an outbound recruitment specialist.

<CAMPAIGN_DETAILS>
- Role: [JOB TITLE]
- Company: [COMPANY]
- Key selling points: [BENEFITS]
- Target profile: [DESCRIPTION]
</CAMPAIGN_DETAILS>

<SEQUENCE_REQUIREMENTS>
- 4 touches over 2 weeks
- Vary approach each message
- Under 100 words per message
- Include subject lines
- Final message: graceful close
</SEQUENCE_REQUIREMENTS>

No high-pressure tactics. Provide value.`,
        exampleResponse: `**Touch 1 (Day 1):** Initial - reference specific work
**Touch 2 (Day 5):** Value add - share relevant article
**Touch 3 (Day 10):** Social proof - mention connections
**Touch 4 (Day 14):** Graceful close - leave door open

Each message under 100 words, personalized, low-pressure.`,
        limitation: "You'll need to send each message manually and track responses yourself."
    },
    {
        id: 9,
        category: "Strategy",
        icon: Lightbulb,
        title: "Hiring Process Design",
        description: "Design an efficient interview process",
        prompt: `Act as a recruitment operations consultant.

<COMPANY_CONTEXT>
- Stage: [STARTUP / SCALE-UP / ENTERPRISE]
- Team size: [NUMBER]
- Time-to-hire target: [DAYS]
- Key competencies: [LIST]
</COMPANY_CONTEXT>

<OUTPUT>
1. Stages with clear purpose
2. Who should interview at each stage
3. Time per stage
4. Sample scorecard criteria
5. Candidate experience tips
6. Bottleneck solutions
</OUTPUT>`,
        exampleResponse: `**Interview Process (21-day target)**

**Stage 1: Recruiter Screen (30 min)**
Purpose: Fit check, motivation
Timeline: Within 48h

**Stage 2: Hiring Manager (45 min)**
**Stage 3: Case Study (60 min)**
**Stage 4: Cross-functional (45 min)**
**Stage 5: Values Chat (30 min)**

**Tip:** Pre-schedule weekly interview slots to avoid bottlenecks.`,
        limitation: "Process design is just the start – implementation requires ongoing data collection."
    },
    {
        id: 10,
        category: "Communication",
        icon: BookOpen,
        title: "Rejection with Empathy",
        description: "Write thoughtful rejection messages",
        prompt: `Act as a recruitment professional who values relationships.

<CANDIDATE>
- Name: [NAME]
- Role: [JOB TITLE]
- Stage reached: [STAGE]
- Strengths: [2-3 POSITIVES]
- Reason for rejection: [REASON]
- Keep in touch? [YES/NO]
</CANDIDATE>

<REQUIREMENTS>
- Honest but kind
- Genuine (not template-y)
- Brief feedback if appropriate
- Leave door open if relevant
- Under 150 words
</REQUIREMENTS>`,
        exampleResponse: `Hi Sarah,

Thank you for investing time in our process – your case study preparation was impressive.

We've decided to move forward with another candidate whose B2B marketplace experience aligned more closely with our immediate needs.

**What stood out:**
• Your structured prioritization approach
• Strong stakeholder communication

I'd love to stay connected – we're expanding next quarter and your B2C experience could be valuable.

Wishing you the best,
[Your name]`,
        limitation: "A good rejection requires genuine knowledge of the interview – something only you have."
    }
];

// Categories
const categories = [
    { id: "all", name: "All Prompts", icon: Sparkles },
    { id: "Sourcing", name: "Sourcing", icon: Search },
    { id: "Outreach", name: "Outreach", icon: Mail },
    { id: "Job Descriptions", name: "Jobs", icon: FileText },
    { id: "Interview", name: "Interview", icon: MessageSquare },
    { id: "Market Research", name: "Research", icon: TrendingUp },
    { id: "Candidate Assessment", name: "Assessment", icon: Users },
    { id: "Strategy", name: "Strategy", icon: Lightbulb },
    { id: "Communication", name: "Communication", icon: BookOpen }
];

export default function PromptsForRecruiters() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedPrompt, setExpandedPrompt] = useState<number | null>(null);
    const [copiedId, setCopiedId] = useState<number | null>(null);

    // Interactive builder state
    const [activeSteps, setActiveSteps] = useState<number[]>([1]);
    const [currentHighlight, setCurrentHighlight] = useState(1);

    const filteredPrompts = activeCategory === "all"
        ? prompts
        : prompts.filter(p => p.category === activeCategory);

    const copyToClipboard = async (text: string, id: number) => {
        await navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const addStep = (stepId: number) => {
        if (!activeSteps.includes(stepId)) {
            setActiveSteps([...activeSteps, stepId].sort((a, b) => a - b));
            setCurrentHighlight(stepId);
        }
    };

    const removeStep = (stepId: number) => {
        if (stepId !== 1) { // Can't remove role assignment
            setActiveSteps(activeSteps.filter(id => id !== stepId));
        }
    };

    const copyBuiltPrompt = async () => {
        const prompt = getAssembledPrompt(activeSteps);
        await navigator.clipboard.writeText(prompt);
        setCopiedId(-1); // Special ID for builder
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <CursorSpotlight size={180} />
            <NavigationHeader mode="recruitment" onModeChange={() => { }} />

            <main>
                {/* Hero Section */}
                <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5fff9e]/10 border border-[#5fff9e]/20 text-[#5fff9e] text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            Free Prompting Guide
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                            ChatGPT Prompts for <span className="text-[#5fff9e]">Recruiters</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                            Learn to write effective prompts step-by-step. Build your prompt interactively, then copy our ready-made templates.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-lg bg-[#5fff9e]/20 flex items-center justify-center">
                                    <Zap className="h-4 w-4 text-[#5fff9e]" />
                                </div>
                                <span className="text-white/80">Interactive builder</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-lg bg-[#5fff9e]/20 flex items-center justify-center">
                                    <Target className="h-4 w-4 text-[#5fff9e]" />
                                </div>
                                <span className="text-white/80">10 ready templates</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-lg bg-[#5fff9e]/20 flex items-center justify-center">
                                    <Copy className="h-4 w-4 text-[#5fff9e]" />
                                </div>
                                <span className="text-white/80">One-click copy</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Interactive Prompt Builder Section */}
                <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                                Build Your Prompt Step-by-Step
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Click on each component to add it to your prompt. Watch how a professional prompt comes together.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Left side - Step buttons */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                                    Prompt Components
                                </h3>

                                {promptBuilderSteps.map((step) => {
                                    const isActive = activeSteps.includes(step.id);
                                    const isHighlighted = currentHighlight === step.id;

                                    return (
                                        <div
                                            key={step.id}
                                            className={`relative rounded-xl border-2 transition-all cursor-pointer ${isActive
                                                ? 'border-gray-900 bg-gray-50'
                                                : 'border-gray-200 bg-white hover:border-gray-300'
                                                }`}
                                            onClick={() => {
                                                if (step.id === 1) {
                                                    setCurrentHighlight(step.id);
                                                } else if (isActive) {
                                                    removeStep(step.id);
                                                } else {
                                                    addStep(step.id);
                                                }
                                            }}
                                        >
                                            <div className="p-4">
                                                <div className="flex items-start gap-3">
                                                    <div
                                                        className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                                                        style={{ backgroundColor: step.color }}
                                                    >
                                                        {step.id}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="font-semibold text-gray-900">
                                                                {step.title}
                                                            </h4>
                                                            {isActive && step.id !== 1 ? (
                                                                <span className="text-xs text-gray-400">Click to remove</span>
                                                            ) : !isActive ? (
                                                                <span className="flex items-center gap-1 text-xs text-[#10b981] font-medium">
                                                                    <Plus className="h-3 w-3" />
                                                                    Add
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Tip when highlighted */}
                                                {isActive && isHighlighted && (
                                                    <div className="mt-4 p-3 rounded-lg bg-[#5fff9e]/10 border border-[#5fff9e]/30">
                                                        <div className="flex gap-2">
                                                            <Lightbulb className="h-4 w-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                                                            <p className="text-sm text-[#047857]">{step.tip}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right side - Live prompt preview */}
                            <div className="lg:sticky lg:top-24 h-fit">
                                <div className="bg-black rounded-2xl overflow-hidden">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                                        <div className="flex items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-red-500" />
                                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                            <div className="h-3 w-3 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-xs text-gray-400">Your Prompt Preview</span>
                                        <button
                                            onClick={copyBuiltPrompt}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#5fff9e] text-gray-900 hover:bg-[#48ee8d] transition-colors"
                                        >
                                            {copiedId === -1 ? (
                                                <>
                                                    <Check className="h-3.5 w-3.5" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="h-3.5 w-3.5" />
                                                    Copy
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Prompt content */}
                                    <div className="p-4">
                                        <div className="space-y-2">
                                            {promptBuilderSteps
                                                .filter(step => activeSteps.includes(step.id))
                                                .map((step, index) => (
                                                    <div
                                                        key={step.id}
                                                        className={`transition-all duration-300 rounded-lg ${currentHighlight === step.id
                                                            ? 'ring-2 ring-offset-2 ring-offset-black'
                                                            : ''
                                                            }`}
                                                        style={{
                                                            '--tw-ring-color': currentHighlight === step.id ? step.color : 'transparent'
                                                        } as React.CSSProperties}
                                                        onClick={() => setCurrentHighlight(step.id)}
                                                    >
                                                        {/* Step label */}
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <div
                                                                className="h-5 px-2 rounded text-xs font-medium text-white flex items-center"
                                                                style={{ backgroundColor: step.color }}
                                                            >
                                                                {step.shortLabel}
                                                            </div>
                                                        </div>
                                                        {/* Step content */}
                                                        <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed pl-2 border-l-2" style={{ borderColor: step.color }}>
                                                            {step.promptPart.trim()}
                                                        </pre>
                                                    </div>
                                                ))}
                                        </div>

                                        {activeSteps.length < 5 && (
                                            <div className="mt-6 text-center">
                                                <p className="text-xs text-gray-500">
                                                    Add more components to build a stronger prompt →
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Prompt strength indicator */}
                                <div className="mt-4 bg-gray-100 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">Prompt Strength</span>
                                        <span className="text-sm text-gray-500">{activeSteps.length}/5 components</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-300"
                                            style={{
                                                width: `${(activeSteps.length / 5) * 100}%`,
                                                backgroundColor: activeSteps.length < 3 ? '#f59e0b' : activeSteps.length < 5 ? '#3b82f6' : '#10b981'
                                            }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        {activeSteps.length < 3
                                            ? "Add more context for better results"
                                            : activeSteps.length < 5
                                                ? "Good structure! Add format requirements for precision"
                                                : "Excellent! This prompt is well-structured"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Limitations Notice */}
                <section className="py-8 bg-amber-50 border-b border-amber-200">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="h-5 w-5 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">What ChatGPT Can't Do for Recruiters</h3>
                                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
                                    <div className="flex gap-2">
                                        <Clock className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>No real-time data:</strong> Can't browse LinkedIn or check current market</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Clock className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>No automation:</strong> Every prompt requires manual copy-paste</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Clock className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>No verification:</strong> Can't validate claims or check references</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Clock className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                        <span><strong>No memory:</strong> Doesn't remember your pipeline or preferences</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category filter */}
                <section className="py-6 bg-white border-b border-gray-200">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Ready-to-use prompt templates:</h3>
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {categories.map(cat => {
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.id
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Prompts list */}
                <section className="py-12 sm:py-16 bg-gray-50">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6">
                        <div className="space-y-4">
                            {filteredPrompts.map((item) => {
                                const Icon = item.icon;
                                const isExpanded = expandedPrompt === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        {/* Prompt header */}
                                        <div
                                            className="p-5 cursor-pointer"
                                            onClick={() => setExpandedPrompt(isExpanded ? null : item.id)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5fff9e]/10 text-[#10b981] flex-shrink-0">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <span className="text-xs font-medium text-[#10b981] bg-[#5fff9e]/10 px-2 py-0.5 rounded-full">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                            </div>
                                        </div>

                                        {/* Expanded content */}
                                        {isExpanded && (
                                            <div className="border-t border-gray-200 bg-gray-50">
                                                {/* Prompt */}
                                                <div className="p-5">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="text-sm font-medium text-gray-900">Prompt Template</span>
                                                        <button
                                                            onClick={() => copyToClipboard(item.prompt, item.id)}
                                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                                                        >
                                                            {copiedId === item.id ? (
                                                                <>
                                                                    <Check className="h-3.5 w-3.5" />
                                                                    Copied!
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Copy className="h-3.5 w-3.5" />
                                                                    Copy
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                                                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                                                            {item.prompt}
                                                        </pre>
                                                    </div>
                                                </div>

                                                {/* Example Response */}
                                                <div className="px-5 pb-5">
                                                    <span className="text-sm font-medium text-gray-900 mb-3 block">
                                                        Example Response
                                                    </span>
                                                    <div className="bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] rounded-xl p-4 border border-[#5fff9e]/20">
                                                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                                                            {item.exampleResponse}
                                                        </pre>
                                                    </div>
                                                </div>

                                                {/* Limitation */}
                                                {item.limitation && (
                                                    <div className="px-5 pb-5">
                                                        <div className="flex gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200">
                                                            <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                                            <p className="text-sm text-amber-700">{item.limitation}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 bg-white">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                            <Clock className="h-4 w-4" />
                            Tired of manual copy-paste for every candidate?
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                            Automate the entire workflow
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                            boilr automatically researches leads, enriches data, and personalizes outreach at scale – no manual prompting required.
                        </p>
                        <a
                            href="https://calendly.com/felix-boilr/demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-black bg-[#48ee8d] hover:bg-[#5fff9e] shadow-[0_4px_20px_rgba(72,238,141,0.35)] transition-all duration-200"
                        >
                            See boilr in Action
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
