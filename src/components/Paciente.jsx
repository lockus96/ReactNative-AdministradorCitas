import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

export default function Paciente({item, setModalVisible, pacienteEditar}) {
     
     const { paciente, fecha, id  } = item
     const formatearFecha = (fecha) =>{
          const nuevaFecha = new Date(fecha)
          const opciones = {
               weekday: 'long',
               year: 'numeric',
               month: 'long',
               day: 'numeric'
          }

          return nuevaFecha.toLocaleDateString('es-ES', opciones)
     }


     return (
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
                    onLongPress={()=> {
                         pacienteEditar(id)
                         setModalVisible(true)}
                    }
                    >
                         <Text style={styles.btnTexto}>
                              Editar
                         </Text>
                    </Pressable>

                    <Pressable style={[styles.btn, styles.btnEliminar]}>
                         <Text style={styles.btnTexto}>
                              Eliminar
                         </Text>
                    </Pressable>
               </View>
     </View>
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
