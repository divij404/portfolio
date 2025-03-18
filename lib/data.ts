// lib/data.ts
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getProjects() {
  try {
    const filePath = path.join(dataDir, 'projects.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return parse(fileContent, { columns: true, skip_empty_lines: true });
  } catch (error) {
    console.error('Error parsing projects.csv:', error.message);
    return []; // Fallback to empty array
  }
}

export function getCourses() {
  try {
    const filePath = path.join(dataDir, 'courses.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return parse(fileContent, { columns: true, skip_empty_lines: true });
  } catch (error) {
    console.error('Error parsing courses.csv:', error.message);
    return []; // Fallback to empty array
  }
}