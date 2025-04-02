import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import GradientBorder from "@/components/GradientBorder";
import ParticleBackground from "@/components/ParticleBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 z-0" />
      
      <GlassCard className="w-full max-w-md mx-4 z-10" shine glow>
        <div className="p-8">
          <div className="flex items-center mb-6 gap-3">
            <AlertCircle className="h-10 w-10 text-red-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              404 Not Found
            </h1>
          </div>

          <GradientBorder className="mb-6">
            <p className="text-gray-300 p-4">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </GradientBorder>

          <Link href="/">
            <Button className="w-full mt-4 group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
              <Home className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Return to Home
            </Button>
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
