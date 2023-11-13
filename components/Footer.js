import { Link } from "react-router-native";
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>About</Text>
        </Link> 
        <Link
          to="/"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Home</Text>
        </Link>  
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  btn: {
    margin: '10px',
  }
    
});