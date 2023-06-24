import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native";
const MAX_WIDTH = Dimensions.get('window').width * 0.9
const MAX_HEIGHT = Dimensions.get('window').height * 0.95

function CardFilme({ filme }){
    const baseUrl = 'https://api.otaviolube.com'
    return (
        <View style={styles.container}>
            <Image source={{
                uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url
            }} style={styles.image}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ?
            filme.sinopse.substring(0,200) + '...' :
            filme.sinopse}</Text>
            <TouchableOpacity style={styles.btnText}>
                <Link to={{screen: 'MoviesDetailPage', params:{filme: filme}}} style={styles.link1}>
                    Saiba mais...
                </Link>
                <Link to={{screen: 'RegisterPage'}} style={styles.link3}>
                    Registrar
                </Link>
                <Link to={{screen: 'LoginPage'}} style={styles.link2}>
                    Logar
                </Link>
                <Link to={{screen: 'LoginPage'}} style={styles.link2}>
                    Comprar
                </Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        margin: 13,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    image: {
        height: '300px',
        width: '200px',
        resizeMode: 'cover',
        marginBottom: 8
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
        marginBottom: 10,
        textAlign: 'justify'
    },
    button: {
        height: 55,
        width: '100%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderColor: 'black',
        borderRadius: '10px',
        borderWidth: '2px'
    },
    btnText: {
        color: 'black',
        fontSize: 24
    },
    link1: {
        padding: 8,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: '2px',
        borderRadius: '15px',
        justifyContent: 'center',
        fontSize: 20
    },

    link2: {
        padding: 8,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: '2px',
        borderRadius: '15px',
        justifyContent: 'center',
        fontSize: 15
    },

    link3: {
        padding: 8,
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: '2px',
        borderRadius: '15px',
        justifyContent: 'center',
        fontSize: 15
    }
})

export default CardFilme;