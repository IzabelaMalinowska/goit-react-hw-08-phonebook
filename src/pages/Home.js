import { blue} from "@mui/material/colors";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 0,
  },
  titlePhonebook: {
    fontWeight: 700,
    fontSize: 60,
    textAlign: 'center',
    color: blue[500],
    marginTop: 20,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to </h1>
      <h2 style={styles.titlePhonebook}>PHONEBOOK</h2>
    </div>
  );
}
