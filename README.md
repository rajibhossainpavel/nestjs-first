This is an illustration app to check Controller, Service, Module, Pipe, Middleare, Interceptor and Filter.
Here we have used a file-based-datasource(db.ts in src folder).
We have used these class-validator class-transformer libraries for Pipe through the following command-
[npm i --save class-validator class-transformer]

The API Endpoints(use Postman or any REST checking tools to check it.):
1. GET students [get all students.]
2. GET students/:studentId [get a student.]
3. POST students [create a student.]
4. PUT students/:studentId [update a student.]
5. GET teachers [get all teachers.]
6. GET teachers/:teacherId [get a teacher.]
7. GET teachers/:teacherId/students [get all students through teacherId]
8. PUT teachers/:teacherId/students/:studentId [change a teacherId(teacher) for a given studentId]

STEPS for this SYSTEM:
1. npm install @nestjs/cli
2. nest new projectName
3. cd project-name
4. nest g controller controllerName [defaults to controllerName folder.]
5. nest g service serviceName [defaults to serviceName folder.]
6. nest g module moduleName [defaults to moduleName folder.]
7. nest g pipe pipeName [does not default  to pipeName folder. therefore we use a folderName, for example, common/req-handler]
8. nest g middleware middlewareName [does not default to middlewareName folder. therefore we use a folderName, for example, common/req-handler.]
9. nest g interceptor interceptorName [does not default to interceptorName folder. therefore we use a folderName, for example, common/res-handler.]
10. nest g filter filterName [does not default  to filterName folder. therefore we use a folderName, for example, common.]
11. nest g decorator decoratorName [does not default  to decoratorName folder. therefore we use a folderName, for example, common.]
12. we need to manually create dto folder and its associated classes.

