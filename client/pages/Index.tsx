import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Eye, Database, Tag, Users, Shield, Zap, Check } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Egocentric Video Data for the Next Generation of AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              First-person video datasets captured from real-world tasks. Train better vision-language models, robotics systems, and AI agents with perspective that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600 text-base h-12 px-8">
                Request Dataset Access
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-8 border-primary text-primary hover:bg-blue-50">
                <Play size={18} className="mr-2" />
                View Sample Clips
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Egocentric Videos */}
      <section id="what-are-egocentric" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Are Egocentric Videos</h2>
            <p className="text-lg text-muted-foreground">
              First-person perspective data captured from wearable cameras, revealing human actions and interactions as never before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-slate-100 rounded-lg h-80 flex items-center justify-center">
              <Eye className="w-24 h-24 text-slate-400" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Egocentric videos are captured from a first-person perspective, typically using wearable cameras mounted on the head or body. Unlike traditional third-person footage, egocentric data reveals exactly what the person sees and does—capturing hand movements, object interactions, and spatial reasoning in natural contexts.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                This perspective is crucial for training AI systems that need to understand human behavior and perform tasks in real-world environments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Action Understanding</h3>
              <p className="text-sm text-muted-foreground">Learn how humans perform complex tasks step-by-step</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Database className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Human-Object Interaction</h3>
              <p className="text-sm text-muted-foreground">Understand how people interact with tools and objects</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Robotics & VLA</h3>
              <p className="text-sm text-muted-foreground">Train embodied AI and vision-language-action models</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Tag className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Natural Context</h3>
              <p className="text-sm text-muted-foreground">Real-world data without staged or synthetic scenarios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Overview */}
      <section id="datasets" className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Dataset Overview</h2>
            <p className="text-lg text-muted-foreground">
              Professional-grade datasets curated for research and production use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</span>
                  Dataset Types
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Industrial workflows & manufacturing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Assembly and construction tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Tool usage and manipulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Daily activities and routines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fine-grained hand-object interactions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</span>
                  Video Specifications
                </h3>
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="font-medium text-foreground">Resolution</span>
                    <span className="text-muted-foreground">1440p to 4K</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="font-medium text-foreground">Frame Rate</span>
                    <span className="text-muted-foreground">30 FPS / 60 FPS</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="font-medium text-foreground">Sequence Length</span>
                    <span className="text-muted-foreground">5 min - 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Total Duration</span>
                    <span className="text-muted-foreground">10K+ hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Available Metadata</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Temporal action segmentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Action labels & descriptions</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Object detection & segmentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Hand pose & gesture recognition</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Scene and context information</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Audio transcripts (where available)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Camera calibration data</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Custom annotation support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annotations & Metadata */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Annotations & Metadata</h2>
            <p className="text-lg text-muted-foreground">
              Rich, structured annotations compatible with modern AI frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <Tag className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">Action Labels</h3>
              <p className="text-muted-foreground mb-4">Fine-grained action classifications with temporal boundaries and confidence scores.</p>
              <p className="text-sm text-muted-foreground font-mono bg-white p-2 rounded">atomic, multi-step, VLA-compatible</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">Object Annotations</h3>
              <p className="text-muted-foreground mb-4">Bounding boxes, segmentation masks, and semantic labels for all objects in frame.</p>
              <p className="text-sm text-muted-foreground font-mono bg-white p-2 rounded">3D coords available</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">SOP & Procedures</h3>
              <p className="text-muted-foreground mb-4">Standard operating procedures and process steps for industrial and assembly tasks.</p>
              <p className="text-sm text-muted-foreground font-mono bg-white p-2 rounded">hierarchical structure</p>
            </div>
          </div>

          <div className="mt-12 bg-white border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Format & Compatibility</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Supported Formats</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ JSON / JSONL</li>
                  <li>✓ COCO format</li>
                  <li>✓ Pascal VOC</li>
                  <li>✓ Custom formats</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Framework Support</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ PyTorch & TensorFlow</li>
                  <li>✓ Hugging Face Datasets</li>
                  <li>✓ Vision-Language Models</li>
                  <li>✓ Robotics stacks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Use Cases</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading AI research and enterprise teams worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">Vision-Language-Action Models</h3>
              <p className="text-muted-foreground mb-4">Train VLA models that understand human intent, actions, and environmental context simultaneously.</p>
              <p className="text-sm text-primary font-medium">Used by: Google DeepMind, Meta, leading robotics labs</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">Robotics Imitation Learning</h3>
              <p className="text-muted-foreground mb-4">Enable robots to learn manipulation skills from human demonstrations and real-world egocentric data.</p>
              <p className="text-sm text-primary font-medium">Used by: Boston Dynamics, NVIDIA, robotics startups</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">Activity Recognition</h3>
              <p className="text-muted-foreground mb-4">Classify and understand human activities in real-time from wearable camera feeds for safety and analytics.</p>
              <p className="text-sm text-primary font-medium">Used by: Safety companies, enterprise AI teams</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">Human Behavior Analysis</h3>
              <p className="text-muted-foreground mb-4">Study human behavior, decision-making, and ergonomics from a first-person perspective for research.</p>
              <p className="text-sm text-primary font-medium">Used by: Academic researchers, HCI studies</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">Foundation Models</h3>
              <p className="text-muted-foreground mb-4">Build egocentric foundation models for downstream tasks using self-supervised learning on large-scale data.</p>
              <p className="text-sm text-primary font-medium">Used by: Large AI labs, model developers</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">Industry-Specific Solutions</h3>
              <p className="text-muted-foreground mb-4">Train models for manufacturing quality control, safety monitoring, and process optimization.</p>
              <p className="text-sm text-primary font-medium">Used by: Fortune 500 manufacturers, automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Ethics & Privacy */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Data Ethics & Privacy</h2>
            <p className="text-lg text-muted-foreground">
              Responsible data practices for research and enterprise applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Consent-Based Collection</h3>
                  <p className="text-muted-foreground">All data collected with explicit informed consent from participants who understand intended use.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Anonymization & Blurring</h3>
                  <p className="text-muted-foreground">Automated face and identity blurring with optional manual review to protect individual privacy.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Sensitive Content Exclusion</h3>
                  <p className="text-muted-foreground">No personal data, financial information, or sensitive content included in any dataset.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Compliance Ready</h3>
                  <p className="text-muted-foreground">GDPR-compliant, HIPAA-compatible, and meets institutional research standards.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Audit & Transparency</h3>
                  <p className="text-muted-foreground">Full data provenance tracking and transparent collection/processing methodologies.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Ethical Guidelines</h3>
                  <p className="text-muted-foreground">Alignment with AI ethics best practices and institutional review board standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">
              We publish our data collection methodology and ethics standards openly. Research integrity and participant safety are non-negotiable.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-blue-100">
              View Ethics Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose OpsGlass */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose OpsGlass Datasets</h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built for researchers and enterprises who demand quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-border flex gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Real-World, Non-Staged Data</h3>
                <p className="text-sm text-muted-foreground">No synthetic or artificially staged scenarios—genuine human actions in natural contexts.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border flex gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Long Continuous Sequences</h3>
                <p className="text-sm text-muted-foreground">Extended video sequences capturing complex workflows and multi-step tasks without cuts.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border flex gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">First-Person Perspective</h3>
                <p className="text-sm text-muted-foreground">Unique viewpoint revealing hand-object interactions and spatial reasoning from the agent's view.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border flex gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Scalable & Customizable</h3>
                <p className="text-sm text-muted-foreground">Choose from pre-curated datasets or request custom data collection for your specific needs.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border flex gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Professional Annotations</h3>
                <p className="text-sm text-muted-foreground">Expert annotators and QA processes ensure consistent, high-quality metadata and labels.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border flex gap-4">
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Research-Grade Quality</h3>
                <p className="text-sm text-muted-foreground">Used by leading AI research institutions and trusted by enterprise teams globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Pricing & Access Models</h2>
            <p className="text-lg text-muted-foreground">
              Flexible licensing designed for researchers and enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors hover:shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">Academic</h3>
              <p className="text-muted-foreground text-sm mb-6">For universities and research institutions</p>
              <ul className="space-y-3 mb-8 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Access to curated datasets
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Non-commercial license
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Email support
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Documentation & API
                </li>
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-blue-50">
                Request Access
              </Button>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-primary shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">Commercial</h3>
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">For enterprises and production deployments</p>
              <ul className="space-y-3 mb-8 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Full dataset access
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Commercial & production rights
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Priority support
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  SLA & uptime guarantees
                </li>
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-blue-600">
                Contact Sales
              </Button>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border hover:border-primary transition-colors hover:shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">Custom</h3>
              <p className="text-muted-foreground text-sm mb-6">Bespoke data and licensing</p>
              <ul className="space-y-3 mb-8 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Custom dataset curation
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Specialized annotations
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Dedicated support
                </li>
                <li className="flex items-start gap-2">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  Flexible terms
                </li>
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-blue-50">
                Get Quote
              </Button>
            </div>
          </div>

          <div className="text-center bg-blue-50 rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              All plans include access to documentation, sample clips, and our data portal. Need something different? We offer flexible licensing options.
            </p>
            <p className="font-semibold text-foreground">Questions about pricing?</p>
            <p className="text-muted-foreground mb-4">Contact our team at</p>
            <a href="mailto:sales@opsglass.io" className="text-primary font-medium hover:underline">
              sales@opsglass.io
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-5xl font-bold text-foreground mb-6">
            Power Your Models with Real Human Perspective
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join leading AI research teams and enterprises using OpsGlass egocentric datasets to build the next generation of intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-600 text-base h-12 px-8">
              Request Dataset Access
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8 border-primary text-primary hover:bg-blue-50">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-8 text-muted-foreground text-sm">
            Start with free sample clips or request academic access. Commercial licensing available.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
