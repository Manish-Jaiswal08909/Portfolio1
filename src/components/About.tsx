import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 accent-gradient opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions through technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <Card className="card-gradient border-primary/20 card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Objective</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Awarded the prestigious Study in India (SII) Scholarship to pursue undergraduate studies at KIIT University. 
                  Passionate about Web Technology and AI-based applications, with a strong interest in applying skills in programming, 
                  machine learning, and cloud computing to solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="slide-in-right space-y-6">
            <Card className="card-gradient border-primary/20 card-shadow scale-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">Focus Areas</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Web Technology Development</li>
                  <li>• AI-based Applications</li>
                  <li>• Machine Learning Solutions</li>
                  <li>• Cloud Computing</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-primary/20 card-shadow scale-on-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">Languages</h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• English - Professional proficiency</li>
                  <li>• Hindi - Fluent</li>
                  <li>• Nepali - Native</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;