import React from 'react'
import { Education } from './About/Education';
import { Trophy, Medal, Star } from 'lucide-react';
const SAMPLE_ACHIEVEMENTS = [
  {
    id: "1",
    year: 2025,
    title: "2nd Place – Department Level Hackathon",
    subtitle: "Srinivas Institute of Technology, Valachil, Mangalore",
    date: "2025",
    icon: <Medal className="w-6 h-6 text-gray-400" />,
  },
  {
    id: "2",
    year: 2025,
    title: "Top 30 Teams Selected (AI Competition)",
    subtitle: "Among 10,000+ participating teams",
    date: "2025",
    icon: <Star className="w-6 h-6 text-blue-500" />,
  },
  {
    id: "3",
    year: 2025,
    title: "Selected for IEEE Hackathon",
    subtitle: "IEEE Student Chapter Competition",
    date: "2025",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Education
        university="Srinivas Institute of Technology, Valachil, Mangalore"
        program="B.E in Artificial Intelligence and Machine Learning"
        timeline="2023 - Present"
        description="Aspiring to become a professional Software Engineer, I'm currently pursuing my Bachelor's degree in Artificial Inteligence and Machine Learning in Srinivas Institute Of Technology Valachil Mangalore. My journey in tech is driven by curiosity and creativity—combining web development with cutting-edge AI research and implementation."
        images={[
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop',
        ]}
        achievements={SAMPLE_ACHIEVEMENTS}
      />
    </main>
  );
}
