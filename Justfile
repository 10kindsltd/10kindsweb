# Run the dev server
runserver:
    hugo server -D

# Build the site
build:
    -rm -rf public/
    hugo

# Deploy happens on push to master via .github/workflows/deploy.yml
deploy:
    git push github master

media_tag := "media"
repo := "10kindsltd/10kindsweb"

# Upload the videos in static/videos to the media release, then redeploy the site (requires 'gh auth login')
upload-media:
    gh release view {{media_tag}} -R {{repo}} >/dev/null 2>&1 || gh release create {{media_tag}} -R {{repo}} --target master --title "Site media" --notes "Files for static/videos. Managed by 'just upload-media', pulled in by the Pages build." --prerelease --latest=false
    gh release upload {{media_tag}} static/videos/*.mp4 -R {{repo}} --clobber
    gh workflow run deploy.yml -R {{repo}} --ref master

# Download site media from the media release into static/videos
fetch-media:
    mkdir -p static/videos
    gh release download {{media_tag}} -R {{repo}} -D static/videos --clobber
