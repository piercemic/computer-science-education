**Problem**</br>
SyntaxError: Cannot use import statement outside a module</br>
**Solution**</br>
NodeJS needed to enable experimental values by adding this code 'jest' script.</br>
`NODE_OPTIONS=--experimental-vm-modules jest`</br>
and</br>
`"type": "module",` to `package.json`</br>
