'use client';
import { useState } from 'react';

import { Text, Group, Button, Input, Grid } from '@mantine/core';

export function Homepage() {
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <Input variant="unstyled" placeholder="start a thread" />
        </Grid.Col>
        <Grid.Col span={4}>
          {' '}
          <Button>Post</Button>
        </Grid.Col>
        <Grid.Col span={4}>
          {' '}
          <Button>Post</Button>
        </Grid.Col>
      </Grid>
    </>
  );
}
