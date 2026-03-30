import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdjdc.jdfastjdc',
  name: '奶酪单词',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击右上角关闭按钮',
      rules: [
        {
          matches: '[vid="fl_container"] > ImageView[index=1]',
          snapshotUrls: 'https://i.gkd.li/i/26347792',
        },
      ],
    },
  ],
});
