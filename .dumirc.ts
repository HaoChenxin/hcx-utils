import dayjs from 'dayjs';
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'hcx-utils',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  logo: '/logo.png',
  favicons: ['/logo.png'],
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'hcx-utils',
    footer: `Copyright © ${dayjs().format('YYYY')} | Powered by <a>chenxin.hao</a>`
  }
});
