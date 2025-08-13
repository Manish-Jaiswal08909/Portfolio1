import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";

const projects = [
  {
    title: "Audio Player Using Face Detection Emotion",
    year: "2024",
    description: "Built an emotion-based music player that plays songs based on user's facial expression. Used OpenCV for real-time face detection and DeepFace for emotion recognition.",
    technologies: ["Python", "OpenCV", "DeepFace", "Tkinter", "Pygame"],
    features: [
      "Real-time face detection using OpenCV",
      "Emotion recognition with DeepFace",
      "Interactive GUI built with Tkinter",
      "Audio handling with Pygame",
      "Emotion-to-playlist mapping system"
    ],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions showcasing my technical expertise
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-primary/20 elegant-shadow scale-on-hover fade-in-up">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary glow-effect"></div>
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5 text-primary" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button className="hero-gradient text-white border-0 hover:scale-105 smooth-transition">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Features */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold">Key Features</h4>
                    <div className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Project Visual Placeholder */}
                    <div className="mt-8">
                      <div className="aspect-video rounded-lg card-gradient border border-primary/20 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <Code className="w-12 h-12 text-primary mx-auto" />
                          <p className="text-muted-foreground">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* More projects coming soon */}
        <div className="text-center mt-16 fade-in-up">
          <Card className="card-gradient border-primary/20 card-shadow max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full accent-gradient flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">Currently working on exciting new projects</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;