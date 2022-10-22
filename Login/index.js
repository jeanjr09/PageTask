import {
    View,
    Image,
    StyleSheet,
    Text,  
} from 'react-native';
import { Button } from "@rneui/themed";

export default function Login() {
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Image 
                 source={require('../assets/logo.svg')}
                 style={{ width: '100%', height: '50%' }}
                 resizeMode="" />
            <View>
                <Text style={styles.containerForm}></Text>
                    <Text style={styles.title}>Selecione o seu perfil abaixo para acessar sua conta:</Text>

                    <Button title="Responsável" style={{ width: '70%', alignSelf: 'center', paddingTop: 30}}/>
                    <Button title="Profissional" style={{ width: '70%', alignSelf: 'center', paddingTop: 30}} type="outline" />
            </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0000'
    },
    containerForm: {
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title: {
        fontSize: 24,
        fontWeight: 'Montserrat',
        marginBottom: 12,
        marginTop: 28,
        alignSelf: 'center',
    },
    button: {
        position: 'absolute',
        paddingVertical: 8,
        alignSelf: 'center',
        borderRadius: 50,
        width: '60%',
        
        
    }
})