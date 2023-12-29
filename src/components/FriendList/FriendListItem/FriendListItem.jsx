import css from "./FriendListItem.module.css"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? "online" : "offline";
    return (
        <li className={css.item}>
            <span className={css[status]}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}