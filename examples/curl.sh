#!/bin/bash
# export APIFY_TOKEN=your_token
curl -X POST "https://api.apify.com/v2/acts/automationnation~google-maps-leads/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"cities": ["Austin, TX"], "country": "us", "category": "hair salon", "noWebsiteOnly": true, "maxResults": 20}'
