import React  from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';


const Cita = ({item, eliminarPaciente}) => {

    const dialogoELiminar = (id) => {
        console.log('Eliminado....', id)

        eliminarPaciente(id)
    }


 
    return (
        <View style={styles.cita}>
             <View>
                <Text style= {styles.label}>Paciente</Text>
                <Text style= {styles.texto}> {item.paciente}</Text>
            </View>
            <View>
                <Text style= {styles.label}>propietario</Text>
                <Text style= {styles.texto}>{item.propietario}</Text>
            </View>
            <View>
                <Text style= {styles.label}>Sintomas</Text>
                <Text style= {styles.texto}> {item.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight onPress= {() => dialogoELiminar(item.id)} style = {styles.btnEliminar}>
                    <Text style= {styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
        </View>
       
    )
    
}
const styles = StyleSheet.create({
    cita: {
      backgroundColor: '#FFF',
      borderBottomColor: '#e1e1e1',
      borderStyle: 'solid',
      borderBottomWidth: 1,
      padding: 20
    },
    label : {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:20
    },
    texto: {
        fontSize: 18
    },

    btnEliminar: {
        padding: 10,
        backgroundColor: '#af2d2d',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    }
  })


export default Cita;