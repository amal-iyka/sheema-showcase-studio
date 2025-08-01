import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, MapPin, Calendar } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-elegant bg-card-gradient animate-float">
                <img 
                  src={profileImage} 
                  alt="Sheema Kaunain"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-primary rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-text-gradient bg-clip-text text-transparent">
                Sheema Kaunain
              </span>
            </h1>
            
            <div className="text-lg lg:text-xl text-muted-foreground mb-6 space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Toronto, Canada</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Available for new opportunities</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Chartered Accountant turned Front-end Developer passionate about creating 
              purposeful, accessible, and beautiful applications that place users at the 
              heart of development decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gradient" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button variant="portfolio" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                <Download className="w-5 h-5" />
                Download Resume
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