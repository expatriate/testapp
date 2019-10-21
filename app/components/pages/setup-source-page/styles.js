import {
    StyleSheet
} from 'react-native';
import { Colors } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
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
    },

    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    formInputText: {
        fontSize: 20,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.COLOR_GRAY,
        marginBottom: 10
    }
});