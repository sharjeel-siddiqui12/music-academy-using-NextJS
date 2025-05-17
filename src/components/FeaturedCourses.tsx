'use client';
import React from "react";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course:Course) => (
            <div key={course.id} className="flex justify-center">
                <BackgroundGradient  className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {course.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {course.description}
                    </p>
                    <p className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                        ${course.price}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Instructor: {course.instructor}
                    </p>
                    <Link
                        href={`/courses/${course.slug}`}
                        className="mt-4 inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow-lg hover:bg-teal-500 transition-colors duration-200"
                    >
                        View Course
                    </Link>
                </div>
                </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
