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
  RiAdminFill: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiAdminFill,
    })),
  ),
  RiCalendarLine: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiCalendarLine,
    })),
  ),
  RiPhoneLine: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiPhoneLine,
    })),
  ),
  RiMailLine: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiMailLine,
    })),
  ),
  RiFocus3Line: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiFocus3Line,
    })),
  ),
  RiUploadCloudLine: lazy(() =>
    import('react-icons/ri').then(module => ({
      default: module.RiUploadCloudLine,
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
