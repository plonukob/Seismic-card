import chromium from 'chrome-aws-lambda';
import puppeteer, { Browser, Page } from 'puppeteer-core';

let browser: Browser | null = null;

/**
 * Gets a browser instance that works in serverless environments like Vercel
 */
export async function getBrowser(): Promise<Browser> {
  if (browser) {
    return browser;
  }

  // Определяем, запущено ли приложение на Vercel
  const isVercel = process.env.VERCEL;
  
  // На Vercel используем chrome-aws-lambda
  if (isVercel) {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });
  } else {
    // Локально используем обычный Chrome
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  return browser;
}

/**
 * Closes the browser when no longer needed
 */
export async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;
  }
}

/**
 * Creates a new page
 */
export async function createPage(): Promise<Page> {
  const browser = await getBrowser();
  const page = await browser.newPage();
  
  // Set user agent to avoid detection
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  return page;
} 