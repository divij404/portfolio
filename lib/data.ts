// lib/data.ts
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getProjects() {
  const filePath = path.join(dataDir, 'projects.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return parse(fileContent, { columns: true });
}

export function getCourses() {
  const filePath = path.join(dataDir, 'courses.csv');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return parse(fileContent, { columns: true });
}