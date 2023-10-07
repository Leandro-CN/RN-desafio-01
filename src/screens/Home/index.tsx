import { useRef, useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, FlatList, Alert } from 'react-native'

import { styles } from './styles'

import Logo from '../../assets/Logo.svg'

import { TaskCard } from '../../components/TaskCard'
import { EmptyList } from '../../components/EmptyList'

export type TaskProps = {
  title: string
  isCompleted: boolean 
}


export function Home() {
  const [title, setTitle] = useState('')
  const [focus, setFocus] = useState(false)
  const [tasks, setTasks] = useState<TaskProps[]>([])  

  function handleTaskAdd() {
    const taskExists = tasks.find(task => task.title.toLowerCase() === title.toLowerCase())
    
    if (taskExists) {
      return Alert.alert('Tarefas', 'Já existe um tarefa na lista com essa descrição.')
    }

    setTasks(prevState => [...prevState, { title, isCompleted: false }])
    setTitle('')
  }

  function handleTaskRemove(title: string) {
    Alert.alert('Excluir tarefa', `Tem certeza que quer excluir essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(
          prevState => prevState.filter(task => task.title !== title)
        )
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTaskChangeStatus(title: string) {
    const updatedTasks = tasks.map(task => {
      if (task.title === title) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo height={32} width={110}/>

        <View style={styles.inputHeader}>
          <TextInput 
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            style={[styles.input, focus ? {borderColor: '#5E60CE'} : {}]}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080' 
            value={title}
            onChangeText={setTitle} 
            cursorColor='#F2F2F2' 
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>        
      </View>

      <View style={styles.containerStatus}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Text style={styles.textCriadas}>Criadas</Text>
          <Text style={styles.textValues}>{tasks.length}</Text>
        </View>

        <View style={{flexDirection: 'row', gap: 10}}>
          <Text style={styles.textConcluidas}>Concluídas</Text>
          <Text style={styles.textValues}>{tasks.filter(task => task.isCompleted === true).length}</Text>
        </View>
      </View>

      <FlatList 
        data={tasks}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TaskCard 
            title={item.title} 
            isCompleted={item.isCompleted}
            onRemove={() => handleTaskRemove(item.title)}
            onChangeStatus={() => handleTaskChangeStatus(item.title)}
          />
        )}
        contentContainerStyle={{paddingHorizontal: 24}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
    </View>    
  )
}