**Problem**
SyntaxError: Cannot use import statement outside a module
**Solution**
NodeJS needed to enable experimental values by adding this code 'jest' script.
```NODE_OPTIONS=--experimental-vm-modules jest```
and
```"type": "module",``` to ```package.json```