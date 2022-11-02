import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, FlatList, Alert, Modal } from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

const App = () => {

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ pacientes, setPacientes] = useState([])
  const [ paciente, setPaciente] = useState({})
  const [ modalPaciente, setModalPaciente ] = useState(false)

  const pacienteEditar = (id) => {
      const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
      setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = (id) => {
    Alert.alert(
      '¿Seguro que querés eliminar?',
      'Este cambio es permanente',
      [
        { text: 'Cancelar' },
        { text: 'Si, eliminar', onPress: () => {
            const pacientesActualizados = pacientes.filter(
            pacientesState => pacientesState.id !== id)
            setPacientes(pacientesActualizados)
        }}
      ]
    )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de {''}
        <Text style={styles.tituloBold}>
          Pacientes
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
    
      {pacientes.length == 0 ? 
        <Text style={styles.listaTitulo}>No hay registros</Text> : 
        <FlatList 
        style={styles.listado}
        data={pacientes}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> {
          return(
            <Paciente 
            setModalVisible={setModalVisible}
            setPaciente={setPaciente}
            item={item}
            pacienteEditar={pacienteEditar}
            pacienteEliminar={pacienteEliminar}
            setModalPaciente={setModalPaciente}
            />
          )
        }}
        />
      }

      {modalVisible && (
          <Formulario 
          cerrarModal={cerrarModal}
          modalVisible={modalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
      )}
     
      
      <Modal
      visible={modalPaciente}
      animationType='fade'
      >
        <InformacionPaciente 
        paciente={paciente}
        setModalPaciente={setModalPaciente}
        setPaciente={setPaciente}
        />
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aac5e9', 
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 35, 
    color: '#73628A',
    marginTop: 40,
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
  },
  listaTitulo: {
    textAlign: 'center',
    fontSize: 30, 
    color: '#73628A',
    marginTop: '5%',
    fontWeight: '300'
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 40,
    
  }
  
})

export default App;
