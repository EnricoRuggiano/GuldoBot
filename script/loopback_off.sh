#!/bin/sh
pactl unload-module $(pactl list short modules | awk '$2 =="module-loopback" { print $1 }' - )
