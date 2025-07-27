import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Figma", "Adobe Creative Suite"
  ];

  const qualities = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with best practices"
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "Creating intuitive user experiences with modern design principles"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid prototyping and development to meet tight deadlines"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I bridge the gap between design and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Story */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my journey in computer science with a deep curiosity about how 
                technology can solve real-world problems. Over the years, I've evolved 
                from writing simple scripts to architecting complex applications.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest 
                technologies. My approach combines technical expertise with creative 
                problem-solving to deliver exceptional results.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {qualities.map((quality) => (
              <Card key={quality.title} className="p-6 bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <quality.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{quality.title}</h4>
                </div>
                <p className="text-muted-foreground">{quality.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;