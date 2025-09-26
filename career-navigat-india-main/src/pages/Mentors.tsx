import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UserCircle } from "lucide-react";

const mentors = [
	{
		name: "Dr. Anjali Sharma",
		subject: "Physics",
		qualification: "PhD in Physics, IIT Delhi",
		description: "10+ years teaching JEE/NEET Physics. Author of 2 books.",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		phone: "9876543210",
		email: "anjali.sharma@email.com",
	},
	{
		name: "Prof. Rajeev Kumar",
		subject: "Mathematics",
		qualification: "MSc, PhD in Mathematics, IISc Bangalore",
		description: "Specialist in Calculus and Algebra. 15 years experience.",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		phone: "9876543211",
		email: "rajeev.kumar@email.com",
	},
	{
		name: "Ms. Neha Gupta",
		subject: "Chemistry",
		qualification: "MSc Chemistry, DU",
		description: "Expert in Organic Chemistry. 8 years of NEET coaching.",
		avatar: "https://randomuser.me/api/portraits/women/65.jpg",
		phone: "9876543212",
		email: "neha.gupta@email.com",
	},
	{
		name: "Mr. Amit Verma",
		subject: "Biology",
		qualification: "MSc Botany, JNU",
		description: "NEET Biology mentor. Focus on Genetics and Ecology.",
		avatar: "https://randomuser.me/api/portraits/men/41.jpg",
		phone: "9876543213",
		email: "amit.verma@email.com",
	},
	{
		name: "Dr. Sunil Joshi",
		subject: "English",
		qualification: "PhD in English Literature, JMI",
		description: "English communication and literature expert.",
		avatar: "https://randomuser.me/api/portraits/men/51.jpg",
		phone: "9876543214",
		email: "sunil.joshi@email.com",
	},
	{
		name: "Ms. Priya Singh",
		subject: "Computer Science",
		qualification: "MTech, NIT Srinagar",
		description: "Programming and Data Structures mentor. 6 years experience.",
		avatar: "https://randomuser.me/api/portraits/women/68.jpg",
		phone: "9876543215",
		email: "priya.singh@email.com",
	},
	{
		name: "Mr. Rakesh Bhat",
		subject: "History",
		qualification: "MA History, University of Jammu",
		description: "History and Civics for competitive exams.",
		avatar: "https://randomuser.me/api/portraits/men/61.jpg",
		phone: "9876543216",
		email: "rakesh.bhat@email.com",
	},
	{
		name: "Dr. Meenakshi Kaul",
		subject: "Economics",
		qualification: "PhD in Economics, AMU",
		description: "Economics and Business Studies mentor.",
		avatar: "https://randomuser.me/api/portraits/women/72.jpg",
		phone: "9876543217",
		email: "meenakshi.kaul@email.com",
	},
	{
		name: "Mr. Imran Dar",
		subject: "Geography",
		qualification: "MSc Geography, Kashmir University",
		description: "Geography for UPSC/JKPSC aspirants.",
		avatar: "https://randomuser.me/api/portraits/men/73.jpg",
		phone: "9876543218",
		email: "imran.dar@email.com",
	},
	{
		name: "Ms. Shweta Pandit",
		subject: "Political Science",
		qualification: "MA Political Science, DU",
		description: "Political Science and Current Affairs expert.",
		avatar: "https://randomuser.me/api/portraits/women/74.jpg",
		phone: "9876543219",
		email: "shweta.pandit@email.com",
	},
];

const cardColors = [
	"from-blue-500 to-cyan-400",
	"from-purple-500 to-pink-400",
	"from-green-500 to-lime-400",
	"from-yellow-400 to-orange-400",
	"from-pink-500 to-red-400",
	"from-indigo-500 to-blue-400",
	"from-teal-500 to-green-400",
	"from-rose-500 to-pink-400",
	"from-orange-500 to-yellow-400",
	"from-cyan-500 to-blue-400",
];

const subjects = [
	"All",
	...Array.from(new Set(mentors.map((m) => m.subject))),
];

const username = "User"; // Replace with dynamic username if available

