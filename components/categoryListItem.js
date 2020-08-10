import React from 'react';
import{
    StyleSheet,
    Image,
    View,
    Text,
    Button,
    Alert,
} from 'react-native'
import ElectronicImage from '../assets/electronics.png'

export default function CategoryListItem(props) {

    return (
    <View style={styles.container}>
         <Text style={styles.title}>CategoryListItem</Text>
         <Image style={styles.image} source={ElectronicImage}/>
         <Button title="Add Image" onPress={()=> {Alert.alert("bạn đã thêm ảnh thành công")}} />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        backgroundColor:'#FFF',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:2,height:2},
        marginBottom:10,
        borderWidth:2,
       
    },
    image:{
        width: 64,
        height:64,
    },
    title: {
        textTransform: "uppercase",
        fontSize: 15,
        fontWeight: "bold", 
        marginBottom: 8,
    },
});