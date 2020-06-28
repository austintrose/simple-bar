#!/usr/bin/env bash

PROCESS=$(/usr/local/bin/yabai -m query --windows --window)

echo $(cat <<-EOF
$PROCESS
EOF
)
