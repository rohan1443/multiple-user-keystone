var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
  autokey: { from: 'name', path: 'key', unique: true },
});

var storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: 'AKIAIQ6IROG3RXVGYG3Q', // required; defaults to process.env.S3_KEY
    secret: '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', // required; defaults to process.env.S3_SECRET
    bucket: 'keystone-test-project', // required; defaults to process.env.S3_BUCKET
    // region: 'ap-southeast-2', // optional; defaults to process.env.S3_REGION, or if that's not specified, us-east-1
    // path: '/profilepics', // optional; defaults to "/"
    // publicUrl: "https://xxxxxx.cloudfront.net", // optional; sets a custom domain for public urls - see below for details
    // uploadParams: { // optional; add S3 upload params; see below for details
    //   ACL: 'public-read',
    // },
  },
  schema: {
    bucket: true, // optional; store the bucket the file was uploaded to in your db
    etag: true, // optional; store the etag for the resource
    path: true, // optional; store the path of the file in your db
    url: true, // optional; generate & store a public URL
  },
});

Gallery.add({
  name: { type: String, required: true },
  file: { type: Types.File, storage: storage },
});

Gallery.register();
