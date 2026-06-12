# Run the dev server
runserver:
    hugo server -D

# Build and publish the site to S3
publish:
    hugo --minify --cleanDestinationDir
    aws --profile=10kindsiam s3 sync public/ s3://www.10kinds.co.uk --delete
