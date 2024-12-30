const {
  PORT,
  CONNECT_URL,
  JWT_SECRET,
  EMAIL_USER,
  EMAIL_PASSWORD,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_REGION,
} = process.env;

module.exports = {
  port: PORT,
  connectionUrl: CONNECT_URL,
  secretToken: JWT_SECRET,
  secret_email: EMAIL_USER,
  secret_password: EMAIL_PASSWORD,
  awsAccessKey: AWS_ACCESS_KEY,
  awsSecretAccessKey: AWS_SECRET_ACCESS_KEY,
  awsBucketName: AWS_BUCKET_NAME,
  awsRegion: AWS_REGION
};
