import {
    StyleSheet
} from 'react-native';
import { Colors } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: Colors.COLOR_LIGHT_GRAY,
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 4,
    },

    title: {
        fontSize: 16,
        color: Colors.COLOR_BLACK_08,
        flex: 1
    },
    description: {
        fontSize: 14,
        color: Colors.COLOR_BLACK_06,
        flex: 1
    },

    nameRow: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    visitedMark: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: Colors.COLOR_LIGHT_BLUE,
        marginRight: 8,
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
        marginBottom: 10,
        position: 'absolute',
        bottom: 0
    },

    button: {
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: Colors.COLOR_LIGHT_BLUE,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.COLOR_WHITE
    },

    articleImage: {
        width: 50,
        height: 50,
    },
    imageContainer: {
        marginRight: 10,
    },

    row: {
        flexDirection: 'row'
    },
    col: {
        flexDirection: 'column'
    }
});