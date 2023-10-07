import { View, Text } from 'react-native'

import ClipboardSvg from '../../assets/Clipboard.svg'

import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipboardSvg style={styles.svg}/>
      <Text style={styles.text}>
        Você ainda não tem tarefas cadastradas {'\n'}
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}