import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Shapes, Film, Music, Code, Star } from "lucide-react";

const skills = [
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Anime & Gaming Edits",
    description: "High-energy edits with perfect sync and captivating effects."
  },
  {
    icon: <Shapes className="h-8 w-8 text-primary" />,
    title: "3D Visuals",
    description: "Custom 3D intros and visuals using Blender & After Effects."
  },
  {
    icon: <Film className="h-8 w-8 text-primary" />,
    title: "Short-Form Content",
    description: "Engaging clips tailored for YouTube Shorts, TikTok & Instagram Reels."
  },
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: "Sound Design",
    description: "Cinematic audio mixing and synchronization for immersive experiences."
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Creative Tech",
    description: "Developing custom tools and viewers with Python & PyOpenGL."
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">What I Do Best</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            I combine technical skill with creative passion to deliver visuals that don't just look good, but also tell a story and evoke emotion.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border-2 border-border/50 hover:border-accent transition-colors duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {skill.icon}
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
           <Card className="bg-card border-2 border-accent/50 hover:border-accent transition-colors duration-300 flex flex-col">
               <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <Star className="h-8 w-8 text-accent" />
                 <CardTitle>Why Choose Me?</CardTitle>
               </CardHeader>
               <CardContent className="flex-grow">
                 <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Fast delivery with precision</li>
                    <li>✓ Attention to storytelling & timing</li>
                    <li>✓ Unique effects tailored to your vibe</li>
                    <li>✓ Friendly and reliable communication</li>
                 </ul>
               </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
