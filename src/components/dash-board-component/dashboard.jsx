import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import SeverityBarChart from '../chart-component/Bar_chart';
import CategoryPieChart from '../chart-component/data_chart';
import axios from 'axios';
import ThreatList from '../chart-component/listview/threat_list';
import Navbar from '../nav-bar/navbar';

const Dashboard = () => {
  const [threatStats, setThreatStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/threats/stats')
      .then(res => {
        setThreatStats(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!threatStats) return <p>No data available</p>;

  const { total_threats, category_counts, severity_counts } = threatStats;

  return (
    <div className={`${styles.dashboard} ${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
      <main className={styles.mainContent}>
        <Navbar theme={theme} setTheme={setTheme} />

        <section className={styles.statsRow}>
          <div className={styles.statCard}>
            <h4>Total Threats</h4>
            <p>{total_threats}</p>
          </div>
          <div className={styles.statCard}>
            <h4>Profit</h4>
            <p>$10,499.93</p>
          </div>
          <div className={styles.statCard}>
            <h4>Total Views</h4>
            <p>5,211,832</p>
          </div>
          <div className={styles.statCard}>
            <h4>Conversion Rate</h4>
            <p>4.83%</p>
          </div>
        </section>

        <section className={styles.chartSection}>
          <div className={styles.chartCard}>
            <CategoryPieChart data={category_counts} />
          </div>

          <div className={styles.chartCard}>
            <h4>Severity Distribution</h4>
            <SeverityBarChart data={severity_counts} />
          </div>
        </section>
        <section>
          <ThreatList />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
