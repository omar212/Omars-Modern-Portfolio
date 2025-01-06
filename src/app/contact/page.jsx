"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Send } from "lucide-react";
import ActionButtons from "./ActionButtons";

const ContactPage = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true); // Set loading to true when submitting

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.error("Failed:", error.text);
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state after email is sent or failed
      });
  };

  return (
    <motion.div
      className="min-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            {"Say Hello!".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span role="img" aria-label="waving hand">
              😁
            </span>
          </motion.h1>
        </div>

        <div className="lg:w-1/2 w-full max-w-md">
          <Card className="shadow-2xl hover:shadow-xl bg-lightBackground">
            <CardContent className="p-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <Label>Dear Omar,</Label>
                  <Textarea
                    name="user_message"
                    className="min-h-[150px] resize-none bg-background"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email address:</Label>
                  <Input
                    type="email"
                    className="bg-background"
                    name="user_email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Best Regards,</Label>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="animate-spin">⏳</span> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {success && (
                  <Alert
                    variant="default"
                    className="bg-green-500/10 text-green-500"
                  >
                    <AlertDescription>
                      Message sent successfully!
                    </AlertDescription>
                  </Alert>
                )}

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>
                      Failed to send message. Please try again.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>

          <ActionButtons />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
