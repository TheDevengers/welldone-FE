FROM node:8
RUN mkdir /react-project
COPY . /react-project/
WORKDIR /react-project
RUN /bin/bash -c 'source .env'
ENV NODE_ENV=production
RUN npm install
RUN npm run build
RUN curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
RUN unzip awscli-bundle.zip
RUN ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
RUN mkdir ~/.aws
RUN echo [default] > ~/.aws/credentials
RUN echo aws_access_key_id=${AWS_ACCESS_KEY_ID} >> ~/.aws/credentials
RUN echo aws_secret_access_key=${AWS_SECRET_ACCESS_KEY} >> ~/.aws/credentials
RUN cat ~/.aws/credentials
RUN aws s3 sync /react-project/build/ s3://welldone-react-bucket --acl bucket-owner-full-control
CMD sleep 1000000
