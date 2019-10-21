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
    },
    button: {
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: Colors.COLOR_LIGHT_BLUE,
    },
    buttonInactive: {
        backgroundColor: Colors.COLOR_INACTIVE,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.COLOR_WHITE
    },

    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    formInputText: {
        fontSize: 15,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.COLOR_BLACK_02,
        marginBottom: 20
    },

    selectorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 30
    },
    selector: {
        width: 15,
        height: 15,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: Colors.COLOR_BLACK_02
    },
    selectorActive: {
        backgroundColor: Colors.COLOR_LIGHT_BLUE
    },
    selectorText: {
        fontSize: 14,
        color: Colors.COLOR_BLACK_02
    }
});