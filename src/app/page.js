'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles/Home.module.css'; // Importing the CSS module
import Image from 'next/image';
export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api');
        setJobs(response.data.data);
      } catch (error) {
        console.error('Failed to fetch jobs', error);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = async (id) => {
    try {
      await axios.post('/api', { id });
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error('Failed to apply for job', error);
    }
  };

  return (
    <div className={styles.container}>
      <Image
        src="/logo.jpeg"
        alt="Company Logo"
        className={styles.logo}
        width={250}
        height={150}
      />
      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h3>{job.Job}</h3>
            <p>
              <strong>Company</strong>: {job.Company}
            </p>
            <p>
              <strong>Location</strong>: {job.Location}
            </p>
            <p>
              <strong>Skills</strong>: {job.Skills.join(', ')}
            </p>
            <p>
              <strong>Stipend</strong>: ${job.Stipend}
            </p>
            <p>
              <strong>Duration</strong>: {job.Duration}
            </p>

            <button
              className={styles.button}
              onClick={() => handleApply(job.id)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
