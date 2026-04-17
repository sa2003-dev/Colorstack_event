import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Gavel,
  Users,
  Building2,
  Globe,
  ShieldAlert,
  ExternalLink,
  Phone,
  Languages,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const resources = [
  {
    title: "UnidosUS",
    category: "Community",
    icon: Users,
    audience: "Families, students, workers, and advocates",
    description:
      "A major Latino-serving nonprofit with resources and advocacy across education, workforce development, housing, health, and civic life.",
    link: "https://unidosus.org/",
    tags: ["Community", "Education", "Workforce", "Advocacy"],
  },
  {
    title: "Hispanic Scholarship Fund",
    category: "Education",
    icon: GraduationCap,
    audience: "Students and families planning for college",
    description:
      "Scholarship opportunities, college guidance, and career preparation support for students of Hispanic heritage.",
    link: "https://www.hsf.net/",
    tags: ["Scholarships", "College", "Students"],
  },
  {
    title: "TheDream.US",
    category: "Education",
    icon: GraduationCap,
    audience: "Undocumented students and Dreamers",
    description:
      "Scholarship and college success resources created specifically for Dreamer students pursuing higher education.",
    link: "https://www.thedream.us/",
    tags: ["Dreamers", "Scholarships", "College Access"],
  },
  {
    title: "National Alliance for Hispanic Health",
    category: "Health",
    icon: HeartPulse,
    audience: "Individuals and families seeking health support",
    description:
      "Health education, family wellness information, and trusted programs tailored to Hispanic communities.",
    link: "https://www.healthyamericas.org/",
    tags: ["Health", "Wellness", "Family Support"],
  },
  {
    title: "988 Lifeline en Español",
    category: "Crisis Support",
    icon: ShieldAlert,
    audience: "Anyone needing urgent emotional or mental health support",
    description:
      "Free 24/7 crisis support in Spanish by call, text, or chat for mental health, substance use, and emotional distress.",
    link: "https://988lifeline.org/es/servicios-de-traduccion/servicios-en-espanol/",
    tags: ["Mental Health", "Emergency", "Spanish Support"],
  },
  {
    title: "National Immigration Law Center",
    category: "Legal",
    icon: Gavel,
    audience: "Immigrant families and community advocates",
    description:
      "Know-your-rights materials, policy resources, and legal information focused on immigrant communities.",
    link: "https://www.nilc.org/",
    tags: ["Immigration", "Know Your Rights", "Legal Info"],
  },
  {
    title: "Immigration Advocates Network Directory",
    category: "Legal",
    icon: Gavel,
    audience: "People looking for free or low-cost immigration legal help",
    description:
      "Searchable directory to help users find nonprofit immigration legal services by location.",
    link: "https://www.immigrationadvocates.org/legaldirectory/",
    tags: ["Directory", "Legal Help", "Immigration"],
  },
  {
    title: "USCIS en Español",
    category: "Legal",
    icon: Globe,
    audience: "People navigating immigration forms and case information",
    description:
      "Official U.S. government Spanish-language immigration resources, forms, case tools, and citizenship information.",
    link: "https://www.uscis.gov/es",
    tags: ["Government", "Forms", "Citizenship"],
  },
  {
    title: "ALPFA",
    category: "Career",
    icon: Briefcase,
    audience: "Students and professionals building their careers",
    description:
      "Leadership, mentorship, networking, and career development opportunities for Latino professionals and students.",
    link: "https://www.alpfa.org/",
    tags: ["Networking", "Leadership", "Career Growth"],
  },
  {
    title: "SBA en Español",
    category: "Business",
    icon: Building2,
    audience: "Small business owners and aspiring entrepreneurs",
    description:
      "Spanish-language guidance for starting, funding, and growing a business, including planning and support tools.",
    link: "https://www.sba.gov/es",
    tags: ["Business", "Entrepreneurship", "Funding"],
  },
];

const categories = [
  "All",
  "Education",
  "Health",
  "Legal",
  "Career",
  "Business",
  "Community",
  "Crisis Support",
];

