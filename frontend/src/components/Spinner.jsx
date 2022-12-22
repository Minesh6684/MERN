import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
    let color = 'orange'
    let loading = true
    return (
      <div className="sweet-loading" style={{width: 500,
      height: 530,
      marginLeft: '50%',
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
      </div>
    );
}

export default Spinner