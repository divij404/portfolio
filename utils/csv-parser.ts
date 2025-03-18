import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  githubLink: string
  imageUrl: string
}

// Define the Course type
interface Course {
  id?: number // Optional ID field
  name: string // Required course name
  description?: string // Optional description
  code?: string // Optional course code
  credits?: number // Optional credits
}

export function getProjects(): Project[] {
  // Get the absolute path to the CSV file
  const filePath = path.join(process.cwd(), "data", "projects.csv")

  // Read the CSV file
  const fileContent = fs.readFileSync(filePath, "utf8")

  // Parse the CSV content
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  })

  // Process the records to ensure correct types
  return records.map((record: any) => ({
    id: Number.parseInt(record.id),
    title: record.title,
    description: record.description,
    tags: record.tags.split(","),
    link: record.link,
    githubLink: record.githubLink,
    imageUrl: record.imageUrl,
  }))
}

export function getCourses(): Course[] {
  // Define the file path for courses.csv
  const filePath = path.join(process.cwd(), "data", "courses.csv")

  // Read the file content
  const fileContent = fs.readFileSync(filePath, "utf8")

  // Parse the CSV content with headers
  const records = parse(fileContent, {
    columns: true, // Treat the first row as headers
    skip_empty_lines: true, // Skip empty lines
    trim: true, // Trim whitespace from values
  })

  // Process the records to ensure correct types
  return records.map((record: any) => ({
    id: record.id ? Number.parseInt(record.id) : undefined, // Parse ID if it exists
    name: record.name || "", // Ensure name is a string, default to empty if missing
    description: record.description || undefined, // Optional description
    code: record.code || undefined, // Optional course code (e.g., "CS101")
    credits: record.credits ? Number.parseInt(record.credits) : undefined, // Optional credits
  }))
}

