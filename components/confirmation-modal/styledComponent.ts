import { styled } from '@mui/material/styles'

export const ConfirmationContainer = styled('div')(({ theme }) => ({
  width: 350,
  height: 150,
  display: 'flex',
  border: '1px solid #DDE5EA',
  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
  borderRadius: 8,
  position: 'fixed',
  bottom: 20,
  left: 100,
  overflow: 'hidden',
  background: '#ffffff',

  '&::before': {
    content: '""',
    background: '#DDAF37',
    height: '100%',
    width: 8
  },
  '& .content': {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    width: '100%',

    '& .text': {
      margin: '0px 10px',

      '& .heading': {
        color: '#1A242A',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16
      },

      '& .description': {
        color: '#445F6F',
        fontWeight: 400,
        fontSize: 14
      },
      '& .button-container': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 12,
        position: 'absolute',
        bottom: 15,

        '& .discard': {
          background: 'rgba(232, 174, 26, 0.12)',
          borderRadius: 24,
          color: '#DDAF37',
          height: 42,
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)'
        },

        '& .save': {
          background: '#EBF5FF',
          borderRadius: 24,
          color: '#006DD1',
          height: 42,
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }
}))
