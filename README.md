# Fullstack Springboot and Angular application Deployment on AWS with S3, EC2, RDS(MySQL) Database.

  ## Step 1. Spring Boot Back application with MYSQL Database
   * Create Simple User registration service which would store data in Mysql database and expose it as Rest API.
   * Run Spring boot application and test CRUD APIs using any Rest Client like Postman.
  ## Step 2. Angular Front end Application to access backend API.
   * Create 3 different angular components for User registration CRUD operations and service.
    ```
    ng g c user-registration
    ng g c user-search-delete
    ng g c home
    ng g s user-registration
    ```
   * Build, run appliction with `ng serve` and test the application locally before deploying on AWS.
  ## Step 3. Create MYSQL RDS Database and create a database for backend application to store and retireve data.
   * On AWS Console , GO to RDS service and Create a RDS MYSQL Database by selecting free tier.
   * Grant public access.
   * Please make sure you attach RD Security Group so that you can access it from application deployed on EC2 instance.
   * Once Database is available, copy the RDS endpoint and go to backend application.properties file and replace it with database host name.
   * Now build the backend application and keep ready application jar file to deploy it on AWS cloud.
   
  ## Step 4. Create EC2 instance and install java 11+. 
   * Log on AWS Console, Go to EC2 service and launch  an instance.
   * Make sure you create two security group 
     * One is to access appication on http, https and SSH prptocols.
      * Second to access MYSQL database on port 3306.
   * Once instace is ready verify java version should be java 11+. if not please install java11+ and configure java.
    ```
    wget https://download.java.net/java/GA/jdk11/13/GPL/openjdk-11.0.1_linux-x64_bin.tar.gz
    tar zxvf openjdk-11.0.1_linux-x64_bin.tar.gz
    mv jdk-11.0.1 /usr/local/
    
    ## Create New profile to set Java
      vi /etc/profile.d/jdk11.sh
      export JAVA_HOME=/usr/local/jdk-11.0.1
      export PATH=$PATH:$JAVA_HOME/bin
      
      source /etc/profile.d/jdk11.sh
      java -version
    ```
   * Copy EC2 DNS Name and replace and replace it for API Enpoint in frontend application.
  ## Step 5. Create S3 bucket and upload backend API application and Run the application on EC2 instansce .
   * Once bucket created e.g. **brainupgrade-springboot-backend**, upload spring application jar file.
   * Grant public access.
   * Once Jar uploaded, Copy Object URL and connect EC2 instance.
   * Get the jar file downloaded on EC2 instance and run the application
    ```
    $ wget <<S3 object URL>>
    $ java -jar <<Spring boot application jar>>
    ```
   * Once Backend application is running , you can test Rest APIs by copying EC2 endpoint with port number.
      * e.g. `http://ec2-dns-ednpoint:8080/users` .
   * At the point your Backend application is running on AWS EC2 and coonected with RDS Database.
  ## Step 6. Create S3 bucket and upload frontend application.
   * Go to the angular front end application project and open terminal.  
   * Once bucket created e.g. **brainupgrade-springboot-frontend**.
   * Come back frontend application workspace, go to the user registration service and make sure API URL pointing to EC2 API Endpoints.
   * Now build for production deployment which will create **dist** folder and depployable files. 
    ```
      ng build --prod
    ```
   * Once production build is successful, check all the files in **dist** folder.
   * Come back AWS S3 bucket and upload all the files from **dist** folder to frontend bucket.
   * Grant public access to all files.
  ## Step 7. Enable Static Website on S3.
   * Once you apload all fronend appliation files in S3 bucket,  go to Static website section.
   * Enable Static Website.
   * Enter index.html and on save, S3 URL will be created. 
   * Copy S3 URL and paste in browser , you should be able to access fronend application.
   * Test and verify all CRUD operations.
  ## Clean Up the Environment.
    
