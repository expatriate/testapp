import {
    StyleSheet
} from 'react-native';
import { Colors } from '../../styles/colors';

export default StyleSheet.create({
    content: {
        marginTop: 20
    },
    getback: {
        fontSize: 16,
        color: Colors.COLOR_WHITE
    },
    container: {
        flex: 1,
        backgroundColor: Colors.COLOR_LIGHT_GRAY,
        padding: 20
    },
    articleImage: {
        width: 100,
        height: 100,
    },
    imageContainer: {
        marginRight: 20,
    },

    linkText: {
        borderBottomWidth: 1,
        borderColor: Colors.COLOR_BLUE_LINK,
        color: Colors.COLOR_BLUE_LINK,
    },

    row: {
        flexDirection: 'row'
    },
    col: {
        flexDirection: 'column'
    },

    info: {
        padding: 10,
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 18,
        color: Colors.COLOR_BLACK_08,
        marginBottom: 8,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 14,
        color: Colors.COLOR_BLACK_06,
        marginBottom: 8,
    },
    description: {
        marginTop: 20,
        fontSize: 14,
        color: Colors.COLOR_BLACK_06,
        flex: 1
    },
});