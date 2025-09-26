import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, 
  Heart, 
  Users, 
  Award, 
  MapPin, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Globe
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Prince",
      role: "AI Research Lead",
      expertise: "Machine Learning & Career Psychology",
      location: "Ghzaipur UP"
    },
    {
      name: "Shalvi",
      role: "Education Specialist",
      expertise: "Curriculum Design & Student Counseling",
      location: "M.P"
    },
    {
      name: "Utsah",
      role: "Technology Director",
      expertise: "Full-Stack Development & EdTech",
      location: "Chandigarh-Punjab"
    },
    {
      name: "Amit",
      role: "Mentor",
      expertise: "Career Guidance & Motivation",
      location: "Jammu & Kashmir"
    },
    {
      name: "Jaggi",
      role: "Mentor",
      expertise: "Student Support & Outreach",
      location: "Jammu-kashmir"
    },
    {
      name: "Aman",
      role: "Mentor",
      expertise: "Community Engagement",
      location: "Jammu-Kashmir"
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Students Guided", icon: Users },
    { number: "500+", label: "Career Paths Mapped", icon: Target },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "50+", label: "Partner Institutions", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with full J&K background */}
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80"
            alt="Jammu & Kashmir Valley"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            style={{ filter: 'brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
          <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
            <Badge variant="secondary" className="mb-4 bg-white/80 text-primary shadow-lg">About Margdarshan J&K</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl">
              Empowering J&K Students for
              <span className="block mt-2 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-green-200 to-blue-400 drop-shadow-lg">
                Brighter Futures
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              Founded with a mission to bridge the gap between traditional education and modern career opportunities, 
              we're dedicated to helping students of Jammu & Kashmir discover their true potential.
            </p>
            <Button size="lg" asChild className="shadow-xl">
              <Link to="/onboarding">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission Block with gradient background */}
              <Card
                className="hover:shadow-primary transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #ffe7c7 0%, #ffd6ec 40%, #d1fae5 100%)", // light orange, pink, green
                  boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)"
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    To democratize career guidance and make world-class educational resources accessible 
                    to every student in Jammu & Kashmir, regardless of their location or background.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Personalized AI-powered career recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Region-specific opportunities and guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Multilingual support for diverse communities
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Vision Block with gradient background */}
              <Card
                className="hover:shadow-secondary transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #ffd6ec 0%, #ffe7c7 50%, #d1fae5 100%)", // light pink, orange, green
                  boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)"
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Sparkles className="h-8 w-8 text-secondary mr-3" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    To transform J&K into a hub of skilled professionals and entrepreneurs, 
                    contributing to both regional development and global innovation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      Bridge rural-urban education gap
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      Promote local industries and opportunities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                      Foster innovation and entrepreneurship
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section
  className="py-20 bg-muted/30 relative overflow-hidden"
  style={{
    position: "relative",
    zIndex: 1
  }}
>
  {/* Jammu & Kashmir mountains background image, light overlay */}
  <img
    src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80"
    alt="Jammu & Kashmir Mountains"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-65 pointer-events-none select-none"
    style={{ zIndex: 0, filter: "brightness(0.85) blur(1px)" }}
  />
  <div className="absolute inset-0 bg-white/40" style={{ zIndex: 1 }} />
  <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
      <p className="text-lg text-muted-foreground">
        Numbers that reflect our commitment to student success
      </p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <Card key={index} className="text-center hover-lift transition-smooth">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
              <p className="text-sm text-muted-foreground">{achievement.label}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Passionate educators and technologists working for J&K's future
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="hover-lift transition-smooth bg-white/30 backdrop-blur-md border-none shadow-xl"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)' }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400/80 to-green-300/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 text-primary shadow">{member.role}</Badge>
                    <p className="mb-3 text-gray-800">{member.expertise}</p>
                    <div className="flex items-center justify-center text-sm text-gray-700">
                      <MapPin className="h-4 w-4 mr-1" />
                      {member.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Discover Your Path?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of J&K students who have already started their journey 
              toward a brighter future with our AI-powered guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/onboarding">
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;