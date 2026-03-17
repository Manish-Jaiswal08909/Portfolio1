import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center fade-in-up ">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-11 mt-24 rounded-full bg-white p-1 glow-effect">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-gradient">
              <img
                src="Manish.jpg"
                width={200}
                height={100}
                className="rounded-full justify-center"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Manish Kumar</span>
            <br />
            <span className="text-foreground">Jaiswal</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Computer Science Student & Developer passionate about Web Technology
            and AI-based applications
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-7068508909</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>jaiswalmanish08909@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bhubaneswar, Odisha</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
  asChild
  className="hero-gradient text-white border-0 hover:scale-105 smooth-transition glow-effect"
>
  <a
    href="https://drive.google.com/file/d/1bviX-SZEMhRhmr7gFhN2untuUdZKuL-_/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </a>
</Button>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              View Projects
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
           <a href="https://github.com/Manish-Jaiswal08909" target="_blank" rel="noopener noreferrer">
  <Button
    size="icon"
    variant="ghost"
    className="rounded-full hover:scale-110 smooth-transition hover:bg-primary/20"
  >
    <Github className="w-5 h-5" />
  </Button>
</a>

<a href="https://www.linkedin.com/in/manish-kumar-jaiswal-7554a92aa/" target="_blank" rel="noopener noreferrer">
  <Button
    size="icon"
    variant="ghost"
    className="rounded-full hover:scale-110 smooth-transition hover:bg-primary/20"
  >
    <Linkedin className="w-5 h-5" />
  </Button>
</a>

<a href="https://x.com/manishjaiz737" target="_blank" rel="noopener noreferrer">
  <Button
    size="icon"
    variant="ghost"
    className="rounded-full hover:scale-110 smooth-transition hover:bg-primary/20"
  >
    <Twitter className="w-5 h-5" />
  </Button>
</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
              Scroll down
            </span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
