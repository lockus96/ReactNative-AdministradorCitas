import React, { useState } from 'react'
import { Modal, Text, StyleSheet, View, TextInput, ScrollView, Pressable, Alert, ProgressBarAndroidComponent } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default function Formulario({modalVisible, setModalVisible, pacientes, setPacientes}) {

     const [ paciente, setPaciente] = useState('')
     const [ propietario, setPropietario] = useState('')
     const [ email, setEmail] = useState('')
     const [ telefono, setTelefono] = useState('')
     const [ fecha, setFecha] = useState(new Date())
     const [ sintomas, setSintomas] = useState('')

     const handleCita = () => {
          if([paciente, propietario, email, telefono, fecha, sintomas].includes('')){
               Alert.alert(
                    'Error',
                    'Todos los campos son obligatorios',
               )
               return

          }

          const nuevoPaciente = {
               paciente,
               propietario,
               email,
               telefono,
               fecha,
               sintomas
          }

          setPacientes([...pacientes, nuevoPaciente])
          console.log(pacientes)
     }



  return (
     <Modal
     animationType='slide'
     visible={modalVisible}
     >
          <View
          style={styles.container}
          >
               <ScrollView>
               <Text style={styles.titulo}>
               Nueva Cita
               </Text>

               <Pressable
               style={styles.btnCancelar}
               onLongPress={()=>setModalVisible(!modalVisible)}
               >
                    <Text
                    style={styles.btnCancelarText}
                    >
                         X Cancelar
                    </Text>
               </Pressable>

               <View
               style={styles.campo}
               >
                    <Text
                    style={styles.label}
                    >
                         Nombre
                    </Text>     
                         <TextInput 
                              style={styles.input}
                              keyboardType='default'
                              placeholder='Nombre Paciente'
                              placeholderTextColor={'#666'}
                              value={paciente}
                              onChangeText={setPaciente}
                         />
               </View>

               <View
               style={styles.campo}
               >
                    <Text
                    style={styles.label}
                    >
                         Nombre Propietario
                    </Text>     
                         <TextInput 
                              style={styles.input}
                              keyboardType='default'
                              placeholder='Nombre Propietario'
                              placeholderTextColor={'#666'}
                              value={propietario}
                              onChangeText={setPropietario}
                         />
               </View>

               <View
               style={styles.campo}
               >
                    <Text
                    style={styles.label}
                    >
                         Email Propietario
                    </Text>     
                         <TextInput 
                              style={styles.input}
                              autoCapitalize='none'
                              keyboardType='email-address'
                              placeholder='Email Propietario'
                              placeholderTextColor={'#666'}
                              value={email}
                              onChangeText={setEmail}
                         />
               </View>

               <View
               style={styles.campo}
               >
                    <Text
                    style={styles.label}
                    >
                         Número de Teléfono
                    </Text>     
                         <TextInput 
                              style={styles.input}
                              keyboardType='number-pad'
                              placeholder='Teléfono'
                              placeholderTextColor={'#666'}
                              value={telefono}
                              onChangeText={setTelefono}
                              maxLength={16}
                         />
               </View>

               <View
               style={styles.campo}
               >
                    <Text
                    style={styles.label}
                    >
                         Fecha de Alta
                    </Text>  
                    <View>   
                         <DatePicker 
                         fadeToColor={'none'}
                         date={fecha}
                         locale={'es'}
                         onDateChange={(date)=> setFecha(date)}
                         />
                    </View>

               </View>

               <View
               style={styles.campo}
               >
                    <Text
                    style={styles.label}
                    >
                         Síntomas del Paciente
                    </Text>     
                         <TextInput 
                              style={[styles.input, styles.inputLabel]}
                              keyboardType='default'
                              placeholder='Síntomas'
                              placeholderTextColor={'#666'}
                              value={sintomas}
                              onChangeText={setSintomas}
                              multiline={true}
                              numberOfLines={4}
                         />
               </View>

               <Pressable
               style={styles.btnConfirmar}
               onPress={handleCita}
               >
                    <Text
                    style={styles.btnCancelarText}
                    >
                         Confirmar
                    </Text>
               </Pressable>

               </ScrollView>
          </View>

          
          
     </Modal>
  )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#671ACB'
     },
     titulo: {
          color: '#EAEAEA',
          fontSize: 40,
          textAlign: 'center',
          marginTop: 30,
          textTransform: 'uppercase'
     },
     campo: {
          marginTop: 10,
          marginHorizontal: 30,
     },
     label: {
          color: '#EAEAEA',
          marginBottom: 10,
          marginTop: 15,
          fontSize: 20,
          fontWeight: '900'
     },
     input: {
          backgroundColor: 'white',
          color: 'black',
          padding: 10,
          borderRadius: 20,
     },
     inputLabel: {
         height: 50,
         
     },
     btnCancelar: {
          marginVertical: 30,
          backgroundColor: 'red',
          marginHorizontal: 100,
          padding: 15,
          borderRadius: 50
     },
     btnCancelarText: {
          fontSize: 25,
          textAlign: 'center',
          fontWeight: '900',
          color: 'white',
          textTransform: 'uppercase'
     },
     btnConfirmar: {
          marginVertical: 30,
          backgroundColor: '#5827A4',
          marginHorizontal: 100,
          padding: 15,
          borderRadius: 50
     },
 
})

