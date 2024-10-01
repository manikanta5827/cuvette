import { NextResponse } from 'next/server';
import jobs from './jobsList.json';

export async function GET(req, res) {
  return NextResponse.json({ success: true, data: jobs });
}

export async function POST(req) {
  const { id } = req.body;
  const updatedJobs = jobs.filter((job) => job.id !== id);
  return NextResponse.json({ success: true, data: updatedJobs });
}
