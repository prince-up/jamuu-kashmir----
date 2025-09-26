import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Bot,
  Languages,
  MessageCircle,
  Database
} from "lucide-react";

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("Hindi");
  const [isMuted, setIsMuted] = useState(false);
  // Remove backend notice, always show chat UI
  const [chat, setChat] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // for maximize/minimize
  const [darkMode, setDarkMode] = useState(false); // for chat window theme

  const languages = [
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ks", name: "Kashmiri", flag: "🏔️" },
    { code: "doi", name: "Dogri", flag: "🏔️" }
  ];

  // Simulate voice chat: for Urdu, Arabic, Kashmiri, Dogri, show a fake voice-to-text; for Hindi/English, focus input
  const handleVoiceAction = () => {
    if (["Urdu", "Arabic", "Kashmiri", "Dogri"].includes(currentLanguage)) {
      // Simulate voice input (demo)
      setLoading(true);
      setTimeout(() => {
        setChat((prev) => [...prev, { role: 'user', text: "[Voice message recognized]" }]);
        setTimeout(() => {
          setChat((prev) => [...prev, { role: 'ai', text: getAIResponse("[Voice message recognized]", currentLanguage) }]);
          setLoading(false);
        }, 1000);
      }, 1200);
    } else {
      // For Hindi/English, focus input for typing
  const inputBox = document.querySelector('input[placeholder^="Type your question"]');
  if (inputBox) (inputBox as HTMLInputElement).focus();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Custom chatbot Q&A pairs
  const customQA = [
    { q: /\bhi\b|\bhello\b/i, a: "Welcome! How can I help you today?" },
    { q: /how to login/i, a: "Go to the Login button and click it." },
    { q: /how to register/i, a: "Go to Login and click 'Create Account'." },
    { q: /about( section)?/i, a: "Go to Dashboard and see in the navbar for About section." },
    { q: /how to crack test/i, a: "Sorry sir, there is no chance." },
    { q: /what is your name/i, a: "I am your AI Career Assistant." },
    { q: /how to contact/i, a: "Go to the Contact page from the navbar." },
    { q: /how to use/i, a: "Just type your question or use voice chat!" },
    { q: /features/i, a: "See the Features page in the navbar for all platform features." },
    { q: /mentor/i, a: "You can find mentors on the Mentors page from the navbar." },
  ];

  // Simulate AI response in selected language
  const getAIResponse = (question: string, lang: string) => {
    // Check for custom Q&A
    for (const qa of customQA) {
      if (qa.q.test(question)) return qa.a;
    }
    switch (lang) {
      case "Hindi":
        return "यह एक डेमो उत्तर है। कृपया Supabase और ElevenLabs एकीकरण सक्षम करें।";
      case "English":
        return "This is a demo answer. Please enable Supabase and ElevenLabs integration.";
      case "Urdu":
        return "یہ ایک ڈیمو جواب ہے۔ براہ کرم سپابیس اور الیون لیبز انضمام کو فعال کریں۔";
      case "Dogri":
        return "इह डेमो उत्तर ऐ। कृपया Supabase ते ElevenLabs एकीकरण सक्षम करो।";
      case "Kashmiri":
        return "یہ ایک ڈیمو جواب ہے۔ براہ کرم سپابیس اور الیون لیبز انضمام کو فعال کریں۔";
      default:
        return "This is a demo answer.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setChat([...chat, { role: 'user', text: input }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setChat((prev) => [...prev, { role: 'ai', text: getAIResponse(input, currentLanguage) }]);
      setLoading(false);
    }, 1000);
  };

  const FloatingButton = (
    <button
      className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:bg-accent transition-all border-4 border-white"
      onClick={() => setOpen((o) => !o)}
      aria-label={open ? "Minimize Chatbot" : "Open Chatbot"}
      style={{ outline: "none" }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Bot className="h-7 w-7" />
      </motion.div>
    </button>
  );

  return (
    <>
      {FloatingButton}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-24 right-6 z-50"
            style={{ maxWidth: 400, width: '100%' }}
          >
            <Card className={`w-96 max-w-full shadow-2xl border-primary/20 backdrop-blur-sm ${darkMode ? 'bg-[#18181b] text-white' : 'bg-background/95 text-foreground'}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Bot className={`h-5 w-5 ${darkMode ? 'text-accent' : 'text-primary'} mr-2`} />
                    <h3 className="font-semibold">AI Career Assistant</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Demo Mode</Badge>
                    <Button size="icon" variant="ghost" aria-label="Toggle dark mode" onClick={() => setDarkMode(d => !d)}>
                      {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" /></svg>
                      )}
                    </Button>
                  </div>
                </div>
                <div className="space-y-3">
                  {/* Language Selection */}
                  <div className="flex items-center space-x-2">
                    <Languages className={`h-4 w-4 ${darkMode ? 'text-muted' : 'text-muted-foreground'}`} />
                    <select 
                      value={currentLanguage}
                      onChange={(e) => setCurrentLanguage(e.target.value)}
                      className={`flex-1 text-sm border rounded px-2 py-1 ${darkMode ? 'bg-[#232326] text-white border-[#333]' : 'bg-background text-foreground'}`}
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.name}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Chat Window */}
                  <div className={`rounded-lg p-3 h-48 overflow-y-auto flex flex-col gap-2 border ${darkMode ? 'bg-[#232326] border-[#333]' : 'bg-muted/30 border-muted/40'}`}>
                    {chat.length === 0 && (
                      <div className={`text-xs ${darkMode ? 'text-muted' : 'text-muted-foreground'} text-center mt-8`}>Ask a question...</div>
                    )}
                    {chat.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${msg.role === 'user' ? (darkMode ? 'bg-accent text-white' : 'bg-primary text-white') : (darkMode ? 'bg-[#18181b] text-white border border-[#333]' : 'bg-white text-foreground border')}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <div className="flex justify-start">
                        <div className={`px-3 py-2 rounded-lg border text-sm animate-pulse ${darkMode ? 'bg-[#18181b] text-white border-[#333]' : 'bg-white text-foreground border'}`}>Typing...</div>
                      </div>
                    )}
                  </div>
                  {/* Input Box */}
                  <form
                    className="flex gap-2 pt-2"
                    onSubmit={e => {
                      e.preventDefault();
                      handleSend();
                    }}
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      placeholder={`Type your question in ${currentLanguage}...`}
                      className={`flex-1 border rounded px-2 py-1 text-sm ${darkMode ? 'bg-[#232326] text-white border-[#333]' : 'bg-background text-foreground'}`}
                      disabled={loading}
                    />
                    <Button type="submit" size="sm" disabled={loading || !input.trim()}>
                      Send
                    </Button>
                  </form>
                  <div className="flex items-center space-x-2 pt-2">
                    <Button
                      size="sm"
                      variant={isListening ? "destructive" : "outline"}
                      onClick={handleVoiceAction}
                      className="flex-1"
                    >
                      {isListening ? (
                        <>
                          <MicOff className="h-4 w-4 mr-2" />
                          Stop Listening
                        </>
                      ) : (
                        <>
                          <Mic className="h-4 w-4 mr-2" />
                          Start Voice Chat
                        </>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // ...existing code...
};

export default VoiceAssistant;