# Setting Up Strapi-Netlify Webhook Integration

This guide explains how to set up a webhook from Strapi to automatically trigger Netlify builds when content changes.

## Step 1: Create a Netlify Build Hook

1. Log in to your Netlify account
2. Go to your site's dashboard
3. Navigate to **Site settings** > **Build & deploy** > **Build hooks**
4. Click **Add build hook**
5. Name it "Strapi Content Update" or similar
6. Select the branch to build (usually `main` or `master`)
7. Click **Save**
8. Copy the generated webhook URL (it will look like `https://api.netlify.com/build_hooks/your-unique-id`)

## Step 2: Add the Netlify Build Hook to Environment Variables

1. Open your `.env` file
2. Update the `NETLIFY_BUILD_HOOK` variable with the URL you copied:
   ```
   NETLIFY_BUILD_HOOK=https://api.netlify.com/build_hooks/your-unique-id
   ```
3. Make sure this variable is also set in your Netlify environment variables:
   - Go to **Site settings** > **Build & deploy** > **Environment**
   - Add the same variable and value

## Step 3: Set Up Strapi Webhook

1. Log in to your Strapi admin panel at `http://5.161.95.205:1337/admin`
2. Navigate to **Settings** > **Global Settings** > **Webhooks**
3. Click **Create new webhook**
4. Configure the webhook:
   - **Name**: Netlify Build Trigger
   - **URL**: The Netlify build hook URL you copied in Step 1
   - **Events**: Select the events that should trigger a build:
     - `entry.create`
     - `entry.update`
     - `entry.delete`
     - `entry.publish`
     - `entry.unpublish`
   - **Headers**: No additional headers needed for Netlify build hooks
5. Click **Save**

## Step 4: Test the Webhook

1. Make a small change to any content in Strapi
2. Save and publish the change
3. Check your Netlify dashboard to confirm a new build was triggered
4. Verify that the updated content appears on your site after the build completes

## Troubleshooting

If builds aren't being triggered:

1. Check the webhook logs in Strapi (Settings > Webhooks > View logs)
2. Verify the build hook URL is correct
3. Ensure the selected events match your content workflow
4. Check Netlify build logs for any errors during the build process

## Additional Configuration

- Consider adding a secret token to your webhook for added security
- Set up retry logic for failed webhook deliveries
- Configure notifications for failed builds

Remember to keep your build hook URL secure, as anyone with this URL can trigger builds on your Netlify site.
