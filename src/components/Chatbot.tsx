import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, FileText, Briefcase, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I'm Thando's assistant. Need help navigating the portfolio?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chatbot", {
        body: { messages: [...messages, userMessage] },
      });

      if (error) {
        console.error("Chatbot error:", error);
        if (error.message.includes("429")) {
          toast.error("Too many requests. Please wait a moment and try again.");
        } else if (error.message.includes("402")) {
          toast.error("Service temporarily unavailable. Please try again later.");
        } else {
          toast.error("Failed to get response. Please try again.");
        }
        return;
      }

      let responseContent = data.choices[0].message.content;
      
      // Check for navigation commands in the response
      const navMatch = responseContent.match(/\[NAVIGATE:(\w+)\]/);
      if (navMatch) {
        const sectionId = navMatch[1];
        // Remove the navigation command from the displayed message
        responseContent = responseContent.replace(/\[NAVIGATE:\w+\]\s*/, '');
        
        // Navigate to the section
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 500);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: responseContent,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    switch (reply) {
      case "cv":
        document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" });
        setMessages((prev) => [
          ...prev,
          { role: "user", content: "View CV" },
          {
            role: "assistant",
            content: "I've scrolled to the CV section. You can download Thando's CV from there!",
          },
        ]);
        break;
      case "experience":
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setMessages((prev) => [
          ...prev,
          { role: "user", content: "Ask about experience" },
          {
            role: "assistant",
            content: "I've scrolled to the experience section. Thando has diverse experience across customer service, education, and emergency response. Would you like to know about any specific role?",
          },
        ]);
        break;
      case "contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setMessages((prev) => [
          ...prev,
          { role: "user", content: "Contact Thando" },
          {
            role: "assistant",
            content: "I've scrolled to the contact section. You can send Thando a message directly from there or reach out via email at thandowandilenonxuba@gmail.com or phone at 073 864 2913.",
          },
        ]);
        break;
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent hover:opacity-90 shadow-professional transition-all hover:scale-110 z-50"
          aria-label="Open chatbot"
        >
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[600px] flex flex-col shadow-professional border-2 border-primary/20 z-50">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground flex flex-row items-center justify-between p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Thando's Assistant</CardTitle>
                <p className="text-xs text-primary-foreground/80">Here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20 text-primary-foreground"
              aria-label="Close chatbot"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
            {/* Messages */}
            <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply("cv")}
                  className="text-xs"
                >
                  <FileText className="h-3 w-3 mr-1" />
                  View CV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply("experience")}
                  className="text-xs"
                >
                  <Briefcase className="h-3 w-3 mr-1" />
                  Ask about experience
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply("contact")}
                  className="text-xs"
                >
                  <Mail className="h-3 w-3 mr-1" />
                  Contact Thando
                </Button>
              </div>
            )}

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !isLoading && sendMessage(input)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-br from-primary to-accent hover:opacity-90"
                size="icon"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
