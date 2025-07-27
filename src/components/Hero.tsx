import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant bg-card-gradient">
                <img 
                  src={profileImage} 
                  alt="Sheema Kaunain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-text-gradient bg-clip-text text-transparent">
                Sheema Kaunain
              </span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-8 space-y-2">
              <p>Full Stack Developer</p>
              <p>UI/UX Designer</p>
              <p>Creative Problem Solver</p>
            </div>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              I create beautiful, functional, and user-centered digital experiences. 
              With expertise in modern web technologies and design principles, 
              I bring ideas to life through code and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gradient" size="lg" className="text-lg px-8">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button variant="portfolio" size="lg" className="text-lg px-8">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;