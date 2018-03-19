FROM openjdk:8-jdk-alpine
WORKDIR /app
COPY target/demo-waregym.jar app.jar
EXPOSE 8443
VOLUME /tmp
ENTRYPOINT ["java","-jar","app.jar"]