const quickStart = [
  {
    title: "Need scholarship help?",
    text: "Start with HSF and TheDream.US for education funding and college support.",
    category: "Education",
  },
  {
    title: "Need health resources?",
    text: "Browse community-centered health support and bilingual wellness information.",
    category: "Health",
  },
  {
    title: "Need immigration help?",
    text: "Use the legal directory first, then check USCIS en Español and NILC resources.",
    category: "Legal",
  },
  {
    title: "Need career support?",
    text: "Explore ALPFA and workforce-focused organizations to grow your network.",
    category: "Career",
  },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/70 p-4 shadow-sm backdrop-blur">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default function HispanicCommunityResourceHub() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All" || resource.category === activeCategory;
      const haystack = [
        resource.title,
        resource.category,
        resource.audience,
        resource.description,
        resource.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-emerald-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
          >
            <div>
              <Badge className="mb-4 rounded-full bg-slate-900 px-4 py-1 text-white hover:bg-slate-900">
                Comunidad Resource Hub
              </Badge>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Resources for the Hispanic community, all in one place.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                A simple starting point for scholarships, health support, legal guidance,
                career growth, entrepreneurship, and community-based help.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="rounded-2xl"
                  onClick={() => {
                    const section = document.getElementById("resources");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore resources
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl"
                  onClick={() => {
                    setActiveCategory("Legal");
                    const section = document.getElementById("resources");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Find legal help
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Stat value="10+" label="Trusted resource links" />
              <Stat value="6" label="Core support areas" />
              <Stat value="ES / EN" label="Bilingual-friendly options" />
              <Stat value="24/7" label="Crisis support access" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickStart.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <Card className="h-full rounded-3xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm leading-6 text-slate-600">{item.text}</p>
                  <Button
                    variant="outline"
                    className="rounded-2xl"
                    onClick={() => setActiveCategory(item.category)}
                  >
                    Open {item.category}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Browse resources</h2>
            <p className="mt-2 text-slate-600">
              Search by topic or filter by category to find a good starting point.
            </p>
          </div>

          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search scholarships, immigration, health, careers..."
              className="rounded-2xl border-slate-300 pl-10"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="block"
              >
                <Card className="group h-full rounded-3xl border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="rounded-full">
                        {resource.category}
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        {resource.title}
                        <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-slate-700" />
                      </CardTitle>
                      <p className="mt-2 text-sm text-slate-500">{resource.audience}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-600">{resource.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <Card className="mt-4 rounded-3xl border-dashed border-slate-300 bg-white/60">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Sparkles className="mb-4 h-8 w-8 text-slate-400" />
              <h3 className="text-lg font-semibold">No matches yet</h3>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                Try a broader search like “health,” “scholarships,” or “immigration,” or switch back to “All.”
              </p>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-3xl border-orange-200 bg-orange-50/70 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ShieldAlert className="h-5 w-5" />
                Need help right now?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-slate-700">
              <p>
                For urgent mental health or emotional support in Spanish, contact the 988 Lifeline.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://988lifeline.org/es/servicios-de-traduccion/servicios-en-espanol/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="rounded-2xl">
                    <Phone className="mr-2 h-4 w-4" />
                    Call or text 988
                  </Button>
                </a>
                <a href="https://www.healthyamericas.org/help-line" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="rounded-2xl">
                    Health helpline
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Languages className="h-5 w-5" />
                Good to know
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-600">
              <p>
                This page is a starting point and does not replace advice from a licensed attorney, doctor, or crisis professional.
              </p>
              <p>
                When possible, use official or nonprofit sources, double-check eligibility requirements, and keep important deadlines in one place.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-semibold text-slate-900">Comunidad Resource Hub</div>
            <div>A simple, welcoming website concept for the Hispanic community.</div>
          </div>
          <div className="text-slate-500">Built to be expanded with local, school, or city-specific resources.</div>
        </div>
      </footer>
    </div>
  );
}
