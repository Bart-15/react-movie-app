import {makeStyles} from '@material-ui/core/styles'
const styles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    boxShadow: '6px 3px 22px -1px rgba(0,0,0,1)',
  },
  media: {
    height: '400px',
    objectFit: 'fiil',
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
    background: '#3C1053FF',
    color: '#DF6589FF',
  },
  left: {
    background: '#1C1C1BFF',
    letterSpacing: '1px',
    borderRadius: '3px',
    display: 'inline-block',
    width: '20%',
    textAlign: 'center',
    padding: '5px',
    height: '30px',
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
  },

  heart: {
    height: '100px',
    width: '100px',
    background:
      'url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat',
    cursor: 'pointer',
    transition: 'background-position 1s steps(28)',
    transitionDuration: '0s',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heartLength: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#fff',
  },

  emptyContainer: {
    display: 'flex',
    marginTop: '100px',
    textAlign: 'center',
    justifyContent: 'center',
  },
}))

export default styles;