#!/bin/bash

# Check if swap file already exists
if [ -f /swapfile ]; then
    echo "Swap file already exists."
else
    echo "Creating 2GB swap file..."
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    echo "Swap file created and enabled."
fi

# Verify swap
sudo swapon --show
free -h
