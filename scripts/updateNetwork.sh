#!/bin/bash
composer archive create -t dir -n .
composer network install -a hul@0.0.2.bna -c PeerAdmin@hlfv1
composer network upgrade -c PeerAdmin@hlfv1 -n hul -V 0.0.2
composer-rest-server
