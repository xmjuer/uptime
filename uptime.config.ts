import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "百晓网站监控",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/xmjuer', label: 'GitHub' },
    { link: 'https://xmj.181910.xyz/', label: '我的博客' },
    { link: 'mailto:xmj@246801.xyz', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    //  '🌐 Public (example group name)': ['foo_monitor', 'bar_monitor', 'more monitor ids...'],
    '🌐 Public': ['xmj_181910_xyz'],
    '🔐 Private': [
      'test_tcp_monitor',
      'file258_file_hf_space',
      'flztb_wb_hf_space',
      'flztb_wb1_hf_space',
      'cfiles_navidrome_hf_space',
      'aikan258_1212_hf_space',
      'aikan258_xlx_hf_space',
      'baixiao258_uptime_hf_space',
      'flzta_cfiles_hf_space',
      'flzta_ceshi_hf_space',
      'xmjql_n8n_free_hf_space',
      'file258_qexo_hf_space',
      'baixiao258_td_hf_space',
      'xmjql_tgg_hf_space',
      'flzta_dy_static_hf_space',
      'xmjql_tgg1_hf_space',
    ],
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'foo_monitor',
      // `name` is used at status page and callback message
      name: 'My API Monitor',
      // `method` should be a valid HTTP Method
      method: 'POST',
      // `target` is a valid URL
      target: 'https://example.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://example.com',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
      body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://` and `http(s)://` proxies
      checkProxy: 'https://xxx.example.com OR worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      checkProxyFallback: true,
    },
    // Example TCP Monitor
    {
      id: 'test_tcp_monitor',
      name: 'Example TCP Monitor',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '1.2.3.4:22',
      tooltip: 'My production server SSH',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },
    // New HTTP Monitor for https://xmj.181910.xyz/
    {
      id: 'xmj_181910_xyz',
      name: '我的博客',
      method: 'GET',
      target: 'https://xmj.181910.xyz/',
      tooltip: '我的博客',
      statusPageLink: 'https://xmj.181910.xyz/',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // New HTTP Monitors
    {
      id: 'file258_file_hf_space',
      name: '百晓快递柜',
      method: 'GET',
      target: 'https://file258-file.hf.space',
      tooltip: '百晓快递柜',
      statusPageLink: 'https://file258-file.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'flztb_wb_hf_space',
      name: '抱脸上传',
      method: 'GET',
      target: 'https://flztb-wb.hf.space',
      tooltip: '抱脸上传',
      statusPageLink: 'https://flztb-wb.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'flztb_wb1_hf_space',
      name: '抱脸下载',
      method: 'GET',
      target: 'https://flztb-wb1.hf.space',
      tooltip: '抱脸下载',
      statusPageLink: 'https://flztb-wb1.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'cfiles_navidrome_hf_space',
      name: '音乐',
      method: 'GET',
      target: 'https://cfiles-navidrome.hf.space',
      tooltip: '音乐',
      statusPageLink: 'https://cfiles-navidrome.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'aikan258_1212_hf_space',
      name: 'alist-1212',
      method: 'GET',
      target: 'https://aikan258-1212.hf.space',
      tooltip: 'alist-1212',
      statusPageLink: 'https://aikan258-1212.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'aikan258_xlx_hf_space',
      name: 'alist',
      method: 'GET',
      target: 'https://aikan258-xlx.hf.space',
      tooltip: 'alist',
      statusPageLink: 'https://aikan258-xlx.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'baixiao258_uptime_hf_space',
      name: 'uptime监控',
      method: 'GET',
      target: 'https://baixiao258-uptime.hf.space',
      tooltip: 'uptime监控',
      statusPageLink: 'https://baixiao258-uptime.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'flzta_cfiles_hf_space',
      name: 'cloudreve',
      method: 'GET',
      target: 'https://flzta-cfiles.hf.space',
      tooltip: 'cloudreve',
      statusPageLink: 'https://flzta-cfiles.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'flzta_ceshi_hf_space',
      name: 'cloudreve',
      method: 'GET',
      target: 'https://flzta-ceshi.hf.space',
      tooltip: 'cloudreve',
      statusPageLink: 'https://flzta-ceshi.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'xmjql_n8n_free_hf_space',
      name: 'n8n-free',
      method: 'GET',
      target: 'https://xmjql-n8n-free.hf.space',
      tooltip: 'Monitor for https://xmjql-n8n-free.hf.space',
      statusPageLink: 'https://xmjql-n8n-free.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'file258_qexo_hf_space',
      name: 'qexo.hf.space',
      method: 'GET',
      target: 'https://file258-qexo.hf.space',
      tooltip: 'Monitor for https://file258-qexo.hf.space',
      statusPageLink: 'https://file258-qexo.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'baixiao258_td_hf_space',
      name: 'tgsave',
      method: 'GET',
      target: 'https://baixiao258-td.hf.space',
      tooltip: 'Monitor for https://baixiao258-td.hf.space',
      statusPageLink: 'https://baixiao258-td.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'xmjql_tgg_hf_space',
      name: 'tgsave',
      method: 'GET',
      target: 'https://xmjql-tgg.hf.space',
      tooltip: 'Monitor for https://xmjql-tgg.hf.space',
      statusPageLink: 'https://xmjql-tgg.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'flzta_dy_static_hf_space',
      name: '电影搜索',
      method: 'GET',
      target: 'https://flzta-dy.static.hf.space',
      tooltip: '电影搜索',
      statusPageLink: 'https://flzta-dy.static.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'xmjql_tgg1_hf_space',
      name: 'tgsave',
      method: 'GET',
      target: 'https://xmjql-tgg1.hf.space',
      tooltip: 'Monitor for https://xmjql-tgg1.hf.space',
      statusPageLink: 'https://xmjql-tgg1.hf.space',
      hideLatencyChart: true,
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: 'https://apprise.example.com/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: 'tgram://bottoken/ChatID',
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
    // [Optional] disable notification for monitors with specified ids
    skipNotificationIds: ['foo_monitor', 'bar_monitor'],
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason:
