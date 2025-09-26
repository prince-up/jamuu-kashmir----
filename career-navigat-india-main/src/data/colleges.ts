// src/data/colleges.ts
export type College = {
  name: string;
  stream: 'Engineering' | 'NEET' | 'Business' | 'Arts';
  cutoff: number; // percentile or marks
  seats: number;
  fees: number; // per year in INR
  location: string;
  notes?: string;
  website?: string;
};

export const colleges: College[] = [
  // Engineering (Expanded)
  { name: 'Maharaja Agrasen Institute of Technology', stream: 'Engineering', cutoff: 95.0, seats: 600, fees: 550000, location: 'Delhi', notes: 'Private, NCR region', website: 'https://mait.ac.in/' },
  { name: 'Manipal Institute of Technology', stream: 'Engineering', cutoff: 96.0, seats: 900, fees: 1085000, location: 'Manipal', notes: 'Private, fees vary by branch', website: 'https://manipal.edu/mit.html' },
  { name: 'VIT Vellore', stream: 'Engineering', cutoff: 94.0, seats: 1200, fees: 487000, location: 'Vellore', notes: 'Private', website: 'https://vit.ac.in/' },
  { name: 'SRM University, Chennai', stream: 'Engineering', cutoff: 92.0, seats: 1000, fees: 1100000, location: 'Chennai', notes: 'Private', website: 'https://www.srmist.edu.in/' },
  { name: 'IIT Bombay', stream: 'Engineering', cutoff: 99.5, seats: 1200, fees: 250000, location: 'Mumbai', notes: 'Government', website: 'https://www.iitb.ac.in/' },
  { name: 'NIT Trichy', stream: 'Engineering', cutoff: 97.5, seats: 900, fees: 180000, location: 'Trichy', notes: 'Government', website: 'https://www.nitt.edu/' },
  { name: 'BITS Pilani', stream: 'Engineering', cutoff: 97.0, seats: 800, fees: 2165000, location: 'Pilani', notes: 'Deemed / Private', website: 'https://www.bits-pilani.ac.in/' },

  // NEET / Medical (Expanded)
  { name: 'Dr DY Patil Medical College, Mumbai', stream: 'NEET', cutoff: 97.0, seats: 250, fees: 2700000, location: 'Mumbai', notes: 'Private medical college' },
  { name: 'Hamdard Institute of Medical Sciences, Delhi', stream: 'NEET', cutoff: 96.0, seats: 150, fees: 7767500, location: 'Delhi', notes: 'Deemed / Private' },
  { name: 'KS Hegde Medical Academy, Mangalore', stream: 'NEET', cutoff: 95.0, seats: 200, fees: 1770000, location: 'Mangalore', notes: 'Private medical college' },
  { name: 'AIIMS Delhi', stream: 'NEET', cutoff: 99.7, seats: 150, fees: 1700, location: 'Delhi', notes: 'Government', website: 'https://www.aiims.edu/' },
  { name: 'CMC Vellore', stream: 'NEET', cutoff: 98.5, seats: 100, fees: 48000, location: 'Vellore', notes: 'Private', website: 'https://www.cmch-vellore.edu/' },
  { name: 'AFMC Pune', stream: 'NEET', cutoff: 98.0, seats: 130, fees: 31000, location: 'Pune', notes: 'Government', website: 'https://afmc.nic.in/' },

  // Business (Expanded)
  { name: 'SRCC Delhi', stream: 'Business', cutoff: 97.5, seats: 700, fees: 90000, location: 'Delhi', notes: 'Government', website: 'https://www.srcc.edu/' },
  { name: 'NMIMS Mumbai', stream: 'Business', cutoff: 96.0, seats: 600, fees: 300000, location: 'Mumbai', notes: 'Private', website: 'https://www.nmims.edu/' },
  { name: 'Christ University', stream: 'Business', cutoff: 95.0, seats: 500, fees: 180000, location: 'Bangalore', notes: 'Private', website: 'https://christuniversity.in/' },

  // Arts (Expanded)
  { name: 'Lady Shri Ram College', stream: 'Arts', cutoff: 96.5, seats: 400, fees: 60000, location: 'Delhi', notes: 'Government', website: 'https://lsr.edu.in/' },
  { name: 'St. Xavier’s Mumbai', stream: 'Arts', cutoff: 95.0, seats: 350, fees: 70000, location: 'Mumbai', notes: 'Private', website: 'https://xaviers.ac/' },
  { name: 'Presidency College', stream: 'Arts', cutoff: 94.0, seats: 300, fees: 50000, location: 'Chennai', notes: 'Government', website: 'https://presidencychennai.edu.in/' },
  { name: 'Cluster University of Jammu', stream: 'Arts', cutoff: 0, seats: 300, fees: 1500, location: 'Jammu', notes: 'Govt, 3 Courses, 2.5★' },
  { name: 'Amity University Online', stream: 'Arts', cutoff: 0, seats: 200, fees: 165000, location: 'Jammu', notes: 'Pvt, 2 Courses, 4.1★' },
  { name: 'Chandigarh University Online', stream: 'Arts', cutoff: 0, seats: 200, fees: 156000, location: 'Gulmarg', notes: 'Pvt, 2 Courses, 4.5★' },
  { name: 'UPES Online', stream: 'Arts', cutoff: 0, seats: 100, fees: 150000, location: 'Jammu', notes: 'Pvt, 4 Courses' },
  { name: 'University of Jammu', stream: 'Arts', cutoff: 0, seats: 300, fees: 0, location: 'Jammu', notes: 'Govt, 3 Courses' },
  { name: 'Islamia College of Science and Commerce', stream: 'Arts', cutoff: 0, seats: 150, fees: 25410, location: 'Srinagar', notes: 'Pvt, 2 Courses, 3.8★' },
  { name: 'Government SPMR College of Commerce', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Jammu', notes: 'Govt, 1 Course' },
  { name: 'Shri Mata Vaishno Devi University', stream: 'Arts', cutoff: 0, seats: 200, fees: 257000, location: 'Jammu', notes: 'Govt, 4 Courses, 4.1★' },
  { name: 'JK College of Computer Science and Business Administration', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Jammu', notes: 'PPP, 1 Course' },
  { name: 'Government Degree College, Baramulla', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Baramulla', notes: 'Govt, 1 Course, 4.5★' },
  { name: 'Gandhi Memorial College', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Srinagar', notes: 'Govt, 1 Course' },
  { name: 'Dogra Degree College', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Jammu', notes: 'Pvt, 1 Course, 5.0★' },
  { name: 'Kashmir University', stream: 'Arts', cutoff: 0, seats: 200, fees: 13820, location: 'Srinagar', notes: 'Govt, 2 Courses, 3.1★' },
  { name: 'Central University of Kashmir', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Srinagar', notes: 'Govt, 1 Course, 3 LPA' },
  { name: 'Institute of Management Sciences', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Jammu', notes: 'Pvt, 1 Course, 5.0★' },
  { name: 'Abdul Ahad Azad Memorial College', stream: 'Arts', cutoff: 0, seats: 100, fees: 1690, location: 'Srinagar', notes: 'Govt, 2 Courses, 2.3★' },
  { name: 'Baba Ghulam Shah Badshah University', stream: 'Arts', cutoff: 0, seats: 100, fees: 81600, location: 'Jammu', notes: 'Govt, 1 Course' },
  { name: 'SSM College of Engineering', stream: 'Arts', cutoff: 0, seats: 100, fees: 90000, location: 'Baramulla', notes: 'Pvt, 1 Course, 3.0★' },
  { name: 'Institute of Management Sciences, Jammu', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Jammu', notes: 'Pvt, 1 Course' },
  { name: 'Cluster University, Srinagar', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Srinagar', notes: 'Govt, 2 Courses' },
  { name: 'Government Degree College, Bemina', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Srinagar', notes: 'Govt, 1 Course' },
  { name: 'Government Degree College, Sopore', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Baramulla', notes: 'Govt, 1 Course, 4.5★' },
  { name: 'S M Iqbal College of Education', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Srinagar', notes: 'Pvt, 1 Course' },
  { name: 'Government Degree College, Anantnag', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Anantnag', notes: 'Govt, 1 Course, 4.2★' },
  { name: 'Bhaskar Degree College', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Udhampur', notes: 'Pvt, 1 Course' },
  { name: 'Trikuta Degree College', stream: 'Arts', cutoff: 0, seats: 100, fees: 0, location: 'Jammu', notes: 'Pvt, 1 Course' },
];

// J&K Government College Search Link (for AI recommendation section)
export const jkCollegeSearchUrl = "https://jkadmission.samarth.ac.in/";
