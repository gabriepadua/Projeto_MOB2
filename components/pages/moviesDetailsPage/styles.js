import { Dimensions, StyleSheet } from "react-native";
const MAX_WIDTH = Dimensions.get('window').width * 0.7
const MAX_HEIGHT = Dimensions.get('window').height * 0.9

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: '11.5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'column',
        fontWeight: 'bold',
        maxWidth: MAX_WIDTH,
        maxHeight: '75%',
        backgroundColor: 'purple',
        borderColor: 'green',
        borderWidth: '2px',
        borderRadius: '10px',
        marginLeft: '5%',
        alignItems: 'center',
        marginTop: '5%'
    },
    image: {
        height: '250px',
        width: '150px',
        marginTop: '5%'
    },
    imageCard: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    sinopse: {
        width: '100%',
        padding: 10,
        textAlign: 'justify'
    }
})

export default styles;