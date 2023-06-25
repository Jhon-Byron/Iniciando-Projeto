import styles from './title.module.scss'

export default function Title(props) {
  return <div className={styles.title}>{props.children}</div>
}
