import React from 'react';
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

function App() {
    return (
      <div>
        <PanelHeader
          left={<PanelHeaderButton><Icon28Notifications/></PanelHeaderButton>}
          right={<PanelHeaderButton><Icon28SettingsOutline/></PanelHeaderButton>}
        />
      </div>
  );
}

export default App;