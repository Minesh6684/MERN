import ClipLoader from "react-spinners/ClipLoader";
import { styled } from '@mui/material/styles'

function Spinner() {
    let color = 'orange'
    let loading = true

    const Root = styled('div')(({theme}) => ({
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        margin: '0 auto'
      },
      [theme.breakpoints.up('sm')]: {
        width: '60%',
        margin: '0 auto'
          
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
        marginLeft: '50%'
      },
    }))
  

    return (
      <Root className="sweet-loading" style={{width: 500,
      height: 530,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '78vh'
      }}>
        <ClipLoader
          color={color}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Root>
    );
}

export default Spinner