import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Film, Music, Star, ImageIcon } from "lucide-react";

const skills = [
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Anime & Gaming Edits",
    description: "High-energy edits with perfect sync and captivating effects."
  },
  {
    icon: <Film className="h-8 w-8 text-primary" />,
    title: "Short-Form Content",
    description: "Engaging clips tailored for YouTube & Instagram."
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails that boost click-through rates."
  },
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    title: "Sound Design",
    description: "Cinematic audio mixing and synchronization for immersive experiences."
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Skillset</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            From gaming montages and anime edits, I specialize in high-impact visuals that leave a lasting impression.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index}>
              <Card className="glass-card border border-border/30 flex flex-col neon-glow-primary">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {skill.icon}
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
           <div>
             <Card className="glass-card border-primary/50 flex flex-col neon-glow-primary">
                 <CardHeader className="flex flex-row items-center gap-4 pb-2">
                   <Star className="h-8 w-8 text-primary" />
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
      </div>
    </section>
  );
}
