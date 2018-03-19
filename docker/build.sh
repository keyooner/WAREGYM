cd ..
cd Spring_Project/
mvn package -DskipTests
docker build -t hervas/demo .