const Mentors = () => {
	const [showChat, setShowChat] = useState(false);
	// Chat state
	const [chatInput, setChatInput] = useState("");
	const [chatMessages, setChatMessages] = useState<{
		from: "user" | "mentor";
		text: string;
	}[]>([]);
	const [selectedMentor, setSelectedMentor] = useState(null as null | typeof mentors[0]);
	const [showDialog, setShowDialog] = useState(false);
	// Booking form state
	const [form, setForm] = useState({
		date: "",
		time: "",
		slot: "",
		venue: "",
		mode: "Online",
		message: "",
	});

	// Subject filter state
	const [selectedSubject, setSelectedSubject] = useState("All");
	const filteredMentors =
		selectedSubject === "All"
			? mentors
			: mentors.filter((m) => m.subject === selectedSubject);

	const handleChat = (mentor: typeof mentors[0]) => {
		setSelectedMentor(mentor);
		setShowChat(true);
		setChatMessages([
			{ from: "mentor", text: `Hi! This is ${mentor.name}. How can I help you?` },
		]);
		setChatInput("");
	};
	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (!chatInput.trim()) return;
		setChatMessages((msgs) => [
			...msgs,
			{ from: "user", text: chatInput },
			{
				from: "mentor",
				text: `For further discussion, please contact me at: \nPhone: 9876543210 \nEmail: mentor@email.com`,
			},
		]);
		setChatInput("");
	};
	const handleBook = (mentor: typeof mentors[0]) => {
		setSelectedMentor(mentor);
		setShowDialog(true);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 py-10">
			<div className="pt-8">
				<h1 className="text-4xl font-extrabold mb-4 text-center text-gray-900 drop-shadow-lg">
					Meet Our Mentors
				</h1>
				<p className="text-center text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
					Our handpicked mentors are experts in their fields, passionate about guiding
					students to success. Connect and learn from the best!
				</p>

				{/* Subject Filter as Highlighted Dropdown */}
				<div className="flex justify-center mb-10">
					<div className="bg-white/90 border-2 border-blue-400 rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 transition-all duration-200">
						<span className="font-semibold text-blue-700 text-base mr-2">
							Filter by Subject:
						</span>
						<Select value={selectedSubject} onValueChange={setSelectedSubject}>
							<SelectTrigger className="w-56 font-semibold text-blue-700 bg-blue-50 border-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow">
								<SelectValue placeholder="Choose Subject" />
							</SelectTrigger>
							<SelectContent>
								{subjects.map((subject) => (
									<SelectItem key={subject} value={subject} className="capitalize">
										{subject}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
					{filteredMentors.map((mentor, idx) => (
						<Card
							key={idx}
							className={`relative overflow-hidden shadow-xl border-0 bg-gradient-to-br ${cardColors[idx % cardColors.length]} text-white hover:scale-105 transition-transform duration-300`}
						>
							<div className="absolute right-0 top-0 opacity-10 text-9xl select-none pointer-events-none">
								🎓
							</div>
							<CardHeader className="flex flex-row items-center gap-4">
								<Avatar className="h-14 w-14 border-2 border-white shadow-lg">
									{mentor.avatar ? (
										<img
											src={mentor.avatar}
											alt={mentor.name}
											className="h-14 w-14 rounded-full object-cover"
										/>
									) : (
										<AvatarFallback>
											{mentor.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
										</AvatarFallback>
									)}
								</Avatar>
								<div>
									<CardTitle className="text-2xl font-bold drop-shadow-sm flex items-center gap-2">
										{mentor.name}
										<span className="ml-2 px-2 py-1 rounded-full bg-white/30 text-xs font-semibold uppercase tracking-wide shadow">
											{mentor.subject}
										</span>
									</CardTitle>
									<div className="text-sm font-medium opacity-90">
										{mentor.qualification}
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className="mb-2 text-sm opacity-90">{mentor.description}</div>
								<div className="flex gap-2 mt-4">
									<Button variant="secondary" onClick={() => handleBook(mentor)}>
										Book Session
									</Button>
									<Button
										variant="default"
										className="bg-white text-blue-600 hover:bg-blue-100 border border-blue-400 shadow font-semibold"
										onClick={() => handleChat(mentor)}
									>
										💬 Chat
									</Button>
									{/* Chat Dialog */}
									<Dialog open={showChat} onOpenChange={setShowChat}>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>Chat with {selectedMentor?.name}</DialogTitle>
											</DialogHeader>
											<div className="flex flex-col gap-2 max-h-60 overflow-y-auto mb-2">
												{chatMessages.map((msg, i) => (
													<div
														key={i}
														className={msg.from === "user" ? "text-right" : "text-left"}
													>
														<span
															className={
																msg.from === "user"
																	? "inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg mb-1"
																	: "inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-lg mb-1"
															}
														>
															{msg.text}
														</span>
													</div>
												))}
											</div>
											<form
												className="flex gap-2"
												onSubmit={(e) => {
													e.preventDefault();
													if (!chatInput.trim() || !selectedMentor) return;
													setChatMessages((msgs) => [
														...msgs,
														{ from: "user", text: chatInput },
														{
															from: "mentor",
															text: `For further discussion, please contact me at:\nPhone: ${selectedMentor.phone}\nEmail: ${selectedMentor.email}`,
														},
													]);
													setChatInput("");
												}}
											>
												<Input
													value={chatInput}
													onChange={(e) => setChatInput(e.target.value)}
													placeholder="Type your message..."
													className="flex-1"
												/>
												<Button type="submit">Send</Button>
											</form>
										</DialogContent>
									</Dialog>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Booking Dialog */}
				<Dialog open={showDialog} onOpenChange={setShowDialog}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Book Session with {selectedMentor?.name}</DialogTitle>
						</DialogHeader>
						<form className="space-y-3">
							<div className="flex gap-2">
								<Input
									type="date"
									value={form.date}
									onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
									required
								/>
								<Input
									type="time"
									value={form.time}
									onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
									required
								/>
							</div>
							<Input
								placeholder="Slot (e.g. 10:00-11:00 AM)"
								value={form.slot}
								onChange={(e) => setForm((f) => ({ ...f, slot: e.target.value }))}
								required
							/>
							<Input
								placeholder="Venue (e.g. Zoom, Google Meet, or address)"
								value={form.venue}
								onChange={(e) => setForm((f) => ({ ...f, venue: e.target.value }))}
								required
							/>
							<Select value={form.mode} onValueChange={(v) => setForm((f) => ({ ...f, mode: v }))}>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="Online">Online</SelectItem>
									<SelectItem value="Offline">Offline</SelectItem>
								</SelectContent>
							</Select>
							<Textarea
								placeholder="Message (optional)"
								value={form.message}
								onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
							/>
							<div className="flex justify-end gap-2 pt-2">
								<DialogClose asChild>
									<Button type="button" variant="outline">
										Cancel
									</Button>
								</DialogClose>
								<Button type="submit">Book Now</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default Mentors;
