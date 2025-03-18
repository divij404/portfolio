// lib/data.ts
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink: string;
  imageUrl: string;
}

interface Course {
  id?: number;
  name: string;
  description?: string;
  code?: string;
  credits?: number;
}

export function getProjects(): Project[] {
  try {
    const filePath = path.join(process.cwd(), "data", "projects.csv");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    console.log("Parsed projects:", records); // Debug log

    if (!Array.isArray(records)) {
      console.error("getProjects: Parsed result is not an array:", records);
      return [];
    }

    return records.map((record: any) => ({
      id: Number.parseInt(record.id),
      title: record.title || "",
      description: record.description || "",
      tags: record.tags ? record.tags.split(",") : [],
      link: record.link || "",
      githubLink: record.githubLink || "",
      imageUrl: record.imageUrl || "",
    }));
  } catch (error) {
    console.error("Error in getProjects:", error.message);
    return [];
  }
}

export function getCourses(): Course[] {
  try {
    const filePath = path.join(process.cwd(), "data", "courses.csv");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    console.log("Parsed courses:", records); // Debug log

    if (!Array.isArray(records)) {
      console.error("getCourses: Parsed result is not an array:", records);
      return [];
    }

    return records.map((record: any) => ({
      id: record.id ? Number.parseInt(record.id) : undefined,
      name: record.name || "",
      description: record.description || undefined,
      code: record.code || undefined,
      credits: record.credits ? Number.parseInt(record.credits) : undefined,
    }));
  } catch (error) {
    console.error("Error in getCourses:", error.message);
    return [];
  }
}