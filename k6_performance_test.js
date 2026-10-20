
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: [
      'p(95)<400',
      'p(99)<800',
    ],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const postId = Math.floor(Math.random() * 10) + 1;

  const response = http.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  console.log(
    `Post ID: ${postId} | Status: ${response.status} | Response Time: ${response.timings.duration} ms`
  );

  check(response, {
    'Response status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
