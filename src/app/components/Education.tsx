'use client';

import React from "react"

import Image from 'next/image';
import { Award } from 'lucide-react';

interface Achievement {
  id: string;
  year: number;
  title: string;
  subtitle: string;
  date: string;
  icon?: React.ReactNode;
}

interface EducationProps {
  university: string;
  program: string;
  timeline: string;
  description: string;
  images: string[];
  achievements: Achievement[];
}

export function Education({
  university,
  program,
  timeline,
  description,
  images,
  achievements,
}: EducationProps) {
  // Group achievements by year
  const achievementsByYear = achievements.reduce(
    (acc, achievement) => {
      const year = achievement.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(achievement);
      return acc;
    },
    {} as Record<number, Achievement[]>
  );

  const sortedYears = Object.keys(achievementsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="w-full bg-background py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Get to know more about my educational background.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Education Info & Images */}
          <div className="space-y-8">
            {/* Timeline */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                {timeline}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {university}
              </h3>
              <p className="text-base text-muted-foreground">{program}</p>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-muted-foreground">
              {description}
            </p>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg overflow-hidden bg-muted ${
                    index === 0 ? 'col-span-1 row-span-2' : ''
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Education image ${index + 1}`}
                    width={400}
                    height={index === 0 ? 500 : 240}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Achievements */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Achievements
            </h3>
            <p className="text-base text-muted-foreground mb-8">
              Some of my achievements during my study.
            </p>

            {/* Achievements by Year */}
            <div className="space-y-8">
              {sortedYears.map((year) => (
                <div key={year}>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    {year}
                  </h4>
                  <div className="space-y-4">
                    {achievementsByYear[year].map((achievement) => (
                      <div
                        key={achievement.id}
                        className="bg-card border border-border rounded-lg p-5 flex gap-4 hover:shadow-md transition-shadow"
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {achievement.icon ? (
                            achievement.icon
                          ) : (
                            <Award className="w-6 h-6 text-primary" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-foreground text-sm md:text-base leading-tight">
                            {achievement.title}
                          </h5>
                          <p className="text-sm text-muted-foreground mt-1">
                            {achievement.subtitle}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
