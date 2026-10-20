# JMeter & k6 Performance Testing Homework

## Project Overview

This repository contains performance testing homework implemented using **Apache JMeter** and **Grafana k6**.

The project covers a recorded e-commerce user journey and API load testing with performance thresholds.

## 1. JMeter — Demo Web Shop

**Application:** https://demowebshop.tricentis.com/

### Test Scenario

1. Navigate to the homepage.
2. Open the Gift Cards category.
3. Select the $25 Virtual Gift Card.
4. Fill in the recipient's name and email, sender's name and email, and message.
5. Add the product to the shopping cart.
6. Open the shopping cart.
7. Proceed to checkout as a guest.
8. Fill in the billing address.
9. Stop before payment.

### Test Implementation

- HTTP(S) Test Script Recorder
- HTTP Request Samplers
- HTTP Cookie Manager
- Response Assertions
- Regular Expression Extractor for dynamic cart item ID
- Non-GUI test execution

### Test Configuration

- Virtual Users: 1
- Ramp-up Period: 1 second
- Loop Count: 1

### Recorded Execution Results

- Total Samples: 10
- Average Response Time: 449 ms
- Error Rate: 0%
- Throughput: approximately 2.1 samples/second

These are results from the recorded test execution. The updated final JMeter scenario requires a separate validation run.

## 2. k6 — API Performance Testing

**API:** https://jsonplaceholder.typicode.com/

**Endpoint:** `GET /posts/X/comments`

A random post ID between 1 and 10 is generated for each iteration.

### Test Configuration

- Virtual Users: 10
- Duration: 30 seconds
- HTTP Status Validation: 200
- Response Status and Response Time Logging

### Performance Thresholds

| Metric | Threshold |
|---|---|
| p95 Response Time | Less than 400 ms |
| p99 Response Time | Less than 800 ms |
| HTTP Failure Rate | Less than 1% |

### Execution Results

| Metric | Result |
|---|---|
| Total Requests | 300 |
| Successful Checks | 300/300 |
| Failed Checks | 0 |
| Average Response Time | 5.61 ms |
| p95 Response Time | 7.39 ms |
| p99 Response Time | 8.33 ms |
| HTTP Failure Rate | 0.00% |

**Result: All k6 thresholds passed.**

## 3. Repository Files

- `DemoWebShop_Performance_Test.jmx` — JMeter test plan
- `Performance_Results.docx` — JMeter performance test report draft
- `k6_performance_test.js` — k6 API performance test

## 4. Running Tests

### JMeter

```bash
jmeter -n -t DemoWebShop_Performance_Test.jmx -l results.csv -e -o html-report
```

### k6

```bash
k6 run k6_performance_test.js
```

## Conclusion

The k6 API test completed successfully, with all 300 checks passing and all configured performance thresholds satisfied.

The JMeter test includes the recorded Demo Web Shop user journey, assertions, and dynamic cart item correlation. Its results are documented in the accompanying report draft.
