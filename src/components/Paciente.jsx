import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { formatearFecha } from '../helpers'

export default function Paciente({
     setModalPaciente, 
     pacienteEliminar, 
     item, 
     setModalVisible, 
     pacienteEditar,
     setPaciente
}){
     
     const { paciente, fecha, id  } = item
    


     return (

     <Pressable
     onLongPress={()=> {
          setModalPaciente(true)
          setPaciente(item)
     }}
     >

     <View style={styles.contenedor}>
               <Text style={styles.label}>
                    Paciente:
               </Text>
               <Text style={styles.texto}>
                    {paciente}
               </Text>
               <Text style={styles.fecha}>
                    {formatearFecha(fecha)}
               </Text>

               <View style={styles.contenedorBotones}>
                    <Pressable 
                    style={[styles.btn, styles.btnEditar]}
                    onPress={()=> {
                         pacienteEditar(id)
                         setModalVisible(true)}
                    }
                    >
                         <Text style={styles.btnTexto}>
                              Editar
                         </Text>
                    </Pressable>

                    <Pressable 
                    style={[styles.btn, styles.btnEliminar]}
                    onPress={()=>{
                         pacienteEliminar(id)
                    }}
                    >
                         <Text style={styles.btnTexto}>
                              Eliminar
                         </Text>
                    </Pressable>
               </View>
     </View>
     </Pressable>
     )
}

const styles = StyleSheet.create({
     contenedor: {
          backgroundColor: 'white',
          padding: 20,
          borderBottomColor: '#94a3B8',
          borderBottomWidth: 1,
          borderRadius: 15,
          marginBottom: 15,
     },
     label: {
          color: '#374151',
          textTransform: 'uppercase',
          fontWeight: '700',
          marginBottom: 5
     },   
     texto: {
          color: 'black',
          fontSize: 25,
     },
     fecha: {
          color: 'black',
          fontSize: 18,
     },
     contenedorBotones: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
     },
     btn: {
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 5,
     },
     btnTexto: {
          color: '#fff',
          fontSize: 12,
          textTransform: 'uppercase',
          fontWeight: '700'
     },
     btnEditar: {
          backgroundColor: '#8D95A2'
     },
     btnEliminar: {
          backgroundColor: 'red'
     },
})
