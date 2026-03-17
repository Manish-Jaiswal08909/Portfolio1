import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const contactInfo = [
  {
  icon: Phone,
  label: "Phone (India)",
  value: "+91-7068508909",
  href: "tel:+917068508909"
},
{
  icon: Phone,
  label: "Phone (Nepal)",
  value: "+977-9817414737",
  href: "tel:+9779817414737"
},
  {
    icon: Mail,
    label: "Email",
    value: "jaiswalmanish08909@gmail.com",
    href: "mailto:jaiswalmanish08909@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhubaneswar, Odisha - 751024, India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Manish-Jaiswal08909",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manish-kumar-jaiswal-7554a92aa/",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/manishjaiz737",
    color: "hover:text-blue-400"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-in-left space-y-8">
            <Card className="card-gradient border-primary/20 elegant-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary smooth-transition"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="card-gradient border-primary/20 card-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button 
                      key={index}
                      size="icon" 
                      variant="ghost" 
                      className="rounded-full hover:scale-110 smooth-transition hover:bg-primary/20"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="slide-in-right space-y-8">
            <Card className="card-gradient border-primary/20 elegant-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities, collaborations, and innovative projects. 
                  Whether you have a project in mind, want to discuss technology, or just want to connect, 
                  I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                <Button
  asChild
  className="w-full hero-gradient text-white border-0 hover:scale-105 smooth-transition glow-effect"
>
  <a href="mailto:jaiswalmanish08909@gmail.com?subject=Contact from Portfolio">
    <Mail className="w-4 h-4 mr-2" />
    Send me an email
    <ArrowRight className="w-4 h-4 ml-2" />
  </a>
</Button>
                  
                  <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a call
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Availability Status */}
            <Card className="card-gradient border-primary/20 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-semibold text-green-500">Available for opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently seeking internships and full-time positions in software development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
