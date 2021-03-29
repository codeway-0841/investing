```
// docker exec -it <container_id_or_name> bash //
docker exec -it mariadb bash
mysql -u root -p
create database investing;
grant all privileges on investing.* TO 'investing'@'%' identified by 'investing';
flush privileges;

```
