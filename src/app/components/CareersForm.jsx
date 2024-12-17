"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function CareersForm() {
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    if (file) {
      formData.append("resume", file);
    }

    try {
      const response = await fetch("/api/submit-application", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll be in touch soon!",
      });
      router.push("/"); // Redirect to home page or a thank you page
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto" id="application-form">
      <CardHeader>
        <CardTitle className="text-2xl">Apply Now</CardTitle>
        <CardDescription>
          Fill out the form below to apply for a position with us.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position Applied For</Label>
            <Input id="position" name="position" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Cover Letter</Label>
            <Textarea id="message" name="message" rows={5} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume">Resume</Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </div>
          <CardFooter className="px-0">
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-neutral-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
