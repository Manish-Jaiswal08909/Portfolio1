import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

const educationData = [
  {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2022 – 2026",
    location: "Bhubaneswar, India",
    grade: "CGPA: 8.54 / 10",
    current: true
  },
  {
    institution: "Sai Global College",
    degree: "Pre-University Education",
    duration: "2019 – 2021",
    location: "India",
    grade: "Grade: 85.75%",
    current: false
  },
  {
    institution: "Kashi Noble Academy",
    degree: "Secondary Education",
    duration: "2019",
    location: "India",
    grade: "Grade: 77.5%",
    current: false
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>
            
            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`} style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full glow-effect"></div>
                  
                  <div className="ml-20">
                    <Card className={`card-gradient border-primary/20 card-shadow scale-on-hover ${education.current ? 'border-primary glow-effect' : ''}`}>
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 text-primary" />
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{education.institution}</h3>
                              {education.current && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                                  <Star className="w-3 h-3" />
                                  Current
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-4 text-primary">{education.degree}</h4>
                        
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{education.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{education.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold text-foreground">{education.grade}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;