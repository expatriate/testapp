import {
    StyleSheet
} from 'react-native';
import { Colors } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
        color: '#000000'
    },
    nullDatacontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 20
    },
    nullDatacontainer_text: {
        color: Colors.COLOR_GRAY,
        fontSize: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10
    },
    button: {
        borderRadius: 10,
        padding: 20,
        backgroundColor: Colors.COLOR_RED,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});