#!/bin/bash

path_project_angular=$(dirname $(pwd))/angular
path_project=$(dirname $(pwd))/Spring_Project
path_jar=$path_project/target

#Create Angular
docker run -it --rm --name waregym-angular -v "$path_project_angular":/otp/waregym -w /otp/waregym pivotalpa/angular-cli npm install && ng build --base-href /new/

#Move angular files to Waregym
rm $path_project/src/main/resources/static/new/.
cp $path_project_angular/dist/ $path_project/src/main/resources/static/new

#Create jar Waregym
docker run -it --rm --name waregym -v "$path_project":/usr/src/mymaven -w /usr/src/mymaven maven mvn package -DskipTests

#Move jar to actual directory
mv $path_jar/waregym-demo.jar .

#Create image 
docker build -t hervas/demo .
