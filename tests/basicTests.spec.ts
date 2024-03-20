import { test, expect } from '@playwright/test';

test('Filtration', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('columnheader', { name: 'Price' }).locator('div').click()
  const cell = await page.getByRole('cell', { name: '0.01' }).first();
  const isVisible = await cell.isVisible();
  if (!isVisible) {
    throw new Error(`Filter dosn't work corectly`);
  }
});

test('Searching by symbol', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByPlaceholder('Search..').click();
  await page.getByPlaceholder('Search..').fill('SOL');
  await page.getByRole('button', { name: 'search Search' }).click();
  const countCell = await page.getByRole('cell').count()
  if(countCell !== 7){
    throw new Error(`Filter dosn't work corectly, should be only one match!`);
  }
});

test('Display the modal window', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('heading', { name: '0USD + 0.00 (0%)' }).click();
  const isVisibleFirstModal = await page.getByText('BriefcaseCancelOK').isVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('cell', { name: 'AVAX' }).click();
  await page.getByRole('button', { name: 'star Add to portfolio' }).click();
  const isVisibleSecondModal = await page.getByText('Add in briefcase:avalanche53.').isVisible();
  console.log(isVisibleFirstModal +" "+ isVisibleSecondModal)
  if(!isVisibleFirstModal || !isVisibleSecondModal){
    throw new Error(`Don't display the modal windows!`);
  }
});

test('Adding into briefcase and Removing', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('tr:nth-child(9) > td:nth-child(2)').click();
  await page.getByRole('button', { name: 'star Add to portfolio' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('5');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByLabel('wallet').locator('path').click();
  const count = await page.getByLabel('Briefcase').getByRole('img', { name: 'no photo' }).count();
  if(count != 1){
    throw new Error(`The crypto currency didn't aded in your portfolio!`);
  }

  await page.getByRole('button', { name: 'Remove' }).click();
  await page.getByRole('heading', { name: '0USD + 0.00 (0%)' }).click();
  const countAfterRemoving = await page.getByLabel('Briefcase').getByRole('img', { name: 'no photo' }).count();
  if(countAfterRemoving !== 0 ){
    throw new Error(`The crypto currency didn't removed from your portfolio!`);
  }
});

test('Display the 404 not found page with wrong id currency', async ({ page }) => {
  await page.goto('http://localhost:5173/currencyInfo?id=tetkljfslwoi');
  const isVisiblePage = await page.getByText('404').innerText()
  if(isVisiblePage !== "404"){
    throw new Error(`Don't display the 404 page, when wrong id  currency`);
  }
});