import { useState } from 'react';
import { StyleSheet, View, Image, Text, Button} from 'react-native';

export default function ProfileScreen() {
    const [IsOnline, setIsOnline] = useState<boolean>(true);
    return (
        <View style={styles.container}>
            <Image source={{uri: ''}} style= {styles.avatar}/>
            <Text style={styles.name}>Artem</Text>
            <Text style={styles.email}>Artemv@gmail.com</Text> 
            <Text>{IsOnline ? 'Online' : 'Offline'}</Text>
            <Button title={IsOnline ? 'Set Offlinme' : 'SwtOnline'} onPress={() => setIsOnline(!IsOnline)}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {},
    avatar: {},
    name: {},
    email: {},
    button: {}
})