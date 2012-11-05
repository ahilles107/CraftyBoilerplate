#!/bin/bash
if [ -z "$1" ]; then 
    echo usage: $0 file_with_list_of_src_files
	exit
fi

echo "Clean/create game.js";
echo '' > 'game.js';

echo "-----------------";
echo "combine files:";
exec<$1
while read line
do
echo $line;
  if [ "$line" = "src/libs/require-jquery.js" ]; then
  	echo 'var require = function(f, c){ c(); }' >> 'game.js';
  else
  	cat $line >> 'game.js'
  fi
done
echo "-----------------";
echo "Compress game.js with yui-compressor";
java -jar yuicompressor-2.4.7.jar -o game.min.js game.js

echo "-----------------";
echo "End of create minified game -> game.min.js";
echo "-----------------";
echo "!! Correct your index.html !!"
exit;
