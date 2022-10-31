import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Modal } from 'react-native';
import Formulario from './src/components/Formulario';

const App = () => {

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ pacientes, setPacientes] = useState([])


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de {''}
        <Text style={styles.tituloBold}>
          Citas
        </Text>
      </Text>
      
      <Pressable
      style={styles.btnNuevaCita}
      onPress={()=> setModalVisible(!modalVisible)}
      >
        <Text
        style={styles.btnTextNuevaCita}
        >
          Nueva Cita
        </Text>
      </Pressable>

      <Formulario 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      pacientes={pacientes}
      setPacientes={setPacientes}
      />
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AFE3C0', 
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40, 
    color: '#73628A',
    marginTop: '5%',
    fontWeight: '300'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#313D5A',
  },
  btnNuevaCita: {
    backgroundColor: '#73628A',
    padding: 8,
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 15,

  },
  btnTextNuevaCita: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '900'
  }
  
})

export default App;
