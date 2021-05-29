import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  root: {
    boxShadow: '6px 3px 22px -1px rgba(0,0,0,1)',
  },
  media: {
    height: '500px',
  },
  deleteIcon: {
    position: 'relative',
    top: '440px',
    color: '#fc5603',
  },
  btn: {
    margin: '5px 2px',
    fontSize: '15px',
    color: '#3C1053FF',
    border: '2px #DF6589FF solid',
    '&:hover': {
      background: '#3C1053FF',
      color: '#DF6589FF',
      border: '2px #3C1053FF solid ',
    },
  },
}))

export default styles
