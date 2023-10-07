import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#333333',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 7,
    gap: 8,
    alignItems: 'center',
    marginBottom: 8
  },
  checkBox: {
    borderRadius: 999, 
    height: 18,
    width: 18
  },
  text: {
    fontSize: 14,
    color: '#F2F2F2'
  },
  button: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  }
})