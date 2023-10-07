import { View, Text, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'
import { TaskProps } from '../../screens/Home'

type Props = TaskProps & {
  onRemove: () => void
  onChangeStatus: () => void
}

export function TaskCard({ title, isCompleted, onRemove, onChangeStatus }: Props) {
  return (
    <View style={styles.container}>
      <Checkbox 
        style={styles.checkBox}
        value={isCompleted}
        color={isCompleted ? '#5E60CE' : '#4EA8DE'}
        onValueChange={onChangeStatus}        
      />
      <TouchableOpacity onPress={onChangeStatus} style={{flex: 1}}>      
        <Text 
          style={[styles.text, isCompleted ? {textDecorationLine: 'line-through', color: '#808080'} : {}]}
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={onRemove}
        style={styles.button}
      >
        <Feather name='trash-2' color='#808080' size={14} />
      </TouchableOpacity>
    </View>
  )
}