"use client";
// emailJs-com is a library that allows you to send emails using EmailJS, account is with mikytron98 account
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t3ekb7s", // Replace with your EmailJS service ID
        "template_ee67w0q", // Replace with your EmailJS template ID
        formData,
        "lm9OfIoEX-tsyHewf" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset the form
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Textarea
        name="message"
        placeholder="Tell us about your project"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}