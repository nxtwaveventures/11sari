# DNS Setup for 11sari.com

To properly connect your GitHub Pages site with your custom domain (11sari.com), you need to configure your DNS records correctly.

## DNS Records to Add

Add the following DNS records at your domain registrar (where you purchased 11sari.com):

### Option 1: Using an Apex Domain (Recommended)

If you want to use the apex domain (11sari.com without www):

Add these A records:
```
Type: A    Host: @    Value: 185.199.108.153    TTL: 3600
Type: A    Host: @    Value: 185.199.109.153    TTL: 3600
Type: A    Host: @    Value: 185.199.110.153    TTL: 3600
Type: A    Host: @    Value: 185.199.111.153    TTL: 3600
```

### Option 2: Using a www Subdomain

If you want to use www.11sari.com or want it to redirect to 11sari.com:

Add a CNAME record:
```
Type: CNAME    Host: www    Value: nxtwaveventures.github.io.    TTL: 3600
```

## Verifying DNS Configuration

1. Wait for DNS propagation (can take up to 48 hours, but usually much faster)
2. Verify the DNS configuration using `dig`:
   ```
   dig 11sari.com +noall +answer
   ```
   
   Or for www subdomain:
   ```
   dig www.11sari.com +noall +answer
   ```

## GitHub Pages Configuration

1. Go to your GitHub repository settings
2. Navigate to Pages settings
3. Under "Custom domain", enter `11sari.com`
4. Check "Enforce HTTPS" once DNS propagation is complete

## Troubleshooting

If your site is not accessible after DNS propagation:

1. Ensure your GitHub Pages is properly configured to use your custom domain
2. Check if the CNAME file exists in the root of your deployed website
3. Verify DNS records using an online DNS checker
4. Review GitHub Pages documentation for any specific issues 