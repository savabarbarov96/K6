// K6 Testing code

import { sleep, group } from 'k6'
import http from 'k6/http'
import { check } from 'k6';

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {
    http_req_duration: ['p(99) < 1000'] // 99% of the request should finish within 1000 ms
  },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 5, duration: '5s' },
        { target: 5, duration: '5s' },
        { target: 0, duration: '0s' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}



export default function Scenario_0() {

  const res = http.get('https://tranquil-macaron-89b495.netlify.app/');

  check(res, {

    'is status 200': (r) => r.status === 200,

  });

}


export function scenario_1() {
  let response

  group('page_1 - https://tranquil-macaron-89b495.netlify.app/', function () {
    response = http.get('https://tranquil-macaron-89b495.netlify.app/', {
      headers: {
        host: 'tranquil-macaron-89b495.netlify.app',
      },
    })
    sleep(3.7)
    check(res, {

    'is status 200': (r) => r.status === 200,

  });

  })

  group('page_2 - https://github.com/savabarbarov96', function () {
    response = http.get('https://github.com/savabarbarov96', {
      headers: {
        host: 'github.com',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'en-GB,en;q=0.5',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-user': '?1',
      },
    })
    sleep(0.9)
    response = http.get('https://github.com/users/savabarbarov96/feature_preview/indicator_check', {
      headers: {
        host: 'github.com',
        accept: 'application/json',
        'accept-language': 'en-GB,en;q=0.5',
        'accept-encoding': 'gzip, deflate, br',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(4.4)
    response = http.get('https://github.com/users/savabarbarov96/pinned_items_modal', {
      headers: {
        host: 'github.com',
        accept: 'text/html',
        'accept-language': 'en-GB,en;q=0.5',
        'accept-encoding': 'gzip, deflate, br',
        'x-requested-with': 'XMLHttpRequest',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
  })
}
