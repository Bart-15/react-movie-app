import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  root: {
    position:"relative"
  },
  media: {
    height: '400px',
    objectFit: 'cover',
    '&:hover': {
      opacity: '0.3',
      transition: '.2s  ease',
      cursor: 'pointer',
    },
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: '#1c208c',
    color: '#fff',
  },
  left: {
    background: '#ff6d24',
    padding: '3px 10px',
    letterSpacing: '1px',
    borderRadius: '3px',
  },

  middle: {
    opacity: '0',
    transition: '.5s ease',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  showMiddle: {
    transition: '.5s ease',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    opacity: '1',
    color:'red'
  },
}))

export default styles;