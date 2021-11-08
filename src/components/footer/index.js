import React from 'react';

import usePWA from 'react-pwa-install-prompt'

const Footer = () => {

  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA()


  const onClickInstall = async () => {
    const didInstall = await promptInstall()
    if (didInstall) {
      // User accepted PWA install
    }
  }

  const renderInstallButton = () => {
    if (isInstallPromptSupported && isStandalone)

      return (
        <div className="footer container-fluid fixed-bottom">
          <button type="button" class="btn btn-info" id="btInstalar" onClick={onClickInstall}>Instalar App</button>
        </div>
      )
    return null
  }



  return (<>
    {renderInstallButton()}
  </>
  )
}

export default Footer