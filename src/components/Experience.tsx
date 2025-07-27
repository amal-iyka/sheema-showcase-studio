import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Award, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Front-end Developer",
      company: "Tech Innovations Inc.",
      location: "Toronto, ON",
      description: "Leading front-end development for enterprise applications, mentoring junior developers, and implementing modern React best practices.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 4 developers",
        "Implemented accessibility standards"
      ]
    },
    {
      period: "2020 - 2022",
      role: "Front-end Developer",
      company: "Digital Solutions Ltd.",
      location: "Toronto, ON",
      description: "Developed responsive web applications and collaborated with UX/UI designers to create seamless user experiences.",
      technologies: ["React", "JavaScript", "SASS", "Git"],
      achievements: [
        "Built 15+ responsive web applications",
        "Improved user engagement by 25%",
        "Mentored 2 junior developers"
      ]
    },
    {
      period: "2015 - 2020",
      role: "Senior Financial Analyst",
      company: "Financial Advisory Group",
      location: "Toronto, ON",
      description: "Led financial analysis projects, managed client relationships, and provided strategic financial planning guidance.",
      technologies: ["Excel", "SQL", "Power BI", "SAP"],
      achievements: [
        "Managed portfolio worth $50M+",
        "Led team of 6 analysts",
        "Achieved 98% client satisfaction"
      ]
    }
  ];

  const certifications = [
    "Chartered Accountant (CPA)",
    "React Developer Certification",
    "AWS Cloud Practitioner",
    "Accessibility Specialist"
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Experience & Qualifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A unique blend of financial expertise and technical skills, bringing analytical thinking to creative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 bg-card-gradient shadow-card hover:shadow-elegant transition-all duration-300 relative">
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 bottom-0 w-0.5 h-8 bg-border transform translate-y-full"></div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h4>
                      <div className="text-muted-foreground mb-3">
                        {exp.company} • {exp.location}
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Achievements */}
                      <div className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Award className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            
            <Card className="p-6 bg-card-gradient shadow-card mb-8">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Award className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card-gradient shadow-card">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-foreground">Bachelor of Commerce</h5>
                  <p className="text-sm text-muted-foreground">University of Toronto</p>
                  <p className="text-sm text-muted-foreground">2011 - 2015</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">CPA Professional Program</h5>
                  <p className="text-sm text-muted-foreground">CPA Ontario</p>
                  <p className="text-sm text-muted-foreground">2016 - 2018</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;