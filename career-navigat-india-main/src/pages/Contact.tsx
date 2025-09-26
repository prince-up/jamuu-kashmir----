import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Building,
  Globe,
  Users,
  HeadphonesIcon
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Srinagar Office",
      details: ["123 Dal Lake Road", "Srinagar, J&K 190001"],
      color: "primary"
    },
    {
      icon: Building,
      title: "Jammu Office", 
      details: ["456 Gandhi Nagar", "Jammu, J&K 180004"],
      color: "secondary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+91-1234-567-890", "+91-0987-654-321"],
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["help@margdashrshan.in", "careers@margdashrshan.in"],
      color: "primary"
    }
  ];

  const supportHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const faqs = [
    {
      question: "How accurate are the AI career recommendations?",
      answer: "Our AI system has a 95% accuracy rate based on student feedback and career success tracking over 3 years."
    },
    {
      question: "Is the platform available in local languages?",
      answer: "Yes! We support Hindi, Urdu, Kashmiri, and Dogri languages alongside English for better accessibility."
    },
    {
      question: "How much does the career guidance cost?",
      answer: "Basic assessments are completely free. Premium mentorship and detailed reports are available at affordable rates."
    },
    {
      question: "Can rural students access all features?",
      answer: "Absolutely! Our platform works on basic smartphones and we have offline capabilities for areas with poor internet."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section with J&K background */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80"
              alt="Jammu & Kashmir Valley"
              className="w-full h-full object-cover object-center opacity-80"
              style={{ filter: 'brightness(0.7) blur(1px)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-accent/70 opacity-80"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="secondary" className="mb-4 bg-white/80 text-primary">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              We're Here to
              <span className="bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 bg-clip-text text-transparent block mt-2">
                Help You Succeed
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
              Have questions about your career path? Need guidance on educational opportunities in J&K? 
              Our expert team is ready to support your journey.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-primary/30 bg-white/90 shadow-xl shadow-blue-100/40">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-primary">
                  <MessageSquare className="h-8 w-8 text-primary mr-3" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-blue-900">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" className="bg-blue-50/60 focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-blue-900">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" className="bg-blue-50/60 focus:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-900">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-green-50/60 focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-blue-900">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" className="bg-yellow-50/60 focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-blue-900">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" className="bg-blue-50/60 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-900">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-green-50/60 focus:ring-accent"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-white text-lg shadow-md hover:from-accent hover:to-primary" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-2 border-accent/30 bg-white/90 shadow-lg shadow-green-100/40">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-accent">
                    <Phone className="h-8 w-8 text-secondary mr-3" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-${info.color} rounded-lg flex items-center justify-center shadow-md shadow-${info.color}/30`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-primary">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
              {/* Support Hours */}
              <Card className="border-2 border-yellow-300/40 bg-yellow-50/80 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-yellow-800">
                    <Clock className="h-6 w-6 text-accent mr-2" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {supportHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-primary">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-yellow-100 rounded-lg">
                    <div className="flex items-center mb-2">
                      <HeadphonesIcon className="h-5 w-5 text-accent mr-2" />
                      <span className="font-medium text-accent">24/7 Emergency Support</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For urgent career guidance needs, our AI assistant is available round the clock.
                    </p>
                  </div>
                </CardContent>
              </Card>
              {/* Quick Links */}
              <Card className="border-2 border-primary/20 bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-primary">
                    <Users className="h-6 w-6 text-primary mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary/10">
                    <Globe className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-accent text-accent hover:bg-accent/10">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-secondary text-secondary hover:bg-secondary/10">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover-lift transition-smooth border-2 border-accent/20 bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-lg text-accent">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;