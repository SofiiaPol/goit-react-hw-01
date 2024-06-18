import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.trlist}>
          <th className={styles.tritem}>Type</th>
          <th className={styles.tritem}>Amount</th>
          <th className={styles.tritem}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.trslist}>
            <td className={styles.tditem}>{type}</td>
            <td className={styles.tditem}>{amount}</td>
            <td className={styles.tditem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
