import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML/CSS", "Node.js", "Next.js", 
    "Tailwind CSS", "SASS", "Git", "Figma", "Adobe Creative Suite", "MongoDB"
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
            From numbers to code - I'm a Chartered Accountant who discovered a passion 
            for front-end development. I specialize in creating accessible, beautiful 
            applications with over 5 years of client service experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Story */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey began in the world of finance as a Chartered Accountant, 
                where I spent 5+ years in client service roles leading teams and 
                solving complex business challenges. This experience taught me the 
                importance of attention to detail and user-centered thinking.
              </p>
              <p>
                The transition to front-end development felt natural - both fields 
                require logical thinking, problem-solving, and a commitment to 
                excellence. I bring this analytical mindset to every project, 
                ensuring solutions are not just beautiful, but also functional and accessible.
              </p>
              <p>
                Based in Toronto, Canada, I'm passionate about creating web applications 
                that make a real difference in people's lives. I believe great technology 
                should be intuitive, inclusive, and delightful to use.
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