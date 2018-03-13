FROM openjdk:8u121-jdk-alpine

ADD ./wait.sh /home/wait.sh

RUN chmod 777 /home/wait.sh

ADD ./waregym.jar /home/waregym.jar

EXPOSE 8443

CMD ["sh","/home/wait.sh"]
