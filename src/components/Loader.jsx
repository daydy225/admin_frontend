import DotLoader from 'react-spinners/DotLoader'

const Loader = ({ loading }) => {
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
        height: '100vh',
      }}
    >
      <DotLoader
        color="#8ec5fc"
        loading={loading}
        size={60}
        cssOverride={override}
        aria-label="Loading ..."
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
