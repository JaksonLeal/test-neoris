FROM openjdk:17-alpine
EXPOSE 8080
ARG JAR_FILE=target/test-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} test_neoris.jar
ENTRYPOINT ["java","-jar","/test_neoris.jar"]