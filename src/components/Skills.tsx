import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Brain, Cloud, Users, MessageCircle, Target, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "Java", "Python", "OOPs"],
    color: "text-blue-500"
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
    color: "text-green-500"
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["OpenCV", "Data Interpretation"],
    color: "text-purple-500"
  },
  {
    title: "Cloud Technologies",
    icon: Cloud,
    skills: ["AWS"],
    color: "text-orange-500"
  }
];

const softSkills = [
  {
    title: "Teamwork",
    description: "Multicultural environments",
    icon: Users
  },
  {
    title: "Communication",
    description: "Excellent communication skills",
    icon: MessageCircle
  },
  {
    title: "Problem Solving",
    description: "Analysis and resolution",
    icon: Target
  },
  {
    title: "Adaptability",
    description: "Flexibility to project changes",
    icon: Zap
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical proficiencies and soft skills that drive my development
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`card-gradient border-primary/20 card-shadow scale-on-hover slide-in-left`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Personal Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className={`card-gradient border-primary/20 card-shadow scale-on-hover slide-in-right`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full accent-gradient flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;