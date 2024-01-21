In Out of the Bucket we identify a JSON (funny.json) which is a service account key. We can impersonate using the following command:
```
gcloud auth activate-service-account --key-file=funny.jso
```
Then we can list the buckets (as hinted in the title):
```
gsutil ls
```
We find another bucket named flag-images. We can list the contents of the bucket:
```
gsutil ls gs://flag-images
```
The rest of the challenge involves hunting down the image that contains the flag. The flag is in xa.png.
