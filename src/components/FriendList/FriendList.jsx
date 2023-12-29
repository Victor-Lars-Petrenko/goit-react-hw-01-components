import css from "./FriendList.module.css"
import { FriendListItem } from "./FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    const friendsMarkup = friends.map(({ avatar, name, isOnline, id }) => {
        return (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        )
    })

    return (
        <ul className={css.friendList}>
            {friendsMarkup}
        </ul>
    )
}