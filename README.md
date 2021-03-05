Info:


https://medium.com/@Volirik/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C-%D0%B8-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-docker-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80-%D1%81-mysql-e3782e7cca53
https://medium.com/@rowadz/monitoring-mysql-data-changes-in-real-time-via-nodejs-binary-logs-c379720c0333


Repositories:
https://github.com/apologG/cabinet.git
https://github.com/apologG/agent.git


Manual:
do before run:
install docker
run mysql and configure:
docker run --rm --name=my-mysql --env  MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% --detach --publish 3306:3306 -d mysql/mysql-server:latest
docker ps
docker exec -it container_id mysql -u root -p


in MYSQL Workbench:
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
exit


=====================


to run applications:
Cabinet:


npm i
sequelize db:create
sequelize db:migrate
npm run dev

Agent:


npm i
npm start
