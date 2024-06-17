import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul>
      <li>
        <div>
          <img src={avatar} alt="Avatar" width="48" />
          <p>{`${name}`}</p>
          <p>{`${isOnline}`}</p>
        </div>
      </li>
      <li>
        <div>
          <img src="" alt="Avatar" width="48" />
          <p>Friend name</p>
          <p>Friend status</p>
        </div>
      </li>
      <li>
        <div>
          <img src="" alt="Avatar" width="48" />
          <p>Friend name</p>
          <p>Friend status</p>
        </div>
      </li>
      <li>
        <div>
          <img src="" alt="Avatar" width="48" />
          <p>Friend name</p>
          <p>Friend status</p>
        </div>
      </li>
      <li>
        <div>
          <img src="" alt="Avatar" width="48" />
          <p>Friend name</p>
          <p>Friend status</p>
        </div>
      </li>
    </ul>
  );
}

export default FriendList;
