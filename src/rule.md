Regex to create name
> {name}-{page}

Context name
> {current}-{previos}-...-{big folder}

Path
> Is start in {SETTING/PAGE/INCLUDE} path > /folder/file ...
> In folder, start with path from folder where file there {./file}
> ABSOLUTE PATH start with ['./', '../', '~/'] and STATIC PATH start with ['/'] and inside not contain any absolute path query
# EXAMPLE:
#   ~/path/../path/path  is absolute
#   /path/path/path is static
#   /path/~/.././path is absolute
