import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#fff',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,247,1)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        margin: 10,
        backgroundColor: 'gray',
        flexGrow: 1,
        flexShrink: 1
      },

        itemName: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        itemDescription: {
            fontSize: 14,
        },
});

export default styles;
