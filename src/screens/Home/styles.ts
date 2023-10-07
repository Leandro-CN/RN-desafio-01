import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputHeader:{ 
    paddingHorizontal: 24, 
    flexDirection: 'row', 
    alignItems: 'center',
    position: 'absolute',
    bottom: -27
  },
  input: {
    flex:1,
    height: 54,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    padding: 16,
    marginRight: 4           
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: '#F2F2F2'
  },
  containerStatus: { 
    flexDirection: 'row',  
    marginTop: 56, 
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 21 
  },
  textCriadas: {
    fontSize: 14, 
    color: '#4EA8DE', 
    fontWeight: 'bold'
  },
  textConcluidas: {
    fontSize: 14, 
    color: '#8284FA', 
    fontWeight: 'bold'
  },
  textValues: {
    fontSize: 12, 
    fontWeight: 'bold',
    color: '#D9D9D9', 
    backgroundColor: '#333333', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 999
  }
})