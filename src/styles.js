import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8)
    },
  
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  
    cardMedia: {
      paddingTop: '56%'
    },
  
    cardContent: {
      flexGrow: '1'
    },
  
    floatingBtn: {
      position: 'fixed',
      bottom: 10,
      right: 10
    }
  }))

  export default useStyles