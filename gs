#!/bin/bash -e

REAL_FILE=$(readlink $0 || echo $0)
BASE_DIR=$(dirname $REAL_FILE)

__commands_dir__="$BASE_DIR/commands"
__scripts_dir__="$BASE_DIR/scripts"
__root_directory=$__scripts_dir__

# Unset the positional argument if command option provided
if [ "$1" == "-c" ] || [ "$1" == "--command" ]; then
  shift
  __root_directory=$__commands_dir__
fi

# Unset the positional argument if script option provided
if [ "$1" == "-s" ] || [ "$1" == "--script" ]; then
  shift
fi

# Unset the next positional argument. This argument is expected to be the executable file
file="$1"
executable_path="$__root_directory/$file"
executable="$executable_path"
shift

scripts_usage () {
  echo "Available Scripts to call"
  for entry in "$__scripts_dir__"/*
  do
    echo -e "\tgs $(basename $entry)"
  done
}
commands_usage () {
  echo "Available commands to call"
  for entry in "$__commands_dir__"/*
  do
    echo -e "\tgs -c $(basename $entry)"
  done
}

usage () {
  echo    "Usage: gs {bit} {file_name} {optional file arguments}"
  echo    "Example: gs -c remote_name"
  echo    "Example: gs merge-main"
  echo -e "\t -c|--command   - With bit set, will run command (eg 'gs -c current-branch')"
  echo -e "\t -s|--script    - Bit is set by default. When set, will run script (eg 'gs commit -f . -m \"merge message\"')"
  echo -e "\t All positional arguments will get passed to the sctipt or command"
}


if [ -f "$executable_path" ]; then
  eval $executable "$@"
else
  echo "Yikes!: Usage Error $file does not exist"
  usage
  scripts_usage
  commands_usage
fi


