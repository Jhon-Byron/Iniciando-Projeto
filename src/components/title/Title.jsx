import styles from './title.module.css'

export default function Title(props) {
  return <div className={styles.title}>{props.children}</div>
}
