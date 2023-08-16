import DotLoader from 'react-spinners/DotLoader'

const Loader = ({ loading, height, color, size }) => {
  const override = {
    display: 'block',
    margin: '0 auto',
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height ? height : '100vh',
      }}
    >
      <DotLoader
        color={color || '#8ec5fc'}
        loading={loading}
        size={size || 80}
        cssOverride={override}
        aria-label="Loading ..."
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
