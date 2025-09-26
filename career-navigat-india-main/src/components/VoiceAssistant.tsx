import { useState } from "react";
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
  const [showBackendNotice, setShowBackendNotice] = useState(true);
  const [chat, setChat] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ks", name: "Kashmiri", flag: "🏔️" },
    { code: "doi", name: "Dogri", flag: "🏔️" }
  ];

  const handleVoiceAction = () => {
    alert("Voice Assistant requires Supabase backend integration with ElevenLabs API setup. Please connect to Supabase first to enable voice features!");
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Simulate AI response in selected language
  const getAIResponse = (question: string, lang: string) => {
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

  if (showBackendNotice) {
    return (
      <Card className="fixed bottom-6 right-6 w-80 shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <Bot className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-semibold">AI Voice Assistant</h3>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-primary-light/10 border border-primary/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <Database className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Backend Integration Required</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Connect to Supabase to enable voice features with ElevenLabs API
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-medium">Supported Languages:</p>
              <div className="flex flex-wrap gap-1">
                {languages.map((lang) => (
                  <Badge key={lang.code} variant="outline" className="text-xs">
                    {lang.flag} {lang.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button 
                size="sm" 
                onClick={() => setShowBackendNotice(false)}
              >
                Preview UI
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowBackendNotice(false)}>
                Continue
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 max-w-full shadow-2xl border-primary/20 bg-background/95 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Bot className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-semibold">AI Career Assistant</h3>
          </div>
          <Badge variant="secondary" className="text-xs">Demo Mode</Badge>
        </div>
        <div className="space-y-3">
          {/* Language Selection */}
          <div className="flex items-center space-x-2">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <select 
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="flex-1 text-sm border rounded px-2 py-1 bg-background"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.name}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Chat Window */}
          <div className="text-xs text-muted-foreground border-t pt-2 mb-2">
            <p className="font-medium mb-1">Try asking:</p>
            <ul className="space-y-1">
              <li>• How do I login?</li>
              <li>• How do I register an account?</li>
              <li>• How can I find the Mentors page?</li>
              <li>• How do I access the Courses page?</li>
              <li>• लॉगिन कैसे करें? (Hindi)</li>
              <li>• میں کیسے رجسٹر کر سکتا ہوں؟ (Urdu)</li>
              <li>• डैशबोर्ड कहाँ है? (Hindi)</li>
            </ul>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 h-48 overflow-y-auto flex flex-col gap-2 border border-muted/40">
            {chat.length === 0 && (
              <div className="text-xs text-muted-foreground text-center mt-8">Ask a question in your preferred language!</div>
            )}
            {chat.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-white text-foreground border'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-lg bg-white border text-foreground text-sm animate-pulse">Typing...</div>
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
              className="flex-1 border rounded px-2 py-1 text-sm bg-background"
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

          <Button 
            size="sm" 
            variant="ghost" 
            onClick={() => setShowBackendNotice(true)}
            className="w-full text-xs mt-2"
          >
            View Setup Requirements
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistant;