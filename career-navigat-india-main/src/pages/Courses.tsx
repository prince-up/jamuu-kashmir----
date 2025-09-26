import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    title: "Introduction to Computer Science",
    category: "Computer Science",
    description: "Learn the basics of programming, algorithms, and data structures. Perfect for beginners!",
    color: "from-blue-500 to-cyan-400",
    link: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaJMGc9T6LrJl1D8F6l5l6lG" // CodeWithHarry
  },
  {
    title: "Mathematics for Competitive Exams",
    category: "Mathematics",
    description: "Master essential math concepts for JEE, NEET, and other exams. Includes practice problems and tips.",
    color: "from-purple-500 to-pink-400",
    link: "https://www.youtube.com/playlist?list=PLU6SqdYcYsfJdYbJHqG8pR9frtT0F53kS" // Khan Academy India
  },
  {
    title: "NEET Biology Crash Course",
    category: "NEET",
    description: "Comprehensive biology course for NEET aspirants. Covers all important topics and MCQs.",
    color: "from-green-500 to-lime-400",
    link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0hT6Y3qR" // Unacademy NEET
  },
  {
    title: "Artificial Intelligence Foundations",
    category: "AI",
    description: "Explore the world of AI, machine learning, and neural networks. Hands-on projects included!",
    color: "from-yellow-400 to-orange-400",
    link: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF" // freeCodeCamp AI
  },
  {
    title: "Data Structures & Algorithms",
    category: "Computer Science",
    description: "Deep dive into DSA for coding interviews and competitive programming.",
    color: "from-pink-500 to-red-400",
    link: "https://www.youtube.com/playlist?list=PLqM7alHXFySGg6GSRmE2INIuYjPpGNe3R" // Apna College DSA
  },
  {
    title: "Applied Mathematics for Engineers",
    category: "Mathematics",
    description: "Advanced math topics for engineering students. Linear algebra, calculus, and more.",
    color: "from-indigo-500 to-blue-400",
    link: "https://www.youtube.com/playlist?list=PLbRMhDVUMngdQwK5w3rFZb5g6l6l6l6l6" // NPTEL Mathematics
  },
  {
    title: "AI in Healthcare",
    category: "AI",
    description: "Discover how artificial intelligence is transforming the healthcare industry.",
    color: "from-teal-500 to-green-400",
    link: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF" // freeCodeCamp AI
  },
  {
    title: "NEET Chemistry Masterclass",
    category: "NEET",
    description: "Detailed chemistry lessons for NEET. Focus on organic, inorganic, and physical chemistry.",
    color: "from-rose-500 to-pink-400",
    link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0hT6Y3qR" // Unacademy NEET Chemistry
  }
];

const Courses = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 py-10">
    <h1 className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">Explore Top Courses</h1>
    <p className="text-center text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">Boost your career with our curated courses in Computer Science, Mathematics, NEET, and Artificial Intelligence. Learn from the best and get ahead!</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
      {courses.map((course, idx) => (
        <Card
          key={idx}
          className={`relative overflow-hidden shadow-xl border-0 bg-gradient-to-br ${course.color} text-white hover:scale-105 transition-transform duration-300`}
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold drop-shadow-sm flex items-center justify-between">
              {course.title}
              <Badge variant="secondary" className="ml-2 text-xs bg-white/20 text-white border-0">{course.category}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-base font-medium opacity-90">{course.description}</div>
            <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 rounded bg-white/90 text-blue-700 font-semibold shadow hover:bg-white transition">View Details</a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Courses;
