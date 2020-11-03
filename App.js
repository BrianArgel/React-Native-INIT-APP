import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {

  const [mostrarform, guardarMostrarform] = useState(false)
  const [citas, setCitas] = useState([
 
  ]); 

    // Elimina los pacientes del state
   
    const eliminarPaciente = id => {
       setCitas((citasActuales ) => {
         return citasActuales.filter(cita => cita.id !== id);
       })
    }


    //Muestra u oculta el formulario 

    const mostrarFormulario = () => {
      guardarMostrarform(!mostrarform)
    }
  return (

    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

            <View>
                <TouchableHighlight onPress= {() => mostrarFormulario()} style = {styles.btnMostrar}>
                    <Text style= {styles.textoMostrar}> {mostrarform ? 'Mostrar Citas' : 'Crear Cita'} </Text>
                </TouchableHighlight>
            </View>
      <View style= {styles.contenido}>
     {mostrarform ? (
        <Formulario 
        guardarMostrarform={guardarMostrarform}
        setCitas= {setCitas}
        citas= {citas}
        />

     )
     
     : (
      <>
       <Text style={styles.titulo} >{citas.length > 0 ? 'Administrador tus Citas' : 'No hay citas agrega Una'}</Text>
      <FlatList
      style={styles.listado}
      data={citas}
      renderItem={ ({item}) => <Cita item={item} eliminarPaciente= {eliminarPaciente}/> }
      keyExtractor= { cita => cita.id}
      />
      </>
     )}
      
    
      {/*<Text style={styles.titulo} >{citas.length > 0 ? 'Administrador tus Citas' : 'No hay citas agrega Una'}</Text>*/}

     </View>
          
      
    </View>
    
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#ce6262",
    flex: 1,
  },
  titulo: {
    marginTop: 30,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#FFFFFF"

  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1,

  },
  btnMostrar: {
    padding: 10,
    backgroundColor: '#af2d2d',
    marginVertical: 10
},
textoMostrar: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'
}
})



export default App;


