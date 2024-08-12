import css from "./Profile.module.css"

export default function Profile({
    name, tag, location, image, stats: { followers, views, likes } },
) {
    return (
        <div className={css.container}>
            <div className={css.imgBloc}>
                <img className={css.imgWrapper}
                    src={image} alt={name} width="280"
                />
                <p className={css.title}>
                    {name}    </p>
                <p className={css.itemTextTag}>@ {tag} </p>
                <h2 className={css.itemTextLoc}> {location} </h2>
            </div>

            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.itemText}>Followers</span>
                    <span className={css.itemTextdata}> <b>{followers}</b> </span>
                </li>
                <li className={css.item}>
                    <span className={css.itemText}>Views</span>
                    <span className={css.itemTextdata}><b>{views}</b></span>
                </li>
                <li className={css.item}>
                    <span className={css.itemText}>Likes</span>
                    <span className={css.itemTextdata} ><b>{likes}</b></span>
                </li >
            </ul>
        </div>
    );
}

