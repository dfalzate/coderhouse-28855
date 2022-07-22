<!-- FOREVER -->
forever start server.js
<!-- Ejecutar varias veces -->
forever start server.js

<!-- PM2 -->
pm2 start server.js --name="Server1" --watch -- 3000
pm2 stop all
<!-- No se borran -->
pm2 delete all 
<!-- Cluster -->
pm2 start server.js --name="Server1" --watch -i 4 -- 3000
pm2 start server.js --name="Server1" --watch -i max -- 3000

pm2 monit 

