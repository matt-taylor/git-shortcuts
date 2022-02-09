# GitShortcuts

Git shortcuts is a side projects to aid in Git commands.

## Setup
Setup should be a breeze.

1. Clone the repo locally
2. Run the install command in the cloned repo to install it in your local $PATH. If your path is non-standard, set the path with the --bin option
```bash
./install # with standard $PATH
./install --bin /path/to/your/bin # when path is not /usr/local/bin
```

## Usage
### Get started
After setup, `gs` is installed globally. Type `gs` in any console to get self documented version of all git shortcuts

### Common Commands:

**Note: All Commands are self doucmented.**

```bash

# Commit
gs commit -f . -m 'Commiting all files'

# Commit with push
gs commit -f . -m 'Commiting all files' -p

# Push local comits to remote
gs push

# Merge remote main into local branch and use stash
gs merge-main

# Merge remote branch into local branch and use commit's
gs merge-main -c -f . -m 'preparing main merge' -b some_branch

```

## Development

### What is a script

When you want to have a complex action that includes multiple commands, a script should be used. A Script can call other commands or other scripts

### What is a command

A command is intended to be simple. Commands should be minimal in length and tend to be heavily used by multiple scripts. Commands should not contain scripts and try to refrain from using other commands.

### Create

Create of a new script or command is super simple.
```bash
# Create a new script
./create -f script_name -s

# Create a new command
./create -f command_name -c

```

