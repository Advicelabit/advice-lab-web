import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@advicelab.com.au",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "1300 123 456",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Sydney, Australia",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri 9am-5pm AEST",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Ready to scale your practice? Let's discuss how we can help.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollAnimation animation="fade-right">
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="transition-all duration-300 focus:scale-[1.01]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 hover-lift p-3 rounded-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Book Demo Card */}
                <div className="p-8 gradient-primary rounded-3xl text-primary-foreground hover-lift">
                  <h3 className="text-xl font-display font-bold mb-4">Book a Demo</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    See how Advice Lab can transform your practice with a personalized demo.
                  </p>
                  <Button variant="white" className="hover:scale-105 transition-transform">Schedule Now</Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
