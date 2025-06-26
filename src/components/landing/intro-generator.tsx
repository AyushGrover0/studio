"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { generateIntroAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  intro: null,
  message: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Intro
    </Button>
  );
}

export function IntroGenerator() {
  const [state, formAction] = useFormState(generateIntroAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.errors) {
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
        })
    }
  }, [state, toast])

  return (
    <section id="ai-generator" className="py-12 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">AI-Powered Intro Generator</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
            Need a catchy intro for your portfolio? Let AI craft a unique, anime-style pitch for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="border-2 border-border shadow-lg">
            <CardHeader>
              <CardTitle>Describe Your Work</CardTitle>
              <CardDescription>Provide some details for the AI to work its magic.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="portfolioDescription">Portfolio Description</Label>
                  <Textarea
                    id="portfolioDescription"
                    name="portfolioDescription"
                    placeholder="e.g., I specialize in fast-paced action scenes and emotional storytelling..."
                    required
                    className="min-h-[100px]"
                  />
                  {state.errors?.portfolioDescription && <p className="text-sm text-destructive">{state.errors.portfolioDescription[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input id="targetAudience" name="targetAudience" placeholder="e.g., Indie game developers, YouTubers" required />
                  {state.errors?.targetAudience && <p className="text-sm text-destructive">{state.errors.targetAudience[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="desiredTone">Desired Tone</Label>
                  <Input id="desiredTone" name="desiredTone" placeholder="e.g., Epic, mysterious, energetic" required />
                   {state.errors?.desiredTone && <p className="text-sm text-destructive">{state.errors.desiredTone[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg shadow-primary/10 min-h-[400px]">
            <CardHeader>
              <CardTitle>Your Generated Intro</CardTitle>
              <CardDescription>Your personalized anime-style intro will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
              {state.intro ? (
                <div className="prose prose-invert text-primary-foreground/90 p-4 bg-background/50 rounded-md">
                  <p>{state.intro}</p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 rounded-md border-2 border-dashed border-border">
                  <p className="text-muted-foreground">Awaiting input...</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
