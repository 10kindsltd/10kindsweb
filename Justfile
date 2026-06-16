# Run the dev server
runserver:
    hugo server -D

# Build and publish the site to S3
publish:
    hugo --minify --cleanDestinationDir
    aws --profile=10kindsiam s3 sync public/ s3://www.10kinds.co.uk --delete

# Invalidate the CloudFront distro (need to run this after publishing)
invalidate-cache:
    aws --no-cli-pager --profile=10kindsiam cloudfront create-invalidation \
        --distribution-id $(aws --profile=10kindsiam cloudfront list-distributions \
            --query "DistributionList.Items[?Aliases.Items[?@=='www.10kinds.co.uk']].Id" \
            --output text) \
        --paths "/*"

# Republish the site and invalidate the Cloudfront cache
deploy: publish invalidate-cache
