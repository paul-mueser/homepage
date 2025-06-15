#!/bin/bash

sed -i "s|{{DB_HOST}}|${DB_HOST}|g" homepage/api/fetch-content.php
sed -i "s|{{DB_USER}}|${DB_USER}|g" homepage/api/fetch-content.php
sed -i "s|{{DB_PASS}}|${DB_PASSWORD}|g" homepage/api/fetch-content.php
sed -i "s|{{DB_NAME}}|${DB_NAME}|g" homepage/api/fetch-content.php
