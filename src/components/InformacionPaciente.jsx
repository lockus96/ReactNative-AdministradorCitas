import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { formatearFecha } from '../helpers'


export default function InformacionPaciente({setPaciente, setModalPaciente, paciente}) {

     console.log(paciente)

  return (
     <View 
     style={styles.contenedor}
     >
         
          <Text 
          style={styles.titulo}
          >
               Informacion
          </Text>

          <View>
               <Pressable
               onLongPress={()=> {
                    setModalPaciente(false)
                    setPaciente({})
               }}
               style={styles.btnCerrar}
               >
                    <Text
                    style={styles.btnCerrarText}
                    >
                         Cerrar
                    </Text>
               </Pressable>
          </View>

          <View
          style={styles.contenido}
          >
               <View style={styles.campo}>
                    <Text style={styles.label}> Nombre: </Text>
                    <Text style={styles.valor}> {paciente.paciente} </Text>
               </View>
               <View style={styles.campo}>
                    <Text style={styles.label}> Propietario: </Text>
                    <Text style={styles.valor}> {paciente.propietario} </Text>
               </View>
               <View style={styles.campo}>
                    <Text style={styles.label}> Email: </Text>
                    <Text style={styles.valor}> {paciente.email} </Text>
               </View>
               <View style={styles.campo}>
                    <Text style={styles.label}> Telefono: </Text>
                    <Text style={styles.valor}> {paciente.telefono} </Text>
               </View>
               <View style={styles.campo}>
                    <Text style={styles.label}> Fecha: </Text>
                    <Text style={styles.valor}> {formatearFecha(paciente.fecha)} </Text>
               </View>
               <View style={styles.campo}>
                    <Text style={styles.label}> Sintomas: </Text>
                    <Text style={styles.valor}> {paciente.sintomas} </Text>
               </View>
               
          </View>

          
     </View>
  )
}

const styles = StyleSheet.create({
     contenedor: {
          flex: 1,
          backgroundColor: '#F59E0B'
     },
     titulo: {
          fontSize: 35,
          color: 'white',
          fontWeight: '800',
          textAlign: 'center',
          marginTop: 30
     },
     contenido: {
          backgroundColor: '#FFF',
          marginHorizontal: 30,
          borderRadius: 15,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,

          elevation: 15, 
     },
     campo: {
          marginBottom: 10,
     },
     label: {
          textTransform: 'uppercase',
          fontSize: 15,
          color: '#374151',
          fontWeight: '300',
          marginBottom: 2,
     },
     valor: {
          fontSize: 22,
          color: 'black',
          fontWeight: '600',
     },
     btnCerrar: {
          marginVertical: 30,
          backgroundColor: '#E06900',
          marginHorizontal: 100,
          padding: 15,
          borderRadius: 50
     },
     btnCerrarText: {
          fontSize: 25,
          textAlign: 'center',
          fontWeight: '900',
          color: 'white',
          textTransform: 'uppercase'
     },
    
})
