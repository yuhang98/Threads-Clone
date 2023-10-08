'use client';
import { useState } from 'react';

import { Group, Button, Image, Tabs, Grid } from '@mantine/core';
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from '@tabler/icons-react';
import { Homepage } from './HomePage';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List
        grow
        justify="center"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        <Tabs.Tab
          value="first"
          leftSection={<IconPhoto style={{ width: 30 }} />}
        />
        <Tabs.Tab
          value="second"
          leftSection={<IconMessageCircle style={{ width: 30 }} />}
        />
        <Tabs.Tab
          value="third"
          leftSection={<IconSettings style={{ width: 30 }} />}
        />
        <Tabs.Tab
          value="fourth"
          leftSection={<IconPhoto style={{ width: 30 }} />}
        />
        <Tabs.Tab
          value="fifth"
          leftSection={<IconPhoto style={{ width: 30 }} />}
        />
      </Tabs.List>
      <Tabs.Panel
        value="first"
        style={{
          textAlign: 'center',
        }}
      >
        <Homepage />
      </Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
      <Tabs.Panel value="third">Second panel</Tabs.Panel>

      <Tabs.Panel value="fourth">Second panel</Tabs.Panel>
      <Tabs.Panel value="fifth">Second panel</Tabs.Panel>
    </Tabs>
  );
}
