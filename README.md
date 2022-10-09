# K6
K6 Performance testing

Enviorment: Requires Linux 

1. Install NetData from here: https://learn.netdata.cloud/docs/agent/packaging/installer/



2.Set NatNetwork to 127.0.0.1 Host port 19999 Guest port 19999


3. Open Browser and go to Localhost:19999


4. Install k6 from the following URL: wget -O /tmp/netdata-kickstart.sh https://my-netdata.io/kickstart.sh && sh /tmp/netdata-kickstart.sh

https://k6.io/docs/getting-started/installation/


5. Run the JavaScript test file using k6 run --out Test.js



6. Results should be visible on localhost:19999
