FROM node:10.16-slim as back

RUN mkdir /code

COPY backend/package.json backend/yarn.lock /code/

WORKDIR /code

RUN yarn install

CMD ["yarn", "dev"]

FROM node:10.16-slim as front

RUN mkdir /code

COPY frontend/package.json frontend/yarn.lock /code/

WORKDIR /code

RUN yarn install

CMD ["yarn", "start"]

FROM node:10.16 as mobile

RUN apt-get update -q && \
	apt-get install -qy --no-install-recommends default-jdk gcc-multilib lib32z1 lib32stdc++6

RUN yarn global add react-native-cli

ENV SDK_URL="https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip" \
    ANDROID_HOME="/usr/local/android-sdk" \
    ANDROID_VERSION=28 \
    ANDROID_BUILD_TOOLS_VERSION=27.0.3
# Download Android SDK
RUN mkdir "$ANDROID_HOME" .android \
    && cd "$ANDROID_HOME" \
    && curl -o sdk.zip $SDK_URL \
    && unzip sdk.zip \
    && rm sdk.zip \
    && mkdir "$ANDROID_HOME/licenses" || true \
    && echo "24333f8a63b6825ea9c5514f83c2829b004d1fee" > "$ANDROID_HOME/licenses/android-sdk-license"
#    && yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses
# Install Android Build Tool and Libraries
RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "platforms;android-${ANDROID_VERSION}" \
    "platform-tools"
# Install Build Essentials
RUN apt-get update && apt-get install build-essential -y && apt-get install file -y && apt-get install apt-utils -y

RUN mkdir /code

COPY tindev/package.json tindev/yarn.lock /code/

WORKDIR /code

# RUN yarn install

# RUN adb reverse tcp:3333 tcp:3333

# CMD ['yarn', 'start']



