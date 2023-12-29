import css from "./Statistics.module.css"

export const Statistics = ({ title, stats }) => {
    const generateRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    };
    
    const statItem = stats.map(({ id, label, percentage }) => {
                    return (
                        <li key={id} className={css.item} style={{backgroundColor: generateRandomColor()}}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    )
                })

    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {statItem}
            </ul>
        </section>
    )
}
