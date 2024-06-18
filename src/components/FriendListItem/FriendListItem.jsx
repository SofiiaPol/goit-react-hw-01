import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.fricontainer}>
      <img
        className={styles.friimg}
        src={`${avatar}`}
        alt={`${name}`}
        width="48"
      />
      <p className={styles.friname}>{`${name}`}</p>
      <p className={styles[`${isOnline ? 'green' : 'red'}`]}>{`${
        isOnline ? 'Online' : 'Offline'
      }`}</p>
    </div>
  );
}

export default FriendListItem;
