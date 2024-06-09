import styles from './Title.module.scss'

interface IPropsTitle {
    title:string;  
}

const Title =({title}:IPropsTitle) => {
    return (
        <div className={styles.title}>
        {title}
        </div>
    )}
export default Title