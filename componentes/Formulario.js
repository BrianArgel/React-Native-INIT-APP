import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Button, Alert, ScrollView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';


const Formualario = ({citas, setCitas, guardarMostrarform}) => {

    const [paciente, gardarPaciente] = useState('');
    const [propietario, gardarPropietario] = useState('');
    const [telefono, gardarTelefono] = useState('');
    const [sintomas, guardarSintomas] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();

   }


    //muestra o oculta el time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };

      const confirmarHora = (date) => {
        console.warn("A date has been picked: ", date);
        hideTimePicker();
    
     }

     // Crear Nueva Cita

     const crearNuevaCita = () => {

        //validar
        if(paciente.trim() === '' || propietario.trim() === '' || telefono.trim() ==='' || sintomas === ''){
            //falla la validacion 
            mostrarAlerta();
            return;
        }

        //crear una nueva cita

        const cita = {paciente, propietario, telefono, sintomas};
        cita.id = shortid.generate();
        //console.log(cita)
        
        const nuevaCita = [...citas, cita]
        setCitas(nuevaCita)
        guardarMostrarform(false)

     }

     //muestra alerta si falla la validacion
     const mostrarAlerta = () => {
         Alert.alert(
             'Error', //titulo
             'Todos los campos son obligatorios',
             [{
                 text: 'Ok'
             }]
         )
     }
    

return (

   <>
   <ScrollView style= {styles.formulario}>
    <View>
        <Text style={styles.label}>Paciente</Text>
        <TextInput 
         style= {styles.input}
         onChangeText= {(texto) => gardarPaciente(texto)}
        />
    </View>

    {/*<View>
      <Button title="Seleccionar fecha" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={confirmarFecha}
        onCancel={hideDatePicker}
      />
    </View>
    <View>
      <Button title="Seleccionar hora" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={confirmarHora}
        onCancel={hideTimePicker}
      />
    </View> */}


    <View>
        <Text style={styles.label}>Dueño</Text>
        <TextInput 
         style= {styles.input}
         onChangeText= {(texto) => gardarPropietario(texto)}
        />
    </View>
    <View>
        <Text style={styles.label}>Sintoma</Text>
        <TextInput 
         style= {styles.input}
         onChangeText= {(texto) => guardarSintomas(texto)}
        />
    </View>
    <View>
        <Text style={styles.label}>telefono contacto</Text>
        <TextInput 
         style= {styles.input}
         onChangeText= {(texto) => gardarTelefono(texto)}
         keyboardType= 'numeric'
        />
    </View>

            <View>
                <TouchableHighlight onPress= {() => crearNuevaCita()} style = {styles.btnSubmit}>
                    <Text style= {styles.textoSubmit}> Crear Nueva Cita </Text>
                </TouchableHighlight>
            </View>
    </ScrollView>
   </>
);
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#214252',
        marginVertical: 10
    },
    textoSubmit: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Formualario