import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, FlatList, InteractionManager } from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ pacientes, setPacientes] = useState([])
  const [ paciente, setPaciente] = useState({})

  const pacienteEditar = (id) => {
      const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
      setPaciente(pacienteEditar[0])
    }

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
            item={item}
            pacienteEditar={pacienteEditar}
            />
          )
        }}
        />
      }

      <Formulario 
      paciente={paciente}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      pacientes={pacientes}
      setPacientes={setPacientes}
      setPaciente={setPaciente}
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
