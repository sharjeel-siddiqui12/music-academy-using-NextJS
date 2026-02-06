// import courseData from "../../../data/music_courses.json";
import courseData from "@/data/music_courses.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

interface Params {
  params: { slug: string };
}

export default async function CoursePage({ params }: Params) {
  const course = courseData.courses.find((c: Course) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="mb-2 text-lg">{course.description}</p>
      <p className="mb-2 text-xl font-semibold">${course.price}</p>
      <p className="mb-2 text-md">Instructor: {course.instructor}</p>
      <Link href="/" className="mt-6 px-6 py-2 bg-teal-600 rounded-full shadow-lg hover:bg-teal-500 transition-colors">Back to Home</Link>
    </div>
  );
}
