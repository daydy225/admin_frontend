import { Suspense, lazy } from 'react'

const iconComponents = {
  RiHomeLine: lazy(() =>
    import('react-icons/ri').then(module => ({ default: module.RiHomeLine })),
  ),
  RiUserLine: lazy(() =>
    import('react-icons/ri').then(module => ({ default: module.RiUserLine })),
  ),
  RiExchangeDollarFill: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiExchangeDollarFill,
    })),
  ),
  RiErrorWarningLine: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiErrorWarningLine,
    })),
  ),
  RiChat3Line: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiChat3Line,
    })),
  ),
  RiUserSettingsLine: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiUserSettingsLine,
    })),
  ),
  RiLogoutBoxRLine: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiLogoutBoxRLine,
    })),
  ),
}

const Icon = ({ icon, style }) => {
  const IconComponent = iconComponents[icon]
  if (!IconComponent) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <IconComponent style={style} />
    </Suspense>
  )
}

export default Icon
