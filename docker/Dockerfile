FROM alpine/git as clone 
WORKDIR /app
RUN git clone https://github.com/keyooner/WAREGYM.git -b master

FROM pivotalpa/angular-cli as angular
WORKDIR /app
COPY --from=clone /app/WAREGYM/angular/ /app
RUN npm install && ng build --env=prod --base-href /new/

FROM maven:3.5.3-jdk-8-alpine as build 
WORKDIR /app
COPY --from=clone /app/WAREGYM/Spring_Project /app
COPY --from=angular /app/dist /app/src/main/resources/static/new
RUN mvn package -DskipTests

FROM openjdk:8-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/demo-waregym.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["sh", "-c"]
CMD ["java -jar app.jar"]
