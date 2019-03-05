#!/bin/bash
composer network install --card PeerAdmin@hlfv1 --archiveFile hul@0.0.1.bna
composer network start --networkName hul --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@hul
composer-rest-server
