# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-maps-leads").call(run_input={
  "cities": [
    "Austin, TX"
  ],
  "country": "us",
  "category": "hair salon",
  "noWebsiteOnly": true,
  "maxResults": 20
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("leadScore"), item.get("name"), item.get("phone"), item.get("email"))
