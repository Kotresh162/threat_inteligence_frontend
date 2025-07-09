import CategoryPieChart from '../chart-component/data_chart';
import SeverityBarChart from '../chart-component/Bar_chart';
import styles from './Home_page.module.css'; // <-- import the CSS module

function HomePage() {
  return (
    <>
      <div className={styles.threaAnalusis}>
        <div className={styles.boxChartSection}>
          <div className={styles.infoBoxes}>
            <div className={styles.box}>Box 1</div>
            <div className={styles.box}>Box 2</div>
            <div className={styles.box}>Box 3</div>
            <div className={styles.box}>Box 4</div>
          </div>
          <div className={styles.charts}>
            <CategoryPieChart />
            <SeverityBarChart />
          </div>
        </div>
      </div>

      <div className={styles.threts}>
        {/* Additional threat-related content here */}
      </div>
    </>
  );
}

export default HomePage;
