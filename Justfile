iam_profile := "10kindsiamcli"

# Run the dev server
runserver:
    hugo server -D

# Build and publish the site to S3
publish:
    hugo --minify --cleanDestinationDir
    aws --profile={{ iam_profile }} s3 sync public/ s3://www.10kinds.co.uk --delete

# Invalidate the CloudFront distro (need to run this after publishing)
invalidate-cache:
    aws --no-cli-pager --profile={{ iam_profile }} cloudfront create-invalidation \
        --distribution-id $(aws --profile={{ iam_profile }} cloudfront list-distributions \
            --query "DistributionList.Items[?Aliases.Items[?@=='www.10kinds.co.uk']].Id" \
            --output text) \
        --paths "/*"

# Republish the site and invalidate the Cloudfront cache
deploy: publish invalidate-cache
