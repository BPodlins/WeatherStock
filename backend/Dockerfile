# Use the official OpenJDK image for Java 21
FROM openjdk:21-jdk-slim as build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper and pom.xml to the container
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies
RUN ./mvnw dependency:go-offline

# Copy the source code into the container
COPY src src

# Build the application
RUN ./mvnw package -DskipTests

# Start with a new, clean image to run our application
FROM openjdk:21-jdk-slim

# Copy the built application from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "/app.jar"]