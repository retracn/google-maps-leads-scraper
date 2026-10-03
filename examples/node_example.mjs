// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-maps-leads').call({
  "cities": [
    "Austin, TX"
  ],
  "country": "us",
  "category": "hair salon",
  "noWebsiteOnly": true,
  "maxResults": 20
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.leadScore, item.name, item.phone, item.email);
