import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('row', { name: 'ETH no icon 3332.64' }).getByRole('button').click();
  await page.getByText('Add in briefcase:ethereum3332').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('heading', { name: '0USD + 0.00 (0%)' }).click();
  await page.getByText('BriefcaseCancelOK').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('cell', { name: 'AVAX' }).click();
  await page.getByRole('button', { name: 'star Add to portfolio' }).click();
  await page.getByText('Add in briefcase:avalanche53.').click();
});